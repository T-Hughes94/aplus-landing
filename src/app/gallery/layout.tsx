import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | A Plus Truffles",
  description:
    "Explore our gallery showcasing hand-painted vegan truffles and other proud creations.",
  keywords: [
    "A Plus Truffles",
    "The Best Chocolate",
    "vegan truffles",
    "artisan chocolate",
    "hand-painted chocolates",
    "gourmet candy",
    "chocolate art",
  ],
  openGraph: {
    title: "Gallery | A Plus Truffles",
    description:
      "Take a look at our finest handcrafted vegan truffles displayed in stunning detail.",
    url: "/gallery",
    images: [{ url: "/gallery1.webp", width: 1200, height: 630, alt: "Gallery of A Plus Truffles" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gallery | A Plus Truffles",
    description:
      "Hand-painted vegan truffles — explore our gallery of edible art.",
  },
  icons: { icon: "/favicon.ico" },
  // alternates: { canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/gallery` }
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

  