import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

const IMAGES = Array.from({ length: 13 }, (_, i) => `/gallery${i > 0 ? i : ""}.webp`);

export default function GalleryPage() {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "";

  // Structured data: CollectionPage + ItemList of ImageObject
  const collectionLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Gallery | A Plus Truffles",
    url: `${base}/gallery`,
    description:
      "A showcase of hand-painted vegan truffles and our proudest creations.",
  };

  const itemListLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "A Plus Truffles Gallery Images",
    itemListElement: IMAGES.map((src, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      item: {
        "@type": "ImageObject",
        contentUrl: `${base}${src}`,
        url: `${base}${src}`,
        caption: `A Plus Truffles gallery image ${idx + 1}`,
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
          aria-labelledby="gallery-hero-heading"
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
            <h1
              id="gallery-hero-heading"
              className="text-4xl md:text-5xl font-extrabold text-white tracking-tight drop-shadow-lg"
            >
              Our Gallery
            </h1>
            <p className="text-lg md:text-2xl text-white/90 max-w-2xl">
              A showcase of our hand-painted, vegan truffles and our proudest creations.
            </p>
            <hr className="border-[#FFD700] border-t-2 w-20 mx-auto mt-4" />
          </div>
        </section>

        {/* Masonry-ish Gallery */}
        <section className="p-6 md:p-16 bg-black" aria-labelledby="gallery-section-heading">
          <h2 id="gallery-section-heading" className="sr-only">Gallery Images</h2>

          <div className="max-w-7xl mx-auto flex flex-wrap gap-4 justify-center">
            {IMAGES.map((src, index) => {
              const wide = index % 5 === 0;
              const tall = index % 3 === 0;
              return (
                <figure
                  key={src}
                  className="relative overflow-hidden rounded-lg shadow-lg transform transition-transform hover:scale-105 focus-within:scale-105"
                  style={{
                    width: wide ? "45%" : "30%",
                    aspectRatio: tall ? "3 / 4" : "4 / 3",
                  }}
                >
                  <Image
                    src={src}
                    alt={`A Plus Truffles gallery image ${index + 1}`}
                    fill
                    className="rounded-lg object-cover"
                    priority={index === 0}
                    loading={index === 0 ? "eager" : "lazy"}
                    sizes={wide ? "(min-width:1024px) 45vw, 90vw" : "(min-width:1024px) 30vw, 90vw"}
                  />
                  <figcaption className="sr-only">
                    Hand-painted vegan truffle design, image {index + 1}
                  </figcaption>
                </figure>
              );
            })}
          </div>
        </section>

        {/* CTA */}
        <section
          className="p-6 md:p-16 bg-gradient-to-br from-[#ca8f70] via-[#ca8f70] to-[#febf79] text-center"
          aria-labelledby="gallery-cta-heading"
        >
          <h2 id="gallery-cta-heading" className="text-3xl font-bold text-white md:text-4xl">
            Experience the Difference
          </h2>
          <p className="mt-4 text-base text-white md:text-lg">
            Want to see more? Explore the shop or contact us to place an order today.
          </p>

          <div className="mt-6 flex items-center justify-center gap-4 flex-wrap">
            <Link
              href="/shop"
              aria-label="Browse the shop to explore our latest truffles"
              className="px-6 py-3 inline-flex items-center justify-center bg-white text-black font-semibold border border-[#FFD700] rounded-lg shadow-md hover:bg-[#ca8f70] hover:text-white transition duration-300"
            >
              Visit the Shop
            </Link>
            <Link
              href="/contact"
              aria-label="Contact us to place an order"
              className="inline-flex items-center justify-center rounded-lg border border-[#FFD700] bg-white px-6 py-3 font-semibold text-black shadow-md transition duration-300 hover:bg-[#ca8f70] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-black/80"
            >
              Contact Us to Order
            </Link>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}







