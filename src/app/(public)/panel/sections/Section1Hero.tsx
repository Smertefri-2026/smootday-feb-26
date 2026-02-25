"use client";

// /Users/oystein/nettsider/smootday-v2-feb-26/src/app/(public)/panel/sections/Section1Hero.tsx

export default function Section1Hero() {
  return (
    <section id="top" className="mx-auto w-full max-w-6xl px-6 pt-10 pb-6">
      <div
        className="rounded-3xl border p-6 sm:p-8"
        style={{
          background: "var(--surface)",
          borderColor: "var(--line)",
          boxShadow: "var(--shadow-card)",
        }}
      >
        <p className="text-sm font-semibold" style={{ color: "var(--slate)" }}>
          The Essentials System
        </p>

        <h1
          className="mt-2 text-2xl sm:text-4xl font-extrabold tracking-tight"
          style={{ fontFamily: "var(--font-heading)", color: "var(--ink)" }}
        >
          Det essensielle systemet dekker det kroppen trenger — hver dag.
        </h1>

        <p className="mt-3 text-base sm:text-lg leading-7" style={{ color: "var(--slate)" }}>
          “Essensielt” betyr næringsstoffer kroppen trenger jevnlig, men ikke kan
          produsere selv (eller ikke i nok mengder). Derfor må de komme fra mat — og
          for mange kan tilskudd være en praktisk måte å sikre kontinuitet i hverdagen.
          Vi har samlet det viktigste i en enkel rutine. Sammen med et sunt kosthold
          gjør systemet det lettere å dekke det essensielle.
        </p>

        <div className="mt-5 flex flex-col sm:flex-row gap-3">
          <a
            href="/system"
            className="inline-flex h-12 items-center justify-center px-6 text-sm font-extrabold"
            style={{
              background: "rgba(255,255,255,0.70)",
              color: "var(--ink)",
              border: "1px solid var(--line)",
              borderRadius: 9999,
            }}
          >
            Les mer om systemet
          </a>
        </div>
      </div>
    </section>
  );
}