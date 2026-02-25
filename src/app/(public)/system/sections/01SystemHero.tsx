// /Users/oystein/nettsider/smootday-v2-feb-26/src/app/(public)/system/sections/01SystemHero.tsx

import Image from "next/image";

export default function S01SystemHero() {
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
              • The Essentials System
            </p>

            <h1
              className="mt-3 text-3xl sm:text-5xl font-extrabold tracking-tight"
              style={{ fontFamily: "var(--font-heading)", color: "var(--ink)" }}
            >
              Vi bygger et essensielt system som gjør det enklere å dekke det kroppen
              trenger — hver dag.
            </h1>

            <p className="mt-4 text-lg leading-8" style={{ color: "var(--slate)" }}>
              The Essentials System er laget for å dekke det som er <b>essensielt</b> – altså
              næringsstoffer kroppen trenger jevnlig for normal funksjon. Noe kan kroppen
              ikke produsere selv (eller ikke nok), og må derfor komme fra mat – og i praksis
              kan det være vanskelig å treffe alt, hver eneste dag.
            </p>

            <p className="mt-3 text-lg leading-8" style={{ color: "var(--slate)" }}>
              Derfor har vi laget et system som fokuserer på <b>det du faktisk trenger</b> – ikke
              mer, ikke mindre. En enkel rutine bygget rundt de mest grunnleggende
              “byggesteinene” for voksne mennesker, uansett hvor i verden du bor.
            </p>

            <div className="mt-6 grid gap-2 text-sm" style={{ color: "var(--ink)" }}>
              <div>• Et system (ikke et “mirakelprodukt”)</div>
              <div>• Kun essensielt</div>
              <div>• Bygget for å være enkelt å følge hver dag</div>
            </div>
          </div>

          {/* IMAGE (right on desktop, bottom on mobile) */}
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
                  src="/products/system1.png"
                  alt="The Essentials System – SmoDay"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>

              <p className="mt-3 text-xs sm:text-sm" style={{ color: "var(--slate)" }}>
                Et system – ikke et mirakelprodukt. Kun essensielt, bygget for å være enkelt å følge.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}