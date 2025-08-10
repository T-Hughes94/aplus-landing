// src/app/api/checkout/route.ts
import { NextRequest, NextResponse } from "next/server";
import { shopifyFetch, CHECKOUT_CREATE } from "../../lib/shopify";

export async function POST(req: NextRequest) {
  try {
    const { variantId, quantity = 1 } = await req.json();

    if (!variantId) {
      return NextResponse.json({ error: "Missing variantId" }, { status: 400 });
    }

    const resp = await shopifyFetch(CHECKOUT_CREATE, {
      variables: {
        input: {
          lineItems: [{ variantId, quantity: Number(quantity) }],
        },
      },
    });

    console.log("[checkout] raw response:", JSON.stringify(resp, null, 2));

    // Top-level GraphQL errors
    if ((resp as any).errors?.length) {
      console.error("[checkout] top-level errors:", (resp as any).errors);
      return NextResponse.json(
        { error: "Storefront API error", details: (resp as any).errors },
        { status: 400 }
      );
    }

    const data = (resp as any).data?.checkoutCreate ?? (resp as any).checkoutCreate;
    if (!data) {
      console.error("[checkout] missing checkoutCreate field");
      return NextResponse.json(
        { error: "checkoutCreate missing in response" },
        { status: 400 }
      );
    }

    const userErr = data.userErrors?.[0];
    if (userErr) {
      console.error("[checkout] userErrors:", data.userErrors);
      return NextResponse.json({ error: userErr.message }, { status: 400 });
    }

    const url = data.checkout?.webUrl;
    if (!url) {
      return NextResponse.json({ error: "No checkout URL returned" }, { status: 400 });
    }

    return NextResponse.json({ url }, { status: 200 });
  } catch (e: any) {
    console.error("[checkout] route error:", e);
    return NextResponse.json(
      { error: e?.message ?? "Unknown error" },
      { status: 500 }
    );
  }
}




