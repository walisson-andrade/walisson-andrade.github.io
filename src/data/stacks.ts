import type { Stack } from "@/lib/types";
import type { Lang } from "@/i18n/ui";

const technologies = {
  automation: ["n8n", "Zapier", "Make", "Webhooks", "APIs REST", "WhatsApp", "Slack", "Notion", "Airtable"],
  fullstack: ["TypeScript", "Python", "React", "Next.js", "FastAPI", "PostgreSQL", "Docker", "AWS", "Terraform"],
  data: ["Power BI", "SQL Server", "Python", "Pentaho", "Excel", "GCP"],
};

const stacksByLang: Record<Lang, Stack[]> = {
  pt: [
    {
      title: "Automação Low-Code",
      description: "Fluxos que conectam ferramentas e eliminam trabalho repetitivo.",
      icon: "automation",
      tabTarget: "automacoes",
      technologies: technologies.automation,
    },
    {
      title: "Desenvolvimento Full Stack",
      description: "Aplicações web completas, do banco de dados à interface.",
      icon: "fullstack",
      tabTarget: "fullstack",
      technologies: technologies.fullstack,
    },
    {
      title: "Análise de Dados & BI",
      description: "Pipelines, dashboards e decisões guiadas por dados.",
      icon: "data",
      tabTarget: "data",
      technologies: technologies.data,
    },
  ],
  en: [
    {
      title: "Low-Code Automation",
      description: "Flows that connect tools and eliminate repetitive work.",
      icon: "automation",
      tabTarget: "automacoes",
      technologies: technologies.automation,
    },
    {
      title: "Full Stack Development",
      description: "Complete web applications, from the database to the interface.",
      icon: "fullstack",
      tabTarget: "fullstack",
      technologies: technologies.fullstack,
    },
    {
      title: "Data Analysis & BI",
      description: "Pipelines, dashboards and data-driven decisions.",
      icon: "data",
      tabTarget: "data",
      technologies: technologies.data,
    },
  ],
};

export function getStacks(lang: Lang): Stack[] {
  return stacksByLang[lang];
}
