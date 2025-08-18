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

type CheckoutResponse = {
  ok: boolean;
  url?: string | null;
  error?: string;
};

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://aplustruffles.com";

function isCheckoutResponse(value: unknown): value is CheckoutResponse {
  if (typeof value !== "object" || value === null) return false;
  const v = value as Record<string, unknown>;
  return typeof v.ok === "boolean" && ("url" in v || "error" in v || true);
}

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
      const res = await fetch(`${SITE_URL}/api/checkout`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ variantId, quantity }),
      });

      const raw: unknown = await res.json();

      if (!res.ok || !isCheckoutResponse(raw) || !raw.ok) {
        const msg =
          (isCheckoutResponse(raw) && raw.error) ||
          `Checkout failed (${res.status})`;
        alert(msg);
        return;
        }

      if (raw.url) {
        window.location.href = raw.url;
      } else {
        alert("No checkout URL returned");
      }
    } catch (err: unknown) {
      // keep err as unknown to satisfy strict typing
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












