"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { addToCart, formatNok, getQty } from "@/lib/cart";
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

  const stockQty = variant?.stockQty ?? 0; // ✅ lager på valgt variant

  const subscriptionPrice = useMemo(() => {
    return Math.round(price * (1 - SUBSCRIPTION_DISCOUNT));
  }, [price]);

  const CART_PRODUCT_ID = "smooday-store";
  const variantKey = variant?.id ?? product.id;
  const subKey = `${variantKey}:sub`;

  const inCart = getQty(CART_PRODUCT_ID, variantKey);
  const inCartSub = getQty(CART_PRODUCT_ID, subKey);

  const soldOutOneTime = stockQty <= 0 || inCart >= stockQty;
  const soldOutSub = stockQty <= 0 || inCartSub >= stockQty;

  const addOneTime = () => {
    if (soldOutOneTime) {
      setToast("Utsolgt / ikke mer på lager");
      window.setTimeout(() => setToast(null), 1800);
      return;
    }

    addToCart({
      productId: CART_PRODUCT_ID,
      variantId: variantKey,
      name: "SmoDay",
      variantLabel: variant ? `${product.name} – ${variant.label}` : product.name,
      priceNok: price,
      qty: 1,
    });

    setToast("Lagt i handlekurv");
    window.setTimeout(() => setToast(null), 1600);
  };

  const addSubscription = () => {
    if (soldOutSub) {
      setToast("Utsolgt / ikke mer på lager");
      window.setTimeout(() => setToast(null), 1800);
      return;
    }

    addToCart({
      productId: CART_PRODUCT_ID,
      variantId: subKey,
      name: "SmoDay",
      variantLabel: `${product.name}${variant ? ` – ${variant.label}` : ""} (Abonnement -10%)`,
      priceNok: subscriptionPrice,
      qty: 1,
    });

    setToast("Abonnement lagt i handlekurv (-10%)");
    window.setTimeout(() => setToast(null), 1600);
  };

  // Buttons (same style as hero)
  const baseBtn =
    "inline-flex items-center justify-center rounded-full px-4 h-11 text-sm font-extrabold transition select-none";
  const outlineStyle = {
    background: "rgba(255,255,255,0.70)",
    color: "var(--ink)",
    border: "1px solid var(--line)",
  } as const;

  const activePrimaryStyle = {
    background: "var(--g-primary)",
    color: "#fff",
    border: "1px solid transparent",
  } as const;

  const activeAccentStyle = {
    background: "var(--accent)",
    color: "#fff",
    border: "1px solid transparent",
  } as const;

  const disabledStyle = {
    opacity: 0.55,
    cursor: "not-allowed",
  } as const;

  return (
    <section id="produkter" className="mx-auto w-full max-w-6xl px-6 py-10">
      <h2
        className="text-2xl sm:text-3xl font-extrabold"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        Produkter
      </h2>
      <p className="mt-2" style={{ color: "var(--slate)" }}>
        Velg produkt og variant. Kjøp én gang eller abonner (10% billigere).
      </p>

      <div
        className="mt-6 rounded-3xl border p-6 sm:p-8"
        style={{
          background: "var(--surface)",
          borderColor: "var(--line)",
          boxShadow: "var(--shadow-soft)",
        }}
      >
        {/* TOP: image left / controls right */}
        <div className="grid gap-6 md:grid-cols-2 md:items-start">
          {/* LEFT: image */}
          <div>
            <div
              className="rounded-3xl border p-4"
              style={{
                borderColor: "var(--line)",
                background: "rgba(255,255,255,0.55)",
              }}
            >
              <div className="relative w-full overflow-hidden rounded-3xl aspect-[4/5] md:aspect-[6/7] md:max-h-[360px]">
                <Image
                  src={imageSrc}
                  alt={product.name}
                  fill
                  className="object-contain"
                  priority={product.id === "odf"}
                />
              </div>
            </div>

            <div className="mt-4 grid gap-2 text-sm">
              {bullets.map((b) => (
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

          {/* RIGHT: controls + name + price */}
          <div className="min-w-0">
            <div className="text-sm font-semibold" style={{ color: "var(--slate)" }}>
              Velg produkt
            </div>

            <div className="mt-3 flex flex-wrap gap-2">
              {STORE_PRODUCTS.map((p) => {
                const active = p.id === product.id;
                return (
                  <button
                    key={p.id}
                    onClick={() => setProductId(p.id)}
                    className={baseBtn}
                    style={active ? activePrimaryStyle : outlineStyle}
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

                <div className="mt-3 flex flex-wrap gap-2">
                  {product.variants!.map((v) => {
                    const active = v.id === variantId;
                    return (
                      <button
                        key={v.id}
                        onClick={() => setVariantId(v.id)}
                        className={baseBtn}
                        style={active ? activeAccentStyle : outlineStyle}
                      >
                        {v.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            ) : null}

            {/* NAME */}
            <div className="mt-6">
              <div
                className="text-2xl sm:text-3xl font-extrabold tracking-tight"
                style={{
                  fontFamily: "var(--font-heading)",
                  color: "var(--ink)",
                  textTransform: "uppercase",
                  letterSpacing: "0.02em",
                }}
              >
                {product.name}
              </div>

              <div className="mt-1 text-sm" style={{ color: "var(--slate)" }}>
                {variant?.subtitle ? `${product.subtitle} • ${variant.subtitle}` : product.subtitle}
              </div>
            </div>

            {/* PRICE */}
            <div className="mt-5 grid gap-2">
              <div className="flex items-baseline justify-between">
                <span className="text-sm font-semibold" style={{ color: "var(--slate)" }}>
                  Pris
                </span>
                <span className="text-2xl font-extrabold" style={{ color: "var(--ink)" }}>
                  {formatNok(price)}
                </span>
              </div>

              <div className="flex items-baseline justify-between">
                <span className="text-sm font-semibold" style={{ color: "var(--slate)" }}>
                  Abonnement (−10%)
                </span>
                <span className="text-lg font-extrabold" style={{ color: "var(--ink)" }}>
                  {formatNok(subscriptionPrice)}
                </span>
              </div>

              <div className="text-xs" style={{ color: "var(--slate)" }}>
                Lager: <b style={{ color: "var(--ink)" }}>{stockQty}</b>
                {stockQty > 0 ? (
                  <>
                    {" "}
                    • i kurv: <b style={{ color: "var(--ink)" }}>{inCart}</b>
                  </>
                ) : null}
              </div>
            </div>

            {/* BUY BUTTONS */}
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <button
                onClick={addOneTime}
                disabled={soldOutOneTime}
                className={baseBtn}
                style={{
                  ...outlineStyle,
                  ...(soldOutOneTime ? disabledStyle : null),
                }}
              >
                {soldOutOneTime ? "Utsolgt" : "Kjøp én gang"}
              </button>

              <button
                onClick={addSubscription}
                disabled={soldOutSub}
                className={baseBtn}
                style={{
                  ...activePrimaryStyle,
                  ...(soldOutSub ? disabledStyle : null),
                }}
              >
                {soldOutSub ? "Utsolgt" : "Abonner (−10%)"}
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

        {/* BOTTOM: description */}
        <div className="mt-6">
          <details
            className="rounded-3xl border"
            style={{
              borderColor: "var(--line)",
              background: "rgba(255,255,255,0.55)",
              boxShadow: "var(--shadow-soft)",
            }}
          >
            <summary
              className="cursor-pointer list-none px-5 py-4 text-sm font-extrabold"
              style={{ color: "var(--ink)" }}
            >
              Produktbeskrivelse (åpne)
            </summary>
            <div className="px-5 pb-5 text-sm leading-7" style={{ color: "var(--slate)" }}>
              {description}
            </div>
          </details>
        </div>
      </div>
    </section>
  );
}