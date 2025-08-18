"use client";

import { useState } from "react";

type CheckoutOK = {
  ok: true;
  url: string;
};

type CheckoutErr = {
  ok: false;
  error: string;
};

type CheckoutResponse = CheckoutOK | CheckoutErr;

// runtime type guard
function isCheckoutResponse(x: any): x is CheckoutResponse {
  return x && typeof x.ok === "boolean";
}

interface BuyNowButtonProps {
  variantId: string;
  quantity?: number;
}

export default function BuyNowButton({ variantId, quantity = 1 }: BuyNowButtonProps) {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    if (loading) return;
    setLoading(true);

    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": process.env.NEXT_PUBLIC_INTERNAL_API_KEY ?? "",
        },
        body: JSON.stringify({ variantId, quantity }),
      });

      const text = await res.text();
      let parsed: unknown;
      try {
        parsed = JSON.parse(text);
      } catch {
        parsed = { ok: false, error: "Unexpected response from server." };
      }

      if (!isCheckoutResponse(parsed) || !res.ok) {
        const msg =
          (isCheckoutResponse(parsed) && parsed.ok === false && parsed.error) ||
          (res.status === 401
            ? "Unauthorized (middleware blocked request)"
            : `Checkout failed (${res.status})`);
        alert(msg);
        return;
      }

      if (!parsed.ok) {
        // parsed is CheckoutErr
        alert(parsed.error);
        return;
      }

      // parsed is CheckoutOK → safe to access url
      window.location.href = parsed.url;
    } catch (err) {
      console.error("[BuyNowButton] error:", err);
      alert("Unexpected error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={loading}
      className="px-4 py-2 rounded bg-amber-600 text-white hover:bg-amber-700 disabled:opacity-50"
    >
      {loading ? "Processing..." : "Buy now"}
    </button>
  );
}














