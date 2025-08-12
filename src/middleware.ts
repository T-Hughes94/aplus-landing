// src/middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Always hide /lib/* from direct requests
  if (pathname.startsWith("/lib/")) {
    return new NextResponse("Not Found", { status: 404 });
  }

  // Only enforce API protections in production
  if (pathname.startsWith("/api/")) {
    const res = NextResponse.next();
    res.headers.set("X-Robots-Tag", "noindex");

    if (process.env.NODE_ENV !== "production") {
      // Local dev: allow everything
      return res;
    }

    // Production: allow same-origin browser requests (your site calling your API)
    const fetchSite = req.headers.get("sec-fetch-site"); // "same-origin" from your frontend
    if (fetchSite === "same-origin") {
      return res;
    }

    // Otherwise require API key header
    const apiKey = req.headers.get("x-api-key");
    if (apiKey !== process.env.INTERNAL_API_KEY) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    return res;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/api/:path*", "/lib/:path*"],
};



