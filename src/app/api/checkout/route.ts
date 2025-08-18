// src/app/api/checkout/route.ts
import { NextResponse } from "next/server";
import { shopifyFetch, CART_CREATE } from "@/app/lib/shopify";

type RouteBody = { variantId?: string; quantity?: number };

export async function POST(req: Request) {
  try {
    const { variantId, quantity = 1 } = (await req.json()) as RouteBody;

    if (!variantId) {
      return NextResponse.json(
        { ok: false, error: "Missing variantId" },
        { status: 400, headers: { "X-Robots-Tag": "noindex" } }
      );
    }

    const mut = await shopifyFetch<{
      cartCreate: {
        cart: { id: string; checkoutUrl: string | null } | null;
        userErrors: { field: string[]; message: string }[];
      };
    }>(CART_CREATE, {
      variables: {
        input: {
          lines: [{ merchandiseId: variantId, quantity }],
        },
      },
    });

    const userErrors = mut.data?.cartCreate.userErrors ?? [];
    if (userErrors.length) {
      return NextResponse.json(
        { ok: false, error: userErrors.map(e => e.message).join(", ") },
        { status: 400, headers: { "X-Robots-Tag": "noindex" } }
      );
    }

    const checkoutUrl = mut.data?.cartCreate.cart?.checkoutUrl;
    if (!checkoutUrl) {
      return NextResponse.json(
        { ok: false, error: "No checkoutUrl returned" },
        { status: 502, headers: { "X-Robots-Tag": "noindex" } }
      );
    }

    // success → send the Shopify checkout URL back to the client
    return NextResponse.json(
      { ok: true, url: checkoutUrl },
      { headers: { "X-Robots-Tag": "noindex" } }
    );
  } catch (err) {
    console.error("[/api/checkout] error", err);
    return NextResponse.json(
      { ok: false, error: "Unexpected error" },
      { status: 500, headers: { "X-Robots-Tag": "noindex" } }
    );
  }
}

export async function OPTIONS() {
  const res = new NextResponse(null, { status: 204 });
  res.headers.set("Access-Control-Allow-Origin", "");
  res.headers.set("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.headers.set("Access-Control-Allow-Headers", "Content-Type");
  res.headers.set("Access-Control-Max-Age", "86400");
  res.headers.set("X-Robots-Tag", "noindex");
  return res;
}














