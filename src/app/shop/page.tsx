// src/app/shop/page.tsx
import Header from "../components/Header";
import Footer from "../components/Footer";
import BuyNowButton from "../components/BuyNowButton";
import { shopifyFetch, PRODUCTS_WITH_VARIANTS } from "../lib/shopify";

export const dynamic = "force-dynamic";

type ProductNode = {
  id: string;
  title: string;
  description?: string | null;
  featuredImage?: { url: string; altText?: string | null } | null;
  images?: { edges: { node: { url: string; altText?: string | null } }[] };
  variants: {
    edges: {
      node: {
        id: string; // variant GID
        title: string;
        availableForSale: boolean;
        price: { amount: string; currencyCode: string };
      };
    }[];
  };
};

export default async function Page() {
  let edges: { node: ProductNode }[] = [];
  try {
    const resp = await shopifyFetch<any>(PRODUCTS_WITH_VARIANTS, { variables: { first: 20 } });
    edges = resp?.data?.products?.edges ?? [];
  } catch (e) {
    console.error("[shop page] products fetch failed:", e);
  }

  return (
    <>
      <Header />

      <main className="bg-black text-white font-custom">
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

                return (
                  <li key={node.id} className="rounded-2xl border border-white/10 bg-white/5 p-4 space-y-3">
                    {img?.url && (
                      <div className="relative w-full aspect-square overflow-hidden rounded-xl border border-white/10">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={img.url}
                          alt={img.altText ?? node.title}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    )}

                    <div className="space-y-1">
                      <h2 className="text-lg font-semibold">{node.title}</h2>
                      {firstVariant?.price?.amount && (
                        <p className="text-sm opacity-90">
                          ${Number(firstVariant.price.amount).toFixed(2)} {firstVariant.price.currencyCode}
                        </p>
                      )}
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



