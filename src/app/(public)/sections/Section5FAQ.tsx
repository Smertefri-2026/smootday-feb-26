export default function Section5FAQ() {
  const faqs = [
    { q: "Når starter salget?", a: "Vi lanserer i Norge først. Registrer deg for oppdatering." },
    { q: "Hvordan velger jeg riktig variant?", a: "Bruk “Sjekk dekning” og se anbefalingen – eller spør oss." },
    { q: "Kan jeg abonnere?", a: "Ja – 30-dagers abonnement kommer, med pause/bytte når som helst." },
    { q: "Levering og retur?", a: "Detaljer kommer ved lansering (frakt, vilkår, returrett)." },
  ];

  return (
    <section id="faq" className="mx-auto w-full max-w-6xl px-6 py-10">
      <h2 className="text-2xl sm:text-3xl font-extrabold" style={{ fontFamily: "var(--font-heading)" }}>
        FAQ
      </h2>

      <div className="mt-6 grid gap-4">
        {faqs.map((x) => (
          <div key={x.q} className="rounded-3xl border p-6" style={{ background: "var(--surface)", borderColor: "var(--line)" }}>
            <div className="font-extrabold" style={{ color: "var(--ink)" }}>
              {x.q}
            </div>
            <div className="mt-2 text-sm" style={{ color: "var(--slate)" }}>
              {x.a}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}