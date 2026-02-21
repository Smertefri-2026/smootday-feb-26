"use client";

// /Users/oystein/nettsider/smootday-v2-feb-26/src/app/checkout/page.tsx

import { useEffect, useState } from "react";
import PublicHeader from "@/components/shell/PublicHeader";
import { CartItem, cartTotal, formatNok, getCart } from "@/lib/cart";

export default function CheckoutPage() {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => setItems(getCart()), []);

  return (
    <div id="top" className="min-h-screen">
      <PublicHeader />

      <main className="mx-auto w-full max-w-4xl px-6 py-10">
        <h1
          className="text-2xl sm:text-3xl font-extrabold"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Utsjekk
        </h1>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div
            className="rounded-3xl border p-6"
            style={{ background: "var(--surface)", borderColor: "var(--line)" }}
          >
            <div className="text-sm font-semibold" style={{ color: "var(--slate)" }}>
              Kundedetaljer (kommer)
            </div>
            <p className="mt-2 text-sm" style={{ color: "var(--slate)" }}>
              Neste steg: Stripe Checkout / Vipps / frakt.
            </p>
          </div>

          <div
            className="rounded-3xl border p-6"
            style={{ background: "var(--surface)", borderColor: "var(--line)" }}
          >
            <div className="text-sm font-semibold" style={{ color: "var(--slate)" }}>
              Oppsummering
            </div>

            <div className="mt-4 grid gap-2">
              {items.map((x) => (
                <div key={`${x.productId}:${x.variantId}`} className="flex justify-between text-sm">
                  <span style={{ color: "var(--slate)" }}>
                    {x.variantLabel} × {x.qty}
                  </span>
                  <span style={{ color: "var(--ink)" }}>
                    {formatNok(x.priceNok * x.qty)}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 flex justify-between font-extrabold">
              <span style={{ color: "var(--slate)" }}>Total</span>
              <span style={{ color: "var(--ink)" }}>{formatNok(cartTotal(items))}</span>
            </div>

            <button
              className="mt-6 h-12 w-full rounded-full text-sm font-extrabold"
              style={{ background: "var(--g-primary)", color: "var(--ink)" }}
              onClick={() => alert("Neste steg: Stripe Checkout")}
            >
              Betal (kommer)
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}