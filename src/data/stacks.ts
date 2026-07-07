import type { Stack } from "@/lib/types";
import type { Lang } from "@/i18n/ui";

const technologies = {
  ai: ["Machine Learning", "Python", "LLMs", "RAG", "Prompt Engineering", "Embeddings", "OpenAI", "Anthropic API"],
  fullstack: ["TypeScript", "React.js", "Next.js", "Node.js", "FastAPI", "PostgreSQL", "SQL", "Docker"],
  automation: ["n8n", "SQL", "Análise de dados", "APIs REST", "Webhooks", "Dashboards"],
};

const stacksByLang: Record<Lang, Stack[]> = {
  pt: [
    {
      title: "IA Aplicada",
      description: "Modelos e pipelines de IA generativa que viram produto, não apenas protótipo.",
      icon: "automation",
      tabTarget: "fullstack",
      technologies: technologies.ai,
    },
    {
      title: "Full Stack Development",
      description: "Aplicações web completas, do banco de dados à interface.",
      icon: "fullstack",
      tabTarget: "fullstack",
      technologies: technologies.fullstack,
    },
    {
      title: "Automação & Dados",
      description: "Fluxos que conectam sistemas, eliminam trabalho repetitivo e geram visibilidade.",
      icon: "data",
      tabTarget: "automacoes",
      technologies: technologies.automation,
    },
  ],
  en: [
    {
      title: "Applied AI",
      description: "Generative AI models and pipelines that become real product, not just prototypes.",
      icon: "automation",
      tabTarget: "fullstack",
      technologies: technologies.ai,
    },
    {
      title: "Full Stack Development",
      description: "Complete web applications, from the database to the interface.",
      icon: "fullstack",
      tabTarget: "fullstack",
      technologies: technologies.fullstack,
    },
    {
      title: "Automation & Data",
      description: "Flows that connect systems, remove repetitive work and create visibility.",
      icon: "data",
      tabTarget: "automacoes",
      technologies: technologies.automation,
    },
  ],
};

export function getStacks(lang: Lang): Stack[] {
  return stacksByLang[lang];
}
