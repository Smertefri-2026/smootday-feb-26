// /Users/oystein/nettsider/smootday-v2-feb-26/src/app/(public)/sections/Section1aViblir.tsx
export default function Section1aViblir() {
  return (
    <>
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
        Smoday gjør det enkelt: sjekk hva du får i deg – og hvis du mangler noe
        (eller bare vil være helt trygg), hjelper vi deg å fylle på{" "}
        <b>med fokus på biotilgjengelighet</b>, altså det kroppen faktisk tar opp.
      </p>
    </>
  );
}