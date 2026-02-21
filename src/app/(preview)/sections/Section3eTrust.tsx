export default function Section3eTrust() {
  const items = [
    { t: "Kvalitet", d: "Fokus på renhet, konsistens og dokumentasjon." },
    { t: "Standarder", d: "Produksjon og rutiner som tåler et profesjonelt marked." },
    { t: "Testing", d: "Vi legger opp til testing / verifisering der det er relevant." },
  ];

  return (
    <section id="trust" className="mx-auto w-full max-w-6xl px-6 py-10">
      <h2 className="text-2xl sm:text-3xl font-extrabold" style={{ fontFamily: "var(--font-heading)" }}>
        Trust & kvalitet
      </h2>
      <p className="mt-2" style={{ color: "var(--slate)" }}>
        Vi deler det som er trygt å dele nå – mer detaljert informasjon kommer når produktene er klare.
      </p>

      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {items.map((x) => (
          <div key={x.t} className="rounded-3xl border p-6" style={{ background: "var(--surface)", borderColor: "var(--line)", boxShadow: "var(--shadow-soft)" }}>
            <div className="text-lg font-extrabold" style={{ color: "var(--ink)" }}>
              {x.t}
            </div>
            <p className="mt-2 text-sm" style={{ color: "var(--slate)" }}>
              {x.d}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}