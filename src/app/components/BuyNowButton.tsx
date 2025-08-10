// src/app/components/BuyNowButton.tsx
"use client";

import * as React from "react";

type BuyNowButtonProps = {
  variantId: string;
  quantity?: number;
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
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
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ variantId, quantity }),
      });

      const data = await res.json();
      console.log("[BuyNowButton] /api/checkout result:", data);

      if (!res.ok) {
        alert(data?.error || "Storefront API error");
        return;
      }
      if (data?.url) {
        window.location.href = data.url;
      } else {
        alert("No checkout URL returned");
      }
    } catch (err: any) {
      console.error("[BuyNowButton] error:", err);
      alert(err?.message ?? "Unknown error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      className={className}
      aria-disabled={disabled || loading}
    >
      {loading ? "Processing..." : children ?? "Buy now"}
    </button>
  );
}




