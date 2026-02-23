export default function Section3bHowItWorks() {
  const steps = [
    { t: "1) Sjekk", d: "Skriv inn hva du spiser – få en enkel oversikt." },
    { t: "2) Velg variant", d: "Velg den SmoDay-varianten som fyller dine gap." },
    { t: "3) Daglig rutine", d: "Gjør det til en vane – stabilt over tid gir best effekt." },
  ];

  return (
    <section id="how" className="mx-auto w-full max-w-6xl px-6 py-10">
      <h2 className="text-2xl sm:text-3xl font-extrabold" style={{ fontFamily: "var(--font-heading)" }}>
        Hvordan det fungerer
      </h2>
      <p className="mt-2" style={{ color: "var(--slate)" }}>
        En enkel flyt: sjekk → velg → gjør det til en vane.
      </p>

      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {steps.map((s) => (
          <div key={s.t} className="rounded-3xl border p-6" style={{ background: "var(--surface)", borderColor: "var(--line)", boxShadow: "var(--shadow-soft)" }}>
            <div className="text-sm font-semibold" style={{ color: "var(--slate)" }}>
              {s.t}
            </div>
            <p className="mt-2 text-sm" style={{ color: "var(--slate)" }}>
              {s.d}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}