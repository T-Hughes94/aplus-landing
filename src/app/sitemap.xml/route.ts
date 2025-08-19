// src/app/sitemap.xml/route.ts
import { NextResponse } from "next/server";

type Page = {
  path: string;
  priority: number;
  changefreq?: "daily" | "weekly" | "monthly" | "yearly";
  lastmod?: string;
};

export async function GET(request: Request) {
  const now = new Date().toISOString();
  const url = new URL(request.url);
  const envBase = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "");
  const base = envBase || `${url.protocol}//${url.host}`;

  // Include all live pages you listed
  const pages: Page[] = [
    { path: "/",           priority: 1.0, changefreq: "weekly",  lastmod: now },
    { path: "/shop",       priority: 0.9, changefreq: "weekly",  lastmod: now },
    { path: "/collections",priority: 0.8, changefreq: "weekly",  lastmod: now },
    { path: "/about",      priority: 0.8, changefreq: "monthly", lastmod: now },
    { path: "/gallery",    priority: 0.6, changefreq: "monthly", lastmod: now },
    { path: "/services",   priority: 0.5, changefreq: "monthly", lastmod: now },
    { path: "/shipping",   priority: 0.3, changefreq: "yearly",  lastmod: now },
    { path: "/contact",    priority: 0.6, changefreq: "monthly", lastmod: now },
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    ({ path, priority, changefreq, lastmod }) => `  <url>
    <loc>${base}${path}</loc>
    ${lastmod ? `<lastmod>${lastmod}</lastmod>` : ""}
    ${changefreq ? `<changefreq>${changefreq}</changefreq>` : ""}
    <priority>${priority.toFixed(1)}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`.trim();

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=86400, must-revalidate", // 1 day
    },
  });
}





