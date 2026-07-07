import type { Lang } from "@/i18n/ui";

const siteByLang = {
  pt: {
    name: "Letícia Medeiros",
    title: "AI Software Engineer & Full Stack Developer",
    heroTitleMain: "Da ideia de IA ao",
    heroTitleHighlight: "produto em produção.",
    subtitle:
      "Transformo conceitos complexos de IA em produtos reais. Para mim, inovação não é só código, é a ponte entre inteligência artificial e resultado prático de negócio.",
    email: "tm@nilg.ai",
    linkedin: "https://www.linkedin.com/in/leticiamn/",
    whatsapp: "+55 34 9276-2564",
    whatsappLink: "https://wa.me/553492762564",
    confidentiality:
      "Projetos reais em produção. Clientes não divulgados por contrato.",
    cta: "Quer transformar IA em produto real?",
  },
  en: {
    name: "Letícia Medeiros",
    title: "AI Software Engineer & Full Stack Developer",
    heroTitleMain: "From AI idea to",
    heroTitleHighlight: "product in production.",
    subtitle:
      "I turn complex AI concepts into real products. To me, innovation isn't just code, it's the bridge between artificial intelligence and practical business results.",
    email: "tm@nilg.ai",
    linkedin: "https://www.linkedin.com/in/leticiamn/",
    whatsapp: "+55 34 9276-2564",
    whatsappLink: "https://wa.me/553492762564",
    confidentiality:
      "Real projects in production. Clients undisclosed under contract.",
    cta: "Want to turn AI into a real product?",
  },
} as const;

export function getSite(lang: Lang) {
  return siteByLang[lang];
}

export const site = siteByLang.pt;
