// /Users/oystein/nettsider/smootday-v2-feb-26/src/app/(public)/panel/sections/Section3Om.tsx

export default function Section3Om() {
  return (
    <section id="om" className="mx-auto w-full max-w-6xl px-6 pb-10">
      <div
        className="rounded-3xl border p-8 sm:p-10"
        style={{
          background: "var(--surface)",
          borderColor: "var(--line)",
          boxShadow: "var(--shadow-card)",
        }}
      >
        <div className="max-w-3xl">
          <p className="text-sm font-semibold" style={{ color: "var(--slate)" }}>
            Om SmoDay • Hvorfor vi bygger det essensielle systemet
          </p>

          <h2
            className="mt-3 text-2xl sm:text-4xl font-extrabold tracking-tight"
            style={{ fontFamily: "var(--font-heading)", color: "var(--ink)" }}
          >
            Vi startet under{" "}
            <span
              style={{
                background: "var(--g-primary)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              koronaen
            </span>{" "}
            fordi vi så hvor viktig det er å ta vare på kroppen – i praksis.
          </h2>

        <p className="mt-4 text-lg leading-8" style={{ color: "var(--slate)" }}>
  Under koronaen ble det tydelig hvor viktig <b>grunnmuren</b> er i praksis:
  søvn, aktivitet, næringsrik mat – og rutiner som faktisk er mulig å følge over tid.
  Vi stilte oss spørsmålet: <b>Hvordan kan vi gjøre det enklere å støtte kroppen – hver dag?</b>
</p>

<p className="mt-3 text-lg leading-8" style={{ color: "var(--slate)" }}>
  Svaret ble et system bygget rundt <b>essensielle næringsstoffer</b> – byggesteiner kroppen trenger jevnlig,
  men som den ikke alltid kan produsere selv (eller nok av). Vi fokuserer på <b>det viktigste</b>,
  og på <b>biotilgjengelighet</b> – altså hva kroppen faktisk tar opp og bruker.
</p>

<p className="mt-3 text-lg leading-8" style={{ color: "var(--slate)" }}>
  Derfor har vi brukt år på å finne produsenter som leverer <b>kvalitet</b>, <b>dokumentasjon</b> og
  <b>stabil produksjon</b>. Resultatet er The Essentials System – et enkelt oppsett med 
  <b> drikk/pulver</b>, <b>kapsler</b> og <b>omega-3 som softgel</b> for best opplevelse.
</p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a
              href="/about"
              className="inline-flex h-12 items-center justify-center px-6 text-sm font-extrabold"
              style={{
                background: "rgba(255,255,255,0.70)",
                color: "var(--ink)",
                border: "1px solid var(--line)",
                borderRadius: 9999,
              }}
            >
              Les hele historien
            </a>
          </div>

          <p className="mt-4 text-xs leading-6" style={{ color: "var(--slate)" }}>
            *Systemet er laget for å støtte en praktisk hverdagsrutine sammen med et sunt kosthold og fysisk aktivitet.
          </p>
        </div>
      </div>
    </section>
  );
}