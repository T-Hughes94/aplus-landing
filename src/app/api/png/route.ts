// src/app/api/ping/route.ts
export async function GET() {
    const hasDomain = Boolean(process.env.NEXT_PUBLIC_SHOPIFY_DOMAIN);
    const hasToken = Boolean(process.env.SHOPIFY_STOREFRONT_API_TOKEN);
    return new Response(
      JSON.stringify({ hasDomain, hasToken }),
      { headers: { "Content-Type": "application/json" } }
    );
  }
  