// src/app/collections/page.tsx
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Collections | A Plus Truffles",
  description:
    "Explore our handcrafted vegan truffle collections. Indulge in exquisite flavors, ethical ingredients, and unique designs. Find your favorite today!",
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
    title: "Collections | A Plus Truffles",
    description:
      "Discover the unique flavors of our handcrafted vegan truffles—seasonal delights and classic favorites.",
    url: "/collections",
    images: [
      {
        url: "/Apluslogo4.png",
        width: 1200,
        height: 630,
        alt: "A Plus Truffles collection assortment",
      },
    ],
    type: "website",
  },
  icons: { icon: "/favicon.ico" },
  // alternates: { canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/collections` }
};

type Collections = {
  id: string;
  title: string;
  flavors: { name: string; emoji: string; description: string }[];
  image: string;
};

const collections: Collections[] = [
  {
    id: "og-collection",
    title: "OG Collection",
    flavors: [
      { name: "Peanut Butter Cups", emoji: "🥜", description: "Rich peanut butter encased in creamy chocolate." },
      { name: "Sea Salt Caramel", emoji: "🌊", description: "Sweet caramel with a hint of sea salt." },
      { name: "Chocolate Lovers", emoji: "🍫", description: "A dream for chocolate aficionados." },
      { name: "Cookies & Cream", emoji: "🍪", description: "Crunchy cookie bits in velvety white chocolate." },
    ],
    image: "/ogpic.jpg",
  },
  {
    id: "seasonal-collection",
    title: "Seasonal Collection (December)",
    flavors: [
      { name: "Biscoff", emoji: "☕", description: "Speculoos cookie flavor with a creamy finish." },
      { name: "Black Forest", emoji: "🍒", description: "Dark chocolate with cherry undertones." },
      { name: "French Toast", emoji: "🍞", description: "Warm cinnamon with maple sweetness." },
      { name: "Peppermint in Milk Chocolate", emoji: "🍬", description: "Cool peppermint wrapped in milk chocolate." },
      { name: "Cinnamon Chai", emoji: "☕", description: "Spiced chai flavors with a cinnamon kick." },
    ],
    image: "/seasonalpic.jpg",
  },
];

export default function CollectionsPage() {
  // Build JSON-LD (prefer absolute URLs in prod with NEXT_PUBLIC_SITE_URL)
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "";
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "A Plus Truffles Collections",
    itemListElement: collections.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${base}/collections#${c.id}`,
      name: c.title,
      image: `${base}${c.image}`,
    })),
  };

  return (
    <>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main id="main-content" className="bg-black text-white font-custom" role="main">
        <Header />

        {/* Hero Section */}
        <section
          className="relative isolate overflow-hidden p-10 md:p-24 text-center bg-black"
          aria-labelledby="collections-hero-heading"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-radial from-[#febf79] via-[#f8b870] to-[#ca8f70] opacity-80"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:40px_40px]"
          />

          <div className="relative z-10 flex flex-col items-center justify-center space-y-6 max-w-4xl mx-auto">
            <h1
              id="collections-hero-heading"
              className="text-4xl md:text-5xl font-extrabold text-white tracking-tight drop-shadow-lg"
            >
              Explore Our Collections
            </h1>
            <p className="text-lg md:text-2xl text-white/90 max-w-2xl">
              Indulge in the exquisite flavors of our handcrafted vegan chocolates.
            </p>
            <hr className="border-[#FFD700] border-t-2 w-20 mx-auto mt-4" />
          </div>
        </section>

        {/* Collection Sections */}
        {collections.map((collection, idx) => (
          <section
            id={collection.id}
            key={collection.id}
            className="p-10 md:p-20 bg-black"
            aria-labelledby={`${collection.id}-heading`}
          >
            <div
              className={`max-w-7xl mx-auto flex flex-col-reverse ${
                idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center gap-12`}
            >
              {/* Text */}
              <div className="md:w-1/2">
                <h2
                  id={`${collection.id}-heading`}
                  className="text-3xl font-bold text-white underline decoration-[#ca8f70] mb-6"
                >
                  {collection.title}
                </h2>
                <div className="relative p-6 bg-gradient-to-br from-[#febf79] via-[#febf79] to-[#ca8f70] rounded-xl border-2 border-[#FFD700] shadow-2xl">
                  <ul className="space-y-4">
                    {collection.flavors.map((flavor) => (
                      <li key={flavor.name} className="flex items-start">
                        <span className="mr-3 text-2xl" aria-hidden="true">
                          {flavor.emoji}
                        </span>
                        <div>
                          <h3 className="text-lg font-semibold text-black">{flavor.name}</h3>
                          <p className="text-sm text-white">{flavor.description}</p>
                        </div>
                      </li>
                    ))}
                  </ul>

                  {/* Decorative highlights */}
                  <div
                    className="absolute top-0 right-0 w-16 h-16 bg-[#FFD700] rounded-full opacity-30 blur-2xl -translate-x-4 -translate-y-4"
                    aria-hidden="true"
                  />
                  <div
                    className="absolute bottom-0 left-0 w-20 h-20 bg-[#FFD700] rounded-full opacity-30 blur-2xl translate-x-4 translate-y-4"
                    aria-hidden="true"
                  />
                </div>
              </div>

              {/* Image */}
              <div className="md:w-1/2 flex justify-center">
                <div className="w-full max-w-md h-auto aspect-[4/3] overflow-hidden rounded-lg shadow-lg transform transition-transform hover:scale-105 focus-within:scale-105">
                  <Image
                    src={collection.image}
                    alt={`${collection.title} collection display`}
                    width={500}
                    height={375}
                    className="object-cover w-full h-full rounded-lg"
                    priority={idx === 0} // first image eager, rest lazy
                    loading={idx === 0 ? "eager" : "lazy"}
                    sizes="(min-width: 1024px) 500px, (min-width: 768px) 60vw, 90vw"
                  />
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* Call to Action */}
        <section
          className="p-10 md:p-20 bg-gradient-to-br from-[#ca8f70] via-[#ca8f70] to-[#febf79] text-center"
          aria-labelledby="collections-cta-heading"
        >
          <h2 id="collections-cta-heading" className="text-3xl font-bold text-white md:text-4xl">
            Discover Your Favorites
          </h2>
          <p className="mt-4 text-base text-gray-200 md:text-lg">
            Ready to treat yourself or place a custom order? Reach out—or browse the shop to find the best chocolate for any occasion.
          </p>

          <div className="mt-6 flex items-center justify-center gap-4 flex-wrap">
            <Link
              href="/contact"
              aria-label="Contact us to place an order or learn more about A Plus Truffles"
              className="inline-flex items-center justify-center rounded-lg border border-[#FFD700] bg-white px-6 py-3 font-semibold text-black shadow-md transition duration-300 hover:bg-[#ca8f70] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-black/80"
            >
              Contact Us to Order
            </Link>

            <Link
              href="/shop"
              aria-label="Browse the shop to explore our truffle collections"
              className="inline-flex items-center justify-center rounded-lg border border-white/70 bg-black/20 px-6 py-3 font-semibold text-white shadow-md transition duration-300 hover:bg-black/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-black/80"
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




















