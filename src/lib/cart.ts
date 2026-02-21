// /Users/oystein/nettsider/smootday-v2-feb-26/src/lib/cart.ts

export type CartItem = {
  productId: string;
  variantId: string;
  name: string;
  variantLabel: string;
  priceNok: number;
  qty: number;
};

const KEY = "smoodday_cart_v1";

export function getCart(): CartItem[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as CartItem[]) : [];
  } catch {
    return [];
  }
}

export function setCart(items: CartItem[]) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(KEY, JSON.stringify(items));
}

export function addToCart(next: CartItem) {
  const items = getCart();
  const i = items.findIndex(
    (x) => x.productId === next.productId && x.variantId === next.variantId
  );

  if (i >= 0) {
    items[i] = { ...items[i], qty: items[i].qty + next.qty };
  } else {
    items.push(next);
  }

  setCart(items);
  return items;
}

export function removeFromCart(productId: string, variantId: string) {
  const items = getCart().filter(
    (x) => !(x.productId === productId && x.variantId === variantId)
  );
  setCart(items);
  return items;
}

export function updateQty(productId: string, variantId: string, qty: number) {
  const items = getCart()
    .map((x) =>
      x.productId === productId && x.variantId === variantId ? { ...x, qty } : x
    )
    .filter((x) => x.qty > 0);
  setCart(items);
  return items;
}

export function cartTotal(items: CartItem[]) {
  return items.reduce((sum, x) => sum + x.priceNok * x.qty, 0);
}

// ✅ 0,- og 399,- osv (uten "kr")
export function formatNok(n: number) {
  if (n === 0) return "0,-";

  const formatted = new Intl.NumberFormat("nb-NO", {
    style: "currency",
    currency: "NOK",
    maximumFractionDigits: 0,
  }).format(n);

  // nb-NO kan gi "kr 399" (med non-breaking space)
  return formatted.replace(/kr\s?/i, "").trim() + ",-";
}