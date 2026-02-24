"use client";

// /Users/oystein/nettsider/smootday-v2-feb-26/src/app/(public)/panel/sections/Section2Products.tsx

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { addToCart, formatNok, getQty } from "@/lib/cart";
import { STORE_PRODUCTS, SUBSCRIPTION_DISCOUNT } from "@/lib/products";

type BundleMode = "core"; // kan utvides senere

export default function Section2Products() {
  const CART_PRODUCT_ID = "smooday-store";

  // default produkt: ODF
  const [productId, setProductId] = useState<string>("odf");
  // default variant: settes via useEffect når produkt skifter
  const [variantId, setVariantId] = useState<string>("");

  const [toast, setToast] = useState<string | null>(null);

  const product = useMemo(
    () => STORE_PRODUCTS.find((p) => p.id === productId) ?? STORE_PRODUCTS[0],
    [productId]
  );

  const isBundle = product.id === "bundle";

  // ✅ når du bytter produkt: velg første variant automatisk (ODF Smoothie først i products.ts)
  useEffect(() => {
    const first = product.variants?.[0];
    if (first) setVariantId(first.id);
  }, [product.id]); // eslint-disable-line react-hooks/exhaustive-deps

  const variant = useMemo(() => {
    const list = product.variants ?? [];
    return list.find((v) => v.id === variantId) ?? list[0];
  }, [product.variants, variantId]);

  // Visningsdata
  const imageSrc = (variant?.image ?? product.baseImage) || "/products/odf.png";
  const bullets = variant?.bullets ?? product.bullets;
  const description = variant?.description ?? product.description;
  const price = variant?.priceNok ?? 0;

  const subscriptionPrice = useMemo(() => {
    return Math.round(price * (1 - SUBSCRIPTION_DISCOUNT));
  }, [price]);

  // Lager for “vanlig” produkt
  const variantKey = variant?.id ?? product.id;
  const stockQty = variant?.stockQty ?? 0;
  const inCartAll = getQty(CART_PRODUCT_ID, variantKey); // ✅ teller også :sub
  const soldOutAll = stockQty <= 0 || inCartAll >= stockQty;

  // ---------- PAKKELOGIKK ----------
  // Bundle skal legge 3 varer i kurv:
  // - ODF (valgt ODF-variant i UI)
  // - Omega
  // - Trace
  const bundleMode: BundleMode = "core";
  const BUNDLE_DISCOUNT = 0.15;

  const odf = useMemo(() => STORE_PRODUCTS.find((p) => p.id === "odf"), []);
  const omega = useMemo(() => STORE_PRODUCTS.find((p) => p.id === "omega"), []);
  const trace = useMemo(() => STORE_PRODUCTS.find((p) => p.id === "trace"), []);

  // ODF-variant valgt i UI når du står på bundle:
  // Vi lar variantId styre ODF-varianten hvis du først velger ODF-variant på bundle-siden.
  // Fallback: første ODF-variant (smoothie)
  const odfVariantForBundle = useMemo(() => {
    const list = odf?.variants ?? [];
    const picked = list.find((v) => v.id === variantId);
    return picked ?? list[0];
  }, [odf, variantId]);

  const omegaVariant = omega?.variants?.[0];
  const traceVariant = trace?.variants?.[0];

  const bundleParts = useMemo(() => {
    if (!odfVariantForBundle || !omegaVariant || !traceVariant) return null;
    return [
      { p: odf, v: odfVariantForBundle },
      { p: omega, v: omegaVariant },
      { p: trace, v: traceVariant },
    ] as const;
  }, [odf, omegaVariant, traceVariant, odfVariantForBundle]);

  // bundle pris: sum * (1 - rabatt)
  const bundlePriceRaw = useMemo(() => {
    if (!bundleParts) return 0;
    const sum = bundleParts.reduce((acc, x) => acc + (x.v.priceNok ?? 0), 0);
    return Math.round(sum * (1 - BUNDLE_DISCOUNT));
  }, [bundleParts]);

  // bundle lager: vi må sjekke alle delvarene (per variant)
  const bundleSoldOut = useMemo(() => {
    if (!bundleParts) return true;

    for (const part of bundleParts) {
      const pid = part.p?.id ?? "";
      const vid = part.v.id;
      const stock = part.v.stockQty ?? 0;
      const inCart = getQty(CART_PRODUCT_ID, vid); // ✅ teller :sub også
      if (stock <= 0 || inCart >= stock) return true;
    }
    return false;
  }, [bundleParts]);

  const addBundle = () => {
    if (!bundleParts) {
      setToast("Pakke er ikke klar (mangler produkter)");
      window.setTimeout(() => setToast(null), 2000);
      return;
    }
    if (bundleSoldOut) {
      setToast("Pakke utsolgt / ikke mer på lager");
      window.setTimeout(() => setToast(null), 2000);
      return;
    }

    // legg inn 3 linjer i handlekurv
    for (const part of bundleParts) {
      addToCart({
        productId: CART_PRODUCT_ID,
        variantId: part.v.id,
        name: "SmoDay",
        variantLabel: `${part.p?.name ?? "Produkt"} – ${part.v.label}`,
        priceNok: part.v.priceNok ?? 0,
        qty: 1,
      });
    }

    // (valgfritt) legg inn en “pakke-linje” som info (0 kr), men det blir ekstra linje
    // Vi dropper den nå for enkelhet.

    setToast("Systempakke lagt i handlekurv");
    window.setTimeout(() => setToast(null), 1600);
  };

  // ---------- ADD ONE TIME / SUB ----------
  const addOneTime = () => {
    if (soldOutAll) {
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
    if (soldOutAll) {
      setToast("Utsolgt / ikke mer på lager");
      window.setTimeout(() => setToast(null), 1800);
      return;
    }

    addToCart({
      productId: CART_PRODUCT_ID,
      variantId: `${variantKey}:sub`,
      name: "SmoDay",
      variantLabel: `${product.name}${variant ? ` – ${variant.label}` : ""} (Abonnement -10%)`,
      priceNok: subscriptionPrice,
      qty: 1,
    });

    setToast("Abonnement lagt i handlekurv (-10%)");
    window.setTimeout(() => setToast(null), 1600);
  };

  // ---------- UI styles (samme som hero) ----------
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

  // På bundle vil vi vise ODF-variantknapper (smoothie/pulver) – ikke bundle-variants
  const showVariantPicker = useMemo(() => {
    if (isBundle) return true; // vi viser ODF varianter når bundle er valgt
    return (product.variants?.length ?? 0) > 1;
  }, [isBundle, product.variants]);

  const variantListForUI = useMemo(() => {
    if (isBundle) return odf?.variants ?? []; // ODF-variants
    return product.variants ?? [];
  }, [isBundle, product.variants, odf]);

  // Title/subtitle til headerfelt
  const titleName = isBundle ? "Systempakke" : product.name;
  const subtitleLine = isBundle
    ? "ODF + Omega-3 + Sporstoffer • Pakkerabatt"
    : variant?.subtitle
    ? `${product.subtitle} • ${variant.subtitle}`
    : product.subtitle;

  // Price-linjer (bundle vs vanlig)
  const primaryPriceLabel = isBundle ? "Pakkepris" : "Pris";
  const primaryPriceValue = isBundle ? bundlePriceRaw : price;
  const subPriceLabel = isBundle ? "Du sparer" : "Abonnement (−10%)";
  const subPriceValue = isBundle
    ? Math.max(0, Math.round((bundleParts?.reduce((acc, x) => acc + (x.v.priceNok ?? 0), 0) ?? 0) - bundlePriceRaw))
    : subscriptionPrice;

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
        <div className="grid gap-6 md:grid-cols-2 md:items-start">
          {/* LEFT */}
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
                  alt={titleName}
                  fill
                  className="object-contain"
                  priority={product.id === "odf"}
                />
              </div>
            </div>

            <div className="mt-4 grid gap-2 text-sm">
              {(isBundle ? (STORE_PRODUCTS.find((p) => p.id === "bundle")?.bullets ?? bullets) : bullets).map(
                (b) => (
                  <div key={b} className="flex items-center gap-2">
                    <span
                      className="inline-block h-2 w-2 rounded-full"
                      style={{ background: "var(--accent)" }}
                    />
                    <span style={{ color: "var(--ink)" }}>{b}</span>
                  </div>
                )
              )}
            </div>
          </div>

          {/* RIGHT */}
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

            {showVariantPicker ? (
              <div className="mt-4">
                <div className="text-sm font-semibold" style={{ color: "var(--slate)" }}>
                  {isBundle ? "Velg ODF-variant i pakken" : "Velg variant"}
                </div>

                <div className="mt-3 flex flex-wrap gap-2">
                  {variantListForUI.map((v) => {
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
                {titleName}
              </div>

              <div className="mt-1 text-sm" style={{ color: "var(--slate)" }}>
                {subtitleLine}
              </div>
            </div>

            {/* PRICE */}
            <div className="mt-5 grid gap-2">
              <div className="flex items-baseline justify-between">
                <span className="text-sm font-semibold" style={{ color: "var(--slate)" }}>
                  {primaryPriceLabel}
                </span>
                <span className="text-2xl font-extrabold" style={{ color: "var(--ink)" }}>
                  {formatNok(primaryPriceValue)}
                </span>
              </div>

              <div className="flex items-center justify-between gap-3">
                <span className="text-sm font-semibold" style={{ color: "var(--slate)" }}>
                  {subPriceLabel}
                </span>

                <div className="flex items-center gap-2">
                  {!isBundle ? (
                    <a
                      href="#subscription"
                      className="inline-flex h-8 items-center justify-center rounded-full px-3 text-xs font-extrabold transition"
                      style={{
                        background: "rgba(255,255,255,0.70)",
                        color: "var(--ink)",
                        border: "1px solid var(--line)",
                      }}
                    >
                      Les mer
                    </a>
                  ) : null}

                  <span className="text-lg font-extrabold" style={{ color: "var(--ink)" }}>
                    {formatNok(subPriceValue)}
                  </span>
                </div>
              </div>

              {/* Lager */}
              {!isBundle ? (
                <div className="text-xs" style={{ color: "var(--slate)" }}>
                  Lager: <b style={{ color: "var(--ink)" }}>{stockQty}</b>
                  {stockQty > 0 ? (
                    <>
                      {" "}
                      • i kurv (inkl. abonnement): <b style={{ color: "var(--ink)" }}>{inCartAll}</b>
                    </>
                  ) : null}
                </div>
              ) : (
                <div className="text-xs" style={{ color: "var(--slate)" }}>
                  Pakke sjekker lager på alle delprodukter før den legges i kurv.
                </div>
              )}
            </div>

            {/* BUY BUTTONS */}
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <button
                onClick={isBundle ? addBundle : addOneTime}
                disabled={isBundle ? bundleSoldOut : soldOutAll}
                className={baseBtn}
                style={{
                  ...outlineStyle,
                  ...((isBundle ? bundleSoldOut : soldOutAll) ? disabledStyle : null),
                }}
              >
                {isBundle ? (bundleSoldOut ? "Pakke utsolgt" : "Legg til pakke (−15%)") : soldOutAll ? "Utsolgt" : "Kjøp én gang"}
              </button>

              {!isBundle ? (
                <button
                  onClick={addSubscription}
                  disabled={soldOutAll}
                  className={baseBtn}
                  style={{
                    ...activePrimaryStyle,
                    ...(soldOutAll ? disabledStyle : null),
                  }}
                >
                  {soldOutAll ? "Utsolgt" : "Abonner (−10%)"}
                </button>
              ) : (
                <button
                  onClick={() => (window.location.href = "/cart")}
                  className={baseBtn}
                  style={activePrimaryStyle}
                >
                  Gå til handlekurv
                </button>
              )}
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

        {/* DESCRIPTION */}
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
              {isBundle
                ? (STORE_PRODUCTS.find((p) => p.id === "bundle")?.description ?? description)
                : description}
            </div>
          </details>
        </div>
      </div>
    </section>
  );
}