import { NextRequest, NextResponse } from "next/server";

interface GraphQLError {
  message: string;
  extensions?: {
    code?: string;
  };
}

interface CheckoutResponse {
  data?: {
    checkoutCreate?: {
      checkout?: {
        webUrl: string;
      };
      userErrors?: { message: string }[];
    };
  };
  errors?: GraphQLError[];
}

function hasGraphQLErrors<T extends { errors?: unknown }>(
  resp: T
): resp is T & { errors: GraphQLError[] } {
  return (
    typeof resp === "object" &&
    resp !== null &&
    Array.isArray((resp as { errors?: unknown }).errors)
  );
}

export async function POST(req: NextRequest) {
  try {
    const { variantId, quantity } = await req.json();

    if (!variantId || !quantity) {
      return NextResponse.json(
        { error: "Missing variantId or quantity" },
        { status: 400 }
      );
    }

    const checkoutMutation = `
      mutation checkoutCreate($input: CheckoutCreateInput!) {
        checkoutCreate(input: $input) {
          checkout {
            webUrl
          }
          userErrors {
            message
          }
        }
      }
    `;

    const variables = {
      input: {
        lineItems: [{ variantId, quantity }],
      },
    };

    const response = await fetch(
      `https://${process.env.SHOPIFY_STORE_DOMAIN}/api/2025-01/graphql.json`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Shopify-Storefront-Access-Token":
            process.env.SHOPIFY_STOREFRONT_API_TOKEN || "",
        },
        body: JSON.stringify({ query: checkoutMutation, variables }),
      }
    );

    const data: CheckoutResponse = await response.json();

    if (hasGraphQLErrors(data)) {
      return NextResponse.json(
        { error: data.errors.map((e) => e.message).join(", ") },
        { status: 500 }
      );
    }

    if (data.data?.checkoutCreate?.userErrors?.length) {
      return NextResponse.json(
        { error: data.data.checkoutCreate.userErrors[0].message },
        { status: 400 }
      );
    }

    const checkoutUrl = data.data?.checkoutCreate?.checkout?.webUrl;

    if (!checkoutUrl) {
      return NextResponse.json(
        { error: "No checkout URL returned" },
        { status: 500 }
      );
    }

    return NextResponse.json({ checkoutUrl });
  } catch (error) {
    console.error("Checkout API Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}











