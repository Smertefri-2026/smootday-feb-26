export default function S04Variantvalg() {
  return (
    <section id="variantvalg" className="mx-auto w-full max-w-6xl px-6 pb-10">
      <div
        className="rounded-3xl border p-8 sm:p-10"
        style={{
          background: "var(--surface)",
          borderColor: "var(--line)",
          boxShadow: "var(--shadow-soft)",
        }}
      >
        <p className="text-sm font-semibold" style={{ color: "var(--slate)" }}>
          Variantvalg
        </p>

        <h2
          className="mt-3 text-2xl sm:text-4xl font-extrabold tracking-tight"
          style={{ fontFamily: "var(--font-heading)", color: "var(--ink)" }}
        >
          Smoothie eller pulver?
        </h2>

        <div className="mt-4 grid gap-4 sm:grid-cols-2 text-sm">
          <div className="rounded-2xl border p-5" style={{ borderColor: "var(--line)" }}>
            <b>ODF Smoothie</b>
            <p className="mt-2" style={{ color: "var(--slate)" }}>
              Velg når du vil ha den enkleste rutinen: klar på sekunder.
            </p>
          </div>

          <div className="rounded-2xl border p-5" style={{ borderColor: "var(--line)" }}>
            <b>ODF Pulver</b>
            <p className="mt-2" style={{ color: "var(--slate)" }}>
              Velg når du vil ha fleksibilitet: bland i vann – eller i din egen smoothie.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}