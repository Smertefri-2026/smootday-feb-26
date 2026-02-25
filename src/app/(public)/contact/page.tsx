// /src/app/(public)/contact/page.tsx

export default function ContactPage() {
  return (
    <div
      id="top"
      className="min-h-screen"
      style={{
        background:
          "linear-gradient(180deg, var(--bg) 0%, var(--bg-2) 60%, var(--bg) 100%)",
      }}
    >
      <main className="mx-auto w-full max-w-4xl px-6 pt-10 pb-16">
        <section
          className="rounded-3xl border p-8 sm:p-10"
          style={{
            background: "var(--surface)",
            borderColor: "var(--line)",
            boxShadow: "var(--shadow-card)",
          }}
        >
          <p className="text-sm font-semibold" style={{ color: "var(--slate)" }}>
            Kontakt
          </p>

          <h1
            className="mt-3 text-3xl sm:text-5xl font-extrabold tracking-tight"
            style={{ fontFamily: "var(--font-heading)", color: "var(--ink)" }}
          >
            Spørsmål om produkter, innhold eller levering?
          </h1>

          <p className="mt-4 text-lg leading-8" style={{ color: "var(--slate)" }}>
            Send oss en melding – så svarer vi så raskt vi kan. (Kontakt-skjema kan
            kobles på senere.)
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div
              className="rounded-2xl border p-6"
              style={{
                borderColor: "var(--line)",
                background: "rgba(255,255,255,0.70)",
              }}
            >
              <div className="text-sm font-semibold" style={{ color: "var(--slate)" }}>
                E-post
              </div>
              <div className="mt-2 text-lg font-extrabold" style={{ color: "var(--ink)" }}>
                post@smood.day
              </div>
              <div className="mt-1 text-sm" style={{ color: "var(--slate)" }}>
                (Bytt til din faktiske e-post)
              </div>
            </div>

            <div
              className="rounded-2xl border p-6"
              style={{
                borderColor: "var(--line)",
                background: "rgba(255,255,255,0.70)",
              }}
            >
              <div className="text-sm font-semibold" style={{ color: "var(--slate)" }}>
                Vanlige spørsmål
              </div>
              <div className="mt-2 text-lg font-extrabold" style={{ color: "var(--ink)" }}>
                Se FAQ
              </div>
              <div className="mt-3">
                <a
                  href="/benefits#faq"
                  className="inline-flex h-11 items-center justify-center rounded-full px-5 text-sm font-extrabold"
                  style={{ background: "var(--g-primary)", color: "#fff" }}
                >
                  Åpne FAQ
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="/products"
              className="inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-extrabold ring-1"
              style={{ background: "var(--surface)", color: "var(--ink)", borderColor: "var(--line)" }}
            >
              Se produkter
            </a>

            <a
              href="/cart"
              className="inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-extrabold"
              style={{ background: "var(--g-primary)", color: "var(--ink)" }}
            >
              Gå til handlekurv
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}