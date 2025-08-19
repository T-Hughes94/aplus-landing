import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const envBase = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "");
  const base = envBase || `${url.protocol}//${url.host}`;

  // Derive the production hostname from your env base (fallback to aplustruffles.com)
  const PROD_HOST = (() => {
    try { return new URL(envBase || "https://aplustruffles.com").hostname; } catch { return "aplustruffles.com"; }
  })();

  const isProd = url.hostname === PROD_HOST || process.env.VERCEL_ENV === "production";

  const body = isProd
    ? [
        "User-agent: *",
        "Allow: /",
        "",
        "# Block internal endpoints",
        "Disallow: /api/",
        "Disallow: /lib/",
        "",
        `Sitemap: ${base}/sitemap.xml`,
        "",
      ].join("\n")
    : [
        "User-agent: *",
        "Disallow: /",
        "",
        "# Preview/Dev environment. Block all crawling.",
        `# Base: ${base}`,
        "",
      ].join("\n");

  return new NextResponse(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      // cache for a day; adjust as you like
      "Cache-Control": "public, max-age=86400, must-revalidate",
    },
  });
}




