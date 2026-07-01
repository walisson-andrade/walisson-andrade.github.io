import fs from "node:fs";
import path from "node:path";

interface IconEntry {
  pkg: "si" | "dev";
  file: string;
}

const ICONS: Record<string, IconEntry> = {
  n8n: { pkg: "si", file: "n8n" },
  zapier: { pkg: "si", file: "zapier" },
  make: { pkg: "si", file: "make" },
  whatsapp: { pkg: "si", file: "whatsapp" },
  slack: { pkg: "dev", file: "slack/slack-original.svg" },
  notion: { pkg: "si", file: "notion" },
  airtable: { pkg: "si", file: "airtable" },
  typescript: { pkg: "si", file: "typescript" },
  python: { pkg: "si", file: "python" },
  react: { pkg: "si", file: "react" },
  "next.js": { pkg: "si", file: "nextdotjs" },
  fastapi: { pkg: "si", file: "fastapi" },
  postgresql: { pkg: "si", file: "postgresql" },
  docker: { pkg: "si", file: "docker" },
  "docker compose": { pkg: "si", file: "docker" },
  terraform: { pkg: "si", file: "terraform" },
  gcp: { pkg: "si", file: "googlecloud" },
  discord: { pkg: "si", file: "discord" },
  "google sheets": { pkg: "si", file: "googlesheets" },
  "google docs": { pkg: "si", file: "googledocs" },
  "google drive": { pkg: "si", file: "googledrive" },
  "google gemini": { pkg: "si", file: "googlegemini" },
  mongodb: { pkg: "si", file: "mongodb" },
  gmail: { pkg: "si", file: "gmail" },
  clickup: { pkg: "si", file: "clickup" },
  anthropic: { pkg: "si", file: "anthropic" },
  redis: { pkg: "si", file: "redis" },
  stripe: { pkg: "si", file: "stripe" },
  supabase: { pkg: "si", file: "supabase" },
  "meta ads": { pkg: "si", file: "meta" },
  meta: { pkg: "si", file: "meta" },
  facebook: { pkg: "si", file: "facebook" },
  instagram: { pkg: "si", file: "instagram" },
  "sql server": { pkg: "dev", file: "microsoftsqlserver/microsoftsqlserver-plain.svg" },
};

const svgCache = new Map<string, string | null>();

function normalize(name: string): string {
  return name.split("(")[0].trim().toLowerCase();
}

function loadSvg(entry: IconEntry): string | null {
  const filePath =
    entry.pkg === "si"
      ? path.resolve(process.cwd(), "node_modules/simple-icons/icons", `${entry.file}.svg`)
      : path.resolve(process.cwd(), "node_modules/devicon/icons", entry.file);

  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  return raw
    .replace(/<title>.*?<\/title>/s, "")
    .replace(/\s(width|height)="[^"]*"/g, "")
    .replace(/fill="#[0-9a-fA-F]{3,8}"/g, "fill=\"currentColor\"")
    .replace(/<svg /, '<svg width="1em" height="1em" fill="currentColor" ');
}

export function getTechIconSvg(name: string): string | null {
  const key = normalize(name);
  if (svgCache.has(key)) return svgCache.get(key)!;

  const entry = ICONS[key];
  const svg = entry ? loadSvg(entry) : null;
  svgCache.set(key, svg);
  return svg;
}
