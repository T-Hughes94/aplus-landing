// src/app/api/checkout/route.ts
import { NextRequest, NextResponse } from "next/server";

const SHOPIFY_DOMAIN = process.env.NEXT_PUBLIC_SHOPIFY_DOMAIN!;
const SHOPIFY_STOREFRONT_API_TOKEN = process.env.SHOPIFY_STOREFRONT_API_TOKEN!;
const INTERNAL_API_KEY = process.env.INTERNAL_API_KEY!;

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, x-api-key",
};

type GraphQLError = { message: string };
type UserError = { field?: string[]; message: string };

export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders });
}

export async function POST(req: NextRequest) {
  const apiKey = req.headers.get("x-api-key");
  if (apiKey !== INTERNAL_API_KEY) {
    return NextResponse.json(
      { ok: false, error: "Unauthorized" },
      { status: 401, headers: corsHeaders }
    );
  }

  const body = await req.json();

  const mutation = `
    mutation CreateCart($lines: [CartLineInput!]!) {
      cartCreate(input: { lines: $lines }) {
        cart {
          checkoutUrl
        }
        userErrors {
          field
          message
        }
      }
    }
  `;

  const response = await fetch(`https://${SHOPIFY_DOMAIN}/api/2025-01/graphql.json`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": SHOPIFY_STOREFRONT_API_TOKEN,
    },
    body: JSON.stringify({
      query: mutation,
      variables: {
        lines: [{ merchandiseId: body.variantId, quantity: body.quantity }],
      },
    }),
  });

  const { data, errors }: { data?: any; errors?: GraphQLError[] } = await response.json();

  if (errors?.length) {
    const message = errors.map((e: GraphQLError) => e.message).join("; ");
    return NextResponse.json(
      { ok: false, error: message },
      { status: 502, headers: corsHeaders }
    );
  }

  const cart = data?.cartCreate?.cart;
  const userErrors: UserError[] = data?.cartCreate?.userErrors ?? [];

  if (!cart?.checkoutUrl) {
    const message =
      userErrors.map((e: UserError) => e.message).join("; ") ||
      "No checkout URL returned from Shopify";

    return NextResponse.json(
      { ok: false, error: message },
      { status: 502, headers: corsHeaders }
    );
  }

  return NextResponse.json(
    { ok: true, url: cart.checkoutUrl },
    { headers: corsHeaders }
  );
}
















