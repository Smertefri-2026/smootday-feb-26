// /Users/oystein/nettsider/smootday-v2-feb-26/src/app/(public)/panel/sections/Section5HowItWorks.tsx

export default function Section5HowItWorks() {
  const steps = [
    {
      t: "1) Grunnmur først",
      d: "Det essensielle handler ikke bare om tilskudd. Det starter med nok søvn, mat med høy næringstetthet, nok væske og regelmessig aktivitet.",
    },
    {
      t: "2) Grunnpakken (3 produkter)",
      d: "Vi har samlet det viktigste i en enkel grunnpakke: ODF som daglig basis, Omega-3 som fast vane, og Sporstoffer som kapsel for sporstoffer. Få valg – lett å følge.",
    },
    {
      t: "3) Daglig rutine over tid",
      d: "Poenget er ikke å gjøre alt perfekt én dag, men å gjøre det enkelt nok til at du faktisk gjennomfører. Stabilitet over tid gir best effekt i hverdagen.",
    },
  ];

  return (
    <section id="how" className="mx-auto w-full max-w-6xl px-6 py-10">
      <h2
        className="text-2xl sm:text-3xl font-extrabold"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        Hvordan det fungerer
      </h2>

      <p className="mt-2" style={{ color: "var(--slate)" }}>
        En enkel modell: grunnmur → 3-produkts system → rutine som varer.
      </p>

      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {steps.map((s) => (
          <div
            key={s.t}
            className="rounded-3xl border p-6"
            style={{
              background: "var(--surface)",
              borderColor: "var(--line)",
              boxShadow: "var(--shadow-soft)",
            }}
          >
            <div className="text-sm font-semibold" style={{ color: "var(--slate)" }}>
              {s.t}
            </div>
            <p className="mt-2 text-sm leading-6" style={{ color: "var(--slate)" }}>
              {s.d}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6 flex flex-col sm:flex-row gap-3">
        <a
          href="/system"
          className="inline-flex h-12 items-center justify-center px-6 text-sm font-extrabold"
          style={{
            background: "rgba(255,255,255,0.70)",
            color: "var(--ink)",
            border: "1px solid var(--line)",
            borderRadius: 9999,
          }}
        >
          Les mer om systemet
        </a>

        <a
          href="#produkter"
          className="inline-flex h-12 items-center justify-center px-6 text-sm font-extrabold"
          style={{
            background: "var(--g-primary)",
            color: "#fff",
            borderRadius: 9999,
          }}
        >
          Se produktene
        </a>
      </div>
    </section>
  );
}