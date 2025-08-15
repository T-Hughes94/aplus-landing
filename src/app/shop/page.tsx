import Header from "../components/Header";
import Footer from "../components/Footer";
import BuyNowButton from "../components/BuyNowButton";
import { shopifyFetch, PRODUCTS_WITH_VARIANTS } from "../lib/shopify";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
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
    images: [{ url: "/truffle2.webp", width: 1200, height: 630, alt: "Hand-painted vegan truffles" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shop | A Plus Truffles",
    description:
      "Hand-painted vegan truffles made with fair-trade ingredients—crafted for people who love the best chocolate.",
  },
  icons: { icon: "/favicon.ico" },
  // alternates: { canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/shop` }
};

type ProductNode = {
  id: string; // product GID
  title: string;
  description?: string | null;
  featuredImage?: { url: string; altText?: string | null } | null;
  images?: { edges: { node: { url: string; altText?: string | null } }[] };
  variants: {
    edges: {
      node: {
        id: string; // variant GID (merchandiseId)
        title: string;
        availableForSale: boolean;
        price: { amount: string; currencyCode: string };
      };
    }[];
  };
};

export default async function ShopPage() {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "";

  let edges: { node: ProductNode }[] = [];
  try {
    const resp = await shopifyFetch<any>(PRODUCTS_WITH_VARIANTS, { variables: { first: 20 } });
    edges = resp?.data?.products?.edges ?? [];
  } catch (e) {
    console.error("[shop page] products fetch failed:", e);
  }

  // Build JSON-LD ItemList of Products using first variant & primary image
  const itemListLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "A Plus Truffles — Shop",
    itemListElement: edges.map(({ node }, idx) => {
      const img =
        node.featuredImage ??
        node.images?.edges?.[0]?.node ??
        null;
      const firstVariant = node.variants?.edges?.[0]?.node;
      const price = firstVariant?.price?.amount
        ? Number(firstVariant.price.amount)
        : undefined;

      const product: any = {
        "@type": "Product",
        name: node.title,
        image: img?.url ? [img.url] : undefined,
        description: node.description ?? undefined,
        offers: price
          ? {
              "@type": "Offer",
              price: price,
              priceCurrency: firstVariant?.price?.currencyCode ?? "USD",
              availability: firstVariant?.availableForSale ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
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
                const img =
                  node.featuredImage ??
                  node.images?.edges?.[0]?.node ??
                  null;

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
                        {/* Using <img> so you don't have to whitelist Shopify image domains yet */}
                        <img
                          src={img.url}
                          alt={img.altText ?? node.title}
                          className="h-full w-full object-cover"
                          loading="lazy"
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




