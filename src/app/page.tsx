import PublicHeader from "@/components/shell/PublicHeader";
import Section1Hero from "@/app/sections/Section1Hero";
import Section2Products from "@/app/sections/Section2Products";
import Section3QuickCheck from "@/app/sections/Section3QuickCheck";
import Section4Benefits from "@/app/sections/Section4Benefits";
import Section5FAQ from "@/app/sections/Section5FAQ";
import Section6Contact from "@/app/sections/Section6Contact";
import Section3bHowItWorks from "@/app/sections/Section3bHowItWorks";
import Section3cWhyDifferent from "@/app/sections/Section3cWhyDifferent";
import Section3dSubscription from "@/app/sections/Section3dSubscription";
import Section3eTrust from "@/app/sections/Section3eTrust";

export default function Home() {
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