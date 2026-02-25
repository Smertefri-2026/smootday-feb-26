// /Users/oystein/nettsider/smootday-v2-feb-26/src/app/(public)/benefits/sections/01BenefitsHero.tsx

import Image from "next/image";

export default function S01BenefitsHero() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 pt-10 pb-10">
      <div
        className="rounded-3xl border p-8 sm:p-10"
        style={{
          background: "var(--surface)",
          borderColor: "var(--line)",
          boxShadow: "var(--shadow-card)",
        }}
      >
        <div className="grid gap-8 lg:grid-cols-[2fr_1fr] lg:items-center">
          {/* TEXT */}
          <div className="min-w-0">
            <p className="text-sm font-semibold" style={{ color: "var(--slate)" }}>
              • Helsegevinster (godkjente påstander)
            </p>

            <h1
              className="mt-3 text-3xl sm:text-5xl font-extrabold tracking-tight"
              style={{ fontFamily: "var(--font-heading)", color: "var(--ink)" }}
            >
              Helsepåstander i{" "}
              <span
                style={{
                  background: "var(--g-primary)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                The Essentials System
              </span>
            </h1>

            <p className="mt-4 text-lg leading-8" style={{ color: "var(--slate)" }}>
              The Essentials System er bygget som en enkel rutine med tre produkter (ODF, Omega-3 og
              sporstoffer). Under har vi samlet helsepåstander som er tillatt å bruke i EU/EØS, og
              knyttet dem til riktig produkt.
            </p>

            <p className="mt-3 text-lg leading-8" style={{ color: "var(--slate)" }}>
              The Essentials System består totalt av <b>45 ingredienser</b>. Her viser vi kun
              godkjente helsepåstander – ikke påstander basert på rykter eller «jeg har hørt».
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#benefits-odf"
                className="rounded-full border px-5 py-2.5 text-sm font-extrabold"
                style={{
                  borderColor: "var(--line)",
                  color: "var(--ink)",
                  background: "var(--surface)",
                }}
              >
                Se helsepåstander
              </a>

              <a
                href="#benefits-sources"
                className="rounded-full border px-5 py-2.5 text-sm font-semibold"
                style={{
                  borderColor: "var(--line)",
                  color: "var(--slate)",
                  background: "rgba(255,255,255,0.55)",
                }}
              >
                Se kilder
              </a>
            </div>

            <div className="mt-5 text-xs" style={{ color: "var(--slate)" }}>
              *Helsepåstander brukes kun der produktet oppfyller vilkår/terskler (f.eks. «kilde til» /
              «høyt innhold av»), i tråd med EU/EØS-regelverket.
            </div>
          </div>

          {/* IMAGE */}
          <div className="order-last lg:order-0">
            <div
              className="rounded-3xl border p-3 sm:p-4"
              style={{
                borderColor: "var(--line)",
                background: "rgba(255,255,255,0.55)",
                boxShadow: "var(--shadow-soft)",
              }}
            >
              <div className="relative w-full overflow-hidden rounded-3xl aspect-4/3 lg:aspect-3/4">
                <Image
                  src="/om.png"
                  alt="SmoDay – helsegevinster"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>

              <p className="mt-3 text-xs sm:text-sm" style={{ color: "var(--slate)" }}>
                Tydelig per produkt: ODF, Omega-3 og sporstoffer – med kun godkjente påstander.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}