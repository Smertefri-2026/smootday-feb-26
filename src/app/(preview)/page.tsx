import PublicHeader from "@/components/shell/PublicHeader";

import Section1Hero from "@/app/(public)/sections/Section1Hero";
import Section2Products from "@/app/(public)/sections/Section2Products";
import Section3QuickCheck from "@/app/(public)/sections/Section3QuickCheck";
import Section3bHowItWorks from "@/app/(public)/sections/Section3bHowItWorks";
import Section3cWhyDifferent from "@/app/(public)/sections/Section3cWhyDifferent";
import Section3dSubscription from "@/app/(public)/sections/Section3dSubscription";
import Section3eTrust from "@/app/(public)/sections/Section3eTrust";
import Section4Benefits from "@/app/(public)/sections/Section4Benefits";
import Section5FAQ from "@/app/(public)/sections/Section5FAQ";
import Section6Contact from "@/app/(public)/sections/Section6Contact";

export default function PreviewPage() {
  return (
    <div
      id="top"
      className="min-h-screen"
      style={{
        background:
          "linear-gradient(180deg, var(--bg) 0%, var(--bg-2) 60%, var(--bg) 100%)",
      }}
    >
      <PublicHeader />

      <Section1Hero />
      <Section2Products />
      <Section3QuickCheck />

      <Section3bHowItWorks />
      <Section3cWhyDifferent />
      <Section3dSubscription />
      <Section3eTrust />

      <Section4Benefits />
      <Section5FAQ />
      <Section6Contact />
    </div>
  );
}