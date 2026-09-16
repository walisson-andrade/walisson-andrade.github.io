export const languages = {
  pt: "PT",
  en: "EN",
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = "pt";

export const ui = {
  pt: {
    "nav.skills": "Skills",
    "nav.projects": "Projetos",
    "nav.experience": "Experiência",
    "nav.cta": "Vamos conversar",
    "nav.back": "Voltar aos projetos",

    "hero.available": "Disponível para projetos",

    "stacks.tag": "Stacks de habilidades",
    "stacks.title": "Três frentes de atuação",
    "stacks.cta": "Ver projetos",

    "projects.tag": "Projetos",
    "projects.title": "Construído para produção",
    "projects.subtitle": "Projetos reais em produção. Clientes não divulgados por contrato.",
    "projects.tab.automations": "Automações",
    "projects.tab.fullstack": "Full Stack",
    "projects.tab.data": "Data & BI",
    "projects.confidentiality": "Capturas ilustrativas. Fluxos reais sob acordo de confidencialidade",
    "projects.viewDetails": "Ver detalhes",
    "projects.result": "Resultado",
    "projects.technicalHighlight": "Destaque técnico",
    "projects.data.title": "Projetos de Data & BI",
    "projects.data.description":
      "Dashboards, pipelines de dados e análises preditivas desenvolvidos na Accenture e em projetos independentes.",
    "projects.data.comingSoon": "Em breve",

    "experience.tag": "Trajetória",
    "experience.title": "Experiência",

    "cta.tag": "Vamos construir",
    "cta.highlight": "Vamos conversar.",

    "footer.confidentiality": "Projetos reais em produção. Detalhes de clientes não divulgados por contrato",
    "footer.tagline": "Automação · Full Stack · Dados",

    "automation.badge": "Automação n8n",
    "automation.problem": "Problema",
    "automation.result": "Resultado",
    "automation.impact": "Métrica de impacto",
    "automation.highlights": "Destaques técnicos",
    "automation.tech": "Tecnologias",
    "automation.confidentiality": "Projeto real em produção. Detalhes do cliente não divulgados por contrato",

    "theme.toggle": "Alternar tema claro/escuro",
    "lang.toggle": "Mudar idioma",
  },
  en: {
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.experience": "Experience",
    "nav.cta": "Let's talk",
    "nav.back": "Back to projects",

    "hero.available": "Available for projects",

    "stacks.tag": "Skill stacks",
    "stacks.title": "Three lanes of work",
    "stacks.cta": "View projects",

    "projects.tag": "Projects",
    "projects.title": "Built for production",
    "projects.subtitle": "Real projects in production. Clients undisclosed under contract.",
    "projects.tab.automations": "Automations",
    "projects.tab.fullstack": "Full Stack",
    "projects.tab.data": "Data & BI",
    "projects.confidentiality": "Illustrative captures. Real flows under confidentiality agreement",
    "projects.viewDetails": "View details",
    "projects.result": "Result",
    "projects.technicalHighlight": "Technical highlight",
    "projects.data.title": "Data & BI Projects",
    "projects.data.description":
      "Dashboards, data pipelines and predictive analytics built at Accenture and in independent projects.",
    "projects.data.comingSoon": "Coming soon",

    "experience.tag": "Trajectory",
    "experience.title": "Experience",

    "cta.tag": "Let's build",
    "cta.highlight": "Let's talk.",

    "footer.confidentiality": "Real projects in production. Client details undisclosed under contract",
    "footer.tagline": "Automation · Full Stack · Data",

    "automation.badge": "n8n automation",
    "automation.problem": "Problem",
    "automation.result": "Result",
    "automation.impact": "Impact metric",
    "automation.highlights": "Technical highlights",
    "automation.tech": "Technologies",
    "automation.confidentiality": "Real project in production. Client details undisclosed under contract",

    "theme.toggle": "Toggle light/dark theme",
    "lang.toggle": "Switch language",
  },
} as const;
