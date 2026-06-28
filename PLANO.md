# PLANO DE EXECUÇÃO — Landing Page de Portfólio (Walisson Andrade)

> Documento de planejamento. **Nenhum código será escrito até a aprovação deste plano.**
> Base: [context_projeto.md](context_projeto.md). Data do plano: 2026-06-27.

---

## 1. Stack Escolhida e Justificativa

| Camada | Escolha | Justificativa |
|---|---|---|
| **Framework** | **Astro 6.x** | Astro renderiza HTML estático por padrão (zero JS no cliente, exceto onde explicitamente pedido), tem **acesso nativo ao sistema de arquivos em build-time** — essencial para ler os `meta.json` da pasta `/projects` — e integra `astro:assets` para otimização de imagens dos prints. É a stack sugerida no próprio contexto. |
| **Estilização** | **Tailwind CSS v4** via **`@tailwindcss/vite`** | Tailwind v4 não usa mais a integração `@astrojs/tailwind` (descontinuada). O caminho oficial e atual é o plugin Vite `@tailwindcss/vite` + um `global.css` com `@import "tailwindcss"`. Configuração de tema via CSS (`@theme`), sem `tailwind.config.js` obrigatório. |
| **Otimização de imagens** | **`astro:assets` + `sharp`** | Conversão automática para WebP/AVIF, dimensionamento responsivo e `lazy loading` nativo nos prints do n8n. |
| **Sitemap** | **`@astrojs/sitemap`** | SEO — o site será divulgado no LinkedIn e indexado por recrutadores. |
| **Deploy** | **GitHub Pages** via **GitHub Actions** (`withastro/action@v6`) | Pipeline oficial mantido pela equipe Astro, gratuito, build automático a cada push. |
| **Linguagem** | **TypeScript 6.0** (stable) | TS 7.0 ainda está em RC (junho/2026). Astro já vem com suporte a `.astro` tipado; usaremos `strict`. |
| **Runtime de build** | **Node.js 24 (Active LTS)** | Versão padrão da `withastro/action@v6`; LTS até abril/2028. |

### Por que Astro 6 e não Astro 7?

Astro **7.0** foi lançado **neste mês (junho/2026)** com uma reescrita completa do compilador (de Go para Rust) e parsing de HTML mais estrito que **não corrige mais HTML inválido silenciosamente**. Para um portfólio que precisa simplesmente funcionar e ser confiável diante de recrutadores, adotar um *major* recém-lançado introduz risco desnecessário (integrações de terceiros ainda se estabilizando, edge cases do novo compilador). **Astro 6.x** (stable desde março/2026) oferece o mesmo modelo de ilhas + leitura de arquivos em build-time com ecossistema maduro. Migração para Astro 7 fica como opção futura, de baixo custo.

---

## 2. Versões Específicas das Dependências

> Versões fixadas com `^` para receber patches; *majors* travados. Valores a confirmar com `npm view <pkg> version` no momento do `npm install` (versões abaixo refletem a pesquisa de junho/2026).

```jsonc
// dependencies
"astro":              "^6"          // framework (último major estável e maduro)
"@tailwindcss/vite":  "^4.3"        // plugin oficial Tailwind v4 para Vite
"tailwindcss":        "^4.3"        // engine do Tailwind
"@astrojs/sitemap":   "^4"          // geração de sitemap.xml
"sharp":              "^0.34"       // backend de otimização do astro:assets

// devDependencies
"typescript":         "^6"          // 7.0 ainda em RC — não usar em produção
"@astrojs/check":     "^0.9"        // type-check de arquivos .astro (astro check)
"prettier":           "^3"          // formatação
"prettier-plugin-astro": "^0.14"    // suporte a .astro no prettier
```

**Ambiente / CI:**
- Node.js: **24.x** (LTS)
- Action de deploy: **`withastro/action@v6`**, `actions/deploy-pages@v4`, `actions/configure-pages@v5`

---

## 3. Estrutura de Pastas

