import type { FullStackProject } from "@/lib/types";

export const fullstackProjects: FullStackProject[] = [
  {
    id: "fs-01",
    number: "01",
    segment: "Educação Financeira & Cashback",
    title: "Plataforma de Diagnóstico Financeiro com IA",
    metrics: [
      { icon: "↗", text: "Latência reduzida em ", highlight: "35%" },
      {
        icon: "↗",
        text: "Leads integrados via ",
        highlight: "webhook em tempo real",
      },
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Supabase",
      "OpenAI",
      "RAG",
      "Docker",
    ],
    technicalHighlight: {
      label: "Destaque técnico",
      description:
        "Pipeline server-first de IA + RAG com validação Zod, streaming e rate limiting por IP.",
    },
  },
  {
    id: "fs-02",
    number: "02",
    segment: "Incubadora de Startups",
    title: "Plataforma SaaS de Descoberta de Startups com IA",
    metrics: [
      { icon: "↗", text: "Busca ", highlight: "30x mais rápida" },
      { icon: "↗", text: "", highlight: "6x mais volume de enriquecimento" },
    ],
    technologies: [
      "FastAPI",
      "PostgreSQL",
      "pgvector",
      "Next.js",
      "React",
      "Docker Compose",
    ],
    technicalHighlight: {
      label: "Destaque técnico",
      description:
        "14 microserviços Docker, busca vetorial com HNSW e scouting contínuo com alertas Slack.",
    },
  },
  {
    id: "fs-03",
    number: "03",
    segment: "Brindes Personalizáveis",
    title: "Automação de Orçamentos por E-mail com IA",
    metrics: [
      { icon: "↗", text: "", highlight: "85% menos tempo por orçamento" },
      { icon: "↗", text: "", highlight: "93% de acurácia na classificação" },
    ],
    technologies: [
      "Python",
      "FastAPI",
      "OpenAI",
      "MongoDB",
      "AWS Lambda",
      "Docker",
    ],
    technicalHighlight: {
      label: "Destaque técnico",
      description:
        "Prompt de 2.000+ linhas com detecção de phishing, scraping com color matching e retry com backoff.",
    },
  },
  {
    id: "fs-04",
    number: "04",
    segment: "Inspeções Elétricas",
    title: "PWA Offline-First para Inspeção de Campo",
    metrics: [
      {
        icon: "↗",
        text: "",
        highlight: "85% menos tempo de entrada de dados",
      },
      { icon: "↗", text: "", highlight: "Zero perda de dados offline" },
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "FastAPI",
      "IndexedDB",
      "Service Worker",
      "Terraform",
    ],
    technicalHighlight: {
      label: "Destaque técnico",
      description:
        "Offline-first com idempotência, pipeline de IA com Claude vision e IaC completa com Terraform.",
    },
  },
];
