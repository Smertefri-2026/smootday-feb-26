// /Users/oystein/nettsider/smootday-v2-feb-26/src/app/(public)/about/page.tsx

import About1Hero from "./sections/About1Hero";
import About2Story from "./sections/About2Story";
import About3SystemExplained from "./sections/About3SystemExplained";
import About4Quality from "./sections/About4Quality";
import About5FAQ from "./sections/About5FAQ";

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
      <About1Hero />
      <About2Story />
      <About3SystemExplained />
      <About4Quality />
      <About5FAQ />
    </div>
  );
}