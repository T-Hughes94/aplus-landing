"use client";

import { useState } from "react";

type BuyNowButtonProps = {
  variantId: string;
  quantity?: number;
};

export default function BuyNowButton({ variantId, quantity = 1 }: BuyNowButtonProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleClick = async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // No need for x-api-key here, same-origin browser request
        },
        body: JSON.stringify({ variantId, quantity }),
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(`Checkout failed: ${text}`);
      }

      const data = await res.json();
      if (data?.ok && data?.url) {
        window.location.href = data.url; // jump to Shopify checkout
      } else {
        throw new Error("Checkout response missing URL");
      }
    } catch (err: any) {
      console.error("[BuyNowButton] error:", err);
      setError(err.message || "Unexpected error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button
        onClick={handleClick}
        disabled={loading}
        className="px-6 py-3 bg-pink-600 text-white font-semibold rounded-lg shadow-md hover:bg-pink-700 disabled:opacity-50"
      >
        {loading ? "Processing..." : "Buy Now"}
      </button>
      {error && (
        <p className="mt-2 text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}











