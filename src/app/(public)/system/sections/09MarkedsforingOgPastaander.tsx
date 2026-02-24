export default function S09MarkedsforingOgPastaander() {
  return (
    <section id="paastander" className="mx-auto w-full max-w-6xl px-6 pb-14">
      <div
        className="rounded-3xl border p-8 sm:p-10"
        style={{
          background: "var(--surface)",
          borderColor: "var(--line)",
          boxShadow: "var(--shadow-soft)",
        }}
      >
        <p className="text-sm font-semibold" style={{ color: "var(--slate)" }}>
          Hvordan vi kommuniserer
        </p>

        <h2
          className="mt-3 text-2xl sm:text-4xl font-extrabold tracking-tight"
          style={{ fontFamily: "var(--font-heading)", color: "var(--ink)" }}
        >
          Mindre hype. Mer dokumentasjon.
        </h2>

        <p className="mt-4 text-lg leading-8" style={{ color: "var(--slate)" }}>
          Vi lover ikke mirakler. Vi bygger en enkel rutine som er lett å følge.
          Når vi bruker konkrete påstander, skal de være etterprøvbare og knyttet til
          dokumentasjon og korrekt bruk.
        </p>

        <div className="mt-6 grid gap-3 text-sm" style={{ color: "var(--ink)" }}>
          <div>• Fokus på rutine og oversikt</div>
          <div>• Kvalitet, test og sporbarhet</div>
          <div>• Tydelig info om hva det er – og ikke er</div>
        </div>
      </div>
    </section>
  );
}