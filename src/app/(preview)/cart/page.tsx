"use client";

// /Users/oystein/nettsider/smootday-v2-feb-26/src/app/cart/page.tsx

import { useEffect, useState } from "react";
import PublicHeader from "@/components/shell/PublicHeader";
import {
  CartItem,
  cartTotal,
  formatNok,
  getCart,
  removeFromCart,
  updateQty,
} from "@/lib/cart";

export default function CartPage() {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    setItems(getCart());
  }, []);

  const total = cartTotal(items);

  return (
    <div id="top" className="min-h-screen">
      <PublicHeader />

      <main className="mx-auto w-full max-w-4xl px-6 py-10">
        <h1
          className="text-2xl sm:text-3xl font-extrabold"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Handlekurv
        </h1>

        <div className="mt-6 grid gap-4">
          {items.length === 0 ? (
            <div
              className="rounded-3xl border p-6"
              style={{ background: "var(--surface)", borderColor: "var(--line)" }}
            >
              <p style={{ color: "var(--slate)" }}>Handlekurven er tom.</p>
            </div>
          ) : (
            items.map((x) => (
              <div
                key={`${x.productId}:${x.variantId}`}
                className="rounded-3xl border p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
                style={{ background: "var(--surface)", borderColor: "var(--line)" }}
              >
                <div>
                  <div className="text-sm font-semibold" style={{ color: "var(--slate)" }}>
                    {x.name}
                  </div>
                  <div className="text-lg font-extrabold" style={{ color: "var(--ink)" }}>
                    {x.variantLabel}
                  </div>
                  <div className="text-sm" style={{ color: "var(--slate)" }}>
                    {formatNok(x.priceNok)} per stk
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <input
                    type="number"
                    min={1}
                    value={x.qty}
                    onChange={(e) => {
                      const qty = Number(e.target.value || 1);
                      setItems(updateQty(x.productId, x.variantId, qty));
                    }}
                    className="h-11 w-24 rounded-2xl border px-3 text-sm"
                    style={{ background: "var(--surface)", borderColor: "var(--line)" }}
                  />

                  <button
                    onClick={() => setItems(removeFromCart(x.productId, x.variantId))}
                    className="h-11 rounded-full px-4 text-sm font-extrabold ring-1 transition"
                    style={{
                      background: "transparent",
                      color: "var(--ink)",
                      borderColor: "var(--line)",
                    }}
                  >
                    Fjern
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="mt-8 flex items-center justify-between">
          <div className="text-sm font-semibold" style={{ color: "var(--slate)" }}>
            Total
          </div>
          <div className="text-2xl font-extrabold" style={{ color: "var(--ink)" }}>
            {formatNok(total)}
          </div>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <a
            href="/"
            className="h-12 inline-flex items-center justify-center rounded-full px-6 text-sm font-extrabold ring-1"
            style={{ background: "var(--surface)", color: "var(--ink)", borderColor: "var(--line)" }}
          >
            Fortsett å handle
          </a>

          <a
            href="/checkout"
            className="h-12 inline-flex items-center justify-center rounded-full px-6 text-sm font-extrabold"
            style={{ background: "var(--g-primary)", color: "var(--ink)" }}
          >
            Gå til utsjekk
          </a>
        </div>
      </main>
    </div>
  );
}