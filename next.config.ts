import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn.shopify.com" },
      { protocol: "https", hostname: "**.cdn.shopify.com" },
      // add any other CDNs you use
    ],
  },
};

export default nextConfig;




