import type { Stack } from "@/lib/types";

export const stacks: Stack[] = [
  {
    title: "Automação Low-Code",
    description: "Fluxos que conectam ferramentas e eliminam trabalho repetitivo.",
    icon: "automation",
    tabTarget: "automacoes",
    technologies: [
      "n8n",
      "Zapier",
      "Make",
      "Webhooks",
      "APIs REST",
      "WhatsApp",
      "Slack",
      "Notion",
      "Airtable",
    ],
  },
  {
    title: "Desenvolvimento Full Stack",
    description: "Aplicações web completas, do banco de dados à interface.",
    icon: "fullstack",
    tabTarget: "fullstack",
    technologies: [
      "TypeScript",
      "Python",
      "React",
      "Next.js",
      "FastAPI",
      "PostgreSQL",
      "Docker",
      "AWS",
      "Terraform",
    ],
  },
  {
    title: "Análise de Dados & BI",
    description: "Pipelines, dashboards e decisões guiadas por dados.",
    icon: "data",
    tabTarget: "data",
    technologies: [
      "Power BI",
      "SQL Server",
      "Python",
      "Pentaho",
      "Excel",
      "GCP",
    ],
  },
];
