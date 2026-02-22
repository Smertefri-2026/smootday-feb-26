// /Users/oystein/nettsider/smootday-v2-feb-26/src/app/(public)/sections/Section1bOm.tsx
export default function Section1bOm() {
  return (
    <>
      <p className="text-sm font-semibold" style={{ color: "var(--slate)" }}>
        Om Smooday • Hvorfor vi bygger The Essentials System
      </p>

      <h1
        className="mt-3 text-3xl sm:text-5xl font-extrabold tracking-tight"
        style={{ fontFamily: "var(--font-heading)", color: "var(--ink)" }}
      >
        Vi startet under{" "}
        <span
          style={{
            background: "var(--g-primary)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          koronaen
        </span>{" "}
        fordi vi ville finne en enklere måte å beskytte kroppen på.
      </h1>

      <p className="mt-4 text-lg leading-8" style={{ color: "var(--slate)" }}>
        Vi ønsket å forstå hva som faktisk er essensielt hver dag — og gjøre det
        praktisk for folk flest. Derfor har vi brukt år på å finne produsenter som
        leverer <b>kvalitet</b>, <b>dokumentasjon</b> og <b>stabil produksjon</b>.
      </p>

      <p className="mt-3 text-lg leading-8" style={{ color: "var(--slate)" }}>
        Resultatet ble et system delt i <b>pulver</b> og <b>kapsler</b> for enkel
        daglig bruk — og <b>omega-3</b> som <b>softgel</b> for best opplevelse.
      </p>
    </>
  );
}