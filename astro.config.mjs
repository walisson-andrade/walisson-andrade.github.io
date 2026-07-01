import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://walisson-andrade.github.io",
  integrations: [sitemap()],
  i18n: {
    locales: ["pt", "en"],
    defaultLocale: "pt",
    routing: {
      prefixDefaultLocale: true,
    },
  },
  redirects: {
    "/": "/pt",
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
