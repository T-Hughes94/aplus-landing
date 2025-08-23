// src/app/sitemap.xml/route.ts
import { NextResponse } from "next/server";
import { isShopOpen } from "../lib/shopStatus";

type Page = { path: string; priority: number; lastmod?: string };

export async function GET(request: Request) {
  const now = new Date().toISOString();

  const basePages: Page[] = [
    { path: "/", priority: 1.0, lastmod: now },
    { path: "/about", priority: 0.8, lastmod: now },
    { path: "/services", priority: 0.8, lastmod: now },
    { path: "/shipping", priority: 0.8, lastmod: now },
    { path: "/gallery", priority: 0.8, lastmod: now },
    { path: "/contact", priority: 0.8, lastmod: now },
  ];

  const shopPages: Page[] = [
    { path: "/shop", priority: 0.9, lastmod: now },
    { path: "/collections", priority: 0.9, lastmod: now },
  ];

  const pages = isShopOpen() ? [...basePages, ...shopPages] : basePages;

  const url = new URL(request.url);
  const envBase = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "");
  const base = envBase || `${url.protocol}//${url.host}`;

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    ({ path, priority, lastmod }) => `<url>
  <loc>${base}${path}</loc>
  ${lastmod ? `<lastmod>${lastmod}</lastmod>` : ""}
  <priority>${priority.toFixed(1)}</priority>
</url>`
  )
  .join("\n")}
</urlset>`.trim();

  return new NextResponse(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}






