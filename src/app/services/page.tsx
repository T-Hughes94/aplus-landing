// src/app/services/page.tsx
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | A Plus Truffles",
  description:
    "Discover how A Plus Truffles can add sweetness to your special occasions—weddings, birthdays, showers, and more.",
  keywords: [
    "A Plus Truffles",
    "The Best Chocolate",
    "vegan truffles",
    "event chocolates",
    "wedding favors",
    "artisan chocolate",
    "hand-painted chocolates",
    "gourmet candy",
  ],
  openGraph: {
    title: "Services | A Plus Truffles",
    description:
      "Handcrafted vegan truffles to celebrate life’s sweetest moments, from weddings to birthdays.",
    url: "/services",
    images: [{ url: "/gallery6.webp", width: 1200, height: 630, alt: "Celebrations with A Plus Truffles" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Services | A Plus Truffles",
    description:
      "Custom, hand-painted vegan truffles for events and gifting—crafted for people who love the best chocolate.",
  },
  icons: { icon: "/favicon.ico" },
  // alternates: { canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/services` }
};

const SERVICES = [
  { title: "Weddings", text: "Elegant and delicious favors your guests will love." },
  { title: "Baby Showers", text: "Celebrate with treats as sweet as the new arrival." },
  { title: "Bridal Showers", text: "Add a touch of sweetness to pre-wedding celebrations." },
  { title: "Birthdays", text: "Make birthdays extra special with a truffle treat." },
] as const;

export default function ServicesPage() {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "";

  // Structured data: the page + the service list
  const collectionLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Services | A Plus Truffles",
    url: `${base}/services`,
    description:
      "Custom, hand-painted vegan truffles for weddings, birthdays, showers, and special occasions.",
  };

  const itemListLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Event & Gifting Services",
    itemListElement: SERVICES.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Service",
        name: s.title,
        description: s.text,
        areaServed: "US",
        provider: {
          "@type": "Organization",
          name: "A Plus Truffles",
          url: base || "https://aplustruffles.com",
        },
      },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListLd) }} />

      <main id="main-content" className="bg-black text-white font-custom" role="main">
        <Header />

        {/* Hero */}
        <section
          className="relative isolate overflow-hidden p-10 md:p-24 text-center bg-black"
          aria-labelledby="services-hero-heading"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-radial from-[#febf79] via-[#f8b870] to-[#ca8f70] opacity-80 animate-pulse-slow"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:40px_40px]"
          />
          <div className="relative z-10 flex flex-col items-center justify-center space-y-6 max-w-4xl mx-auto">
            <h1 id="services-hero-heading" className="text-4xl md:text-5xl font-extrabold text-white tracking-tight drop-shadow-lg">
              Special Occasions &amp; Gifting
            </h1>
            <p className="text-lg md:text-2xl text-white/90 max-w-2xl">
              Celebrate life’s sweetest moments with A Plus Truffles—handcrafted with care and perfect for any occasion.
            </p>
            <hr className="border-[#FFD700] border-t-2 w-20 mx-auto mt-4" />
          </div>
        </section>

        {/* Image Highlight */}
        <section className="p-6 md:p-16 bg-black text-center">
          <div className="mt-8 flex justify-center">
            <Image
              src="/gallery2.webp"
              alt="Celebrations with A Plus Truffles"
              width={600}
              height={400}
              priority
              sizes="(min-width: 1024px) 600px, 90vw"
              className="rounded-lg shadow-lg"
            />
          </div>
          <p className="mt-4 text-lg text-white max-w-2xl mx-auto md:text-xl">
            A glimpse of our hand-painted truffles and custom displays made to elevate every occasion.
          </p>
        </section>

        {/* Services Grid */}
        <section className="p-6 md:p-16 bg-black text-center" aria-labelledby="services-grid-heading">
          <h2 id="services-grid-heading" className="text-3xl font-bold text-white underline decoration-[#ca8f70] md:text-4xl">
            Perfect for Every Occasion
          </h2>
          <p className="mt-4 text-lg text-white max-w-2xl mx-auto md:text-xl">
            Our handcrafted vegan truffles add elegance to every celebration.
          </p>

          <div className="grid grid-cols-1 gap-12 mt-12 max-w-4xl mx-auto md:grid-cols-2">
            {SERVICES.map(({ title, text }) => (
              <article
                key={title}
                className="relative pt-20 pb-12 bg-[#ca8f70] rounded-lg shadow-lg border border-[#FFD700] transform transition-transform hover:scale-105 hover:shadow-2xl"
              >
                {/* Decorative truffle image */}
                <div className="absolute -top-[110px] z-10 w-[500px] h-[240px] flex items-center justify-center" aria-hidden="true">
                  <Image
                    src="/icon4.png"
                    alt=""
                    width={220}
                    height={420}
                    className="object-contain drop-shadow-md"
                  />
                </div>
                <div className="mt-4 text-center px-6">
                  <h3 className="text-3xl font-bold pt-2 text-white">{title}</h3>
                  <p className="text-lg md:text-xl mt-3 text-black">{text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Gallery CTA */}
        <section className="p-6 md:p-16 bg-black text-center" aria-labelledby="services-gallery-cta">
          <h2 id="services-gallery-cta" className="text-3xl font-bold text-white underline decoration-[#ca8f70] md:text-4xl">
            A Gift That Always Delights
          </h2>
          <p className="mt-4 text-lg text-white max-w-2xl mx-auto">
            Choose from our ready-made boxes—or reach out to build something custom.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <Link
              href="/gallery"
              aria-label="Explore our gallery of hand-painted truffles"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#ca8f70] text-white font-semibold rounded-lg shadow-md hover:bg-[#febf79] hover:text-black border border-[#FFD700] transition duration-300"
            >
              Explore Our Gallery
            </Link>
            <Link
              href="/shop"
              aria-label="Browse the shop to explore our latest truffles"
              className="inline-flex items-center justify-center px-6 py-3 bg-black/20 text-white font-semibold rounded-lg shadow-md border border-white/70 hover:bg-black/40 transition duration-300"
            >
              Visit the Shop
            </Link>
          </div>
        </section>

        {/* Contact CTA */}
        <section
          className="p-6 md:p-16 bg-gradient-to-br from-[#ca8f70] via-[#ca8f70] to-[#febf79] text-center"
          aria-labelledby="services-contact-cta"
        >
          <h2 id="services-contact-cta" className="text-3xl font-bold text-white md:text-4xl">
            Planning an Event?
          </h2>
          <p className="mt-4 text-lg text-white">
            Contact us to discuss how A Plus Truffles can make your event unforgettable.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              aria-label="Contact us about custom truffle orders for events"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-black font-semibold rounded-lg border border-[#FFD700] shadow-md hover:bg-[#ca8f70] hover:text-white transition duration-300"
            >
              Contact Us
            </Link>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}


















