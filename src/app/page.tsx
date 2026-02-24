// /Users/oystein/nettsider/smootday-v2-feb-26/src/app/page.tsx
export default function Home() {
  return (
    <div
      className="min-h-screen flex items-center justify-center px-6"
      style={{
        background:
          "linear-gradient(180deg, var(--bg) 0%, var(--bg-2) 60%, var(--bg) 100%)",
      }}
    >
      <main
        className="w-full max-w-2xl rounded-3xl border p-8 sm:p-10"
        style={{
          background: "var(--surface)",
          borderColor: "var(--line)",
          boxShadow: "var(--shadow-card)",
        }}
      >
        {/* Top row: brand + login */}
        <div className="flex items-start justify-between gap-4">
          <div
            className="text-4xl tracking-wide"
style={{ fontFamily: "var(--font-brand)", color: "var(--ink)" }}          >
            SmoDay
          </div>

          <a
            href="/auth"
            className="inline-flex h-10 items-center justify-center rounded-full px-4 text-sm font-extrabold transition"
            style={{
              background: "rgba(255,255,255,0.70)",
              border: "1px solid var(--line)",
              color: "var(--ink)",
            }}
          >
            Logg inn
          </a>
        </div>

        <h1
          className="mt-4 text-2xl sm:text-3xl font-extrabold"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Hei 👋
        </h1>

        <p className="mt-3 text-lg leading-8" style={{ color: "var(--slate)" }}>
          Vi bygger nå en spennende nyhet. Mer info kommer snart.
        </p>

         {/* Contact form */}
        <div className="mt-6 rounded-3xl border p-6" style={{ borderColor: "var(--line)" }}>
          <div className="text-sm font-semibold" style={{ color: "var(--slate)" }}>
            Kontakt oss
          </div>
          <p className="mt-2 text-sm" style={{ color: "var(--slate)" }}>
            Send en melding – vi svarer så fort vi kan.
          </p>

          <div className="mt-4 grid gap-3">
            <input className="h-12 rounded-2xl border px-4 text-sm" placeholder="Navn" />
            <input className="h-12 rounded-2xl border px-4 text-sm" placeholder="E-post" />
            <textarea
              className="rounded-2xl border p-4 text-sm"
              rows={4}
              placeholder="Melding"
            />
            <button
              className="h-12 rounded-full text-sm font-extrabold"
              style={{ background: "var(--g-primary)", color: "#fff" }}
            >
              Send melding
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}