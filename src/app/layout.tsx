// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

const BASE = (process.env.NEXT_PUBLIC_SITE_URL || "https://aplustruffles.com").replace(/\/$/, "");

export const metadata: Metadata = {
  title: { default: "A Plus Truffles", template: "%s | A Plus Truffles" },
  description:
    "Delicious handcrafted vegan truffles made with ethical, fair-trade ingredients.",
  keywords: [
    "A Plus Truffles",
    "The Best Chocolate",
    "vegan truffles",
    "hand-painted chocolates",
    "artisan chocolate",
    "fair-trade chocolate",
    "gourmet candy",
    "vegan desserts",
  ],
  openGraph: {
    title: "A Plus Truffles",
    description:
      "Delicious handcrafted vegan truffles made with ethical, fair-trade ingredients.",
    url: "/", // relative; resolved via metadataBase
    siteName: "A Plus Truffles",
    images: [{ url: "/truffle2.webp", width: 1200, height: 630, alt: "Handcrafted vegan truffles" }],
    locale: "en_US",
    type: "website",
  },
  icons: { icon: "/favicon.ico" },
  metadataBase: new URL(BASE),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* Optional custom tags can go in <head>, but it's fine to omit */}
      {/* <head><meta name="theme-color" content="#000000" /></head> */}
      <body className="font-custom bg-black text-white">
        {children}
      </body>
    </html>
  );
}






