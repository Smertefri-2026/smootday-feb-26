// /Users/oystein/nettsider/smootday-v2-feb-26/src/app/(public)/benefits/page.tsx

import S01BenefitsHero from "./sections/01BenefitsHero";
import S02BenefitsODF from "./sections/02BenefitsODF";
import S03BenefitsOmega from "./sections/03BenefitsOmega";
import S04BenefitsTrace from "./sections/04BenefitsTrace";
import S05BenefitsPack from "./sections/05BenefitsPack";
import S07BenefitsSources from "./sections/07Sources";

export default function BenefitsPage() {
  return (
    <main>
      <S01BenefitsHero />
      <S02BenefitsODF />
      <S03BenefitsOmega />
      <S04BenefitsTrace />
      <S05BenefitsPack />

      {/* ✅ Kilder nederst (match #benefits-sources) */}
      <S07BenefitsSources />

    </main>
  );
}