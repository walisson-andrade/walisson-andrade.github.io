import type { Automation } from "./types";

interface AutomationMeta {
  titulo: string;
  descricao: string;
  problema: string;
  resultado: string;
  metrica: string;
  tecnologias: string[];
  destaques: string[];
}

const REQUIRED_FIELDS: (keyof AutomationMeta)[] = [
  "titulo",
  "descricao",
  "problema",
  "resultado",
  "metrica",
  "tecnologias",
  "destaques",
];

function extractFolder(path: string): string {
  const parts = path.replace(/\\/g, "/").split("/");
  const projectsIdx = parts.indexOf("projects");
  return projectsIdx >= 0 ? parts[projectsIdx + 1] : parts[parts.length - 2];
}

export function slugify(text: string): string {
  return text
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function validate(meta: unknown, folder: string): meta is AutomationMeta {
  if (!meta || typeof meta !== "object") {
    throw new Error(`meta.json inválido em projects/${folder}: não é um objeto`);
  }
  for (const field of REQUIRED_FIELDS) {
    if (!(field in (meta as Record<string, unknown>))) {
      throw new Error(
        `meta.json em projects/${folder}: campo obrigatório "${field}" ausente`,
      );
    }
  }
  return true;
}

export function loadAutomations(): Automation[] {
  const metaFiles = import.meta.glob<AutomationMeta>(
    "../../projects/*/meta.json",
    { eager: true, import: "default" },
  );

  const printFiles = import.meta.glob<{ default: ImageMetadata }>(
    "../../projects/*/*.{png,jpg,jpeg,webp}",
    { eager: true },
  );

  const printsByFolder = new Map<string, ImageMetadata[]>();
  for (const [path, mod] of Object.entries(printFiles)) {
    const folder = extractFolder(path);
    if (!printsByFolder.has(folder)) {
      printsByFolder.set(folder, []);
    }
    printsByFolder.get(folder)!.push(mod.default);
  }

  const automations: Automation[] = [];

  for (const [path, meta] of Object.entries(metaFiles)) {
    const folder = extractFolder(path);
    validate(meta, folder);

    automations.push({
      slug: slugify(folder),
      titulo: meta.titulo,
      descricao: meta.descricao,
      problema: meta.problema,
      resultado: meta.resultado,
      metrica: meta.metrica,
      tecnologias: meta.tecnologias,
      destaques: meta.destaques,
      prints: printsByFolder.get(folder) ?? [],
    });
  }

  automations.sort((a, b) => a.slug.localeCompare(b.slug));

  return automations;
}
