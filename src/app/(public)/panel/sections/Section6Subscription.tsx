// /Users/oystein/nettsider/smootday-v2-feb-26/src/app/(public)/panel/sections/Section6Subscription.tsx
"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { addToCart, formatNok, getQty } from "@/lib/cart";
import { STORE_PRODUCTS, SUBSCRIPTION_DISCOUNT } from "@/lib/products";

export default function Section6Subscription() {
  const CART_PRODUCT_ID = "smooday-store";

  // ✅ valgte varianter per produkt (default = første variant)
  const [pick, setPick] = useState<Record<string, string>>({});
  useEffect(() => {
    const next: Record<string, string> = {};
    for (const p of STORE_PRODUCTS) next[p.id] = p.variants?.[0]?.id ?? p.id;
    setPick(next);
  }, []);

  const cards = useMemo(() => {
    return STORE_PRODUCTS.map((p) => {
      const vid = pick[p.id] ?? p.variants?.[0]?.id ?? p.id;
      const v = (p.variants ?? []).find((x) => x.id === vid) ?? p.variants?.[0];

      const price = v?.priceNok ?? 0;
      const subPrice = Math.round(price * (1 - SUBSCRIPTION_DISCOUNT));
      const subKey = `${vid}:sub`;

      const stockQty = v?.stockQty ?? 0;
      const inCartTotal = getQty(CART_PRODUCT_ID, vid); // teller også :sub pga normalisering i cart.ts
      const soldOut = stockQty <= 0 || inCartTotal >= stockQty;

      const img = v?.image ?? p.baseImage;

      return {
        p,
        v,
        vid,
        subKey,
        price,
        subPrice,
        stockQty,
        inCartTotal,
        soldOut,
        img,
      };
    });
  }, [pick]);

  const subscribe = (c: (typeof cards)[number]) => {
    if (c.soldOut) return;

    addToCart({
      productId: CART_PRODUCT_ID,
      variantId: c.subKey,
      name: "SmoDay",
      variantLabel: `${c.p.name}${c.v ? ` – ${c.v.label}` : ""} (Abonnement -10%)`,
      priceNok: c.subPrice,
      qty: 1,
    });
  };

  // ---------- UI styles (samme uttrykk som hero) ----------
  const baseBtn =
    "inline-flex items-center justify-center rounded-full px-4 h-11 text-sm font-extrabold transition select-none";

  const outlineStyle = {
    background: "rgba(255,255,255,0.70)",
    color: "var(--ink)",
    border: "1px solid var(--line)",
  } as const;

  const primaryStyle = {
    background: "var(--g-primary)",
    color: "#fff",
    border: "1px solid transparent",
  } as const;

  const accentStyle = {
    background: "var(--accent)",
    color: "#fff",
    border: "1px solid transparent",
  } as const;

  const disabledStyle = {
    opacity: 0.55,
    cursor: "not-allowed",
  } as const;

  // ---------- Slider ----------
  const railRef = useRef<HTMLDivElement | null>(null);

  const scrollByCard = (dir: -1 | 1) => {
    const rail = railRef.current;
    if (!rail) return;

    // finn ca. "kort-bredde" (snap width)
    const card = rail.querySelector<HTMLElement>("[data-subcard]");
    const w = card?.offsetWidth ?? 360;
    rail.scrollBy({ left: dir * (w + 16), behavior: "smooth" });
  };

  return (
    <section id="subscription" className="mx-auto w-full max-w-6xl px-6 py-10">
      <div
        className="rounded-3xl border p-8 sm:p-10"
        style={{
          background: "var(--surface)",
          borderColor: "var(--line)",
          boxShadow: "var(--shadow-soft)",
        }}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-semibold" style={{ color: "var(--slate)" }}>
              Abonnement • The Essentials System
            </p>

            <h2
              className="mt-2 text-2xl sm:text-3xl font-extrabold"
              style={{ fontFamily: "var(--font-heading)", color: "var(--ink)" }}
            >
              Abonnement (30 dager)
            </h2>

            <p className="mt-2 text-base sm:text-lg leading-7" style={{ color: "var(--slate)" }}>
              Spar <b>10%</b> og få en ny leveranse hver måned. Du binder deg kun til{" "}
              <b>én leveranse om gangen</b> – når du sier opp, kommer siste leveranse som normalt,
              og abonnementet stopper deretter.
            </p>
          </div>

          <a
            href="/system"
            className="hidden sm:inline-flex h-11 items-center justify-center rounded-full px-5 text-sm font-extrabold"
            style={outlineStyle}
          >
            Les mer
          </a>
        </div>

        <div className="mt-6 grid gap-3 text-sm" style={{ color: "var(--ink)" }}>
          <div>• <b>10% rabatt</b> når du abonnerer</div>
          <div>• <b>Én måned om gangen</b> – stopp når du vil</div>
          <div>• Vi sender deg en pakke i måneden, klar for neste 30-dagers periode</div>
        </div>

        {/* ---------- Slider header ---------- */}
        <div className="mt-8 flex items-center justify-between gap-3">
          <div className="text-sm font-semibold" style={{ color: "var(--slate)" }}>
            Hurtig-abonner
          </div>

          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={() => scrollByCard(-1)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full ring-1"
              style={outlineStyle}
              aria-label="Forrige"
              title="Forrige"
            >
              ‹
            </button>
            <button
              onClick={() => scrollByCard(1)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full ring-1"
              style={outlineStyle}
              aria-label="Neste"
              title="Neste"
            >
              ›
            </button>
          </div>
        </div>

        {/* ---------- Slider rail ---------- */}
        <div className="relative mt-4">
          {/* Piler over rail på desktop */}
          <button
            onClick={() => scrollByCard(-1)}
            className="hidden lg:inline-flex absolute left-[-14px] top-1/2 -translate-y-1/2 h-11 w-11 items-center justify-center rounded-full ring-1 z-10"
            style={outlineStyle}
            aria-label="Forrige"
            title="Forrige"
          >
            ‹
          </button>

          <button
            onClick={() => scrollByCard(1)}
            className="hidden lg:inline-flex absolute right-[-14px] top-1/2 -translate-y-1/2 h-11 w-11 items-center justify-center rounded-full ring-1 z-10"
            style={outlineStyle}
            aria-label="Neste"
            title="Neste"
          >
            ›
          </button>

          <div
            ref={railRef}
            className={[
              "no-scrollbar",
              "flex gap-4 overflow-x-auto scroll-smooth",
              "snap-x snap-mandatory",
              "pb-2",
            ].join(" ")}
          >
            {cards.map((c) => {
              const p = c.p;
              const v = c.v;

              return (
                <article
                  key={p.id}
                  data-subcard
                  className={[
                    "snap-start shrink-0",
                    "w-[86%] sm:w-[420px] lg:w-[460px]",
                    "rounded-3xl border p-5",
                  ].join(" ")}
                  style={{
                    borderColor: "var(--line)",
                    background: "rgba(255,255,255,0.55)",
                    boxShadow: "var(--shadow-soft)",
                  }}
                >
                  {/* Top row: image + title */}
                  <div className="flex items-start gap-3">
                    <div
                      className="relative h-14 w-14 overflow-hidden rounded-2xl border"
                      style={{
                        borderColor: "var(--line)",
                        background: "rgba(255,255,255,0.75)",
                      }}
                    >
                      <Image src={c.img} alt={p.name} fill className="object-contain" />
                    </div>

                    <div className="min-w-0">
                      <div
                        className="text-lg font-extrabold"
                        style={{ fontFamily: "var(--font-heading)", color: "var(--ink)" }}
                      >
                        {p.name}
                      </div>
                      <div className="mt-1 text-sm" style={{ color: "var(--slate)" }}>
                        {v?.subtitle ? `${p.subtitle} • ${v.subtitle}` : p.subtitle}
                      </div>
                    </div>
                  </div>

                  {/* Variant buttons (if multiple) */}
                  {(p.variants?.length ?? 0) > 1 ? (
                    <div className="mt-4">
                      <div className="text-sm font-semibold" style={{ color: "var(--slate)" }}>
                        Velg variant
                      </div>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {p.variants.map((x) => {
                          const active = x.id === c.vid;
                          return (
                            <button
                              key={x.id}
                              onClick={() => setPick((prev) => ({ ...prev, [p.id]: x.id }))}
                              className={baseBtn}
                              style={active ? accentStyle : outlineStyle}
                            >
                              {x.label}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ) : null}

                  {/* Price + small “Les mer” */}
                  <div className="mt-5 flex items-baseline justify-between gap-3">
                    <div className="text-sm font-semibold" style={{ color: "var(--slate)" }}>
                      Abonnement (−10%)
                      <a
                        href="#subscription"
                        className="ml-2 text-xs font-extrabold"
                        style={{ textDecoration: "underline", color: "rgba(11,18,32,0.75)" }}
                        title="Les mer om abonnement"
                      >
                        Les mer
                      </a>
                    </div>
                    <div className="text-2xl font-extrabold" style={{ color: "var(--ink)" }}>
                      {formatNok(c.subPrice)}
                    </div>
                  </div>

                  <div className="mt-1 text-xs" style={{ color: "var(--slate)" }}>
                    Lager: <b style={{ color: "var(--ink)" }}>{c.stockQty}</b>
                  </div>

                  {/* CTA */}
                  <div className="mt-4 grid gap-3">
                    <button
                      onClick={() => subscribe(c)}
                      disabled={c.soldOut}
                      className={baseBtn}
                      style={{
                        ...primaryStyle,
                        ...(c.soldOut ? disabledStyle : null),
                      }}
                    >
                      {c.soldOut ? "Utsolgt" : "Abonner"}
                    </button>

                    <a
                      href="/cart"
                      className="inline-flex h-11 items-center justify-center rounded-full px-4 text-sm font-extrabold"
                      style={outlineStyle}
                    >
                      Gå til handlekurv
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* Bottom nav */}
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <a
            href="#produkter"
            className="inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-extrabold"
            style={primaryStyle}
          >
            Se produktene
          </a>
          <a
            href="/system"
            className="inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-extrabold"
            style={outlineStyle}
          >
            Les mer om systemet
          </a>
        </div>
      </div>
    </section>
  );
}