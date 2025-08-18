// src/app/components/BuyNowButton.tsx
"use client";
import * as React from "react";

type Props = {
  variantId: string;
  quantity?: number;
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
};

type CheckoutResponse =
  | { ok: true; url: string }
  | { ok: false; error?: string };

export default function BuyNowButton({
  variantId,
  quantity = 1,
  disabled,
  className,
  children,
}: Props) {
  const [loading, setLoading] = React.useState(false);

  const onClick = async () => {
    if (!variantId || disabled || loading) return;

    setLoading(true);
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 10000);

    try {
      // IMPORTANT: relative URL keeps this same-origin (no CORS, no DNS issues)
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ variantId, quantity }),
        signal: controller.signal,
      });

      // If the API ever returns non-JSON (e.g., a 404 HTML), avoid JSON parse blowups
      const text = await res.text();
      let data: CheckoutResponse;
      try {
        data = JSON.parse(text);
      } catch {
        data = { ok: false, error: `Unexpected response (${res.status})` };
      }

      if (!res.ok || !("ok" in data) || !data.ok || !("url" in data)) {
        const msg =
          (data as any)?.error ||
          (res.status === 401
            ? "Unauthorized (middleware blocked request)"
            : `Checkout failed (${res.status})`);
        alert(msg);
        return;
      }

      // Success -> jump to Shopify
      window.location.href = data.url;
    } catch (err) {
      console.error("[BuyNowButton] error:", err);
      alert("Network error. Please try again.");
    } finally {
      clearTimeout(timer);
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








