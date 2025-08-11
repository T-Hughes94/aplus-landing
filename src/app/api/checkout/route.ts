// src/app/api/checkout/route.ts
import { NextRequest, NextResponse } from "next/server";
import { shopifyFetch, CART_CREATE } from "@/app/lib/shopify";

export async function POST(req: NextRequest) {
  try {
    const { variantId, quantity = 1 } = await req.json();

    if (!variantId) {
      return NextResponse.json({ ok: false, error: "Missing variantId" }, { status: 400 });
    }

    // Cart API uses merchandiseId (variant GID)
    const resp = await shopifyFetch(CART_CREATE, {
      variables: {
        input: {
          lines: [
            {
              quantity: Number(quantity),
              merchandiseId: variantId,
            },
          ],
        },
      },
    });

    console.log("[cartCreate] raw:", JSON.stringify(resp, null, 2));

    if ((resp as any).errors?.length) {
      return NextResponse.json({ ok: false, error: "Storefront API error", details: (resp as any).errors }, { status: 400 });
    }

    const data = (resp as any).data?.cartCreate;
    if (!data) {
      return NextResponse.json({ ok: false, error: "cartCreate missing in response", details: resp }, { status: 400 });
    }

    const userErrs = data.userErrors;
    if (userErrs?.length) {
      return NextResponse.json({ ok: false, errors: userErrs }, { status: 400 });
    }

    const url = data.cart?.checkoutUrl;
    if (!url) return NextResponse.json({ ok: false, error: "No checkoutUrl from cartCreate" }, { status: 400 });

    return NextResponse.json({ ok: true, url });
  } catch (e: any) {
    console.error("[cartCreate] route error:", e);
    return NextResponse.json({ ok: false, error: e?.message ?? "Unknown error" }, { status: 500 });
  }
}








