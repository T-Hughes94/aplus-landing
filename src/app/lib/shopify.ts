// src/lib/shopify.ts
type FetchOptions = { variables?: Record<string, unknown>; cache?: RequestCache };

const SHOPIFY_DOMAIN = process.env.NEXT_PUBLIC_SHOPIFY_DOMAIN!;
const STOREFRONT_TOKEN = process.env.SHOPIFY_STOREFRONT_API_TOKEN!;

if (!SHOPIFY_DOMAIN || !STOREFRONT_TOKEN) {
  console.warn("[shopify] Missing env: NEXT_PUBLIC_SHOPIFY_DOMAIN or SHOPIFY_STOREFRONT_API_TOKEN");
}

const SFN_ENDPOINT = `https://${SHOPIFY_DOMAIN}/api/2024-07/graphql.json`;

export async function shopifyFetch<T = any>(query: string, opts: FetchOptions = {}) {
  const res = await fetch(SFN_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": STOREFRONT_TOKEN,
    },
    body: JSON.stringify({ query, variables: opts.variables ?? {} }),
    cache: "no-store",
  });
  const json = (await res.json()) as T;
  return json;
}

// ← the export your /shop/page.tsx expects
export const PRODUCTS_WITH_VARIANTS = `
  query ProductsWithVariants($first: Int = 20) {
    products(first: $first) {
      edges {
        node {
          id
          title
          description
          featuredImage { url altText }
          images(first: 1) { edges { node { url altText } } }
          variants(first: 10) {
            edges {
              node {
                id
                title
                availableForSale
                price { amount currencyCode }
              }
            }
          }
        }
      }
    }
  }
`;

// Cart API (what your /api/checkout route uses)
export const CART_CREATE = `
  mutation CartCreate($input: CartInput) {
    cartCreate(input: $input) {
      cart { id checkoutUrl }
      userErrors { field message }
    }
  }
`;







