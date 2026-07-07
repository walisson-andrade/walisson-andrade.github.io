import type { Experience } from "@/lib/types";
import type { Lang } from "@/i18n/ui";

const experiencesByLang: Record<Lang, Experience[]> = {
  pt: [
    {
      period: "Atual",
      company: "NILG.AI",
      role: "AI Software Engineer & Full Stack Developer",
      description:
        "Ponte entre inteligência artificial e produto real: desenvolvimento de soluções full stack que integram LLMs, RAG e automação a sistemas em produção, do protótipo ao deploy.",
      isCurrent: true,
    },
    {
      period: "Desde jan. 2024",
      company: "Anhanguera Educacional",
      role: "Graduação em andamento",
      description:
        "Formação superior em andamento, com foco em desenvolvimento de software.",
      isCurrent: false,
    },
    {
      period: "Formação técnica",
      company: "Instituto Federal do Triângulo Mineiro",
      role: "Formação técnica",
      description:
        "Base técnica em tecnologia da informação que sustenta a atuação em desenvolvimento de software e engenharia de dados.",
      isCurrent: false,
    },
  ],
  en: [
    {
      period: "Current",
      company: "NILG.AI",
      role: "AI Software Engineer & Full Stack Developer",
      description:
        "Bridging artificial intelligence and real products: building full stack solutions that integrate LLMs, RAG and automation into production systems, from prototype to deployment.",
      isCurrent: true,
    },
    {
      period: "Since Jan. 2024",
      company: "Anhanguera Educacional",
      role: "Ongoing degree",
      description:
        "Ongoing higher education degree focused on software development.",
      isCurrent: false,
    },
    {
      period: "Technical education",
      company: "Instituto Federal do Triângulo Mineiro",
      role: "Technical education",
      description:
        "Technical background in information technology underpinning her work in software development and data engineering.",
      isCurrent: false,
    },
  ],
};

export function getExperiences(lang: Lang): Experience[] {
  return experiencesByLang[lang];
}
