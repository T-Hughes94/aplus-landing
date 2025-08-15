import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shipping & Fulfillment | A Plus Truffles",
  description:
    "Shipping details for A Plus Truffles: weekly order deadlines, production times, USPS Priority Mail, local pickup, and storage tips.",
  keywords: [
    "A Plus Truffles",
    "The Best Chocolate",
    "shipping chocolate",
    "vegan truffles shipping",
    "USPS Priority Mail",
    "local pickup",
  ],
  openGraph: {
    title: "Shipping & Fulfillment | A Plus Truffles",
    description:
      "How we ship handcrafted vegan truffles—order deadlines, production time, USPS Priority, pickup, and care.",
    url: "/shipping",
    images: [{ url: "/truffle-shipping.webp", width: 1200, height: 630, alt: "A Plus Truffles Shipping Info" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shipping & Fulfillment | A Plus Truffles",
    description:
      "Everything you need to know about shipping and picking up our handcrafted vegan truffles.",
  },
  icons: { icon: "/favicon.ico" },
  // alternates: { canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/shipping` }
};

const FAQ = [
  {
    q: "What is the order deadline?",
    a: "Place orders by Sunday for Wednesday shipping or pickup. Orders after Sunday roll to the following week."
  },
  {
    q: "How long is production time?",
    a: "Each batch is handcrafted and typically requires about 3 days to complete for peak freshness."
  },
  {
    q: "How do you ship?",
    a: "We ship nationwide via USPS Priority Mail flat rate boxes. A small handling fee covers packaging and insulation."
  },
  {
    q: "Is local pickup available?",
    a: "Yes—local pickup is available every Wednesday for orders placed by the prior Sunday."
  },
  {
    q: "How should I store truffles?",
    a: "Store in a cool, dry place and enjoy within 2 weeks for best taste and texture."
  }
] as const;

export default function ShippingPage() {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "";

  const webPageLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Shipping & Fulfillment | A Plus Truffles",
    url: `${base}/shipping`,
    description:
      "Order deadlines, production time, USPS Priority shipping, local pickup, and care for A Plus Truffles.",
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      <main id="main-content" className="bg-black text-white font-custom" role="main">
        <Header />

        {/* Hero */}
        <section className="relative isolate overflow-hidden p-10 md:p-24 text-center bg-black" aria-labelledby="shipping-hero-heading">
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-radial from-[#febf79] via-[#f8b870] to-[#ca8f70] opacity-80 animate-pulse-slow" />
          <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:40px_40px]" />
          <div className="relative z-10 flex flex-col items-center justify-center space-y-6 max-w-4xl mx-auto">
            <h1 id="shipping-hero-heading" className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">
              Shipping &amp; Fulfillment Details
            </h1>
            <p className="text-lg md:text-2xl text-white/90 max-w-2xl">
              How we ensure your handcrafted truffles arrive fresh, beautiful, and on time.
            </p>
            <hr className="border-[#FFD700] border-t-2 w-20 mx-auto mt-4" />
          </div>
        </section>

        {/* Details */}
        <section className="p-6 md:p-16 bg-black text-center" aria-labelledby="shipping-details-heading">
          <h2 id="shipping-details-heading" className="text-3xl text-white font-bold underline decoration-[#ca8f70] md:text-4xl">
            Important Shipping Info
          </h2>
          <div className="mt-12 max-w-3xl mx-auto text-white/90 text-lg md:text-xl space-y-10">
            {FAQ.map(({ q, a }) => (
              <article key={q}>
                <h3 className="text-2xl font-semibold text-white mb-2">{q}</h3>
                <p>{a}</p>
              </article>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="p-6 md:p-16 relative bg-gradient-to-br from-[#ca8f70] via-[#ca8f70] to-[#febf79] text-center" aria-labelledby="shipping-cta-heading">
          <h2 id="shipping-cta-heading" className="text-2xl font-bold text-white md:text-3xl">
            Ready to place your order?
          </h2>
          <p className="text-white mt-4 text-lg md:text-xl">
            Visit our contact or shop page to get started. We&apos;re excited to create something special for you.
          </p>

          <div className="mt-6 flex justify-center gap-4 flex-wrap">
            <Link
              href="/contact"
              aria-label="Contact us to start your order"
              className="px-6 py-3 inline-flex items-center justify-center bg-white text-black font-semibold border border-[#FFD700] rounded-lg shadow-md hover:bg-[#ca8f70] hover:text-white transition duration-300"
            >
              Contact Us
            </Link>
            <Link
              href="/shop"
              aria-label="Browse our shop and order truffles"
              className="px-6 py-3 inline-flex items-center justify-center bg-black text-white font-semibold border border-white rounded-lg shadow-md hover:bg-[#f8b870] hover:text-black transition duration-300"
            >
              Visit Shop
            </Link>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
