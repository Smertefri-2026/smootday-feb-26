export default function AboutContact() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 pb-10">
      <div
        className="rounded-3xl border p-7 sm:p-8"
        style={{ background: "var(--surface)", borderColor: "var(--line)" }}
      >
        <h2
          className="text-xl sm:text-2xl font-extrabold"
          style={{ fontFamily: "var(--font-heading)", color: "var(--ink)" }}
        >
          Kontakt
        </h2>
        <p className="mt-2 text-sm" style={{ color: "var(--slate)" }}>
          Har du spørsmål, samarbeid, eller ønsker å følge lanseringen?
        </p>

        <div className="mt-5 flex flex-col sm:flex-row gap-3">
          <a
            href="/panel#kontakt"
            className="inline-flex h-11 items-center justify-center rounded-full px-5 text-sm font-extrabold"
            style={{ background: "var(--g-primary)", color: "#fff" }}
          >
            Kontakt oss
          </a>
          <a
            href="/system"
            className="inline-flex h-11 items-center justify-center rounded-full px-5 text-sm font-extrabold"
            style={{
              background: "rgba(255,255,255,0.70)",
              color: "var(--ink)",
              border: "1px solid var(--line)",
            }}
          >
            Les mer om systemet
          </a>
        </div>
      </div>
    </section>
  );
}