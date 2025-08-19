/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse, NextRequest } from "next/server";
import { shopifyFetch, CART_CREATE } from "../../lib/shopify";

const ALLOWED_ORIGIN =
  (process.env.NEXT_PUBLIC_SITE_URL || "https://aplustruffles.com").replace(/\/$/, "");
const INTERNAL_API_KEY = (process.env.INTERNAL_API_KEY || "").trim();

// If set, we’ll prefer this host for the final checkout URL (e.g. "a-plus-truffles.myshopify.com" or "store.aplustruffles.com")
const SHOPIFY_HOST =
  (process.env.NEXT_PUBLIC_SHOPIFY_DOMAIN || "a-plus-truffles.myshopify.com").replace(/^https?:\/\//, "");

/** CORS preflight */
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": ALLOWED_ORIGIN,
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, x-api-key",
      "Access-Control-Max-Age": "86400",
    },
  });
}

export async function POST(req: NextRequest) {
  // extra guard (middleware already protects, but keep it consistent)
  const fetchSite = req.headers.get("sec-fetch-site");
  const apiKey = (req.headers.get("x-api-key") || "").trim();
  if (
    process.env.NODE_ENV === "production" &&
    fetchSite !== "same-origin" &&
    apiKey !== INTERNAL_API_KEY
  ) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }

  // --- read input ---
  let body: { variantId?: string; quantity?: number } = {};
  try {
    body = (await req.json()) as any;
  } catch {
    // ignore; will fail validation below
  }

  const variantId = body.variantId?.toString() || "";
  const quantity = Number(body.quantity ?? 1) || 1;

  if (!variantId) {
    return NextResponse.json({ ok: false, error: "Missing variantId" }, { status: 400 });
  }

  try {
    // Build cart input (Storefront API)
    const variables = {
      input: {
        lines: [{ merchandiseId: variantId, quantity }],
      },
    };

    const result = await shopifyFetch<{
      cartCreate?: {
        cart?: { id: string; checkoutUrl: string };
        userErrors?: Array<{ message: string }>;
      };
      errors?: Array<{ message: string }>;
    }>(CART_CREATE, { variables });

    const errors = result.errors ?? result.data?.cartCreate?.userErrors;
    if (errors && errors.length) {
      const message =
        (errors as any[]).map((e) => (e?.message as string) || "").filter(Boolean).join("; ") ||
        "Shopify error";
      return NextResponse.json({ ok: false, error: message }, { status: 502 });
    }

    const checkoutUrl = result.data?.cartCreate?.cart?.checkoutUrl;
    if (!checkoutUrl) {
      return NextResponse.json({ ok: false, error: "No checkoutUrl returned" }, { status: 502 });
    }

    // ---- Normalize checkout URL to a Shopify-served HTTPS host ----
    let finalUrl: string;
    try {
      const u = new URL(checkoutUrl);

      // If Shopify gave us the site apex (served by Vercel), swap to Shopify domain
      if (u.hostname === "aplustruffles.com") {
        u.hostname = SHOPIFY_HOST;
      }

      // Force HTTPS (Shopify checkout should be secure)
      u.protocol = "https:";

      // If a custom Shopify subdomain is provided, ensure we use it
      if (SHOPIFY_HOST && u.hostname !== SHOPIFY_HOST) {
        // Only swap if the host is clearly not Shopify (defensive)
        const isClearlyShopify = /(^|\.)myshopify\.com$/i.test(u.hostname) || /(^|\.)shopify\.com$/i.test(u.hostname);
        if (!isClearlyShopify) u.hostname = SHOPIFY_HOST;
      }

      finalUrl = u.toString();
    } catch {
      // Very defensive fallback: send them to the cart root on configured Shopify host
      finalUrl = `https://${SHOPIFY_HOST}/cart`;
    }
    // ---------------------------------------------------------------

    const res = NextResponse.json({ ok: true, url: finalUrl });
    res.headers.set("Access-Control-Allow-Origin", ALLOWED_ORIGIN);
    res.headers.set("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.headers.set("Access-Control-Allow-Headers", "Content-Type, x-api-key");
    res.headers.set("Access-Control-Max-Age", "86400");
    res.headers.set("X-Robots-Tag", "noindex");
    return res;
  } catch (err: any) {
    // eslint-disable-next-line no-console
    console.error("[/api/checkout] error:", err);
    return NextResponse.json(
      { ok: false, error: err?.message ?? "Unexpected error" },
      { status: 500 }
    );
  }
}



















