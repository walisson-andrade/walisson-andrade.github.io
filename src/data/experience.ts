import type { Experience } from "@/lib/types";
import type { Lang } from "@/i18n/ui";

const experiencesByLang: Record<Lang, Experience[]> = {
  pt: [
    {
      period: "2025 - atual",
      company: "NILG.AI",
      role: "AI & Full Stack Engineer",
      description:
        "Desenvolvimento de produtos de IA e automação para clientes, do protótipo à produção, integrando LLMs, back-end e front-end.",
      isCurrent: true,
    },
    {
      period: "2023 - 2025",
      company: "Accenture",
      role: "Data Science",
      description:
        "Cientista de dados. Modelos preditivos e analytics para operações em larga escala.",
      isCurrent: false,
    },
    {
      period: "2022 - 2023",
      company: "Accenture",
      role: "S&OP",
      description:
        "Analista de Supply & Operations Planning. Automação de processos e relatórios operacionais.",
      isCurrent: false,
    },
  ],
  en: [
    {
      period: "2025 - present",
      company: "NILG.AI",
      role: "AI & Full Stack Engineer",
      description:
        "Building AI and automation products for clients, from prototype to production, integrating LLMs, back-end and front-end.",
      isCurrent: true,
    },
    {
      period: "2023 - 2025",
      company: "Accenture",
      role: "Data Science",
      description:
        "Data scientist. Predictive models and analytics for large-scale operations.",
      isCurrent: false,
    },
    {
      period: "2022 - 2023",
      company: "Accenture",
      role: "S&OP",
      description:
        "Supply & Operations Planning analyst. Process automation and operational reporting.",
      isCurrent: false,
    },
  ],
};

export function getExperiences(lang: Lang): Experience[] {
  return experiencesByLang[lang];
}
