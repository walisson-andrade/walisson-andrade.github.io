import { ui, defaultLang, type Lang } from "./ui";

export function getLangFromUrl(url: URL): Lang {
  const [, first] = url.pathname.split("/");
  if (first in ui) return first as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

export function localizePath(lang: Lang, path: string): string {
  return `/${lang}${path === "/" ? "" : path}`;
}

export function otherLang(lang: Lang): Lang {
  return lang === "pt" ? "en" : "pt";
}
