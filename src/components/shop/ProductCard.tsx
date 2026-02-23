// /Users/oystein/nettsider/smootday-v2-feb-26/src/components/shop/ProductCard.tsx
"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { addToCart, formatNok } from "@/lib/cart";
import { STORE_PRODUCTS } from "@/lib/products";

export default function ProductCard() {
  const [productId, setProductId] = useState(STORE_PRODUCTS[0]?.id ?? "odf");
  const [variantId, setVariantId] = useState<string>("");
  const [toast, setToast] = useState<string | null>(null);

  const product = useMemo(
    () => STORE_PRODUCTS.find((p) => p.id === productId) ?? STORE_PRODUCTS[0],
    [productId]
  );

  // når produkt endres: velg første variant
  useEffect(() => {
    const first = product.variants?.[0];
    setVariantId(first?.id ?? "");
  }, [product.id]);

  const variant = useMemo(() => {
    const list = product.variants ?? [];
    return list.find((v) => v.id === variantId) ?? list[0];
  }, [product.variants, variantId]);

  const price = variant?.priceNok ?? 0;
  const imageSrc = variant?.image ?? product.baseImage;

  const onAdd = () => {
    const vid = variant?.id ?? product.id;

    addToCart({
      productId: "smooday-store",
      variantId: vid,
      name: "SmoDay",
      variantLabel: `${product.name}${variant ? ` – ${variant.label}` : ""}`,
      priceNok: price,
      qty: 1,
    });

    setToast(`Lagt i handlekurv`);
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
            SmoDay
          </div>
          <div
            className="mt-1 text-xl font-extrabold"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {product.name}
          </div>
          <div className="mt-2 text-sm" style={{ color: "var(--slate)" }}>
            {product.subtitle}
          </div>
        </div>

        <div
          className="relative h-12 w-12 overflow-hidden rounded-2xl"
          style={{ background: "rgba(255,255,255,0.6)" }}
        >
          <Image src={imageSrc} alt={product.name} fill className="object-contain" />
        </div>
      </div>

      <div className="mt-5 grid gap-3">
        <label className="grid gap-1">
          <span className="text-sm font-semibold" style={{ color: "var(--slate)" }}>
            Velg produkt
          </span>

          <select
            value={productId}
            onChange={(e) => setProductId(e.target.value)}
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

        {(product.variants?.length ?? 0) > 1 ? (
          <label className="grid gap-1">
            <span className="text-sm font-semibold" style={{ color: "var(--slate)" }}>
              Velg variant
            </span>

            <select
              value={variantId}
              onChange={(e) => setVariantId(e.target.value)}
              className="h-12 rounded-2xl border px-4 text-sm outline-none"
              style={{ background: "var(--surface)", borderColor: "var(--line)", color: "var(--ink)" }}
            >
              {product.variants!.map((v) => (
                <option key={v.id} value={v.id}>
                  {v.label} {v.subtitle ? `– ${v.subtitle}` : ""}
                </option>
              ))}
            </select>
          </label>
        ) : null}

        <div className="flex items-center justify-between">
          <div className="text-sm font-semibold" style={{ color: "var(--slate)" }}>
            Pris
          </div>
          <div className="text-lg font-extrabold" style={{ color: "var(--ink)" }}>
            {formatNok(price)}
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