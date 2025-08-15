import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | A Plus Truffles",
  description:
    "Get in touch with A Plus Truffles. Place an order, ask about our process, or simply say hello. We’d love to hear from you.",
  keywords: [
    "A Plus Truffles",
    "The Best Chocolate",
    "contact",
    "order inquiry",
    "event chocolates",
    "custom truffles",
  ],
  openGraph: {
    title: "Contact Us | A Plus Truffles",
    description:
      "Reach out to A Plus Truffles for inquiries, orders, or to learn more about our handcrafted vegan truffles.",
    url: "/contact",
    images: [{ url: "/Apluslogo4.png", width: 1200, height: 630, alt: "Contact A Plus Truffles" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | A Plus Truffles",
    description:
      "Questions about our handcrafted vegan truffles? Contact A Plus Truffles today.",
  },
  icons: { icon: "/favicon.ico" },
  // alternates: { canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/contact` }
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  // If you ever want a section-only layout wrapper, add it here.
  return <>{children}</>;
}

  