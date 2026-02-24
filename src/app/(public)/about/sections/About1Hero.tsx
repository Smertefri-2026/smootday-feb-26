export default function AboutHero() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 pt-10 pb-6">
      <div
        className="rounded-3xl border p-8 sm:p-10"
        style={{
          background: "var(--surface)",
          borderColor: "var(--line)",
          boxShadow: "var(--shadow-card)",
        }}
      >
        <p className="text-sm font-semibold" style={{ color: "var(--slate)" }}>
          Om SmoDay • Bakgrunn og visjon
        </p>

        <h1
          className="mt-3 text-3xl sm:text-5xl font-extrabold tracking-tight"
          style={{ fontFamily: "var(--font-heading)", color: "var(--ink)" }}
        >
          Vi bygger et{" "}
          <span
            style={{
              background: "var(--g-primary)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            essensielt system
          </span>{" "}
          som gjør det enklere å dekke det kroppen trenger — hver dag.
        </h1>

        <p className="mt-4 text-lg leading-8" style={{ color: "var(--slate)" }}>
          Målet er en enkel rutine: få oversikt, forstå hva som faktisk er viktig, og
          velg et fåtall produkter som dekker “grunnmuren”.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <a
            href="/panel#produkter"
            className="inline-flex h-12 items-center justify-center px-6 text-sm font-extrabold"
            style={{ background: "var(--g-primary)", color: "#fff", borderRadius: 9999 }}
          >
            Se produkter
          </a>
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
            Les om systemet
          </a>
        </div>
      </div>
    </section>
  );
}