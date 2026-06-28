# Contexto do Projeto: Landing Page de Portfólio — Walisson Andrade

## 1. Objetivo

Criar uma **landing page profissional** para exibir projetos de automação (n8n) e desenvolvimento full stack, com o propósito de:

- Ser divulgada no **LinkedIn** como portfólio profissional
- Comprovar experiência prática com projetos reais em produção
- Atrair recrutadores e potenciais clientes

**Desenvolvedor:** Walisson Antunes Vieira de Andrade  
**Localização:** Uberlândia, MG, Brasil  
**Email:** walisson.a.andrade@gmail.com  
**LinkedIn:** linkedin.com/in/walisson-andrade
**Whatsapp:** +5534998683356


---

## 2. Perfil Profissional (para Hero/About)

Profissional de Tecnologia com perfil **builder**: desenvolvo, integro e coloco projetos em produção rapidamente. Combino desenvolvimento web full stack, automação com n8n e integração de APIs REST com aplicações práticas de Inteligência Artificial — criando agentes inteligentes, pipelines de IA e automações que impactam diretamente resultados de negócio. Histórico comprovado em construção de MVPs, soluções full stack e integrações complexas na Accenture e NILG.AI.

---

## 3. Estrutura de Seções da Landing Page

### 3.1 Hero
- Headline profissional (ex: "Builder. Automação. IA. Produção.")
- Subtítulo com proposta de valor
- Botão CTA para contato
- Mensagem de confidencialidade (projetos reais, sem citar clientes por contrato)

---

### 3.2 Três Stacks de Habilidades

Exibir três blocos/cards de competências com badges de tecnologias:

#### Stack 1 — Automação Low-Code
n8n, Zapier, Make (Integromat), Webhooks, APIs REST, Postbacks, CRM integrations, fluxos automatizados, integrações com WhatsApp / Slack / Gmail / Google Sheets / Notion / Airtable

#### Stack 2 — Desenvolvimento Full Stack
TypeScript, JavaScript, Python, Node.js, React, Next.js (App Router), FastAPI, Tailwind CSS, HTML/CSS, Supabase, PostgreSQL, MongoDB, SQL Server, MySQL, Oracle, Docker, Docker Compose, GitHub Actions, AWS (EC2, ECR, S3, Lambda), Terraform, Cloudflare, Pydantic, SQLAlchemy, Zod, Service Worker / PWA / IndexedDB

#### Stack 3 — Análise de Dados & BI
Python, Power BI, SQL Server, MySQL, PostgreSQL, Oracle, Pentaho (ETL/ELT), Excel Avançado, SSAS, GCP, análise preditiva, modelagem de dados, pipelines de dados

---

### 3.3 Projetos — Full Stack (4 projetos)

> ⚠️ Nenhum projeto cita nome de cliente ou empresa. Todos estão em produção ou em fase final de entrega.

---

#### Projeto FS-01 — Plataforma de Diagnóstico Financeiro com IA (Cliente: comunidade educacional de finanças pessoais e cashback)

**Descrição:** Plataforma web full stack para diagnóstico inteligente de cashback, com fluxo de recomendação de cartões baseado em IA e RAG, assistente conversacional multimodal e área de membros com personalização por ROI.

**Problema resolvido:** Consumidores deixavam cashback e recompensas na mesa por não saber qual cartão usar em cada categoria de gasto. Não havia ferramenta simples, acionável e personalizada para isso.

**Gargalo eliminado:** Decisão financeira subótima no momento do pagamento. O produto atua como um "GPS dos pagamentos", transformando dados de gasto em recomendação concreta.

**Métricas de impacto:**
- Latência do pipeline de diagnóstico reduzida em ~35% com paralelização e validação Zod
- Endpoint de captura de leads integrado com webhook configurável para n8n/CRM
- Rate limiting e headers de segurança reduziram chamadas abusivas em ~25-35%

**Tecnologias:** Next.js 14, React 18, TypeScript, Tailwind CSS, Supabase (Auth + PostgreSQL + RLS), OpenAI SDK, Anthropic SDK, RAG com embeddings e pgvector, Zod, Upstash Redis, Docker

**Destaques técnicos:** Pipeline server-first de IA + RAG, validação rigorosa de inputs e outputs, assistente conversacional com streaming e upload de PDFs, autenticação Supabase, CSP e headers HTTP, rate limiting por IP com fallback em memória

---

#### Projeto FS-02 — Plataforma SaaS de Descoberta de Startups com IA (Cliente: incubadora de startups)

**Descrição:** Plataforma SaaS com 14 serviços Docker para agregação, enriquecimento automático e busca semântica de startups, integrando dados de múltiplas fontes (Notion, F6S, uploads) com IA para scouting contínuo e alertas.

**Problema resolvido:** Investidores e aceleradoras gastavam 4-8 horas semanais em pesquisa manual de startups, com dados fragmentados em múltiplas fontes, duplicatas e sem busca semântica.

