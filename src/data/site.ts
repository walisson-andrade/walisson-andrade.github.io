import type { Lang } from "@/i18n/ui";

const siteByLang = {
  pt: {
    name: "Walisson Andrade",
    title: "Builder. Automação. IA. Produção.",
    heroTitleMain: "Builder. Automação. IA.",
    heroTitleHighlight: "Produção.",
    subtitle:
      "Desenvolvedor full stack e especialista em automação. Transformo processos manuais em sistemas que rodam em produção, unindo IA, low-code e engenharia de dados.",
    email: "walisson.a.andrade@gmail.com",
    linkedin: "https://www.linkedin.com/in/walisson-andrade",
    whatsapp: "+55 34 99868-3356",
    whatsappLink: "https://wa.me/5534998683356",
    confidentiality:
      "Projetos reais em produção. Clientes não divulgados por contrato.",
    cta: "Quer automatizar processos ou construir algo do zero?",
  },
  en: {
    name: "Walisson Andrade",
    title: "Builder. Automation. AI. Production.",
    heroTitleMain: "Builder. Automation. AI.",
    heroTitleHighlight: "Production.",
    subtitle:
      "Full stack developer and automation specialist. I turn manual processes into systems that run in production, combining AI, low-code and data engineering.",
    email: "walisson.a.andrade@gmail.com",
    linkedin: "https://www.linkedin.com/in/walisson-andrade",
    whatsapp: "+55 34 99868-3356",
    whatsappLink: "https://wa.me/5534998683356",
    confidentiality:
      "Real projects in production. Clients undisclosed under contract.",
    cta: "Want to automate processes or build something from scratch?",
  },
} as const;

export function getSite(lang: Lang) {
  return siteByLang[lang];
}

export const site = siteByLang.pt;
