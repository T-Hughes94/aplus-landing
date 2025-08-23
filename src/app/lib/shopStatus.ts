export function getShopOpenDate(): Date | null {
    const s =
      process.env.SHOP_OPEN_AFTER ??
      process.env.NEXT_PUBLIC_SHOP_OPEN_DATE ?? ""; // fallback if you prefer public
    if (!s) return null;
    const d = new Date(s);
    return Number.isNaN(d.getTime()) ? null : d;
  }
  
  export function isShopOpen(now = new Date()): boolean {
    const d = getShopOpenDate();
    if (!d) return true; // no env => open
    return now.getTime() >= d.getTime();
  }
  
  export function formatOpenDate(): string | null {
    const d = getShopOpenDate();
    if (!d) return null;
    return d.toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" });
  }
  