```
Portifólio/
├── .github/
│   └── workflows/
│       └── deploy.yml              # CI/CD para GitHub Pages
├── projects/                       # ⚠️ FORA de public/ e src/ — ver §5
│   ├── automacao-01/
│   │   ├── print-01.png
│   │   ├── print-02.png
│   │   ├── fluxo.json              # 🔒 NUNCA servido publicamente
│   │   └── meta.json               # lido em build-time
│   └── automacao-02/
│       └── ...
├── public/                         # servido como está (NÃO conterá .json de fluxos)
│   ├── favicon.svg
│   ├── og-image.png                # imagem para preview no LinkedIn
│   └── robots.txt
├── src/
│   ├── assets/                     # imagens importadas/otimizadas (logos, hero bg)
│   ├── components/                 # ver §4
│   ├── data/
│   │   ├── fullstack-projects.ts   # 4 projetos full stack (dados estáticos)
│   │   ├── stacks.ts               # 3 stacks de habilidades + badges
│   │   ├── experience.ts           # timeline profissional
│   │   └── site.ts                 # config global (nome, links, e-mail, textos)
│   ├── layouts/
│   │   └── BaseLayout.astro        # <head>, meta tags, OG, fontes, slot
│   ├── lib/
│   │   ├── loadAutomations.ts      # leitura dos meta.json + prints em build-time
│   │   └── types.ts                # tipos (Automation, FullStackProject, Stack…)
│   ├── pages/
│   │   └── index.astro             # única página (landing)
│   └── styles/
│       └── global.css              # @import "tailwindcss" + @theme (tokens)
├── astro.config.mjs
├── tsconfig.json
├── package.json
├── context_projeto.md
└── PLANO.md
```

---

## 4. Componentes (responsabilidade de cada um)

Todos em `src/components/`. Astro estático por padrão; nenhum precisa de JS no cliente, salvo navegação mobile.

| Componente | Responsabilidade |
|---|---|
| `Hero.astro` | Headline ("Builder. Automação. IA. Produção."), subtítulo de proposta de valor, CTA de contato e **aviso de confidencialidade**. Primeira dobra. |
| `StackCards.astro` | Renderiza os 3 cards de competências a partir de `data/stacks.ts`. Usa `TechBadge`. |
| `TechBadge.astro` | Badge individual de tecnologia (pílula estilizada). Reutilizável. |
| `SectionHeading.astro` | Título + subtítulo padronizados de seção (consistência visual). |
| `FullStackProjectCard.astro` | Card de projeto full stack: descrição, problema, gargalo, **métricas**, tecnologias (badges) e destaques técnicos. Recebe um objeto tipado. |
| `AutomationCard.astro` | Card de automação n8n: título, **carrossel/galeria de prints** (via `astro:assets`), o que faz, problema, resultado, métrica, integrações e destaques. Populado pelos `meta.json`. |
| `ImpactSection.astro` | Painel de números agregados (total de projetos, métricas-chave, background Accenture/NILG.AI). |
| `Timeline.astro` | Linha do tempo profissional a partir de `data/experience.ts` (opcional, conforme contexto). |
| `CTA.astro` | Chamada final + links de LinkedIn e e-mail. |
| `Footer.astro` | Rodapé com aviso de confidencialidade, copyright e links. |
| `ConfidentialityNotice.astro` | Componente reutilizável da mensagem de confidencialidade (usado no Hero e/ou seção n8n). |
| `Nav.astro` | Navegação fixa/âncoras para as seções; menu responsivo (único ponto com JS mínimo). |

`index.astro` compõe a página na ordem: `Nav → Hero → StackCards → FullStack Projects → Automation Projects → ImpactSection → Timeline → CTA → Footer`.

---

## 5. Estratégia de Leitura dos `meta.json` em Build-Time

**Local da pasta:** `projects/` fica na **raiz do repositório**, fora de `src/` e fora de `public/`. Isso é o que garante que o Astro nunca a sirva (ver §6).

**Como ler (em `src/lib/loadAutomations.ts`):**

