export default function Section3cWhyDifferent() {
  const points = [
    { t: "System, ikke enkelprodukter", d: "Du bygger helhet – ikke tilfeldige enkeltvalg." },
    { t: "Enkelt å følge", d: "Færre beslutninger, mer konsistens." },
    { t: "Kategorier som gir mening", d: "Aminos, vitaminer, mineraler, fett, hydrering og performance." },
  ];

  return (
    <section id="different" className="mx-auto w-full max-w-6xl px-6 py-10">
      <div className="rounded-3xl border p-8 sm:p-10" style={{ background: "var(--surface)", borderColor: "var(--line)", boxShadow: "var(--shadow-soft)" }}>
        <h2 className="text-2xl sm:text-3xl font-extrabold" style={{ fontFamily: "var(--font-heading)" }}>
          Hva som gjør SmoDay annerledes
        </h2>
        <p className="mt-2" style={{ color: "var(--slate)" }}>
          Målet er å gjøre “riktig” enklere – og mer gjennomførbart.
        </p>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {points.map((p) => (
            <div key={p.t} className="rounded-3xl border p-6" style={{ borderColor: "var(--line)", background: "rgba(255,255,255,0.70)" }}>
              <div className="text-lg font-extrabold" style={{ color: "var(--ink)" }}>
                {p.t}
              </div>
              <p className="mt-2 text-sm" style={{ color: "var(--slate)" }}>
                {p.d}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}