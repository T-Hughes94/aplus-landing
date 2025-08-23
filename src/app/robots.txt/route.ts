// src/app/robots.txt/route.ts
import { NextResponse } from "next/server";
import { isShopOpen } from "../lib/shopStatus";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const envBase = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "");
  const base = envBase || `${url.protocol}//${url.host}`;
  const isProd = process.env.NODE_ENV === "production";

  if (!isProd) {
    const body = [
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

  const lines: string[] = ["User-agent: *", "Allow: /", ""];

  if (!isShopOpen()) {
    lines.push("# Shop temporarily closed");
    lines.push("Disallow: /shop");
    lines.push("Disallow: /collections");
    lines.push("");
  }

  lines.push(`Sitemap: ${base}/sitemap.xml`, "");

  return new NextResponse(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}