**Gargalo eliminado:** Scouting manual de oportunidades e enriquecimento de perfis de startups — ambos passaram a ser automáticos, contínuos e muito mais rápidos.

**Métricas de impacto:**
- Tempo de discovery reduzido de 4-8h para 10-20 min por semana (12x mais rápido)
- Volume de startups enriquecidas: 50/semana manual → 300/semana automatizado (6x)
- Latência de busca: 8-12 segundos → 200-400ms (redução de 30-50x com HNSW e materialized views)
- Taxa de duplicatas: 2-3% → <0,1%

**Tecnologias:** Python, FastAPI, PostgreSQL 15, pgvector, OpenAI (embeddings), Perplexity API, APScheduler, BeautifulSoup, Next.js 14, React 18, Material-UI, NextAuth, Docker Compose (14 serviços), Notion API, F6S API

**Destaques técnicos:** Arquitetura microserviços com 14 containers, pipeline RAG semântico com embeddings e similarity search, scouting contínuo com agendamento e alertas Slack, deduplicação inteligente por URL e nome, scraping paralelo de múltiplas fontes

---

#### Projeto FS-03 — Automação de Triagem e Enriquecimento de Orçamentos por Email (Cliente: empresa de brindes personalizáveis)

**Descrição:** Sistema Python end-to-end para processamento inteligente de emails de orçamento: leitura via POP3, classificação com LLM, enriquecimento de dados via scraping e Perplexity, persistência em MongoDB e geração automática de follow-ups contextuais via IMAP.

**Problema resolvido:** Empresa recebia dezenas de pedidos de orçamento por email diariamente — cada um exigia leitura manual, extração de dados, busca de produtos e envio de follow-up. Processo lento, repetitivo e sujeito a erros.

**Gargalo eliminado:** Triagem e enriquecimento manual de pedidos de cotação — substituídos por pipeline automático com classificação por IA, scraping de dados reais e geração de follow-up inteligente apenas quando necessário.

**Métricas de impacto:**
- Tempo de resposta por orçamento reduzido em ~85% (20-30 min → 2-3 min)
- Acurácia de classificação de emails: ~93% (com confidence threshold 0.7)
- Cobertura de produtos encontrados: 40% manual → 88% automático
- Capacidade: 500+ emails/dia com uptime de 99.2%

**Tecnologias:** Python 3.10+, FastAPI, OpenAI (gpt-4), Perplexity API, BeautifulSoup4, MongoDB, Motor (async), POP3/IMAP/SMTP, Docker, AWS Lambda (container image), CloudWatch, Pydantic, loguru

**Destaques técnicos:** Prompt especializado de 2.000+ linhas com detecção de phishing, correlação de replies com orçamentos anteriores via LLM, scraping com color matching inteligente, deduplicação por assinatura (produto + quantidade + cor), retry com backoff exponencial, deploy serverless em AWS Lambda

---

#### Projeto FS-04 — PWA Offline-First com Pipeline de IA para Inspeção de Campo (Cliente: empresa de inspeções elétricas em estacionamentos)

**Descrição:** PWA instalável (Next.js + React) para inspeção de quadros elétricos em subterrâneos, com suporte offline total via IndexedDB e Service Worker, sincronização idempotente e pipeline de IA (Claude vision) para extração automática de medições a partir de fotos.

**Problema resolvido:** Inspetores elétricos trabalhavam em subterrâneos sem rede, preenchendo Excel manualmente — com perda de dados, duplicatas e atraso na sincronização com o sistema do cliente (Airtable).

**Gargalo eliminado:** Entrada manual de dados de medições e dependência de conectividade para registrar inspeções. Com o sistema, o inspetor captura fotos e a IA extrai os valores automaticamente, com validação humana antes de sincronizar.

**Métricas de impacto:**
- Tempo de entrada de dados por inspeção: ~20 minutos → ~3 minutos (redução de ~85%)
- Zero perda de dados offline: 100% das visitas sincronizadas após retorno à rede
- Ciclo de deploy: 1-2 dias → menos de 5 minutos (GitHub Actions + AWS)
- Cobertura de dispositivos: 100% Android 7+, 95%+ iOS 14.4+

**Tecnologias:** Next.js 16, React 19, TypeScript, Tailwind CSS, Ant Design, FastAPI, Python 3.13, PostgreSQL, SQLAlchemy, Alembic, IndexedDB (Dexie.js), Service Worker (Serwist), Claude API (vision + structured outputs), Airtable API, NextAuth v5, JWT, Docker, GitHub Actions, AWS (EC2, ECR, S3, SSM), Terraform (10 módulos), Cloudflare Tunnel

**Destaques técnicos:** Arquitetura offline-first com idempotência via `client_generated_id`, fila persistente para sincronização com Airtable (com retry e rate limiting), pipeline de IA com structured outputs e audit trail, IaC completa com Terraform, RBAC com 4 perfis de acesso, CI/CD automático com build arm64 nativo

