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
    "opening.workLink": "Ver o trabalho",

    "stacks.tag": "Stacks de habilidades",
    "stacks.title": "Três frentes de atuação",

    "projects.tag": "Projetos",
    "projects.title": "Construído para produção",
    "projects.subtitle": "Projetos reais em produção. Clientes não divulgados por contrato.",
    "projects.confidentiality": "Capturas ilustrativas. Fluxos reais sob acordo de confidencialidade",
    "projects.viewDetails": "Ver detalhes completos",
    "projects.result": "Resultado",

    "siteProjects.tag": "Sites & Landing Pages",
    "siteProjects.title": "Sites que colocamos no ar",
    "siteProjects.visit": "Visitar site",

    "automations.tag": "Automações",
    "automations.title": "Registro de automações",

    "experience.tag": "Trajetória",
    "experience.title": "Experiência",

    "cta.tag": "Vamos construir",
    "cta.highlight": "Vamos conversar.",

    "footer.confidentiality": "Projetos reais em produção. Detalhes de clientes não divulgados por contrato",
    "footer.tagline": "IA Aplicada · Full Stack · Automação",

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
    "opening.workLink": "See the work",

    "stacks.tag": "Skill stacks",
    "stacks.title": "Three lanes of work",

    "projects.tag": "Projects",
    "projects.title": "Built for production",
    "projects.subtitle": "Real projects in production. Clients undisclosed under contract.",
    "projects.confidentiality": "Illustrative captures. Real flows under confidentiality agreement",
    "projects.viewDetails": "View full details",
    "projects.result": "Result",

    "siteProjects.tag": "Sites & Landing Pages",
    "siteProjects.title": "Sites shipped to production",
    "siteProjects.visit": "Visit site",

    "automations.tag": "Automations",
    "automations.title": "Automation log",

    "experience.tag": "Trajectory",
    "experience.title": "Experience",

    "cta.tag": "Let's build",
    "cta.highlight": "Let's talk.",

    "footer.confidentiality": "Real projects in production. Client details undisclosed under contract",
    "footer.tagline": "Applied AI · Full Stack · Automation",

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
