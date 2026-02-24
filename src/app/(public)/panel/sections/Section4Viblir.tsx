// /Users/oystein/nettsider/smootday-v2-feb-26/src/app/(public)/panel/sections/Section4Viblir.tsx

export default function Section4Viblir() {
  return (
    <section id="viblir" className="mx-auto w-full max-w-6xl px-6 pb-10">
      <div
        className="rounded-3xl border p-8 sm:p-10"
        style={{
          background: "var(--surface)",
          borderColor: "var(--line)",
          boxShadow: "var(--shadow-card)",
        }}
      >
        <div className="max-w-3xl">
          <p className="text-sm font-semibold" style={{ color: "var(--slate)" }}>
            Det essensielle systemet • én enkel rutine
          </p>

          <h2
            className="mt-3 text-2xl sm:text-4xl font-extrabold tracking-tight"
            style={{ fontFamily: "var(--font-heading)", color: "var(--ink)" }}
          >
            Vi blir fortalt at{" "}
            <span
              style={{
                background: "var(--g-primary)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              du må spise sunn mat
            </span>{" "}
            – men får kroppen din faktisk alt den trenger?
          </h2>

          <p className="mt-4 text-lg leading-8" style={{ color: "var(--slate)" }}>
            Mange kjenner til <b>essensielle aminosyrer</b>. Men hva med{" "}
            <b>vitaminer</b>, <b>mineraler</b>, <b>fett</b>,{" "}
            <b>væske og væskebalanse</b> og <b>energi og yteevne</b> i hverdagen?
          </p>

          <p className="mt-3 text-lg leading-8" style={{ color: "var(--slate)" }}>
            SmoDay gjør det enklere: vi samler det essensielle i et system du faktisk
            kan følge. Og vi tenker ikke bare “hva du tar”, men{" "}
            <b>biotilgjengelighet</b> – altså hva kroppen faktisk klarer å ta opp og bruke.
          </p>
        </div>
      </div>
    </section>
  );
}