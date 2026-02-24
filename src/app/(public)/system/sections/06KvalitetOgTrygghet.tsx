export default function S06KvalitetOgTrygghet() {
  return (
    <section id="kvalitet" className="mx-auto w-full max-w-6xl px-6 pb-10">
      <div
        className="rounded-3xl border p-8 sm:p-10"
        style={{
          background: "var(--surface)",
          borderColor: "var(--line)",
          boxShadow: "var(--shadow-soft)",
        }}
      >
        <p className="text-sm font-semibold" style={{ color: "var(--slate)" }}>
          Kvalitet og trygghet
        </p>

        <h2
          className="mt-3 text-2xl sm:text-4xl font-extrabold tracking-tight"
          style={{ fontFamily: "var(--font-heading)", color: "var(--ink)" }}
        >
          Seriøsitet uten støy.
        </h2>

        <p className="mt-4 text-lg leading-8" style={{ color: "var(--slate)" }}>
          Tilskudd markedføres ofte for aggressivt. Vi gjør det motsatt:
          dokumentasjon, forutsigbar kvalitet og tydelig informasjon.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-3 text-sm">
          <div className="rounded-2xl border p-5" style={{ borderColor: "var(--line)" }}>
            <b>Batch & rutiner</b>
            <div className="mt-2" style={{ color: "var(--slate)" }}>
              Stabil produksjon og kontroll
            </div>
          </div>
          <div className="rounded-2xl border p-5" style={{ borderColor: "var(--line)" }}>
            <b>Testing</b>
            <div className="mt-2" style={{ color: "var(--slate)" }}>
              Plan for analyse/verifisering
            </div>
          </div>
          <div className="rounded-2xl border p-5" style={{ borderColor: "var(--line)" }}>
            <b>Åpenhet</b>
            <div className="mt-2" style={{ color: "var(--slate)" }}>
              Ingen “hemmelige blends”
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}