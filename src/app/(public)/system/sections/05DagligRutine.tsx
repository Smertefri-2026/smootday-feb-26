export default function S05DagligRutine() {
  return (
    <section id="rutine" className="mx-auto w-full max-w-6xl px-6 pb-10">
      <div
        className="rounded-3xl border p-8 sm:p-10"
        style={{
          background: "var(--surface)",
          borderColor: "var(--line)",
          boxShadow: "var(--shadow-soft)",
        }}
      >
        <p className="text-sm font-semibold" style={{ color: "var(--slate)" }}>
          Daglig rutine
        </p>

        <h2
          className="mt-3 text-2xl sm:text-4xl font-extrabold tracking-tight"
          style={{ fontFamily: "var(--font-heading)", color: "var(--ink)" }}
        >
          Stabilt nok til å funke.
        </h2>

        <div className="mt-5 grid gap-4 sm:grid-cols-3 text-sm">
          <div className="rounded-2xl border p-5" style={{ borderColor: "var(--line)" }}>
            <b>Morgen</b>
            <div className="mt-2" style={{ color: "var(--slate)" }}>
              ODF (smoothie/pulver) + vann
            </div>
          </div>
          <div className="rounded-2xl border p-5" style={{ borderColor: "var(--line)" }}>
            <b>Med mat</b>
            <div className="mt-2" style={{ color: "var(--slate)" }}>
              Omega-3 (softgel)
            </div>
          </div>
          <div className="rounded-2xl border p-5" style={{ borderColor: "var(--line)" }}>
            <b>Kveld / etter behov</b>
            <div className="mt-2" style={{ color: "var(--slate)" }}>
              Sporstoffer (enkelt, konsekvent)
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}