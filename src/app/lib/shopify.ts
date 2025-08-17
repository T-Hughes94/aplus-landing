// src/lib/shopify.ts

type FetchOptions<TVars extends Record<string, unknown> = Record<string, unknown>> = {
  variables?: TVars;
  cache?: RequestCache;
};

const SHOPIFY_DOMAIN = process.env.NEXT_PUBLIC_SHOPIFY_DOMAIN!;
const STOREFRONT_TOKEN = process.env.SHOPIFY_STOREFRONT_API_TOKEN!;

if (!SHOPIFY_DOMAIN || !STOREFRONT_TOKEN) {
  // eslint-disable-next-line no-console
  console.warn(
    "[shopify] Missing env: NEXT_PUBLIC_SHOPIFY_DOMAIN or SHOPIFY_STOREFRONT_API_TOKEN"
  );
}

const SFN_ENDPOINT = `https://${SHOPIFY_DOMAIN}/api/2024-07/graphql.json`;

/** Generic GraphQL envelope Shopify returns */
export type GraphQLResponse<TData> = {
  data?: TData;
  errors?: Array<{
    message: string;
    extensions?: Record<string, unknown>;
  }>;
};

/**
 * Strongly-typed Shopify Storefront GraphQL fetcher.
 * - TData is the `data` shape returned by your query.
 * - TVars is the variables object shape you pass.
 */
export async function shopifyFetch<
  TData,
  TVars extends Record<string, unknown> = Record<string, unknown>
>(
  query: string,
  opts: FetchOptions<TVars> = {}
): Promise<GraphQLResponse<TData>> {
  const res = await fetch(SFN_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": STOREFRONT_TOKEN,
    },
    body: JSON.stringify({ query, variables: opts.variables ?? {} }),
    // default to no-store for freshness; allow override
    cache: opts.cache ?? "no-store",
  });

  if (!res.ok) {
    throw new Error(`Shopify fetch failed: ${res.status} ${res.statusText}`);
  }

  const json = (await res.json()) as GraphQLResponse<TData>;
  return json;
}

// ← what your /shop/page.tsx expects
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








