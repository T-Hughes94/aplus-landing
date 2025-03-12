import { NextResponse } from "next/server";

export async function GET() {
    const baseUrl = "https://aplus-truffles.vercel.app"; // Update when using a custom domain

    const pages = [
        "/",               // Home
        "/about",          // About
        "/services",       // Services 
        "/gallery",        // Gallery
        "/collections",    // Collections 
        "/contact"
    ];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${pages
            .map((page) => {
                return `
                <url>
                    <loc>${baseUrl}${page}</loc>
                    <lastmod>${new Date().toISOString()}</lastmod>
                    <priority>0.8</priority>
                </url>
                `;
            })
            .join("")}
    </urlset>`;

    return new NextResponse(sitemap, {
        headers: {
            "Content-Type": "application/xml",
        },
    });
}

