// src/app/about/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { FaLeaf, FaHandHoldingHeart, FaPaintBrush, FaSeedling } from "react-icons/fa";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "About Us | A Plus Truffles",
  description:
    "Hand-painted vegan truffles crafted with fair-trade ingredients. Small-batch quality for people searching for the best chocolate.",
  keywords: [
    "A Plus Truffles",
    "The Best Chocolate",
    "vegan truffles",
    "artisan chocolate",
    "hand-painted chocolates",
    "fair-trade chocolate",
    "gourmet candy",
  ],
  openGraph: {
    title: "About Us | A Plus Truffles",
    description:
      "Our unique approach to vegan truffles—ethical sourcing, hand-painted designs, and small-batch quality.",
    url: "/about",
    images: [{ url: "/truffle2.webp", width: 1200, height: 630, alt: "Handcrafted vegan truffles" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | A Plus Truffles",
    description:
      "Hand-painted vegan truffles made with fair-trade ingredients—crafted for people who love the best chocolate.",
  },
  icons: { icon: "/favicon.ico" },
};

export default function AboutPage() {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "";

  const aboutPageLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Us | A Plus Truffles",
    url: `${base}/about`,
    description:
      "Hand-painted vegan truffles crafted with fair-trade ingredients and small-batch care.",
    primaryImageOfPage: `${base}/truffle2.webp`,
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${base}/` },
        { "@type": "ListItem", position: 2, name: "About", item: `${base}/about` }
      ]
    }
  };

  const orgLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "A Plus Truffles",
    url: base || "https://aplustruffles.com",
    logo: `${base}/Apluslogo4.png`,
    sameAs: []
  };

  const FEATURES = [
    { icon: FaLeaf, title: "100% Vegan", text: "Plant-based ingredients in every truffle." },
    { icon: FaHandHoldingHeart, title: "Fair-Trade Sourced", text: "Supporting ethical sourcing practices." },
    { icon: FaPaintBrush, title: "Hand-Painted", text: "Every truffle an edible work of art." },
    { icon: FaSeedling, title: "Sustainably Sourced", text: "Crafted with respect for the environment." },
  ] as const;

  return (
    <>
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }} />

      <main id="main-content" className="bg-black text-white font-custom" role="main">
        <Header />

        {/* Hero */}
        <section
          className="relative isolate overflow-hidden p-10 md:p-24 text-center bg-black"
          aria-labelledby="about-hero-heading"
        >
          <div aria-hidden className="absolute inset-0 bg-gradient-radial from-[#febf79] via-[#f8b870] to-[#ca8f70] opacity-80 animate-pulse-slow" />
          <div aria-hidden className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:40px_40px]" />
          <div className="relative z-10 flex flex-col items-center justify-center space-y-6 max-w-4xl mx-auto">
            <h1 id="about-hero-heading" className="text-4xl md:text-5xl font-extrabold tracking-tight drop-shadow-lg">
              Crafting Sweet Experiences with Care
            </h1>
            <p className="text-lg md:text-2xl text-white/90 max-w-2xl">
              From the heart of NJ, creating hand-painted vegan truffles with ethical, fair-trade ingredients.
            </p>
            <hr className="border-[#FFD700] border-t-2 w-20 mx-auto mt-4" />
          </div>
        </section>

        {/* Feature cards */}
        <section className="p-6 md:p-16 bg-black text-center" aria-labelledby="quality-heading">
          <h2 id="quality-heading" className="text-3xl font-bold underline decoration-[#ca8f70] md:text-4xl">
            Our Commitment to Quality
          </h2>

          <div className="grid grid-cols-1 gap-16 mt-20 max-w-4xl mx-auto md:grid-cols-2">
            {FEATURES.map(({ icon: Icon, title, text }) => (
              <article
                key={title}
                className="relative pt-16 md:pt-20 pb-12 bg-[#ca8f70] rounded-lg shadow-lg border border-white transform transition-transform hover:scale-105 hover:shadow-2xl focus-within:scale-105"
                style={{ minHeight: "250px" }}
              >
                {/* Floating, centered icon (overlaps card by ~50%) */}
                <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                  <div className="bg-black rounded-full p-5 md:p-6 shadow-md border-4 border-white">
                    <Icon className="text-5xl md:text-6xl" style={{ color: "#febf79" }} />
                  </div>
                </div>

                <div className="mt-10 md:mt-12 text-center px-6">
                  <h3 className="text-2xl font-bold text-white">{title}</h3>
                  <p className="text-lg md:text-xl mt-3 text-black">{text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Product highlight */}
        <section className="p-12 md:p-16 bg-black text-center" aria-labelledby="highlight-heading">
          <h2 id="highlight-heading" className="text-3xl font-bold underline decoration-[#ca8f70] text-white md:text-4xl">
            A Unique Take on Candy
          </h2>
          <p className="mt-4 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto text-white">
            Our truffles aren’t just desserts; they’re an experience. With unique, indulgent flavors and hand-painted details,
            each piece is crafted to surprise and delight.
          </p>
          <div className="mt-12 flex justify-center">
            <Image
              src="/truffle3.webp"
              alt="Close-up of a hand-painted truffle"
              width={500}
              height={300}
              loading="lazy"
              sizes="(min-width:768px) 500px, 90vw"
              className="rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* CTA */}
        <section
          className="p-6 md:p-16 relative bg-gradient-to-br from-[#ca8f70] via-[#ca8f70] to-[#febf79] text-center"
          aria-labelledby="about-cta-heading"
        >
          <h2 id="about-cta-heading" className="text-2xl font-bold text-white md:text-3xl">
            Ready to Try Our Creations?
          </h2>
          <p className="text-white mt-4 text-lg md:text-xl">
            Contact us to place an order or browse the shop to explore the latest flavors.
          </p>

          <div className="mt-6 flex items-center justify-center gap-4 flex-wrap">
            <Link
              href="/contact"
              aria-label="Contact us to place an order or learn more about A Plus Truffles"
              className="inline-flex items-center justify-center rounded-lg border border-[#FFD700] bg-white px-6 py-3 font-semibold text-black shadow-md transition duration-300 hover:bg-[#ca8f70] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-black/80"
            >
              Contact Us
            </Link>

            <Link
              href="/shop"
              aria-label="Browse the shop to find hand-painted vegan truffles"
              className="inline-flex items-center justify-center rounded-lg border border-[#FFD700] bg-white px-6 py-3 font-semibold text-black shadow-md transition duration-300 hover:bg-[#ca8f70] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-black/80"
            >
              Visit the Shop
            </Link>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}


















