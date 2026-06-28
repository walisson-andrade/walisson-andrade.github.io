export interface FullStackProject {
  id: string;
  number: string;
  segment: string;
  title: string;
  metrics: { icon: string; text: string; highlight: string }[];
  technologies: string[];
  technicalHighlight: {
    label: string;
    description: string;
  };
}

export interface Stack {
  title: string;
  description: string;
  icon: string;
  technologies: string[];
  tabTarget: string;
}

export interface Experience {
  period: string;
  company: string;
  role: string;
  description: string;
  isCurrent: boolean;
}

export interface ImpactStat {
  value: string;
  suffix: string;
  label: string;
}

export interface Automation {
  slug: string;
  titulo: string;
  descricao: string;
  problema: string;
  resultado: string;
  metrica: string;
  tecnologias: string[];
  destaques: string[];
  prints: ImageMetadata[];
}
