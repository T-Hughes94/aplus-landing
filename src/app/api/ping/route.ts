import { NextResponse } from "next/server";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",                     // safe because no cookies/credentials
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, x-api-key",
  "Access-Control-Max-Age": "86400",
};

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: corsHeaders });
}

export async function GET() {
  const domain = process.env.NEXT_PUBLIC_SHOPIFY_DOMAIN || "";
  const token  = process.env.SHOPIFY_STOREFRONT_API_TOKEN || "";

  return NextResponse.json(
    {
      ok: true,
      message: "pong",
      hasDomain: Boolean(domain),
      hasToken: Boolean(token),
      domain,
    },
    { headers: corsHeaders }
  );
}



  