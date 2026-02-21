// /Users/oystein/nettsider/smootday-v2-feb-26/src/app/sections/Section1Hero.tsx
export default function Section1Hero() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 pt-10 pb-10">
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
            Verdens første • Det essensielle systemet
          </p>

          <h1
            className="mt-3 text-3xl sm:text-5xl font-extrabold tracking-tight"
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
            – men får kroppen din alt den trenger?
          </h1>

          <p className="mt-4 text-lg leading-8" style={{ color: "var(--slate)" }}>
            Mange kjenner til <b>essensielle aminosyrer</b>. Men hva med{" "}
            <b>essensielle vitaminer</b>, <b>mineraler</b>, <b>fett</b>,{" "}
            <b>hydrering</b> og <b>ytelse</b>?
          </p>

          <p className="mt-3 text-lg leading-8" style={{ color: "var(--slate)" }}>
            Smooday gjør det enkelt: sjekk hva du får i deg – og hvis du mangler
            noe (eller bare vil være helt trygg), hjelper vi deg å fylle på{" "}
            <b>med fokus på biotilgjengelighet</b>, altså det kroppen faktisk tar
            opp.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a
              href="#produkter"
              className="inline-flex h-12 items-center justify-center px-6 text-sm font-extrabold"
              style={{
                background: "var(--g-primary)",
                color: "#fff",
                borderRadius: 9999,
              }}
            >
              Våre produkter
            </a>

            <a
              href="#quickcheck"
              className="inline-flex h-12 items-center justify-center px-6 text-sm font-extrabold"
              style={{
                background: "rgba(255,255,255,0.70)",
                color: "var(--ink)",
                border: "1px solid var(--line)",
                borderRadius: 9999,
              }}
            >
              Sjekk dekning
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}