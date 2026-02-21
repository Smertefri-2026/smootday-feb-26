export default function Section4Benefits() {
  return (
    <section id="systemet" className="mx-auto w-full max-w-6xl px-6 py-10">
      <h2 className="text-2xl sm:text-3xl font-extrabold" style={{ fontFamily: "var(--font-heading)" }}>
        Helsegevinster (kort)
      </h2>
      <p className="mt-2" style={{ color: "var(--slate)" }}>
        Kort forklaring nå – og “les mer”-side senere med lovlige påstander per ingrediens/kategori.
      </p>

      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {[
          { t: "Energi & fokus", d: "Støtter daglig energi gjennom stabilt inntak av nøkkelkomponenter." },
          { t: "Muskel & restitusjon", d: "Aminosyrer + næring gir bedre forutsetninger for trening." },
          { t: "Immun & balanse", d: "Vitaminer/mineraler og fettsyrer – helheten teller." },
        ].map((x) => (
          <div key={x.t} className="rounded-3xl border p-6" style={{ background: "var(--surface)", borderColor: "var(--line)" }}>
            <div className="text-lg font-extrabold" style={{ color: "var(--ink)" }}>
              {x.t}
            </div>
            <p className="mt-2 text-sm" style={{ color: "var(--slate)" }}>
              {x.d}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <a
          href="/benefits"
          className="inline-flex h-12 items-center justify-center px-6 text-sm font-extrabold"
          style={{ background: "rgba(255,255,255,0.70)", border: "1px solid var(--line)", borderRadius: 9999 }}
        >
          Les mer om helsegevinster
        </a>
      </div>
    </section>
  );
}