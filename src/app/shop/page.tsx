// src/app/shop/page.tsx
import Image from "next/image";
import { shopifyFetch, PRODUCTS_WITH_VARIANTS } from "../lib/shopify";
import BuyNowButton from "../components/BuyNowButton";

export const dynamic = "force-dynamic"; // ensure fresh product data in dev

type ProductItem = {
  id: string;
  title: string;
  description?: string | null;
  image?: string | null;
  variants: {
    id: string;
    title: string;
    availableForSale: boolean;
    price?: { amount: string; currencyCode: string } | null;
  }[];
};

export default async function ShopPage() {
  const resp = await shopifyFetch<any>(PRODUCTS_WITH_VARIANTS);
  // Support either {data:{products}} or {products}
  const products = resp?.data?.products ?? resp?.products;

  const items: ProductItem[] =
    products?.edges?.map(({ node }: any) => ({
      id: node.id,
      title: node.title,
      description: node.description,
      image:
        node.featuredImage?.url ??
        node.images?.edges?.[0]?.node?.url ??
        null,
      variants:
        node.variants?.edges?.map((v: any) => ({
          id: v.node.id,
          title: v.node.title,
          availableForSale: v.node.availableForSale,
          price: v.node.price ?? null,
        })) ?? [],
    })) ?? [];

  return (
    <main className="bg-black text-white font-custom px-6 py-10">
      <h1 className="text-5xl font-extrabold underline decoration-[#febf79] mb-8">
        Shop
      </h1>

      <section className="grid gap-8 md:grid-cols-2">
        {items.map((item) => {
          const firstVariant = item.variants[0];
          const soldOut = !firstVariant?.availableForSale;

          return (
            <article
              key={item.id}
              className="rounded-2xl border border-[#FFD700]/40 bg-[#0b0b0b] shadow-lg p-4"
            >
              <div className="relative w-full aspect-[4/3] bg-black/40 rounded-xl overflow-hidden mb-4">
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                ) : (
                  <div className="w-full h-full grid place-items-center">
                    No image
                  </div>
                )}
              </div>

              <h2 className="text-2xl font-bold mb-2">{item.title}</h2>

              {firstVariant?.price?.amount ? (
                <p className="text-lg mb-3">
                  ${Number(firstVariant.price.amount).toFixed(2)}
                </p>
              ) : null}

              {item.description ? (
                <p className="text-white/80 mb-4 line-clamp-3">{item.description}</p>
              ) : null}

              <BuyNowButton
                variantId={firstVariant?.id ?? ""}
                quantity={1}
                disabled={!firstVariant || soldOut}
                className={`px-4 py-2 rounded-lg font-semibold border border-[#FFD700] ${
                  !firstVariant || soldOut
                    ? "bg-zinc-700 text-white/70 cursor-not-allowed"
                    : "bg-[#febf79] text-black hover:bg-[#ca8f70] hover:text-white transition"
                }`}
              >
                {!firstVariant || soldOut ? "Out of stock" : "Buy now"}
              </BuyNowButton>
            </article>
          );
        })}
      </section>
    </main>
  );
}


