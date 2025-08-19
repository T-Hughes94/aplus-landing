// src/app/page.tsx
import type { Metadata } from "next";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import PricingSection from "./components/PricingSection";
import SeasonalSection from "./components/SeasonalSection";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "A Plus Truffles | Hand-Painted Vegan Truffles",
  description:
    "Handcrafted, hand-painted vegan truffles made with fair-trade ingredients. Small-batch quality for people searching for the best chocolate.",
  keywords: [
    "A Plus Truffles",
    "The Best Chocolate",
    "vegan truffles",
    "artisan chocolate",
    "hand-painted chocolates",
    "fair-trade chocolate",
    "gourmet candy",
    "chocolate gift boxes",
  ],
  openGraph: {
    title: "A Plus Truffles | Hand-Painted Vegan Truffles",
    description:
      "Elegantly airbrushed, hand-painted truffles made from premium, fair-trade ingredients.",
    url: "/", // relative; resolves against metadataBase in RootLayout
    images: [{ url: "/truffle2.webp", width: 1200, height: 630, alt: "Hand-painted vegan truffles" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "A Plus Truffles | Hand-Painted Vegan Truffles",
    description:
      "Small-batch vegan truffles crafted for people who love the best chocolate.",
  },
  icons: { icon: "/favicon.ico" },
  alternates: { canonical: "/" }, // relative canonical (will be absolutized by metadataBase)
};

export default function Home() {
  // Safe absolute base (trimmed + fallback)
  const BASE =
    (process.env.NEXT_PUBLIC_SITE_URL || "https://aplustruffles.com").replace(/\/$/, "");

  // JSON-LD
  const webSiteLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "A Plus Truffles",
    url: BASE,
    publisher: {
      "@type": "Organization",
      name: "A Plus Truffles",
      logo: `${BASE}/Apluslogo4.png`,
    },
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: `${BASE}/` }],
  };

  return (
    <>
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      {/* Header contains the skip link; this <main> is the jump target */}
      <Header />

      <main id="main-content" className="bg-black text-white font-custom" role="main">
        <HeroSection />
        <AboutSection />
        <PricingSection />
        <SeasonalSection />
      </main>

      <Footer />
    </>
  );
}






