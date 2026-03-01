// /Users/oystein/nettsider/smootday-v2-feb-26/src/app/(public)/about/sections/About1Hero.tsx

export default function About1Hero() {
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
          Et{" "}
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
          Vi startet under pandemien, da mange fikk kjenne på hvor viktig{" "}
          <b>grunnlagene</b> er: søvn, aktivitet, næringsrik mat – og en rutine som
          faktisk er mulig å holde. SmoDay handler om å gjøre “riktig” enklere,
          uten støy og uten hundre valg.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <a
            href="/panel#produkter"
            className="inline-flex h-12 items-center justify-center px-6 text-sm font-extrabold"
            style={{
              background: "var(--g-primary)",
              color: "#fff",
              borderRadius: 9999,
            }}
          >
            Se produktene
          </a>

          <a
            href="/benefits"
            className="inline-flex h-12 items-center justify-center px-6 text-sm font-extrabold"
            style={{
              background: "rgba(255,255,255,0.70)",
              color: "var(--ink)",
              border: "1px solid var(--line)",
              borderRadius: 9999,
            }}
          >
            Les om helse & grunnmur
          </a>
        </div>

        <p className="mt-4 text-xs leading-6" style={{ color: "rgba(11,18,32,0.60)" }}>
          Mer detaljer og kilder ligger på helsesiden, slik at forsiden kan være kort og enkel.
        </p>
      </div>
    </section>
  );
}