1. Usar a API do Vite **`import.meta.glob`** com caminho relativo subindo até a raiz:
   - `import.meta.glob('../../projects/*/meta.json', { eager: true })` → carrega todos os metadados.
   - `import.meta.glob('../../projects/*/print-*.{png,jpg,jpeg,webp}', { eager: true })` → carrega os prints **como assets otimizáveis** pelo `astro:assets` (cada import retorna o metadado da imagem para o componente `<Image>`).
2. Cruzar `meta.json` ↔ prints pela pasta de origem (chave do glob), montando um array `Automation[]` tipado.
3. **Importante:** `import.meta.glob` **não casa com `fluxo.json`** — o padrão de glob inclui apenas `meta.json` e imagens. O `fluxo.json` jamais entra no grafo de módulos, logo nunca vai para o `dist/`.
4. A função é chamada no *frontmatter* de `index.astro` (executa só em build-time, em ambiente Node — nada vaza para o cliente).
5. Ordenação determinística (ex.: por nome de pasta ou campo `ordem` opcional no `meta.json`).

> Alternativa considerada e descartada: ler com `fs.readFileSync`. Funciona em build, mas `import.meta.glob` integra os prints diretamente ao pipeline de otimização do `astro:assets`, então é superior.

**Validação:** schema dos `meta.json` validado em `loadAutomations.ts` (checagem dos campos obrigatórios: `titulo`, `descricao`, `problema`, `resultado`, `metrica`, `tecnologias`, `destaques`). Build falha com mensagem clara se um `meta.json` estiver malformado.

---

## 6. Garantia de que `fluxo.json` Nunca É Servido Publicamente

Defesa em camadas:

1. **Localização (principal):** `projects/` está **fora de `public/`** e **fora de `src/pages/`**. O Astro só publica: (a) o conteúdo de `public/` copiado literalmente, e (b) rotas geradas a partir de `src/pages/`. `projects/` não é nenhum dos dois → não há rota pública para qualquer arquivo dentro dela.
2. **Glob restritivo:** os únicos arquivos de `projects/` que entram no build são `meta.json` e `print-*.{png,jpg,...}`, explicitamente listados no `import.meta.glob`. `fluxo.json` não casa com nenhum padrão → nunca vira módulo, nunca vai para `dist/`.
3. **Sem import direto:** nenhuma linha de código importa, lê ou linka `fluxo.json`. Os dados exibidos vêm exclusivamente do `meta.json`.
4. **Verificação automatizada (gate de qualidade):** após `astro build`, um passo no CI faz `find dist -name "*.json"` / busca por `fluxo` no `dist/` e **falha o deploy** se encontrar qualquer `fluxo.json`. Garante que regressões futuras não exponham os fluxos.
5. **Nada de `.json` de fluxo em `public/`:** regra documentada; só `og-image`, `favicon` e `robots.txt` em `public/`.

---

## 7. Ordem de Execução das Tarefas

**Fase 0 — Setup**
1. `npm create astro@latest` (template mínimo) + Git init.
2. Instalar e configurar **Tailwind v4** via `@tailwindcss/vite` + `src/styles/global.css`.
3. Configurar `astro.config.mjs`: `site`, `base` (caminho do GitHub Pages), integração `sitemap`, plugin Vite do Tailwind.
4. `tsconfig.json` em modo `strict`; instalar `@astrojs/check` e Prettier.

**Fase 1 — Fundação visual**
5. Definir tokens de design no `@theme` do `global.css` (cores, fontes, espaçamento) — ver §8.
6. `BaseLayout.astro`: `<head>`, meta tags SEO/OG (LinkedIn preview), fontes, importação do `global.css`.
7. Componentes base reutilizáveis: `TechBadge`, `SectionHeading`, `ConfidentialityNotice`, `Nav`, `Footer`.

**Fase 2 — Dados estáticos e seções "fixas"**
8. Popular `src/data/`: `site.ts`, `stacks.ts`, `fullstack-projects.ts` (os 4 projetos do contexto), `experience.ts`.
9. Implementar `Hero`, `StackCards`, `FullStackProjectCard`, `Timeline`, `ImpactSection`, `CTA`.
10. Montar `index.astro` com todas as seções acima (site já navegável e apresentável).

