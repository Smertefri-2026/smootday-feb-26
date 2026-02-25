// /Users/oystein/nettsider/smootday-v2-feb-26/src/app/(public)/system/page.tsx

import S01SystemHero from "./sections/01SystemHero";
import S02HvaErEssensielt from "./sections/02HvaErEssensielt";
import S03CoreStack from "./sections/03CoreStack";
import S04Variantvalg from "./sections/04Variantvalg";
import S05DagligRutine from "./sections/05DagligRutine";
import S06KvalitetOgTrygghet from "./sections/06KvalitetOgTrygghet";
import S07SystemFAQ from "./sections/07SystemFAQ";
import S08KostraadPerKategori from "./sections/08KostraadPerKategori";
import S09MarkedsforingOgPastaander from "./sections/09MarkedsforingOgPastaander";

export default function SystemPage() {
  return (
    <div
      id="top"
      className="min-h-screen"
      style={{
        background:
          "linear-gradient(180deg, var(--bg) 0%, var(--bg-2) 60%, var(--bg) 100%)",
      }}
    >
      <S01SystemHero />
      <S02HvaErEssensielt />
      <S03CoreStack />
      <S04Variantvalg />
      <S05DagligRutine />
      <S06KvalitetOgTrygghet />
      <S07SystemFAQ />
      <S08KostraadPerKategori />
      <S09MarkedsforingOgPastaander />
    </div>
  );
}