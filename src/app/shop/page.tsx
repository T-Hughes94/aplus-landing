// src/app/shop/page.tsx
import Header from "../components/Header";
import Footer from "../components/Footer";
import BuyNowButton from "../components/BuyNowButton";
import { shopifyFetch, PRODUCTS_WITH_VARIANTS } from "../lib/shopify";
import { isShopOpen, formatOpenDate } from "../lib/shopStatus";
import type { Metadata } from "next";
import Image from "next/image";

export const dynamic = "force-dynamic";

/* ---------- Metadata (switches to noindex while closed) ---------- */
export async function generateMetadata(): Promise<Metadata> {
  if (!isShopOpen()) {
    return {
      title: "Shop (Coming Soon) | A Plus Truffles",
      description:
        "Our shop will reopen soon. In the meantime, contact us for custom orders or event inquiries.",
      robots: { index: false, follow: true },
      openGraph: {
        title: "Shop (Coming Soon) | A Plus Truffles",
        url: "/shop",
        type: "website",
      },
      twitter: {
        card: "summary",
        title: "Shop (Coming Soon) | A Plus Truffles",
      },
      icons: { icon: "/favicon.ico" },
    };
  }

  return {
    title: "Shop | A Plus Truffles",
    description:
      "Browse hand-painted vegan truffles crafted with fair-trade ingredients. Small-batch quality for people searching for the best chocolate.",
    keywords: [
      "A Plus Truffles",
      "The Best Chocolate",
      "vegan truffles",
      "artisan chocolate",
      "hand-painted chocolates",
      "gourmet candy",
      "chocolate gift boxes",
    ],
    openGraph: {
      title: "Shop | A Plus Truffles",
      description: "Explore our latest truffle boxes and flavors.",
      url: "/shop",
      images: [
        { url: "/truffle2.webp", width: 1200, height: 630, alt: "Hand-painted vegan truffles" },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Shop | A Plus Truffles",
      description:
        "Hand-painted vegan truffles made with fair-trade ingredients—crafted for people who love the best chocolate.",
    },
    icons: { icon: "/favicon.ico" },
  };
}

/* ---------- Types for the Shopify query ---------- */
type ProductNode = {
  id: string; // product GID
  title: string;
  description?: string | null;
  featuredImage?: { url: string; altText?: string | null } | null;
  images?: { edges: Array<{ node: { url: string; altText?: string | null } }> } | null;
  variants: {
    edges: Array<{
      node: {
        id: string; // variant GID
        title: string;
        availableForSale: boolean;
        price: { amount: string; currencyCode: string };
      };
    }>;
  };
};

type ProductsQuery = {
  products: {
    edges: Array<{ node: ProductNode }>;
  };
};

export default async function ShopPage() {
  /* ---------- If closed: render a simple “coming soon” page ---------- */
  if (!isShopOpen()) {
    const when = formatOpenDate();
    return (
      <>
        <Header />

        <main id="main-content" className="flex-1 bg-black text-white font-custom" role="main">
          <section className="mx-auto max-w-3xl p-10 text-center space-y-6">
            <h1 className="text-4xl font-extrabold">Shop Coming Soon</h1>
            <p className="opacity-90">
              We’re putting the finishing touches on our next batch.
              {when ? <> We’ll reopen on <strong>{when}</strong>.</> : null}{" "}
              In the meantime, feel free to{" "}
              <a className="underline" href="/contact">contact us</a> for custom orders or event inquiries.
            </p>
            <div className="flex justify-center">
              <a
                href="/contact"
                className="rounded-lg px-5 py-3 bg-[#ca8f70] text-black font-semibold hover:bg-[#a56a50] transition"
              >
                Contact Us
              </a>
            </div>
          </section>
        </main>

        <Footer />
      </>
    );
  }

  /* ---------- OPEN STATE (your existing shop rendering) ---------- */
  let edges: Array<{ node: ProductNode }> = [];
  try {
    const resp = await shopifyFetch<ProductsQuery>(PRODUCTS_WITH_VARIANTS, { variables: { first: 20 } });
    edges = resp.data?.products?.edges ?? [];
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error("[shop page] products fetch failed:", e);
  }

  // Build JSON-LD ItemList of Products using first variant & primary image
  const itemListLd: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "A Plus Truffles — Shop",
    itemListElement: edges.map(({ node }, idx) => {
      const img = node.featuredImage ?? node.images?.edges?.[0]?.node ?? null;
      const firstVariant = node.variants?.edges?.[0]?.node;
      const priceAmount = firstVariant?.price?.amount ? Number(firstVariant.price.amount) : undefined;

      const product: Record<string, unknown> = {
        "@type": "Product",
        name: node.title,
        image: img?.url ? [img.url] : undefined,
        description: node.description ?? undefined,
        offers:
          priceAmount !== undefined
            ? {
                "@type": "Offer",
                price: priceAmount,
                priceCurrency: firstVariant?.price?.currencyCode ?? "USD",
                availability: firstVariant?.availableForSale
                  ? "https://schema.org/InStock"
                  : "https://schema.org/OutOfStock",
              }
            : undefined,
      };

      return { "@type": "ListItem", position: idx + 1, item: product };
    }),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListLd) }} />

      <Header />

      <main id="main-content" className="bg-black text-white font-custom" role="main">
        <section className="mx-auto max-w-5xl p-6 md:p-10 space-y-8">
          <h1 className="text-4xl font-extrabold tracking-tight">Shop</h1>

          {edges.length === 0 ? (
            <p className="opacity-80">No products found.</p>
          ) : (
            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {edges.map(({ node }) => {
                const img = node.featuredImage ?? node.images?.edges?.[0]?.node ?? null;
                const firstVariant = node.variants?.edges?.[0]?.node;
                const canBuy = Boolean(firstVariant?.id) && (firstVariant?.availableForSale ?? true);
                const price =
                  firstVariant?.price?.amount && firstVariant?.price?.currencyCode
                    ? new Intl.NumberFormat(undefined, {
                        style: "currency",
                        currency: firstVariant.price.currencyCode,
                      }).format(Number(firstVariant.price.amount))
                    : null;

                return (
                  <li key={node.id} className="rounded-2xl border border-white/10 bg-white/5 p-4 space-y-3">
                    {img?.url && (
                      <div className="relative w-full aspect-square overflow-hidden rounded-xl border border-white/10">
                        <Image
                          src={img.url}
                          alt={img.altText ?? node.title}
                          fill
                          sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                          className="object-cover"
                          priority={false}
                        />
                      </div>
                    )}

                    <div className="space-y-1">
                      <h2 className="text-lg font-semibold">{node.title}</h2>
                      {price && <p className="text-sm opacity-90">{price}</p>}
                    </div>

                    <div className="pt-2">
                      <BuyNowButton
                        variantId={firstVariant?.id ?? ""}
                        quantity={1}
                        disabled={!canBuy}
                        className="rounded-lg px-4 py-2 bg-[#ca8f70] text-black font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {canBuy ? "Buy now" : "Unavailable"}
                      </BuyNowButton>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </section>
      </main>

      <Footer />
    </>
  );
}






