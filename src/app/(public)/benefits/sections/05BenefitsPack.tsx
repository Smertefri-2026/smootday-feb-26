// /Users/oystein/nettsider/smootday-v2-feb-26/src/app/(public)/benefits/sections/05BenefitsPack.tsx

import Image from "next/image";
import { packSummary } from "./claims";

function PackBox() {
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
        <Image
          src="/products/system1.png"
          alt="Essentials-pakken"
          fill
          className="object-cover object-center"
        />
      </div>

      <div className="mt-4">
        <div
          className="text-base font-extrabold"
          style={{ color: "var(--ink)", fontFamily: "var(--font-heading)" }}
        >
          Essentials-pakken
        </div>

        <p className="mt-2 text-base leading-7" style={{ color: "var(--slate)" }}>
          En enkel rutine bygget for å være lett å følge – hver dag.
        </p>

        <a
          href="/products"
          className="mt-4 inline-flex w-full items-center justify-center rounded-2xl border px-4 py-3 text-base font-extrabold"
          style={{
            borderColor: "var(--line)",
            color: "var(--ink)",
            background: "var(--surface)",
          }}
        >
          Kjøp hele pakken
        </a>

        <div className="mt-3 text-xs" style={{ color: "var(--slate)" }}>
          *Påstander brukes der produktet oppfyller vilkår/terskler for «kilde til» / «høyt innhold av».
        </div>
      </div>
    </div>
  );
}

function OtherIngredientsInfo() {
  return (
    <div
      className="rounded-3xl border p-6 sm:p-8"
      style={{
        borderColor: "var(--line)",
        background: "rgba(255,255,255,0.55)",
        boxShadow: "var(--shadow-soft)",
      }}
    >
      <h3
        className="text-xl sm:text-2xl font-extrabold"
        style={{ color: "var(--ink)", fontFamily: "var(--font-heading)" }}
      >
        Hvorfor ikke bare bruke ingrediensene med godkjente helsepåstander?
      </h3>

      <p className="mt-3 text-lg leading-8" style={{ color: "var(--slate)" }}>
        Fordi <b>The Essentials System</b> er laget som en <b>helhetlig, daglig base</b> – ikke som et
        “claim-produkt”. Målet er å samle det vi mener kroppen faktisk trenger i en rutine som er
        realistisk å følge over tid, og derfor inneholder systemet også ingredienser som er viktige i
        et komplett kosthold – selv om de ikke har forhåndsgodkjente helsepåstander.
      </p>

      <p className="mt-3 text-lg leading-8" style={{ color: "var(--slate)" }}>
        I EU/EØS er det strenge regler for hvilke helsepåstander man kan bruke i markedsføring. Når
        det ikke finnes godkjente helsepåstander for en ingrediens, velger vi derfor å kommunisere{" "}
        <b>innhold og rolle</b> – ikke effekter. Det er ryddig, ærlig og i tråd med regelverket.
      </p>

      <div className="mt-5">
        <div
          className="text-base font-extrabold"
          style={{ color: "var(--ink)", fontFamily: "var(--font-heading)" }}
        >
          Hvordan vi kommuniserer disse ingrediensene (uten helsepåstander)
        </div>

        <div className="mt-3 grid gap-2 text-base" style={{ color: "var(--ink)" }}>
          <div>• Essensiell helhet: valgt for å bygge en stabil, daglig base – ikke bare “marketing claims”.</div>
          <div>• Råvarevalg: prioriterer former som er stabile, tolereres godt og gir en god opplevelse.</div>
          <div>• Praktisk rutine: systemet er laget for å passe inn i en vanlig hverdag.</div>
          <div>• Transparens: full ingrediensliste og innhold står alltid på produktsiden.</div>
        </div>
      </div>

      <div className="mt-4 text-xs" style={{ color: "var(--slate)" }}>
        *Vi viser helsepåstander kun der de er forhåndsgodkjent, og der vilkår/terskler er oppfylt.
      </div>
    </div>
  );
}

export default function S05BenefitsPack() {
  return (
    <section id="benefits-pack" className="mx-auto w-full max-w-6xl px-6 pb-10">
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
              • Hele pakken
            </p>

            <h2
              className="mt-2 text-2xl sm:text-3xl font-extrabold"
              style={{ fontFamily: "var(--font-heading)", color: "var(--ink)" }}
            >
              Når du tar hele Essentials-pakken
            </h2>

            <p className="mt-4 text-lg leading-8" style={{ color: "var(--slate)" }}>
              ODF + Omega-3 + Sporstoffer gir en mer komplett rutine, og lar oss kommunisere flere
              godkjente helsepåstander på tvers av produktene – ryddig og dokumentert. Kilder og
              regelverk er samlet nederst på siden.
            </p>

            <div className="mt-8">
              {packSummary.map((g, idx) => (
                <div key={idx} className={idx === 0 ? "" : "mt-10"}>
                  <div
                    className="text-lg sm:text-xl font-extrabold"
                    style={{ color: "var(--ink)", fontFamily: "var(--font-heading)" }}
                  >
                    {g.title}
                  </div>

                  <div className="mt-3 grid gap-2 text-base" style={{ color: "var(--ink)" }}>
                    {g.bullets.map((b, i) => (
                      <div key={i}>• {b}</div>
                    ))}
                  </div>

                  {idx < packSummary.length - 1 ? (
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
            <PackBox />
          </div>
        </div>

        {/* ✅ Always LAST (mobile + desktop) */}
        <div className="mt-8">
          <OtherIngredientsInfo />
        </div>
      </div>
    </section>
  );
}