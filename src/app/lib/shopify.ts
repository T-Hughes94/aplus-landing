// src/app/lib/shopify.ts
type FetchOptions = {
  variables?: Record<string, unknown>;
  cache?: RequestCache;
};

const SHOPIFY_DOMAIN = process.env.NEXT_PUBLIC_SHOPIFY_DOMAIN!;
const STOREFRONT_TOKEN = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN!;

if (!SHOPIFY_DOMAIN || !STOREFRONT_TOKEN) {
  // eslint-disable-next-line no-console
  console.warn(
    "[shopify] Missing env: NEXT_PUBLIC_SHOPIFY_DOMAIN or NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN"
  );
}

const SFN_ENDPOINT = `https://${SHOPIFY_DOMAIN}/api/2024-07/graphql.json`;

export async function shopifyFetch<T = any>(query: string, opts: FetchOptions = {}) {
  const res = await fetch(SFN_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": STOREFRONT_TOKEN,
    },
    body: JSON.stringify({
      query,
      variables: opts.variables ?? {},
    }),
    // choose one – we’ll use no-store during dev to avoid stale responses
    cache: "no-store",
  });

  const json = (await res.json()) as T;
  return json;
}

/** Product cards + first 10 variants w/ availability + one image */
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

export const CHECKOUT_CREATE = `
  mutation CheckoutCreate($input: CheckoutCreateInput!) {
    checkoutCreate(input: $input) {
      checkout { id webUrl }
      userErrors { field message }
    }
  }
`;




