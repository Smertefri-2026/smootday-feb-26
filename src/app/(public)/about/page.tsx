import PublicHeader from "@/components/shell/PublicHeader";

import AboutHero from "@/app/(public)/about/sections/About1Hero";
import AboutStory from "@/app/(public)/about/sections/About2Story";
import AboutSystemExplained from "@/app/(public)/about/sections/About3SystemExplained";
import AboutQuality from "@/app/(public)/about/sections/About4Quality";
import AboutFAQ from "@/app/(public)/about/sections/About5FAQ";
import AboutContact from "@/app/(public)/about/sections/About6Contact";
import About1Hero from "@/app/(public)/about/sections/About1Hero";
import About2Story from "@/app/(public)/about/sections/About2Story";
import About3SystemExplained from "@/app/(public)/about/sections/About3SystemExplained";
import About4Quality from "@/app/(public)/about/sections/About4Quality";
import About5FAQ from "@/app/(public)/about/sections/About5FAQ";
import About6Contact from "@/app/(public)/about/sections/About6Contact";

export default function AboutPage() {
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

      <About1Hero />
      <About2Story />
      <About3SystemExplained />
      <About4Quality />
      <About5FAQ />
      <About6Contact />
    </div>
  );
}