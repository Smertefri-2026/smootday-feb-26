export default function S03CoreStack() {
  return (
    <section id="core" className="mx-auto w-full max-w-6xl px-6 pb-10">
      <div
        className="rounded-3xl border p-8 sm:p-10"
        style={{
          background: "var(--surface)",
          borderColor: "var(--line)",
          boxShadow: "var(--shadow-soft)",
        }}
      >
        <p className="text-sm font-semibold" style={{ color: "var(--slate)" }}>
          Core stack
        </p>

        <h2
          className="mt-3 text-2xl sm:text-4xl font-extrabold tracking-tight"
          style={{ fontFamily: "var(--font-heading)", color: "var(--ink)" }}
        >
          3 produkter som dekker fundamentet.
        </h2>

        <p className="mt-4 text-lg leading-8" style={{ color: "var(--slate)" }}>
          Vi starter med tre produkter for å holde det enkelt: ODF, Omega-3 og Sporstoffer.
          Det gir deg et solid “base-lag” i systemet.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-3 text-sm">
          <div className="rounded-2xl border p-4" style={{ borderColor: "var(--line)" }}>
            <b>ODF</b>
            <div style={{ color: "var(--slate)" }}>Daglig “foundation”</div>
          </div>
          <div className="rounded-2xl border p-4" style={{ borderColor: "var(--line)" }}>
            <b>Omega-3</b>
            <div style={{ color: "var(--slate)" }}>Fettsyre-delen av systemet</div>
          </div>
          <div className="rounded-2xl border p-4" style={{ borderColor: "var(--line)" }}>
            <b>Sporstoffer</b>
            <div style={{ color: "var(--slate)" }}>Mineraler i “micro”-sporet</div>
          </div>
        </div>

        <p className="mt-4 text-sm leading-7" style={{ color: "var(--slate)" }}>
          (Senere kan vi utvide med flere moduler – men bare når det gjør systemet bedre,
          ikke mer komplisert.)
        </p>
      </div>
    </section>
  );
}