// src/app/robots.txt/route.ts
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const envBase = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "");
  const base = envBase || `${url.protocol}//${url.host}`;

  // Check environment
  const isProd = process.env.NODE_ENV === "production";

  const body = isProd
    ? [
        "User-agent: *",
        "Allow: /",
        "",
        "# Block API endpoints from being crawled",
        "Disallow: /api/",
        "",
        `Sitemap: ${base}/sitemap.xml`,
        "",
      ].join("\n")
    : [
        "User-agent: *",
        "Disallow: /",
        "",
        "# Staging/Preview environment. Block all crawling.",
        `# Base: ${base}`,
        "",
      ].join("\n");

  return new NextResponse(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}



