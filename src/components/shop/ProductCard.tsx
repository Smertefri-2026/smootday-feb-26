"use client";

// /Users/oystein/nettsider/smootday-v2-feb-26/src/components/shop/ProductCard.tsx

import { useMemo, useState } from "react";
import { PRODUCT } from "@/lib/products";
import { addToCart, formatNok } from "@/lib/cart";

export default function ProductCard() {
  const variants = PRODUCT.variants;

  const [variantId, setVariantId] = useState(variants[0].id);
  const [toast, setToast] = useState<string | null>(null);

  const variant = useMemo(
    () => variants.find((v) => v.id === variantId) ?? variants[0],
    [variantId, variants]
  );

  const onAdd = () => {
    addToCart({
      productId: PRODUCT.id,
      variantId: variant.id,
      name: PRODUCT.name,
      variantLabel: variant.label,
      priceNok: variant.priceNok,
      qty: 1,
    });

    setToast(`${variant.label} lagt i handlekurv`);
    window.setTimeout(() => setToast(null), 1600);
  };

  return (
    <div
      className="rounded-3xl border p-6"
      style={{ background: "var(--surface)", borderColor: "var(--line)" }}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-sm font-semibold" style={{ color: "var(--slate)" }}>
            Smood.day
          </div>
          <div
            className="mt-1 text-xl font-extrabold"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {PRODUCT.name}
          </div>
          <div className="mt-2 text-sm" style={{ color: "var(--slate)" }}>
            {PRODUCT.description}
          </div>
        </div>

        <div className="h-10 w-10 rounded-2xl" style={{ background: "var(--g-primary)" }} />
      </div>

      <div className="mt-5 grid gap-3">
        <label className="grid gap-1">
          <span className="text-sm font-semibold" style={{ color: "var(--slate)" }}>
            Velg variant
          </span>

          <select
            value={variantId}
            onChange={(e) => setVariantId(e.target.value)}
            className="h-12 rounded-2xl border px-4 text-sm outline-none"
            style={{
              background: "var(--surface)",
              borderColor: "var(--line)",
              color: "var(--ink)",
            }}
          >
            {variants.map((v) => (
              <option key={v.id} value={v.id}>
                {v.label} {v.subtitle ? `– ${v.subtitle}` : ""}
              </option>
            ))}
          </select>
        </label>

        <div className="flex items-center justify-between">
          <div className="text-sm font-semibold" style={{ color: "var(--slate)" }}>
            Pris
          </div>
          <div className="text-lg font-extrabold" style={{ color: "var(--ink)" }}>
            {formatNok(variant.priceNok)}
          </div>
        </div>

        <button
          onClick={onAdd}
          className="h-12 rounded-full text-sm font-extrabold transition"
          style={{ background: "var(--g-primary)", color: "var(--ink)" }}
        >
          Legg i handlekurv
        </button>

        {toast ? (
          <div
            className="rounded-2xl px-4 py-3 text-sm font-semibold"
            style={{ background: "var(--bg-2)", color: "var(--ink)" }}
          >
            {toast}
          </div>
        ) : null}
      </div>
    </div>
  );
}