**Fase 3 — Automações n8n (dinâmico em build)**
11. Definir tipos em `lib/types.ts` e implementar `lib/loadAutomations.ts` (§5) com validação de schema.
12. Criar `projects/` com **pelo menos 1 automação de exemplo** (meta.json + prints) para validar o pipeline. (Conteúdo real entra depois pelo usuário.)
13. Implementar `AutomationCard.astro` + galeria de prints com `astro:assets`.
14. Integrar a seção de automações no `index.astro`.

**Fase 4 — Acabamento**
15. Responsividade (mobile-first) e animações sutis (hover/entrada via CSS).
16. SEO: sitemap, `robots.txt`, `og-image.png`, meta description.
17. Acessibilidade (contraste, `alt` nos prints, navegação por teclado) e performance (Lighthouse).

**Fase 5 — Deploy**
18. Criar `.github/workflows/deploy.yml` com `withastro/action@v6` + gate de verificação anti-`fluxo.json` (§6.4).
19. Habilitar GitHub Pages (source: GitHub Actions) e validar a URL pública.
20. `npm run build` local + teste do `dist/` antes do primeiro push.

---

## 8. Decisões de Design

### Paleta (dark mode como padrão)
Definida como tokens CSS no `@theme` do Tailwind v4.

| Token | Valor | Uso |
|---|---|---|
| `--color-bg` | `#0B0E14` | Fundo principal (quase-preto azulado) |
| `--color-surface` | `#141925` | Cards e superfícies elevadas |
| `--color-border` | `#222a39` | Bordas sutis |
| `--color-text` | `#E6EAF2` | Texto principal |
| `--color-text-muted` | `#9AA4B8` | Texto secundário |
| `--color-accent` | `#FF6D42` | **Accent primário (laranja n8n)** — CTAs, destaques, badges |
| `--color-accent-2` | `#3B82F6` | Accent secundário (azul tech) — links, métricas |
| `--color-success` | `#34D399` | Realce de métricas positivas |

### Tipografia
- **Headings:** *Space Grotesk* (moderna, técnica, boa presença).
- **Corpo / UI:** *Inter* (alta legibilidade em telas).
- **Mono (métricas/código):** *JetBrains Mono* (números e badges técnicos).
- Fontes auto-hospedadas via [`@fontsource`](https://fontsource.org/) (sem chamada externa ao Google Fonts → privacidade + performance).
- Escala fluida com `clamp()` para responsividade dos títulos.

### Breakpoints (padrão Tailwind, mobile-first)
| Nome | Largura |
|---|---|
| base | < 640px (mobile) |
| `sm` | ≥ 640px |
| `md` | ≥ 768px (tablet) |
| `lg` | ≥ 1024px (desktop) |
| `xl` | ≥ 1280px |
| `2xl` | ≥ 1536px |

- Grids de cards: 1 coluna (mobile) → 2 (`md`) → 3 (`lg`) nas stacks; projetos full stack em 1→2 colunas.
- Container central com `max-w-6xl` e padding lateral responsivo.

### Animações
- Sutis e respeitando `prefers-reduced-motion`: fade/slide-in na entrada das seções (CSS + IntersectionObserver mínimo ou `animation-timeline: view()` onde suportado), `hover` com leve elevação/realce de borda accent nos cards.

---

## 9. Itens que Dependem do Usuário (a confirmar)

- **URL do GitHub Pages:** o repositório será `walisson.github.io` (raiz, `base: '/'`) ou um projeto tipo `usuario.github.io/Portifolio` (precisa de `base: '/Portifolio'`)? Isso afeta `astro.config.mjs`.
- **Conteúdo real das automações n8n** (`meta.json` + prints) — começo com 1 exemplo para validar o pipeline.
- **Foto/avatar e `og-image`** para o preview do LinkedIn.

---

✅ **Aguardando sua aprovação para iniciar a implementação (Fase 0).**
