/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import * as React from "react";

type BuyNowButtonProps = {
  variantId: string;
  quantity?: number;
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
};

type CheckoutResponse = {
  ok: boolean;
  url?: string | null;
  error?: string;
};

export default function BuyNowButton({
  variantId,
  quantity = 1,
  disabled,
  className,
  children,
}: BuyNowButtonProps) {
  const [loading, setLoading] = React.useState(false);

  const onClick = async () => {
    if (disabled || loading) return;
    setLoading(true);
    try {
      // Same-origin call avoids CORS/env mismatch issues
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ variantId, quantity }),
      });

      const data: CheckoutResponse = (await res.json()) as any;

      if (!res.ok || !data.ok) {
        alert(data?.error ?? "Storefront API error");
        return;
      }
      if (data?.url) {
        window.location.href = data.url;
      } else {
        alert("No checkout URL returned");
      }
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error("[BuyNowButton] error:", err);
      alert("Unexpected error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled || loading}
      aria-disabled={disabled || loading}
      aria-busy={loading}
      className={className}
    >
      {loading ? "Processing..." : children ?? "Buy now"}
    </button>
  );
}

















