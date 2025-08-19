import type { Metadata } from "next";
import "./globals.css";

const SITE = (process.env.NEXT_PUBLIC_SITE_URL || "https://aplustruffles.com").replace(/\/$/, "");

export const metadata: Metadata = {
  title: {
    default: "A Plus Truffles",
    template: "%s | A Plus Truffles",
  },
  description:
    "Delicious handcrafted vegan truffles made with ethical, fair-trade ingredients.",
  keywords: [
    "vegan",
    "bon bons",
    "vegan bon bons",
    "truffles",
    "vegan truffles",
    "handcrafted chocolates",
    "ethical truffles",
    "A Plus Truffles",
    "vegan desserts",
  ],
  openGraph: {
    title: "A Plus Truffles",
    description:
      "Delicious handcrafted vegan truffles made with ethical, fair-trade ingredients.",
    url: SITE,
    siteName: "A Plus Truffles",
    images: [{ url: `${SITE}/truffle2.webp`, width: 1200, height: 630, alt: "Handcrafted vegan truffles" }],
    locale: "en_US",
    type: "website",
  },
  icons: { icon: "/favicon.ico" },
  metadataBase: new URL(SITE),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" type="image/x-icon" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className="font-custom bg-black text-white">{children}</body>
    </html>
  );
}




