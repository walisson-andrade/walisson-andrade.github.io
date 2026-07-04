import type { FullStackProject } from "@/lib/types";
import type { Lang } from "@/i18n/ui";

const fullstackProjectsByLang: Record<Lang, FullStackProject[]> = {
  pt: [
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
      technologies: ["Next.js", "React", "TypeScript", "Supabase", "OpenAI", "RAG", "Docker"],
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
      technologies: ["FastAPI", "PostgreSQL", "pgvector", "Next.js", "React", "Docker Compose"],
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
      technologies: ["Python", "FastAPI", "OpenAI", "MongoDB", "AWS Lambda", "Docker"],
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
        { icon: "↗", text: "", highlight: "85% menos tempo de entrada de dados" },
        { icon: "↗", text: "", highlight: "Zero perda de dados offline" },
      ],
      technologies: ["Next.js", "React", "TypeScript", "FastAPI", "IndexedDB", "Service Worker", "Terraform"],
      technicalHighlight: {
        label: "Destaque técnico",
        description:
          "Offline-first com idempotência, pipeline de IA com Claude vision e IaC completa com Terraform.",
      },
    },
    {
      id: "fs-05",
      number: "05",
      segment: "Barbearia / Serviços de Estética Masculina",
      title: "SaaS de Agendamento Multi-Profissional para Barbearias com Checkout via WhatsApp",
      metrics: [
        { icon: "↗", text: "MVP funcional entregue com ", highlight: "site + admin + API segura" },
        { icon: "↗", text: "Painel administrativo com ", highlight: "9 módulos de gestão" },
        { icon: "↗", text: "Arquitetura server-side com ", highlight: "12 rotas de API validadas" },
      ],
      technologies: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS 4", "Supabase", "Docker"],
      technicalHighlight: {
        label: "Destaque técnico",
        description:
          "A regra de negócio mais delicada, evitar overbooking com múltiplos barbeiros, é resolvida no Postgres com um índice único parcial em (data, horário, barbeiro) filtrado por status ativo, e a duração do serviço nunca é confiada ao cliente: o servidor busca o valor real no banco antes de validar o slot, retornando 409 em caso de conflito de concorrência.",
      },
    },
    {
      id: "fs-06",
      number: "06",
      segment: "Salão de Festas e Eventos",
      title: "Site com Painel Administrativo para Gestão de Reservas e Conteúdo",
      metrics: [
        {
          icon: "↗",
          text: "Políticas de segurança reforçadas em ",
          highlight: "8 tabelas do banco",
        },
        {
          icon: "↗",
          text: "Painel administrativo com ",
          highlight: "9 módulos de gestão (CRUD completo)",
        },
      ],
      technologies: [
        "Astro",
        "TypeScript",
        "Tailwind CSS",
        "Supabase",
        "Deno",
        "Firebase Hosting",
        "Docker",
        "Sharp",
      ],
      technicalHighlight: {
        label: "Destaque técnico",
        description:
          "Revisão das políticas de RLS (Row Level Security) do Postgres, que estavam mais permissivas do que o necessário para tabelas com dados sensíveis de clientes. A correção substituiu leitura pública direta por views dedicadas que expõem apenas as colunas não sensíveis, mantendo acesso total apenas para usuários autenticados.",
      },
    },
  ],
  en: [
    {
      id: "fs-01",
      number: "01",
      segment: "Financial Education & Cashback",
      title: "AI-Powered Financial Diagnostics Platform",
      metrics: [
        { icon: "↗", text: "Latency reduced by ", highlight: "35%" },
        {
          icon: "↗",
          text: "Leads integrated via ",
          highlight: "real-time webhook",
        },
      ],
      technologies: ["Next.js", "React", "TypeScript", "Supabase", "OpenAI", "RAG", "Docker"],
      technicalHighlight: {
        label: "Technical highlight",
        description:
          "Server-first AI + RAG pipeline with Zod validation, streaming and per-IP rate limiting.",
      },
    },
    {
      id: "fs-02",
      number: "02",
      segment: "Startup Incubator",
      title: "AI-Powered Startup Discovery SaaS Platform",
      metrics: [
        { icon: "↗", text: "Search ", highlight: "30x faster" },
        { icon: "↗", text: "", highlight: "6x more enrichment volume" },
      ],
      technologies: ["FastAPI", "PostgreSQL", "pgvector", "Next.js", "React", "Docker Compose"],
      technicalHighlight: {
        label: "Technical highlight",
        description:
          "14 Docker microservices, HNSW vector search and continuous scouting with Slack alerts.",
      },
    },
    {
      id: "fs-03",
      number: "03",
      segment: "Custom Promotional Products",
      title: "AI-Powered Email Quoting Automation",
      metrics: [
        { icon: "↗", text: "", highlight: "85% less time per quote" },
        { icon: "↗", text: "", highlight: "93% classification accuracy" },
      ],
      technologies: ["Python", "FastAPI", "OpenAI", "MongoDB", "AWS Lambda", "Docker"],
      technicalHighlight: {
        label: "Technical highlight",
        description:
          "2,000+ line prompt with phishing detection, color-matching scraping and backoff retries.",
      },
    },
    {
      id: "fs-04",
      number: "04",
      segment: "Electrical Inspections",
      title: "Offline-First PWA for Field Inspection",
      metrics: [
        { icon: "↗", text: "", highlight: "85% less data entry time" },
        { icon: "↗", text: "", highlight: "Zero offline data loss" },
      ],
      technologies: ["Next.js", "React", "TypeScript", "FastAPI", "IndexedDB", "Service Worker", "Terraform"],
      technicalHighlight: {
        label: "Technical highlight",
        description:
          "Offline-first with idempotency, Claude vision AI pipeline and full IaC with Terraform.",
      },
    },
    {
      id: "fs-05",
      number: "05",
      segment: "Barbershop / Men's Grooming Services",
      title: "Multi-Barber Booking SaaS for Barbershops with WhatsApp Checkout",
      metrics: [
        { icon: "↗", text: "Functional MVP delivered with ", highlight: "site + admin panel + secure API" },
        { icon: "↗", text: "Admin panel with ", highlight: "9 management modules" },
        { icon: "↗", text: "Server-side architecture with ", highlight: "12 validated API routes" },
      ],
      technologies: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS 4", "Supabase", "Docker"],
      technicalHighlight: {
        label: "Technical highlight",
        description:
          "The trickiest business rule, preventing double-booking across multiple barbers, is enforced at the Postgres layer with a partial unique index on (date, time, barber) filtered by active status, and service duration is never trusted from the client: the server re-fetches the real value from the database before validating the slot, returning a 409 on any race-condition conflict.",
      },
    },
    {
      id: "fs-06",
      number: "06",
      segment: "Event Venue / Party Hall",
      title: "Booking & Content Management Site with Admin Dashboard",
      metrics: [
        {
          icon: "↗",
          text: "Security policies hardened across ",
          highlight: "8 database tables",
        },
        {
          icon: "↗",
          text: "Admin dashboard with ",
          highlight: "9 management modules (full CRUD)",
        },
      ],
      technologies: [
        "Astro",
        "TypeScript",
        "Tailwind CSS",
        "Supabase",
        "Deno",
        "Firebase Hosting",
        "Docker",
        "Sharp",
      ],
      technicalHighlight: {
        label: "Technical highlight",
        description:
          "A review of Postgres Row Level Security policies found them more permissive than needed on tables holding sensitive customer data. The fix replaced direct public reads with dedicated views exposing only non-sensitive columns, keeping full table access restricted to authenticated users.",
      },
    },
  ],
};

export function getFullstackProjects(lang: Lang): FullStackProject[] {
  return fullstackProjectsByLang[lang];
}
