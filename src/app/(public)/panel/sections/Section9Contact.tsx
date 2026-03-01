// /Users/oystein/nettsider/smootday-v2-feb-26/src/app/(public)/panel/sections/Section9Contact.tsx
"use client";

import Section from "@/components/ui/Section";
import { Card, CardBody } from "@/components/ui/Card";
import { Kicker, H2, P, SmallNote } from "@/components/ui/Typography";
import { Button, LinkOutline } from "@/components/ui/Button";

export default function Section9Contact() {
  return (
    <Section id="kontakt" className="py-10 pb-16">
      <Card>
        <CardBody className="p-6 sm:p-10">
          {/* TOPPTEKST (full bredde) */}
          <div className="max-w-3xl">
            <H2 className="mt-2">Kontakt oss</H2>
          </div>

          {/* 2 kolonner */}
          <div className="mt-8 grid gap-10 md:grid-cols-2 md:items-start">
            {/* VENSTRE: Kontakt */}
            <div className="min-w-0">
              <Kicker>Send oss en melding</Kicker>
              <H2 className="mt-2">Kontakt</H2>

              <div className="mt-4 grid gap-3">
                <input className="h-12 rounded-2xl border px-4 text-sm" placeholder="Navn" />
                <input className="h-12 rounded-2xl border px-4 text-sm" placeholder="E-post" />
                <textarea
                  className="rounded-2xl border p-4 text-sm"
                  rows={5}
                  placeholder="Hva lurer du på?"
                />

                <div className="mt-1 flex flex-col sm:flex-row gap-3">
                  <Button type="button" variant="primary" className="h-12">
                    Send (kommer)
                  </Button>

                  <LinkOutline href="#faq" className="h-12">
                    Se vanlige spørsmål
                  </LinkOutline>
                </div>

                <SmallNote>(Skjema kobles til e-post/CRM før lansering.)</SmallNote>
              </div>
            </div>

            {/* HØYRE: Abonnement */}
            <div className="min-w-0">
              <Kicker>Abonnement</Kicker>
              <H2 className="mt-2">Si opp abonnement</H2>

                        <div className="mt-4 grid gap-3">
                <input
                  className="h-12 rounded-2xl border px-4 text-sm"
                  placeholder="Kunde-ID / kundenummer"
                />
                <input
                  className="h-12 rounded-2xl border px-4 text-sm"
                  placeholder="E-post (samme som på bestilling)"
                />
                <textarea
                  className="rounded-2xl border p-4 text-sm"
                  rows={5}
                  placeholder="Valgfritt: skriv f.eks. «Si opp abonnement» + evt. navn/adresse for bekreftelse."
                />
    <P className="text-base sm:text-lg">
                Abonnement har{" "}
                <b style={{ color: "var(--ink)" }}>1 måneds oppsigelsestid</b>. Når du sier opp,
                får du normalt <b style={{ color: "var(--ink)" }}>neste levering</b>, og abonnementet
                stoppes etterpå.
              </P>
                <div className="mt-1 flex flex-col sm:flex-row gap-3">
                  <Button type="button" variant="outline" className="h-12">
                    Send oppsigelse (kommer)
                  </Button>

                  <LinkOutline href="/benefits" className="h-12">
                    Les mer om vilkår
                  </LinkOutline>
                </div>

                <SmallNote>
                  <br />
                  Ved lansering vil du også kunne administrere abonnementet på «Min side».
                </SmallNote>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </Section>
  );
}