---

### 3.4 Projetos — Automação n8n

> ⚠️ Os projetos de automação têm estrutura de pasta própria (`/projects/`). Ver seção 5.

Cada card de automação deve exibir:
- Título descritivo (sem citar cliente)
- Print(s) do fluxo no n8n
- O que faz, problema que resolve, gargalo eliminado
- Métricas de impacto (quando disponíveis)
- Tecnologias/integrações usadas
- Destaques técnicos (tratamento de erros, retry, webhooks, condicionais, etc.)

**Mensagem padrão:** *"Todos os projetos de automação foram desenvolvidos para clientes reais e estão em produção. Por questões contratuais, os nomes das empresas não são divulgados."*

---

### 3.5 Seção de Impacto Consolidado

Painel com números agregados de todos os projetos:
- Total de projetos entregues (full stack + automações)
- Principais tecnologias utilizadas (logos ou badges)
- Exemplos de métricas de impacto: horas economizadas, redução de latência, volumes processados
- Reforço do background: experiência em Accenture (dados + BI) e NILG.AI (full stack + automação)

---

### 3.6 Experiência Profissional (Timeline opcional)

**NILG.AI** — Desenvolvedor Full Stack | Mai. 2025 – Presente  
**Accenture Brasil** — Data Science Analyst | Nov. 2023 – Mai. 2025  
**Accenture Brasil** — S&OP Analyst | Jun. 2022 – Nov. 2023

---

### 3.7 CTA (Call to Action)

- Texto: *"Quer automatizar processos ou construir algo do zero? Vamos conversar."*
- Links: LinkedIn, email (walisson.a.andrade@gmail.com), Whatsapp (+5534998683356)

---

## 4. Regras e Restrições

| Regra | Detalhe |
|---|---|
| JSONs das automações | Nunca expor, linkar ou renderizar arquivos `.json` publicamente |
| Sem nomes de clientes | Nenhum projeto cita empresa, pessoa ou marca dos clientes |
| Mensagem de confidencialidade | Exibir claramente no site (hero e/ou rodapé) |
| Prints são públicos | Imagens dos fluxos n8n podem ser exibidas normalmente |
| Projetos full stack | Não citar nome do produto nem do cliente. Usar descrição do segmento (ex: "incubadora de startups", "empresa de brindes personalizáveis") |

---

## 5. Estrutura de Arquivos do Projeto

### Pasta de automações n8n

```
/projects
  /automacao-01
    print-01.png
    print-02.png
    fluxo.json       ← nunca exposto no site
    meta.json        ← metadados do projeto (ver abaixo)
  /automacao-02
    ...
```

**Formato do `meta.json` por automação:**
```json
{
  "titulo": "Automação de relatórios semanais",
  "descricao": "O que o fluxo faz em 1-2 frases",
  "problema": "Qual era o problema antes da automação",
  "resultado": "O que melhorou depois",
  "metrica": "Métrica concreta (ex: economia de 10h/mês)",
  "tecnologias": ["n8n", "Google Sheets", "Slack"],
  "destaques": ["Tratamento de erros", "Retry automático"]
}
```

> O Claude Code deve ler os `meta.json` para popular os cards. Os arquivos `fluxo.json` podem ser lidos em build-time para extrair nós/tecnologias, mas **nunca devem ser servidos como rota pública**.

---

## 6. Design

- Visual profissional, clean, dark mode preferencial
- Paleta: tons escuros/neutros com accent em laranja (#FF6D42 — cor do n8n) ou azul tech
- Tipografia moderna, boa legibilidade
- Responsivo para mobile
- Imagens dos prints devem ser otimizadas (lazy load, compressão)
- Animações sutis nos cards (hover, entrada)

---

## 7. Stack Sugerida para o Site

- **Framework:** Astro (ideal para site estático + leitura de arquivos locais em build-time) ou Next.js com exportação estática
- **Estilização:** Tailwind CSS
- **Deploy:** Vercel ou Netlify
- **Imagens:** next/image ou @astrojs/image para otimização automática

---

## 8. Checklist para o Claude Code

- [ ] Criar estrutura de pastas do projeto
- [ ] Configurar framework e Tailwind
- [ ] Criar componentes: Hero, StackCards, ProjectCard (full stack), ProjectCard (n8n), ImpactSection, Timeline, CTA, Footer
- [ ] Implementar leitura dos `meta.json` de `/projects` para popular cards de automação
- [ ] Garantir que arquivos `.json` de fluxos **não sejam servidos publicamente**
- [ ] Inserir dados dos 4 projetos full stack diretamente no código (via arquivo de dados estático)
- [ ] Implementar badges de tecnologias nas 3 stacks
- [ ] Adicionar mensagem de confidencialidade em local visível
- [ ] Garantir responsividade e performance
- [ ] Gerar build estático e testar localmente
