"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { addToCart, formatNok } from "@/lib/cart";
import { STORE_PRODUCTS, SUBSCRIPTION_DISCOUNT } from "@/lib/products";

export default function Section2Products() {
  const [selectedId, setSelectedId] = useState<string>("odf");
  const [toast, setToast] = useState<string | null>(null);

  const product = useMemo(
    () => STORE_PRODUCTS.find((p) => p.id === selectedId) ?? STORE_PRODUCTS[0],
    [selectedId]
  );

  const subscriptionPrice = useMemo(() => {
    return Math.round(product.priceNok * (1 - SUBSCRIPTION_DISCOUNT));
  }, [product.priceNok]);

  const addOneTime = () => {
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

  const addSubscription = () => {
    addToCart({
      productId: "smooday-store",
      variantId: `${product.id}:sub`,
      name: "Smooday",
      variantLabel: `${product.name} (Abonnement -10%)`,
      priceNok: subscriptionPrice,
      qty: 1,
    });
    setToast(`${product.name} abonnement lagt i handlekurv (-10%)`);
    window.setTimeout(() => setToast(null), 1600);
  };

  return (
    <section id="produkter" className="mx-auto w-full max-w-6xl px-6 py-10">
      <h2
        className="text-2xl sm:text-3xl font-extrabold"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        Produkter
      </h2>
      <p className="mt-2" style={{ color: "var(--slate)" }}>
        Velg produkt – kjøp én gang eller abonner (10% billigere).
      </p>

      {/* ✅ ÉN STOR RAMME */}
      <div
        className="mt-6 rounded-3xl border p-6 sm:p-8"
        style={{
          background: "var(--surface)",
          borderColor: "var(--line)",
          boxShadow: "var(--shadow-soft)",
        }}
      >
        {/* Top: controls + image (responsive order) */}
        <div className="grid gap-6 md:grid-cols-2 md:items-start">
          {/* ✅ HØYRE på desktop, ØVERST på mobil */}
          <div className="order-1 md:order-2">
            <div className="text-sm font-semibold" style={{ color: "var(--slate)" }}>
              Velg produkt
            </div>

            {/* Buttons */}
            <div className="mt-3 flex flex-wrap gap-2">
              {STORE_PRODUCTS.map((p) => {
                const active = p.id === product.id;
                return (
                  <button
                    key={p.id}
                    onClick={() => setSelectedId(p.id)}
                    className="rounded-full px-4 py-2 text-sm font-extrabold transition ring-1"
                    style={{
                      borderColor: active ? "transparent" : "var(--line)",
                      background: active ? "var(--g-primary)" : "rgba(255,255,255,0.70)",
                      color: active ? "#fff" : "var(--ink)",
                    }}
                  >
                    {p.id === "odf" ? "ODF" : p.name}
                  </button>
                );
              })}
            </div>

            {/* Selected summary */}
            <div className="mt-6">
              <div
                className="text-xl font-extrabold"
                style={{ fontFamily: "var(--font-heading)", color: "var(--ink)" }}
              >
                {product.name}
              </div>
              <div className="mt-1 text-sm" style={{ color: "var(--slate)" }}>
                {product.subtitle}
              </div>

              <div className="mt-4 grid gap-2 text-sm">
                {product.bullets.map((b) => (
                  <div key={b} className="flex items-center gap-2">
                    <span
                      className="inline-block h-2 w-2 rounded-full"
                      style={{ background: "var(--accent)" }}
                    />
                    <span style={{ color: "var(--ink)" }}>{b}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing + CTAs */}
            <div
              className="mt-6 rounded-3xl border p-5"
              style={{ borderColor: "var(--line)", background: "var(--bg-2)" }}
            >
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold" style={{ color: "var(--slate)" }}>
                  Pris
                </div>
                <div className="text-lg font-extrabold" style={{ color: "var(--ink)" }}>
                  {formatNok(product.priceNok)}
                </div>
              </div>

              <div className="mt-2 flex items-center justify-between">
                <div className="text-sm font-semibold" style={{ color: "var(--slate)" }}>
                  Abonnement (−10%)
                </div>
                <div className="text-lg font-extrabold" style={{ color: "var(--ink)" }}>
                  {formatNok(subscriptionPrice)}
                </div>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <button
                  onClick={addOneTime}
                  className="h-12 rounded-full text-sm font-extrabold"
                  style={{
                    background: "rgba(255,255,255,0.75)",
                    border: "1px solid var(--line)",
                    color: "var(--ink)",
                  }}
                >
                  Kjøp én gang
                </button>

                <button
                  onClick={addSubscription}
                  className="h-12 rounded-full text-sm font-extrabold"
                  style={{ background: "var(--g-primary)", color: "#fff" }}
                >
                  Abonner (−10%)
                </button>
              </div>

              <a
                href="/cart"
                className="mt-3 inline-flex w-full items-center justify-center rounded-full py-3 text-sm font-extrabold"
                style={{ color: "var(--ink)", textDecoration: "underline" }}
              >
                Gå til handlekurv
              </a>

              {toast ? (
                <div
                  className="mt-3 rounded-2xl px-4 py-3 text-sm font-semibold"
                  style={{ background: "rgba(255,255,255,0.70)", color: "var(--ink)" }}
                >
                  {toast}
                </div>
              ) : null}
            </div>
          </div>

          {/* ✅ VENSTRE på desktop, NEDERST på mobil */}
          <div className="order-2 md:order-1">
            <div
  className="rounded-3xl border p-4 sm:p-5"
  style={{ borderColor: "var(--line)", background: "rgba(255,255,255,0.55)" }}
>
  {/* ✅ lavere høyde */}
  <div className="relative w-full overflow-hidden rounded-3xl aspect-[4/5] md:aspect-[1/1] md:max-h-[420px]">
    <Image
      src={product.image}
      alt={product.name}
      fill
      className="object-contain"
      priority={product.id === "odf"}
    />
  </div>
</div>
          </div>
        </div>

        {/* Bottom: description (same card) */}
        <div className="mt-8 border-t pt-6" style={{ borderColor: "var(--line-2)" }}>
          <div className="text-sm font-semibold" style={{ color: "var(--slate)" }}>
            Produktbeskrivelse
          </div>
          <div className="mt-2 text-base leading-7" style={{ color: "var(--slate)" }}>
            {product.description}
          </div>
        </div>
      </div>
    </section>
  );
}