import type { Metadata } from "next";
import "./globals.css";

// Metadata for SEO and Social Sharing
export const metadata: Metadata = {
  title: {
    default: "A Plus Truffles",
    template: "%s | A Plus Truffles",
  },
  description: "Delicious handcrafted vegan truffles made with ethical, fair-trade ingredients.",
  keywords: [
    "vegan truffles",
    "handcrafted chocolates",
    "ethical truffles",
    "A Plus Truffles",
    "vegan desserts",
  ],
  openGraph: {
    title: "A Plus Truffles",
    description: "Delicious handcrafted vegan truffles made with ethical, fair-trade ingredients.",
    url: "https://yourwebsite.com", // Replace with your actual URL
    siteName: "A Plus Truffles",
    images: [
      {
        url: "/truffle3.webp", // Replace with your hero image path
        width: 1200,
        height: 630,
        alt: "Handcrafted vegan truffles",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "A Plus Truffles",
    description: "Delicious handcrafted vegan truffles made with ethical, fair-trade ingredients.",
    images: ["/truffle3.webp"], // Replace with hero image path
  },
  icons: {
    icon: "/favicon.ico", // Replace with your favicon path in public directory
  },
  metadataBase: new URL("https://yourwebsite.com"), // Base URL for all relative links
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-custom bg-black text-white">
        {children}
      </body>
    </html>
  );
}

