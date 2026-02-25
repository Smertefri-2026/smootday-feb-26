// /Users/oystein/nettsider/smootday-v2-feb-26/src/app/(public)/benefits/sections/04BenefitsTrace.tsx

import Image from "next/image";
import { traceClaims } from "./claims";

function ProductBox() {
  return (
    <div
      className="rounded-3xl border p-4 sm:p-5"
      style={{
        borderColor: "var(--line)",
        background: "rgba(255,255,255,0.55)",
        boxShadow: "var(--shadow-soft)",
      }}
    >
      <div className="relative w-full overflow-hidden rounded-3xl aspect-4/3">
        <Image src="/products/trace.png" alt="Sporstoffer" fill className="object-cover object-center" />
      </div>

      <div className="mt-4">
        <div
          className="text-base font-extrabold"
          style={{ color: "var(--ink)", fontFamily: "var(--font-heading)" }}
        >
          Sporstoffer
        </div>

        <p className="mt-2 text-base leading-7" style={{ color: "var(--slate)" }}>
          En enkel “top-up” i rutinen – brukt når du ønsker en mer komplett base.
        </p>

        <a
          href="/products"
          className="mt-4 inline-flex w-full items-center justify-center rounded-2xl border px-4 py-3 text-base font-extrabold"
          style={{ borderColor: "var(--line)", color: "var(--ink)", background: "var(--surface)" }}
        >
          Kjøp Sporstoffer
        </a>
      </div>
    </div>
  );
}

export default function S04BenefitsTrace() {
  return (
    <section id="benefits-trace" className="mx-auto w-full max-w-6xl px-6 pb-10">
      <div
        className="rounded-3xl border p-6 sm:p-8"
        style={{
          background: "var(--surface)",
          borderColor: "var(--line)",
          boxShadow: "var(--shadow-card)",
        }}
      >
        <div className="grid gap-8 lg:grid-cols-[2fr_1fr] lg:items-start">
          {/* LEFT */}
          <div className="min-w-0">
            <p className="text-sm font-semibold" style={{ color: "var(--slate)" }}>
              • Sporstoffer
            </p>

            <h2
              className="mt-2 text-2xl sm:text-3xl font-extrabold"
              style={{ fontFamily: "var(--font-heading)", color: "var(--ink)" }}
            >
              Sporstoffer – helsepåstander
            </h2>

            <p className="mt-4 text-lg leading-8" style={{ color: "var(--slate)" }}>
              Under viser vi godkjente helsepåstander knyttet til næringsstoffene i
              sporstoffer-produktet.
            </p>

            <div className="mt-8">
              {traceClaims.map((c, idx) => (
                <div key={idx} className={idx === 0 ? "" : "mt-10"}>
                  <div
                    className="text-lg sm:text-xl font-extrabold"
                    style={{ color: "var(--ink)", fontFamily: "var(--font-heading)" }}
                  >
                    {c.nutrient}
                  </div>

                  <div className="mt-2 text-base leading-7" style={{ color: "var(--ink)" }}>
                    • {c.statement}
                  </div>

                  {c.notes ? (
                    <div className="mt-3 text-base leading-7" style={{ color: "var(--slate)" }}>
                      {c.notes}
                    </div>
                  ) : null}

                  {idx < traceClaims.length - 1 ? (
                    <div className="mt-8 border-t" style={{ borderColor: "var(--line)" }} />
                  ) : null}
                </div>
              ))}
            </div>

            <div className="mt-8 text-xs" style={{ color: "var(--slate)" }}>
              *Kilder og regelverk er samlet nederst på siden.
            </div>
          </div>

          {/* RIGHT */}
          <div className="space-y-6 lg:sticky lg:top-20">
            <ProductBox />
          </div>
        </div>
      </div>
    </section>
  );
}