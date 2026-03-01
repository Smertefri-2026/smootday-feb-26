export default function S08KostraadPerKategori() {
  return (
    <section id="kostraad" className="mx-auto w-full max-w-6xl px-6 pb-10">
      <div
        className="rounded-3xl border p-8 sm:p-10"
        style={{
          background: "var(--surface)",
          borderColor: "var(--line)",
          boxShadow: "var(--shadow-soft)",
        }}
      >
        <p className="text-sm font-semibold" style={{ color: "var(--slate)" }}>
          Kostråd (kort og praktisk)
        </p>

        <h2
          className="mt-3 text-2xl sm:text-4xl font-extrabold tracking-tight"
          style={{ fontFamily: "var(--font-heading)", color: "var(--ink)" }}
        >
          Mat først – system som støtte.
        </h2>

        <p className="mt-4 text-lg leading-8" style={{ color: "var(--slate)" }}>
          Systemet er laget for å gjøre det enklere å være konsekvent, men gode valg i hverdagen
          er fortsatt grunnlaget.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 text-sm">
          <div className="rounded-2xl border p-5" style={{ borderColor: "var(--line)" }}>
            <b>Protein / EAA</b>
            <div className="mt-2" style={{ color: "var(--slate)" }}>
              Prioritér protein gjennom dagen. Tilskudd kan gjøre rutinen enklere.
            </div>
          </div>

          <div className="rounded-2xl border p-5" style={{ borderColor: "var(--line)" }}>
            <b>Fett / Omega-3</b>
            <div className="mt-2" style={{ color: "var(--slate)" }}>
              Fet fisk eller alge/omega-3 kan hjelpe deg å sikre fettsyre-delen.
            </div>
          </div>

          <div className="rounded-2xl border p-5" style={{ borderColor: "var(--line)" }}>
            <b>Vitaminer/mineraler/sporstoffer</b>
            <div className="mt-2" style={{ color: "var(--slate)" }}>
              Variert kost er best. Sporstoffer kan være et lite “micro”-steg i rutinen.
            </div>
          </div>

          <div className="rounded-2xl border p-5" style={{ borderColor: "var(--line)" }}>
            <b>Væske</b>
            <div className="mt-2" style={{ color: "var(--slate)" }}>
              Hydrering påvirker mye. Start enkelt: vann som standard.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}