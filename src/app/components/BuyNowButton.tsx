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

type CheckoutResponse = { ok: boolean; url?: string | null; error?: string };

const SHOPIFY_HOST = (
  process.env.NEXT_PUBLIC_SHOPIFY_DOMAIN || "a-plus-truffles.myshopify.com"
).replace(/^https?:\/\//, "");

function toShopifyAbsoluteUrl(input?: string | null): string {
  const fallback = `https://${SHOPIFY_HOST}/cart`;
  if (!input) return fallback;
  try {
    const u = new URL(input, window.location.origin);
    const isShopify =
      /(^|\.)myshopify\.com$/i.test(u.hostname) || /(^|\.)shopify\.com$/i.test(u.hostname);
    if (isShopify) {
      u.protocol = "https:";
      return u.toString();
    }
    // Same-origin or apex → force Shopify host
    if (u.hostname === window.location.hostname || u.hostname === "aplustruffles.com") {
      u.hostname = SHOPIFY_HOST;
      u.protocol = "https:";
      return u.toString();
    }
    u.protocol = "https:";
    return u.toString();
  } catch {
    return fallback;
  }
}

export default function BuyNowButton({
  variantId,
  quantity = 1,
  disabled,
  className,
  children,
}: BuyNowButtonProps) {
  const [loading, setLoading] = React.useState(false);

  // kill any parent <a>/<Link>/<form> navigation
  const kill = (e: React.SyntheticEvent) => {
    e.preventDefault();
    e.stopPropagation();
    // @ts-ignore
    if (e.nativeEvent?.stopImmediatePropagation) e.nativeEvent.stopImmediatePropagation();
  };

  const onClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    kill(e);
    if (disabled || loading) return;

    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ variantId, quantity }),
      });
      const data: CheckoutResponse = await res.json();

      if (!res.ok || !data.ok) {
        alert(data?.error ?? "Storefront API error");
        return;
      }

      const dest = toShopifyAbsoluteUrl(data.url);
      console.log("API url:", data.url, "→ redirecting to:", dest); // remove after verifying
      window.location.assign(dest);
    } catch (err) {
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
      onClickCapture={kill}
      onMouseDown={kill}
      onPointerDown={kill}
      disabled={disabled || loading}
      aria-disabled={disabled || loading}
      aria-busy={loading}
      className={className}
    >
      {loading ? "Processing..." : children ?? "Buy now"}
    </button>
  );
}



















