// src/app/api/checkout/route.ts
import { NextRequest, NextResponse } from "next/server";
import { shopifyFetch, CART_CREATE } from "@/app/lib/shopify";

const ALLOWED_ORIGINS = new Set<string>([
  "https://aplustruffles.com",
  "https://www.aplustruffles.com",
  // add your preview domain below if you want to test directly:
  "https://aplus-landing-v1.vercel.app",
]);

/** CORS headers helper */
function corsHeaders(origin: string | null) {
  const allowOrigin = origin && ALLOWED_ORIGINS.has(origin) ? origin : "";
  return {
    "Access-Control-Allow-Origin": allowOrigin,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400",
    "Vary": "Origin",
  };
}

/** Request body coming from the client */
interface CartCreateBody {
  variantId: string;
  quantity?: number;
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

function hasGraphQLErrors<T extends { errors?: unknown }>(
  resp: T
): resp is T & { errors: GraphQLError[] } {
  return typeof resp === "object" && resp !== null && Array.isArray((resp as any).errors);
}
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

  // Enforce allowed origins (if there is an Origin header)
  if (origin && !ALLOWED_ORIGINS.has(origin)) {
    return NextResponse.json({ ok: false, error: "Unauthorized origin" }, { status: 401, headers });
  }

  try {
    const body = (await req.json()) as Partial<CartCreateBody>;
    const variantId = body.variantId;
    const quantity = Number.isFinite(body.quantity) ? Number(body.quantity) : 1;

    if (!variantId) {
      return NextResponse.json({ ok: false, error: "Missing variantId" }, { status: 400, headers });
    }

    const resp = (await shopifyFetch(CART_CREATE, {
      variables: {
        input: {
          lines: [{ quantity, merchandiseId: variantId }],
        },
      },
    })) as CartCreateResponse;

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
      return NextResponse.json(
        { ok: false, error: "No checkoutUrl from cartCreate" },
        { status: 400, headers }
      );
    }

    return NextResponse.json({ ok: true, url: checkoutUrl }, { headers });
  } catch (err: unknown) {
    const message = getErrorMessage(err);
    // eslint-disable-next-line no-console
    console.error("[cartCreate] route error:", message, err);
    return NextResponse.json({ ok: false, error: message }, { status: 500, headers });
  }
}










