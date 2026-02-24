import PublicHeader from "@/components/shell/PublicHeader";

import Section1Hero from "./sections/Section1Hero";
import Section2Products from "./sections/Section2Products";
import Section3Om from "./sections/Section3Om";
import Section4Viblir from "./sections/Section4Viblir";
import Section5HowItWorks from "./sections/Section5HowItWorks";
import Section6Subscription from "./sections/Section6Subscription";
import Section7Trust from "./sections/Section7Trust";
import Section8FAQ from "./sections/Section8FAQ";
import Section6Contact from "./sections/Section9Contact";
import Section9Contact from "./sections/Section9Contact";

export default function PanelPage() {
  return (
    <div
      id="top"
      className="min-h-screen"
      style={{
        background: "linear-gradient(180deg, var(--bg) 0%, var(--bg-2) 60%, var(--bg) 100%)",
      }}
    >
      <PublicHeader />

      <Section1Hero />
      <Section2Products />
      <Section3Om />
      <Section4Viblir />
      <Section5HowItWorks />
      <Section6Subscription />
      <Section7Trust />
      <Section8FAQ />
      <Section9Contact />
    </div>
  );
}