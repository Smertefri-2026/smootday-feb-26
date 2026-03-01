"use client";

// /Users/oystein/nettsider/smootday-v2-feb-26/src/app/(public)/panel/sections/Section2Products.tsx

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { addToCart, formatNok, getQty } from "@/lib/cart";
import { STORE_PRODUCTS, SUBSCRIPTION_DISCOUNT } from "@/lib/products";

import Section from "@/components/ui/Section";
import { Card, CardBody } from "@/components/ui/Card";
import { H2 } from "@/components/ui/Typography";
import { ButtonOutline, ButtonPrimary } from "@/components/ui/Button";
import Divider from "@/components/ui/Divider";
import { ChipRow, Chip } from "@/components/ui/Chips";

export default function Section2Products() {
  const [productId, setProductId] = useState<string>("odf");
  const [variantId, setVariantId] = useState<string>("odf-smoothie");
  const [toast, setToast] = useState<string | null>(null);

  const product = useMemo(
    () => STORE_PRODUCTS.find((p) => p.id === productId) ?? STORE_PRODUCTS[0],
    [productId]
  );

  useEffect(() => {
    const first = product.variants?.[0];
    if (first) setVariantId(first.id);
  }, [product.id]);

  const variant = useMemo(() => {
    const list = product.variants ?? [];
    return list.find((v) => v.id === variantId) ?? list[0];
  }, [product.variants, variantId]);

  const imageSrc = variant?.image ?? product.baseImage;
  const bullets = variant?.bullets ?? product.bullets;
  const description = variant?.description ?? product.description;
  const price = variant?.priceNok ?? 0;

  const stockQty = variant?.stockQty ?? 0;

  const subscriptionPrice = useMemo(() => {
    return Math.round(price * (1 - SUBSCRIPTION_DISCOUNT));
  }, [price]);

  const CART_PRODUCT_ID = "smooday-store";
  const variantKey = variant?.id ?? product.id;
  const subKey = `${variantKey}:sub`;

  const inCart = getQty(CART_PRODUCT_ID, variantKey);
  const soldOut = stockQty <= 0 || inCart >= stockQty;

  const addOneTime = () => {
    if (soldOut) {
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
    if (soldOut) {
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

  return (
    <Section id="produkter">
      <H2>Produkter</H2>
      <p className="mt-2" style={{ color: "var(--slate)" }}>
        Velg produkt og variant. Kjøp én gang eller abonner (10% billigere).
      </p>

      <div className="mt-6">
        <Card>
          <CardBody className="p-6 sm:p-8">
            <div className="grid gap-6 md:grid-cols-2 md:items-start">
              {/* CONTROLS */}
              <div className="order-1 md:order-2 min-w-0">
                <div className="text-sm font-semibold" style={{ color: "var(--slate)" }}>
                  Velg produkt
                </div>

                <div className="mt-3">
                  <ChipRow>
                    {STORE_PRODUCTS.map((p) => (
                      <Chip
                        key={p.id}
                        active={p.id === product.id}
                        onClick={() => setProductId(p.id)}
                      >
                        {p.id === "odf" ? "ODF" : p.name}
                      </Chip>
                    ))}
                  </ChipRow>
                </div>

                {(product.variants?.length ?? 0) > 1 ? (
                  <div className="mt-4">
                    <div className="text-sm font-semibold" style={{ color: "var(--slate)" }}>
                      Velg variant
                    </div>

                    <div className="mt-3">
                      <ChipRow>
                        {product.variants.map((v) => (
                          <Chip
                            key={v.id}
                            active={v.id === variantId}
                            onClick={() => setVariantId(v.id)}
                          >
                            {v.label}
                          </Chip>
                        ))}
                      </ChipRow>
                    </div>
                  </div>
                ) : null}

                <Divider />

                {/* TITLE */}
                <div>
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
                    {variant?.subtitle
                      ? `${product.subtitle} • ${variant.subtitle}`
                      : product.subtitle}
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

                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold" style={{ color: "var(--slate)" }}>
                        Abonnement (−10%)
                      </span>
                      <a
                        href="#subscription"
                        className="inline-flex items-center justify-center rounded-full px-2.5 h-7 text-[11px] font-extrabold transition"
                        style={{
                          background: "rgba(255,255,255,0.70)",
                          border: "1px solid var(--line)",
                          color: "var(--ink)",
                        }}
                      >
                        Les mer
                      </a>
                    </div>

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

                {/* BUY */}
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <ButtonOutline onClick={addOneTime} disabled={soldOut}>
                    {soldOut ? "Utsolgt" : "Kjøp én gang"}
                  </ButtonOutline>

                  <ButtonPrimary onClick={addSubscription} disabled={soldOut}>
                    {soldOut ? "Utsolgt" : "Abonner (−10%)"}
                  </ButtonPrimary>
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

              {/* IMAGE + bullets */}
              <div className="order-2 md:order-1">
                <div
                  className="rounded-3xl border p-4"
                  style={{
                    borderColor: "var(--line)",
                    background: "rgba(255,255,255,0.55)",
                  }}
                >
                  <div className="relative w-full overflow-hidden rounded-3xl aspect-4/5 md:aspect-6/7 md:max-h-90">
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
            </div>

            {/* DESCRIPTION – still same card (not a nested “new card”) */}
            <div className="mt-6">
              <details
                className="rounded-2xl border"
                style={{
                  borderColor: "var(--line)",
                  background: "rgba(255,255,255,0.45)",
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
          </CardBody>
        </Card>
      </div>
    </Section>
  );
}