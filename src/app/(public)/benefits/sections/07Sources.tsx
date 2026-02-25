// /Users/oystein/nettsider/smootday-v2-feb-26/src/app/(public)/benefits/sections/07Sources.tsx

import { sources } from "./claims";

export default function S07BenefitsSources() {
  return (
    <section id="benefits-sources" className="mx-auto w-full max-w-6xl px-6 pb-16">
      <div
        className="rounded-3xl border p-6 sm:p-8"
        style={{
          background: "var(--surface)",
          borderColor: "var(--line)",
          boxShadow: "var(--shadow-card)",
        }}
      >
        <p className="text-sm font-semibold" style={{ color: "var(--slate)" }}>
          • Kilder
        </p>

        <h2
          className="mt-2 text-2xl sm:text-3xl font-extrabold"
          style={{ fontFamily: "var(--font-heading)", color: "var(--ink)" }}
        >
          Dokumentasjon og regelverk
        </h2>

        <p className="mt-3 text-lg leading-8" style={{ color: "var(--slate)" }}>
          Helsepåstandene på denne siden bygger på godkjente helsepåstander i EU/EØS.
          Her er de sentrale kildene og referansene.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <a
            href={sources.eu432.href}
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border p-5"
            style={{ borderColor: "var(--line)", background: "rgba(255,255,255,0.55)" }}
          >
            <div className="text-base font-extrabold" style={{ color: "var(--ink)" }}>
              {sources.eu432.label}
            </div>
            <div className="mt-2 text-sm" style={{ color: "var(--slate)" }}>
              Listen over tillatte (godkjente) helsepåstander.
            </div>
          </a>

          <a
            href={sources.euRegister.href}
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border p-5"
            style={{ borderColor: "var(--line)", background: "rgba(255,255,255,0.55)" }}
          >
            <div className="text-base font-extrabold" style={{ color: "var(--ink)" }}>
              {sources.euRegister.label}
            </div>
            <div className="mt-2 text-sm" style={{ color: "var(--slate)" }}>
              Offisielt register over ernærings- og helsepåstander.
            </div>
          </a>

          <a
            href={sources.reg1924.href}
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border p-5 sm:col-span-2"
            style={{ borderColor: "var(--line)", background: "rgba(255,255,255,0.55)" }}
          >
            <div className="text-base font-extrabold" style={{ color: "var(--ink)" }}>
              {sources.reg1924.label}
            </div>
            <div className="mt-2 text-sm" style={{ color: "var(--slate)" }}>
              Regelverket som styrer hva man kan påstå i markedsføring og merking.
            </div>
          </a>
        </div>

        <div className="mt-6 text-xs" style={{ color: "var(--slate)" }}>
          *“Kilde til” / “høyt innhold av” brukes kun der produktet oppfyller relevante terskler og vilkår.
        </div>
      </div>
    </section>
  );
}