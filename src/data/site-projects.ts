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
    {
      id: "site-02",
      number: "02",
      segment: "Fretes & Carretos",
      title: "Site de captação de orçamento com contato direto via WhatsApp",
      description:
        "Landing page para serviço de fretes e carretos em Uberlândia (MG): serviços, diferenciais, processo de contratação em 3 passos, galeria de trabalhos realizados e contato direto pelo WhatsApp.",
      url: "https://evandro-fretes.vercel.app/",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "WhatsApp API", "Vercel"],
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
    {
      id: "site-02",
      number: "02",
      segment: "Freight & Small Moving",
      title: "Lead-generation site with direct WhatsApp contact",
      description:
        "Landing page for a freight and small moving service in Uberlândia (MG): services, differentiators, a 3-step booking process, a gallery of completed jobs, and direct contact via WhatsApp.",
      url: "https://evandro-fretes.vercel.app/",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "WhatsApp API", "Vercel"],
    },
  ],
};

export function getSiteProjects(lang: Lang): SiteProject[] {
  return siteProjectsByLang[lang];
}
