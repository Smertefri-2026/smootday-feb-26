// /Users/oystein/nettsider/smootday-v2-feb-26/src/components/shop/ProductCard.tsx
"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { addToCart, formatNok } from "@/lib/cart";
import { STORE_PRODUCTS } from "@/lib/products";

export default function ProductCard() {
  const [id, setId] = useState(STORE_PRODUCTS[0]?.id ?? "odf");
  const [toast, setToast] = useState<string | null>(null);

  const product = useMemo(
    () => STORE_PRODUCTS.find((p) => p.id === id) ?? STORE_PRODUCTS[0],
    [id]
  );

  const onAdd = () => {
    addToCart({
      productId: "smooday-store",
      variantId: product.id,
      name: "Smooday",
      variantLabel: product.name,
      priceNok: product.priceNok,
      qty: 1,
    });

    setToast(`${product.name} lagt i handlekurv`);
    window.setTimeout(() => setToast(null), 1600);
  };

  return (
    <div className="rounded-3xl border p-6" style={{ background: "var(--surface)", borderColor: "var(--line)" }}>
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-sm font-semibold" style={{ color: "var(--slate)" }}>
            Smooday
          </div>
          <div className="mt-1 text-xl font-extrabold" style={{ fontFamily: "var(--font-heading)" }}>
            {product.name}
          </div>
          <div className="mt-2 text-sm" style={{ color: "var(--slate)" }}>
            {product.subtitle}
          </div>
        </div>

        <div className="relative h-12 w-12 overflow-hidden rounded-2xl" style={{ background: "rgba(255,255,255,0.6)" }}>
          <Image src={product.image} alt={product.name} fill className="object-contain" />
        </div>
      </div>

      <div className="mt-5 grid gap-3">
        <label className="grid gap-1">
          <span className="text-sm font-semibold" style={{ color: "var(--slate)" }}>
            Velg produkt
          </span>

          <select
            value={id}
            onChange={(e) => setId(e.target.value)}
            className="h-12 rounded-2xl border px-4 text-sm outline-none"
            style={{ background: "var(--surface)", borderColor: "var(--line)", color: "var(--ink)" }}
          >
            {STORE_PRODUCTS.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name}
              </option>
            ))}
          </select>
        </label>

        <div className="flex items-center justify-between">
          <div className="text-sm font-semibold" style={{ color: "var(--slate)" }}>
            Pris
          </div>
          <div className="text-lg font-extrabold" style={{ color: "var(--ink)" }}>
            {formatNok(product.priceNok)}
          </div>
        </div>

        <button
          onClick={onAdd}
          className="h-12 rounded-full text-sm font-extrabold transition"
          style={{ background: "var(--g-primary)", color: "#fff" }}
        >
          Legg i handlekurv
        </button>

        {toast ? (
          <div className="rounded-2xl px-4 py-3 text-sm font-semibold" style={{ background: "var(--bg-2)", color: "var(--ink)" }}>
            {toast}
          </div>
        ) : null}
      </div>
    </div>
  );
}