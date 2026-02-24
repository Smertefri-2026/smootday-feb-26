export default function S07SystemFAQ() {
  return (
    <section id="system-faq" className="mx-auto w-full max-w-6xl px-6 pb-10">
      <div
        className="rounded-3xl border p-8 sm:p-10"
        style={{
          background: "var(--surface)",
          borderColor: "var(--line)",
          boxShadow: "var(--shadow-soft)",
        }}
      >
        <p className="text-sm font-semibold" style={{ color: "var(--slate)" }}>
          System-FAQ
        </p>

        <h2
          className="mt-3 text-2xl sm:text-4xl font-extrabold tracking-tight"
          style={{ fontFamily: "var(--font-heading)", color: "var(--ink)" }}
        >
          Vanlige spørsmål.
        </h2>

        <div className="mt-6 grid gap-3 text-sm">
          <details className="rounded-2xl border p-4" style={{ borderColor: "var(--line)" }}>
            <summary className="cursor-pointer font-extrabold">Må jeg ta alt?</summary>
            <div className="mt-2" style={{ color: "var(--slate)" }}>
              Systemet er laget for enkel rutine. Du kan starte med ODF og bygge på.
            </div>
          </details>

          <details className="rounded-2xl border p-4" style={{ borderColor: "var(--line)" }}>
            <summary className="cursor-pointer font-extrabold">Hva betyr biotilgjengelighet?</summary>
            <div className="mt-2" style={{ color: "var(--slate)" }}>
              Det handler om hva kroppen faktisk tar opp – ikke bare hva etiketten sier.
            </div>
          </details>

          <details className="rounded-2xl border p-4" style={{ borderColor: "var(--line)" }}>
            <summary className="cursor-pointer font-extrabold">Er dette “medisin”?</summary>
            <div className="mt-2" style={{ color: "var(--slate)" }}>
              Nei. Dette er et kosttilskudd-system laget for daglig rutine og oversikt.
            </div>
          </details>
        </div>
      </div>
    </section>
  );
}