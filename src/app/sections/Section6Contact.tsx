export default function Section6Contact() {
  return (
    <section id="kontakt" className="mx-auto w-full max-w-6xl px-6 py-10 pb-16">
      <div className="rounded-3xl border p-8 sm:p-10" style={{ background: "var(--surface)", borderColor: "var(--line)", boxShadow: "var(--shadow-soft)" }}>
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xl">
            <h2 className="text-2xl sm:text-3xl font-extrabold" style={{ fontFamily: "var(--font-heading)" }}>
              Kontakt
            </h2>
            <p className="mt-2" style={{ color: "var(--slate)" }}>
              Spør oss om varianter, innhold, lansering eller samarbeid.
            </p>

            <div className="mt-6 grid gap-3">
              <input className="h-12 rounded-2xl border px-4 text-sm" placeholder="Navn" />
              <input className="h-12 rounded-2xl border px-4 text-sm" placeholder="E-post" />
              <textarea className="rounded-2xl border p-4 text-sm" rows={4} placeholder="Melding" />
              <button className="h-12 rounded-full text-sm font-extrabold" style={{ background: "var(--g-primary)", color: "#fff" }}>
                Send (kommer)
              </button>
              <div className="text-xs" style={{ color: "var(--slate)" }}>
                (Skjema kobles til e-post/CRM senere.)
              </div>
            </div>
          </div>

          <div className="w-full md:max-w-sm rounded-3xl border p-6" style={{ background: "var(--bg-2)", borderColor: "var(--line)" }}>
            <div className="text-sm font-semibold" style={{ color: "var(--slate)" }}>
              15 min samtale
            </div>
            <div className="mt-2 text-lg font-extrabold" style={{ color: "var(--ink)" }}>
              Book en kort prat
            </div>
            <p className="mt-2 text-sm" style={{ color: "var(--slate)" }}>
              Vi kan hjelpe deg velge riktig variant og forklare systemet.
            </p>

            <a
              href="https://cal.com/smertefri/15min"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex h-12 w-full items-center justify-center rounded-full px-6 text-sm font-extrabold"
              style={{ background: "var(--g-primary)", color: "#fff" }}
            >
              Book 15 min
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}