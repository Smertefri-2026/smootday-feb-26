// /Users/oystein/nettsider/smootday-v2-feb-26/src/app/(public)/panel/sections/Section8FAQ.tsx

import Section from "@/components/ui/Section";
import { Card, CardBody } from "@/components/ui/Card";
import { Kicker, H2, P } from "@/components/ui/Typography";

export default function Section8FAQ() {
  const faqs = [
    {
      q: "Hva er The Essentials System – helt enkelt?",
      a: "Det er en enkel rutine bygget rundt tre produkter: ODF (daglig base), Omega-3 (fast vane) og Sporstoffer (ryddig kapselrutine). Målet er færre valg og en rutine du faktisk klarer å gjennomføre.",
    },
    {
      q: "Er dette ment å erstatte mat?",
      a: "Nei. Kosttilskudd er ment å supplere et variert kosthold – ikke erstatte det. Systemet er laget for å gjøre det enklere å være konsekvent over tid, sammen med sunn mat og aktivitet.",
    },
    {
      q: "Hvordan velger jeg mellom smoothie og pulver?",
      a: "Velg smoothie hvis du vil ha lavest friksjon (klar på sekunder). Velg pulver hvis du vil blande selv, ha mer fleksibilitet og enklere lagring/transport.",
    },
    {
      q: "Hva betyr “dokumenterbart” hos dere?",
      a: "At vi bruker ingredienser og former som kan beskrives korrekt på etikett og vurderes opp mot regelverk. Vi bygger også med råvarespesifikasjoner/batch-informasjon og ryddig merking.",
    },
    {
      q: "Kan dere bruke helsepåstander i markedsføring?",
      a: "Ja – men kun de som er tillatt i EU/Norge og kun når vilkårene er oppfylt (for eksempel riktig innhold per dagsdose). Vi samler helsepåstander og kilder per produkt på helsesiden.",
    },
    {
      q: "Når starter salget?",
      a: "Vi lanserer først når alt er klart: produksjon, merking, logistikk og lager. Følg med på oppdateringer – vi deler status fortløpende.",
    },
    {
      q: "Kan jeg abonnere – og kan jeg pause/stoppe?",
      a: "Ja. Abonnementet er månedlig (30 dager) og du kan pause eller stoppe når som helst. Hvis du sier opp, får du normalt siste leveranse og så stopper det.",
    },
    {
      q: "Hva med levering, retur og reklamasjon?",
      a: "Full info kommer ved lansering (frakt, vilkår, returrett og reklamasjon). Vi holder dette transparent og enkelt.",
    },
  ];

  return (
    <Section id="faq" className="py-10">
      <div className="mx-auto w-full max-w-6xl px-6">
        <Kicker>Spørsmål & svar</Kicker>
        <H2 className="mt-2">FAQ</H2>

        <P className="text-base sm:text-lg">
          Trykk på et spørsmål for å se svaret.
        </P>

        <div className="mt-6 grid gap-3">
          {faqs.map((x) => (
            <Card key={x.q}>
              <details>
                <summary
                  className="cursor-pointer list-none"
                  style={{ outline: "none" }}
                >
                  <CardBody className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div
                        className="text-base font-extrabold"
                        style={{ color: "var(--ink)" }}
                      >
                        {x.q}
                      </div>

                      {/* Chevron */}
                      <span
                        className="mt-0.5 select-none"
                        style={{ color: "rgba(11,18,32,0.55)" }}
                        aria-hidden="true"
                      >
                        ▾
                      </span>
                    </div>
                  </CardBody>
                </summary>

                <div className="px-6 pb-6">
                  <div
                    className="pt-2 text-sm sm:text-base leading-7"
                    style={{ color: "var(--slate)" }}
                  >
                    {x.a}
                  </div>
                </div>
              </details>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}