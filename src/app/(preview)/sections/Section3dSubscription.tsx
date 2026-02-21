export default function Section3dSubscription() {
  return (
    <section id="subscription" className="mx-auto w-full max-w-6xl px-6 py-10">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border p-8 sm:p-10" style={{ background: "var(--surface)", borderColor: "var(--line)", boxShadow: "var(--shadow-soft)" }}>
          <h2 className="text-2xl sm:text-3xl font-extrabold" style={{ fontFamily: "var(--font-heading)" }}>
            Abonnement (30 dager)
          </h2>
          <p className="mt-2" style={{ color: "var(--slate)" }}>
            Gjør det til en vane. Spar penger og få leveranse automatisk.
          </p>

          <ul className="mt-5 grid gap-2 text-sm" style={{ color: "var(--ink)" }}>
            <li>• Spar X% (fylles inn senere)</li>
            <li>• Pause når som helst</li>
            <li>• Bytt variant ved behov</li>
          </ul>

          <div className="mt-6 flex gap-3">
            <a
              href="#produkter"
              className="inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-extrabold"
              style={{ background: "var(--g-primary)", color: "#fff" }}
            >
              Se varianter
            </a>
            <a
              href="#kontakt"
              className="inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-extrabold"
              style={{ background: "rgba(255,255,255,0.70)", border: "1px solid var(--line)", color: "var(--ink)" }}
            >
              Spør oss
            </a>
          </div>
        </div>

        <div className="rounded-3xl border p-8 sm:p-10" style={{ background: "var(--bg-2)", borderColor: "var(--line)", boxShadow: "var(--shadow-soft)" }}>
          <div className="text-sm font-semibold" style={{ color: "var(--slate)" }}>
            For hvem?
          </div>
          <div className="mt-2 text-lg font-extrabold" style={{ color: "var(--ink)" }}>
            Alle som vil gjøre “riktig” enklere.
          </div>
          <p className="mt-2 text-sm" style={{ color: "var(--slate)" }}>
            Vår jobb er å gjøre helhet og konsistens enklere – uten at du må tenke på alt selv.
          </p>
        </div>
      </div>
    </section>
  );
}