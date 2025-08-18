// src/app/api/ping/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  const hasDomain = !!process.env.NEXT_PUBLIC_SHOPIFY_DOMAIN;
  const hasToken = !!process.env.SHOPIFY_STOREFRONT_API_TOKEN;

  return NextResponse.json({
    hasDomain,
    hasToken,
    domain: process.env.NEXT_PUBLIC_SHOPIFY_DOMAIN || null, // optional, for debugging
  });
}

  