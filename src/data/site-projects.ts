import type { SiteProject } from "@/lib/types";
import type { Lang } from "@/i18n/ui";

const siteProjectsByLang: Record<Lang, SiteProject[]> = {
  pt: [
    {
      id: "site-01",
      number: "01",
      segment: "Mini Fretes & Mudanças",
      title: "Site institucional com orçamento via WhatsApp",
      description:
        "Landing page para empresa de mini fretes e mudanças em Uberlândia (MG): apresentação dos serviços, diferenciais, processo de contratação em 3 passos, galeria de trabalhos realizados e orçamento direto pelo WhatsApp.",
      url: "https://lucio-fretes-seven.vercel.app/",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "WhatsApp API", "Google Maps", "Vercel"],
    },
  ],
  en: [
    {
      id: "site-01",
      number: "01",
      segment: "Small Freight & Moving",
      title: "Business site with WhatsApp quote requests",
      description:
        "Landing page for a small freight and moving company in Uberlândia (MG): service overview, key differentiators, a 3-step booking process, a gallery of completed jobs, and direct quote requests via WhatsApp.",
      url: "https://lucio-fretes-seven.vercel.app/",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "WhatsApp API", "Google Maps", "Vercel"],
    },
  ],
};

export function getSiteProjects(lang: Lang): SiteProject[] {
  return siteProjectsByLang[lang];
}
