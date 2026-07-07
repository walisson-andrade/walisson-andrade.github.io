import type { ImpactStat } from "@/lib/types";
import type { Lang } from "@/i18n/ui";

const impactStatsByLang: Record<Lang, ImpactStat[]> = {
  pt: [
    { value: "28", suffix: "+", label: "projetos entregues" },
    { value: "85", suffix: "%", label: "redução média de trabalho manual" },
    { value: "30", suffix: "x", label: "ganho de performance" },
    { value: "100", suffix: "%", label: "em produção real" },
  ],
  en: [
    { value: "28", suffix: "+", label: "projects delivered" },
    { value: "85", suffix: "%", label: "average manual work reduction" },
    { value: "30", suffix: "x", label: "performance gain" },
    { value: "100", suffix: "%", label: "in real production" },
  ],
};

export function getImpactStats(lang: Lang): ImpactStat[] {
  return impactStatsByLang[lang];
}
