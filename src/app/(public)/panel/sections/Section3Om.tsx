// /Users/oystein/nettsider/smootday-v2-feb-26/src/app/(public)/panel/sections/Section3Om.tsx

import Image from "next/image";
import Section from "@/components/ui/Section";
import { Card, CardBody } from "@/components/ui/Card";
import { Kicker, H2, P, SmallNote } from "@/components/ui/Typography";
import { LinkOutline } from "@/components/ui/Button";

export default function Section3Om() {
  return (
    <Section id="om" className="pt-0 pb-10">
      <Card>
        <CardBody>
          {/* FLOAT IMAGE: text wraps on desktop, stacked on mobile */}
          <div
            className={[
              "mb-4",
              "w-full max-w-55",
              "mx-auto", // mobile: center
              "md:float-right md:ml-6 md:mb-3 md:mt-2 md:mx-0", // desktop: float right
            ].join(" ")}
          >
            <div
              className="rounded-2xl border p-2"
              style={{
                borderColor: "var(--line)",
                background: "rgba(255,255,255,0.55)",
                boxShadow: "var(--shadow-soft)",
              }}
            >
              <div className="relative h-30 w-full overflow-hidden rounded-xl">
                <Image
                  src="/Section1bOm.png"
                  alt="Forskning og utvikling – The Essentials System"
                  fill
                  className="object-cover object-center"
                  priority={false}
                />
              </div>
            </div>
          </div>

          <Kicker>• Hvorfor vi bygger The Essentials System</Kicker>

          <H2>
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
            fordi vi så hvor viktig det er å ta vare på kroppen – i praksis.
          </H2>

          <P className="text-base sm:text-lg mt-4">
            Pandemien minnet oss på hvor viktig{" "}
            <b style={{ color: "var(--ink)" }}>grunnlaget</b> er: søvn, aktivitet og
            næringsrik mat – og en rutine som faktisk er mulig å holde. Samtidig ser vi at mange
            får i seg <b style={{ color: "var(--ink)" }}>for lite</b> av noen nøkkelnæringsstoffer,
            spesielt <b style={{ color: "var(--ink)" }}>vitamin D</b> (og i noen perioder også{" "}
            <b style={{ color: "var(--ink)" }}>vitamin C</b>).
          </P>

          <P className="text-base sm:text-lg">
            I praksis er det også vanskelig å <b style={{ color: "var(--ink)" }}>vite</b> hva du
            faktisk ligger på. Skal du måle status, må du ofte til lege for blodprøver – og selv da
            er det typisk bare <b style={{ color: "var(--ink)" }}>noen få</b> som sjekkes rutinemessig
            (for eksempel <b style={{ color: "var(--ink)" }}>vitamin B12</b>,{" "}
            <b style={{ color: "var(--ink)" }}>folat</b> og <b style={{ color: "var(--ink)" }}>vitamin D</b>).
          </P>

          <P className="text-base sm:text-lg">
            Derfor laget vi <b style={{ color: "var(--ink)" }}>The Essentials System</b>: en enkel
            daglig rutine som fokuserer på <b style={{ color: "var(--ink)" }}>det essensielle</b> – ikke
            “mer og mer”, men det kroppen trenger jevnlig – og med fokus på{" "}
            <b style={{ color: "var(--ink)" }}>biotilgjengelighet</b> (hva kroppen faktisk tar opp og bruker).
          </P>

          <SmallNote>
            Vi forklarer dette mer detaljert (med kilder og tall) på{" "}
            <a href="/benefits" style={{ textDecoration: "underline", color: "var(--ink)" }}>
              helsesiden
            </a>
            .
          </SmallNote>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <LinkOutline href="/about">Les hele historien</LinkOutline>
          </div>

          <p className="mt-4 text-xs leading-6" style={{ color: "var(--slate)" }}>
            *Systemet er laget for å støtte en praktisk hverdagsrutine sammen med et sunt kosthold og fysisk aktivitet.
          </p>

          {/* Clear float so following sections don’t wrap */}
          <div className="clear-both" />
        </CardBody>
      </Card>
    </Section>
  );
}