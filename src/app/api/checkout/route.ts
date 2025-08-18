// src/app/api/checkout/route.ts
import { NextRequest, NextResponse } from "next/server";
import { shopifyFetch, CART_CREATE } from "@/app/lib/shopify";

/** Accept apex/www + any *.vercel.app (preview/production), and also accept requests with no Origin (curl). */
function isAllowedOrigin(origin: string | null): boolean {
  if (!origin) return true; // allow server-to-server / curl (no Origin header)
  try {
    const { hostname, protocol } = new URL(origin);
    if (protocol !== "https:") return false;
    return (
      hostname === "aplustruffles.com" ||
      hostname === "www.aplustruffles.com" ||
      hostname.endsWith(".vercel.app")
    );
  } catch {
    return false;
  }
}

/** Build CORS headers (echo allowed origin, otherwise empty) */
function corsHeaders(origin: string | null) {
  const allow = isAllowedOrigin(origin) && origin ? origin : "";
  return {
    "Access-Control-Allow-Origin": allow,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400",
    Vary: "Origin",
  };
}

/** Request body coming from the client */
interface CartCreateBody {
  variantId: string; // Storefront ProductVariant GID
  quantity?: number; // defaults to 1
}

/** Minimal shapes from Shopify Storefront API for cartCreate */
interface GraphQLError {
  message: string;
  extensions?: Record<string, unknown>;
}
interface CartCreateUserError {
  field?: string[] | null;
  message: string;
  code?: string | null;
}
interface CartCreatePayload {
  cart?: { checkoutUrl?: string | null } | null;
  userErrors?: CartCreateUserError[] | null;
}
interface CartCreateResponse {
  data?: { cartCreate?: CartCreatePayload | null };
  errors?: GraphQLError[];
}

/** Type guard without using any */
function hasGraphQLErrors<T extends { errors?: unknown }>(
  resp: T
): resp is T & { errors: GraphQLError[] } {
  return (
    typeof resp === "object" &&
    resp !== null &&
    Array.isArray((resp as { errors?: unknown }).errors)
  );
}

/** Safe extractor for message on unknown error types */
function getErrorMessage(err: unknown): string {
  if (typeof err === "string") return err;
  if (err && typeof err === "object" && "message" in err) {
    const m = (err as { message?: unknown }).message;
    if (typeof m === "string") return m;
  }
  return "Unknown error";
}

export async function OPTIONS(req: NextRequest) {
  const origin = req.headers.get("origin");
  return new NextResponse(null, { status: 204, headers: corsHeaders(origin) });
}

export async function POST(req: NextRequest) {
  const origin = req.headers.get("origin");
  const headers = corsHeaders(origin);

  // If an Origin *is* present, enforce the allowlist. (No Origin = allowed for curl.)
  if (origin && !isAllowedOrigin(origin)) {
    return NextResponse.json({ ok: false, error: "Unauthorized origin" }, { status: 401, headers });
  }

  try {
    const body = (await req.json()) as Partial<CartCreateBody>;
    const variantId = body.variantId;
    const quantity = Number.isFinite(body.quantity) ? Number(body.quantity) : 1;

    if (!variantId) {
      return NextResponse.json({ ok: false, error: "Missing variantId" }, { status: 400, headers });
    }

    // Shopify Cart API uses merchandiseId (variant GID)
    const resp = (await shopifyFetch(CART_CREATE, {
      variables: {
        input: {
          lines: [{ quantity, merchandiseId: variantId }],
        },
      },
    })) as CartCreateResponse;

    // Debug if needed:
    // console.debug("[cartCreate] raw:", JSON.stringify(resp, null, 2));

    if (hasGraphQLErrors(resp) && resp.errors.length > 0) {
      return NextResponse.json(
        { ok: false, error: "Storefront API error", details: resp.errors },
        { status: 400, headers }
      );
    }

    const payload = resp.data?.cartCreate;
    if (!payload) {
      return NextResponse.json(
        { ok: false, error: "cartCreate missing in response", details: resp },
        { status: 400, headers }
      );
    }

    const userErrors = payload.userErrors ?? [];
    if (userErrors.length > 0) {
      return NextResponse.json({ ok: false, errors: userErrors }, { status: 400, headers });
    }

    const checkoutUrl = payload.cart?.checkoutUrl ?? null;
    if (!checkoutUrl) {
      return NextResponse.json({ ok: false, error: "No checkoutUrl from cartCreate" }, { status: 400, headers });
    }

    return NextResponse.json({ ok: true, url: checkoutUrl }, { headers });
  } catch (err: unknown) {
    const message = getErrorMessage(err);
    // eslint-disable-next-line no-console
    console.error("[cartCreate] route error:", message, err);
    return NextResponse.json({ ok: false, error: message }, { status: 500, headers });
  }
}













