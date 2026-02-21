"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { addToCart, formatNok } from "@/lib/cart";
import { STORE_PRODUCTS, SUBSCRIPTION_DISCOUNT } from "@/lib/products";

export default function Section2Products() {
  const [productId, setProductId] = useState<string>("odf");
  const [variantId, setVariantId] = useState<string>("odf");
  const [toast, setToast] = useState<string | null>(null);

  const product = useMemo(
    () => STORE_PRODUCTS.find((p) => p.id === productId) ?? STORE_PRODUCTS[0],
    [productId]
  );

  useEffect(() => {
    const first = product.variants?.[0];
    if (first) setVariantId(first.id);
  }, [product.id]); // eslint-disable-line react-hooks/exhaustive-deps

  const variant = useMemo(() => {
    const list = product.variants ?? [];
    return list.find((v) => v.id === variantId) ?? list[0];
  }, [product.variants, variantId]);

  const imageSrc = variant?.image ?? product.baseImage;
  const bullets = variant?.bullets ?? product.bullets;
  const description = variant?.description ?? product.description;
  const price = variant?.priceNok ?? 0;

  const subscriptionPrice = useMemo(() => {
    return Math.round(price * (1 - SUBSCRIPTION_DISCOUNT));
  }, [price]);

  const addOneTime = () => {
    addToCart({
      productId: "smooday-store",
      variantId: variant?.id ?? product.id,
      name: "Smooday",
      variantLabel: variant ? `${product.name} – ${variant.label}` : product.name,
      priceNok: price,
      qty: 1,
    });

    setToast("Lagt i handlekurv");
    window.setTimeout(() => setToast(null), 1600);
  };

  const addSubscription = () => {
    const vid = variant?.id ?? product.id;

    addToCart({
      productId: "smooday-store",
      variantId: `${vid}:sub`,
      name: "Smooday",
      variantLabel: `${product.name}${variant ? ` – ${variant.label}` : ""} (Abonnement -10%)`,
      priceNok: subscriptionPrice,
      qty: 1,
    });

    setToast("Abonnement lagt i handlekurv (-10%)");
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
        Velg produkt – og variant der det finnes. Kjøp én gang eller abonner (10% billigere).
      </p>

      <div
        className="mt-6 rounded-3xl border p-6 sm:p-8"
        style={{
          background: "var(--surface)",
          borderColor: "var(--line)",
          boxShadow: "var(--shadow-soft)",
        }}
      >
        <div className="grid gap-6 md:grid-cols-2 md:items-start">
          {/* VENSTRE */}
          <div className="order-2 md:order-1">
            <div
              className="rounded-3xl border p-4"
              style={{ borderColor: "var(--line)", background: "rgba(255,255,255,0.55)" }}
            >
              <div className="relative w-full overflow-hidden rounded-3xl aspect-[4/5] md:aspect-[6/7] md:max-h-[320px]">
                <Image
                  src={imageSrc}
                  alt={product.name}
                  fill
                  className="object-contain"
                  priority={product.id === "odf"}
                />
              </div>
            </div>

            {/* MOBIL: beskrivelse før pris */}
            <div className="mt-4 md:hidden">
              <div className="text-sm font-semibold" style={{ color: "var(--slate)" }}>
                Produktbeskrivelse
              </div>
              <div className="mt-2 text-sm leading-7" style={{ color: "var(--slate)" }}>
                {description}
              </div>
            </div>

            <div
              className="mt-4 rounded-3xl border p-5"
              style={{ borderColor: "var(--line)", background: "var(--bg-2)" }}
            >
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold" style={{ color: "var(--slate)" }}>
                  Pris
                </div>
                <div className="text-lg font-extrabold" style={{ color: "var(--ink)" }}>
                  {formatNok(price)}
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

          {/* HØYRE */}
          <div className="order-1 md:order-2">
            <div className="text-sm font-semibold" style={{ color: "var(--slate)" }}>
              Velg produkt
            </div>

            {/* ✅ Stabil spacing: pill + fast høyde + gap-y */}
            <div className="mt-2 flex flex-wrap gap-x-2 gap-y-2">
              {STORE_PRODUCTS.map((p) => {
                const active = p.id === product.id;
                return (
                  <button
                    key={p.id}
                    onClick={() => setProductId(p.id)}
                    className="pill h-11 rounded-full px-4 text-sm font-extrabold transition ring-1"
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

            {(product.variants?.length ?? 0) > 1 ? (
              <div className="mt-4">
                <div className="text-sm font-semibold" style={{ color: "var(--slate)" }}>
                  Velg variant
                </div>

                <div className="mt-2 flex flex-wrap gap-x-2 gap-y-2">
                  {product.variants!.map((v) => {
                    const active = v.id === variantId;
                    return (
                      <button
                        key={v.id}
                        onClick={() => setVariantId(v.id)}
                        className="pill h-11 rounded-full px-4 text-sm font-extrabold transition ring-1"
                        style={{
                          borderColor: active ? "transparent" : "var(--line)",
                          background: active ? "var(--accent)" : "rgba(255,255,255,0.70)",
                          color: active ? "#fff" : "var(--ink)",
                        }}
                      >
                        {v.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            ) : null}

            <div className="mt-5">
              <div
                className="text-xl font-extrabold"
                style={{ fontFamily: "var(--font-heading)", color: "var(--ink)" }}
              >
                {product.name}
              </div>
              <div className="mt-1 text-sm" style={{ color: "var(--slate)" }}>
                {variant?.subtitle ? `${product.subtitle} • ${variant.subtitle}` : product.subtitle}
              </div>

              <div className="mt-3 grid gap-2 text-sm">
                {bullets.map((b) => (
                  <div key={b} className="flex items-center gap-2">
                    <span className="inline-block h-2 w-2 rounded-full" style={{ background: "var(--accent)" }} />
                    <span style={{ color: "var(--ink)" }}>{b}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* DESKTOP: beskrivelse på høyre */}
            <div className="hidden md:block mt-5">
              <div className="text-sm font-semibold" style={{ color: "var(--slate)" }}>
                Produktbeskrivelse
              </div>
              <div className="mt-2 text-sm leading-7" style={{ color: "var(--slate)" }}>
                {description}
              </div>
            </div>

            <div
              className="mt-5 rounded-3xl border p-5"
              style={{ borderColor: "var(--line)", background: "rgba(255,255,255,0.55)" }}
            >
              <div className="text-sm font-semibold" style={{ color: "var(--slate)" }}>
                Tips
              </div>
              <div className="mt-2 text-sm leading-6" style={{ color: "var(--slate)" }}>
                Start med ODF som fundament – legg til Hydrering, Omega-3 eller Performance etter behov.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}