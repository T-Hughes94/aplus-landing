// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

const BASE = (process.env.NEXT_PUBLIC_SITE_URL || "https://aplustruffles.com").replace(/\/$/, "");

export const metadata: Metadata = {
  title: { default: "A Plus Truffles", template: "%s | A Plus Truffles" },
  description: "Delicious handcrafted vegan truffles made with ethical, fair-trade ingredients.",
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
    description: "Delicious handcrafted vegan truffles made with ethical, fair-trade ingredients.",
    url: "/",
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
      <body className="min-h-dvh flex flex-col bg-black text-white font-custom">
        {children}
      </body>
    </html>
  );
}







