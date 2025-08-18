// src/app/components/BuyNowButton.tsx
"use client";

import * as React from "react";

/* ---------- Types ---------- */
type BuyNowButtonProps = {
  variantId: string;
  quantity?: number;
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
};

type CheckoutOK = { ok: true; url: string };
type CheckoutErr = { ok: false; error?: string };
type CheckoutResponse = CheckoutOK | CheckoutErr;

function isCheckoutResponse(v: unknown): v is CheckoutResponse {
  if (typeof v !== "object" || v === null) return false;
  const o = v as Record<string, unknown>;
  if (typeof o.ok !== "boolean") return false;

  if (o.ok === true) {
    return typeof o.url === "string";
  }
  // ok === false
  return o.error === undefined || typeof o.error === "string";
}

/* ---------- Component ---------- */
export default function BuyNowButton({
  variantId,
  quantity = 1,
  disabled,
  className,
  children,
}: BuyNowButtonProps) {
  const [loading, setLoading] = React.useState(false);

  const onClick = async () => {
    if (!variantId || disabled || loading) return;

    setLoading(true);

    // simple client-side timeout to avoid hanging UX
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 10000);

    try {
      // Use relative path to avoid CORS and domain mismatches
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ variantId, quantity }),
        signal: controller.signal,
      });

      const text = await res.text();

      let parsedUnknown: unknown;
      try {
        parsedUnknown = JSON.parse(text);
      } catch {
        parsedUnknown = { ok: false, error: `Unexpected response (${res.status})` };
      }

      // 1) Handle HTTP status first (middleware / network issues)
      if (!res.ok) {
        const msg =
          res.status === 401
            ? "Unauthorized (request blocked in middleware)"
            : `Checkout failed (${res.status})`;
        alert(msg);
        return;
      }

      // 2) Validate JSON shape
      if (!isCheckoutResponse(parsedUnknown)) {
        alert("Malformed response from /api/checkout");
        return;
      }

      // 3) Now safely narrow on ok/err
      const parsed = parsedUnknown;
      if (parsed.ok) {
        window.location.href = parsed.url;
      } else {
        alert(parsed.error ?? "Storefront API error");
      }
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Network error";
      console.error("[BuyNowButton] error:", err);
      alert(msg);
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










