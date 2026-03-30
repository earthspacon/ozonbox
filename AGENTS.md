# OZONOXY — Project Documentation

> Marketing/content website for OZONOXY ozone treatment and disinfection business.
> Production URL: `https://ozonoxy.com.uz`

This document is the primary reference for AI agents and developers working on this codebase.
For domain-specific patterns see the per-folder `AGENTS.md` files linked below.

---

## Table of Contents

1. [Development Workflow (Harness)](#development-workflow-harness)
2. [Tech Stack](#tech-stack)
3. [Directory Structure](#directory-structure)
4. [Architecture Patterns](#architecture-patterns)
5. [Routing](#routing)
6. [Internationalization (i18n)](#internationalization-i18n)
7. [Styling](#styling)
8. [Code Conventions](#code-conventions)
9. [Data Layer](#data-layer)
10. [Shared Utilities](#shared-utilities)
11. [Build & Deploy](#build--deploy)
12. [Scripts](#scripts)
13. [AI Tooling (.cursor)](#ai-tooling-cursor)
14. [Per-Folder Documentation](#per-folder-documentation)

---

## Development Workflow (Harness)

Follow a three-phase pattern for every task:

### 1. Research

- Read the relevant `AGENTS.md` (this file or per-folder ones) before touching code.
- Explore existing patterns by reading a similar page/component that already works.
- Check `.cursor/rules/` for always-on rules (Prettier, Tailwind-only styling).
- Check `.cursor/skills/` and `.cursor/agents/` for specialized workflows.

### 2. Plan

- Identify all files to create or modify (route files, @pages, i18n JSONs, data configs).
- For i18n-heavy tasks, decide whether to use scripts or manual edits.
- For multi-subcategory tasks, plan parallel agent execution (one agent per subcategory pair).

### 3. Do

- Implement changes following the patterns documented here.
- Format every changed file with Prettier before finishing (`pnpm exec prettier --write <path>`).
- Verify: no TypeScript errors (`npx tsc --noEmit`), no ESLint errors (`npx eslint <path>`).
- For i18n: ensure all 4 languages (ru, en, uz, uz-cyr) are updated consistently.

---

## Tech Stack

| Technology                | Version | Role                                                      |
| ------------------------- | ------- | --------------------------------------------------------- |
| **Next.js**               | 15.3.2  | Framework (Pages Router, static export)                   |
| **React**                 | 19      | UI library                                                |
| **TypeScript**            | 5       | Language                                                  |
| **Tailwind CSS**          | 4       | Styling (via `@tailwindcss/postcss`)                      |
| **Tolgee**                | 6.2.7   | i18n (`@tolgee/react`, `@tolgee/format-icu`)              |
| **SVGR**                  | 8.1.0   | SVG as React components                                   |
| **clsx + tailwind-merge** | —       | Conditional class merging (`cn()`)                        |
| **next-sitemap**          | 4.2.3   | Sitemap and robots.txt generation                         |
| **pnpm**                  | 9       | Package manager (CI uses pnpm)                            |
| **Prettier**              | 3.5.3   | Code formatting (import sorting + Tailwind class sorting) |

**No state management library** (no Effector, Redux, Zustand). State is React-local + Tolgee + `localStorage` for language preference.

---

## Directory Structure

```
ozonbox/
├── .cursor/                  # AI agent configs (rules, agents, skills)
├── .github/workflows/        # CI/CD (GitHub Pages deploy)
├── public/                   # Static assets (favicon, images, generated sitemap)
├── scripts/                  # Node.js utility scripts (i18n, transliteration, audits)
├── src/
│   ├── @pages/               # Page UI components (presentational layer)
│   │   ├── index.ts          # barrel: HomePage, TechnologyPage, etc.
│   │   ├── home/
│   │   ├── about/
│   │   ├── contacts/
│   │   ├── technology/
│   │   ├── applications/     # category.tsx + per-category folders
│   │   │   ├── index.tsx     # applications list page
│   │   │   ├── category.tsx  # generic category page
│   │   │   └── <category>/   # subcategory pages (e.g. medicine/ambulances.tsx)
│   │   └── articles/         # one file per article slug
│   ├── pages/                # Next.js route entries (thin wrappers)
│   │   ├── _app.tsx          # global font, CSS, Head
│   │   ├── _document.tsx     # favicons, <Html lang>
│   │   ├── index.tsx         # default locale routes
│   │   ├── [lang]/           # localized routes (mirrors root structure)
│   │   ├── applications/     # default-locale subcategory routes
│   │   └── articles/         # default-locale article routes
│   ├── shared/
│   │   ├── config/
│   │   │   ├── tolgee.ts     # locales, namespaces, Tolgee instance
│   │   │   ├── applications-data.ts  # category/subcategory metadata
│   │   │   ├── articles-data.ts      # article metadata
│   │   │   └── i18n/         # ~320 JSON translation files
│   │   │       ├── {lang}.json       # root locale bundles (unused by pages)
│   │   │       └── {lang}/           # per-namespace JSONs
│   │   ├── hooks/            # useScrolled, useScrollAnimation
│   │   ├── lib/              # cn, lang, loadNamespaces, page-static-functions, data-utils
│   │   └── ui/               # AppLink, Seo, article-components, icons, logo, language-switcher
│   ├── styles/
│   │   └── globals.css       # Tailwind v4 entry + @theme tokens + legacy component CSS
│   └── widgets/              # header, footer, layout shell, floating contact
├── next.config.ts            # output: 'export', SVGR, Turbopack
├── tsconfig.json             # strict, path aliases @/* and @/@pages/*
├── eslint.config.mjs         # flat config (next/core-web-vitals + next/typescript)
├── postcss.config.mjs        # @tailwindcss/postcss
├── .prettierrc               # import sorting, Tailwind class sorting
├── next-sitemap.config.js    # sitemap generation (siteUrl: ozonoxy.com.uz)
└── package.json              # scripts: dev, build, start, lint, format
```

### Path Aliases

| Alias                     | Resolves to                       |
| ------------------------- | --------------------------------- |
| `@/*`                     | `./src/*`                         |
| `@/@pages` / `@/@pages/*` | `./src/@pages` / `./src/@pages/*` |

---

## Architecture Patterns

### Layer Separation

The project uses a **partial Feature-Sliced Design** (FSD) approach:

| Layer               | Directory      | Responsibility                                                                 |
| ------------------- | -------------- | ------------------------------------------------------------------------------ |
| **pages** (Next.js) | `src/pages/`   | Thin route wrappers: `getStaticProps`, `getStaticPaths`, `withTolgee()`, no UI |
| **@pages**          | `src/@pages/`  | Full page UI components with Layout, Seo, content rendering                    |
| **widgets**         | `src/widgets/` | Composed chrome: Header, Footer, Layout shell, FloatingContact                 |
| **shared**          | `src/shared/`  | Cross-cutting: config, lib, hooks, UI components                               |

There are **no** `features/` or `entities/` layers.

### Route File Pattern

Every route file follows this exact pattern:

```typescript
// src/pages/[lang]/applications/{category}/{subcategory}.tsx
import { GetStaticPaths, GetStaticProps } from 'next'

import { SubcategoryPage } from '@/@pages/applications/{category}/{subcategory}'

import { getSubcategoryNamespace, LOCALES_LIST, NAMESPACES, TLocale } from '@/shared/config/tolgee'
import { loadNamespaces, withTolgee } from '@/shared/lib'

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: LOCALES_LIST.map((lang) => ({ params: { lang } })),
  fallback: false,
})

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const lang = (params?.lang as TLocale) || 'ru'
  const staticData = await loadNamespaces(lang, [
    NAMESPACES.common,
    NAMESPACES.applications,
    getSubcategoryNamespace('category-id', 'subcategory-id'),
  ])
  return { props: { staticData, lang } }
}

export default withTolgee(SubcategoryPage)
```

**Key rules:**

- Route files contain **no JSX** (except top-level pages with `<Head>`)
- Route files have **no Seo component** — that lives in the @pages component
- `withTolgee()` wraps the page component to provide TolgeeProvider + LangSync
- Default-locale routes use `DEFAULT_LOCALE` instead of `params.lang`

### @page Component Pattern

```typescript
// src/@pages/applications/{category}/{subcategory}.tsx
import { TolgeeStaticDataProp, useTranslate } from '@tolgee/react'
import { getSubcategoryNamespace, NAMESPACES } from '@/shared/config/tolgee'
import { useLang } from '@/shared/lib'
import { Layout } from '@/widgets/layout'
import { Seo } from '@/shared/ui/seo'

export function SubcategoryPage({ staticData }: { staticData: TolgeeStaticDataProp }) {
  const { t } = useTranslate()
  const lang = useLang()
  const ns = getSubcategoryNamespace('category-id', 'subcategory-id')

  const categoryData = (staticData as any)[`${lang}:${ns}`]
  const data = categoryData?.subcategories?.['subcategory-id']

  return (
    <Layout>
      <Seo title={t('subcategories.subcategory-id.title', { ns })} description={...} />
      {/* page content using t() for simple strings, data.* for arrays/objects */}
    </Layout>
  )
}
```

### withTolgee Wrapper

`withTolgee(Component)` from `src/shared/lib/page-static-functions.tsx`:

- Wraps the component in `<TolgeeProvider>` with SSR static data
- Injects `<LangSync>` for language preference persistence
- Passes through all props

---

## Routing

### URL Structure

| Pattern                          | Example                      | Route File                                |
| -------------------------------- | ---------------------------- | ----------------------------------------- |
| `/`                              | Home (default locale: ru)    | `pages/index.tsx`                         |
| `/{lang}/`                       | Home (explicit locale)       | `pages/[lang]/index.tsx`                  |
| `/applications`                  | Applications hub             | `pages/applications.tsx`                  |
| `/{lang}/applications`           | Applications hub (localized) | `pages/[lang]/applications.tsx`           |
| `/applications/{category}`       | Category page                | `pages/applications/[category]/index.tsx` |
| `/applications/{category}/{sub}` | Subcategory page             | `pages/applications/{category}/{sub}.tsx` |
| `/articles/{slug}`               | Article page                 | `pages/articles/{slug}.tsx`               |

**Default locale (ru):** URLs without `[lang]` prefix use `DEFAULT_LOCALE = 'ru'`.

**Locales:** `ru`, `en`, `uz`, `uz-cyr` — defined in `src/shared/config/tolgee.ts`.

### Static Export

`next.config.ts` sets `output: 'export'`, producing a fully static site in `out/`.

- No server-side rendering at runtime
- No API routes
- `getStaticPaths` enumerates all locale/category/slug combinations
- `getStaticProps` loads JSON translation files at build time

### Dual Route Pattern

Every page exists in **two** route files:

1. **Default locale** (no `[lang]`): `src/pages/{path}.tsx` — uses `DEFAULT_LOCALE`
2. **Explicit locale**: `src/pages/[lang]/{path}.tsx` — uses `params.lang`

Both import the **same** @pages component.

---

## Internationalization (i18n)

> Detailed i18n documentation: [`src/shared/config/i18n/AGENTS.md`](src/shared/config/i18n/AGENTS.md)

### Overview

- **Library:** Tolgee (`@tolgee/react` + `@tolgee/format-icu`)
- **Languages:** `ru` (default), `en`, `uz` (Uzbek Latin), `uz-cyr` (Uzbek Cyrillic)
- **Approach:** Static JSON files loaded per-page via `getStaticProps` → `staticData` prop
- **No runtime API calls** — all translations are bundled at build time

### Namespace System

| Namespace                 | Scope                                                             | Loaded on                   |
| ------------------------- | ----------------------------------------------------------------- | --------------------------- |
| `common`                  | Shared strings (nav, footer, CTA)                                 | Every page                  |
| `applications`            | Application category cards                                        | Applications pages          |
| `articles`                | Article list metadata (title, excerpt)                            | Articles list page          |
| `category-{id}`           | Category index (trimmed: title, descriptions, subcategory titles) | Category index page         |
| `subcategory-{cat}-{sub}` | Full subcategory content                                          | Individual subcategory page |
| `article-{slug}`          | Full article content                                              | Individual article page     |

### Critical Rule: No returnObjects

**NEVER use `{ returnObjects: true }` with Tolgee's `t()`.** It does not work.

- Use `t('key', { ns })` for **simple strings only**
- For arrays/objects (tables, lists, steps), read from `staticData` directly:

```typescript
const nsData = (staticData as any)[`${lang}:${ns}`]
const data = nsData?.subcategories?.['subcategory-id']
// then: data?.sections?.benefits?.items, data?.stats?.stat1?.value, etc.
```

### Translation Quality Rules

- **Brand name OZONOXY:** The company name is **always** written as **OZONOXY** in Latin script. Never translate, transliterate, or convert it to Cyrillic (no "ОЗОНОХЙ", "ОЗОНОКСЙ", "Озонокси", etc.). In all languages — ru, en, uz, uz-cyr — use the Latin spelling **OZONOXY**.
- **UZ (Latin):** Natural, modern, readable Uzbek. No archaic or obscure words.
- **UZ-CYR (Cyrillic):** Russian-style Cyrillic spelling (я/ё/ю not йа/йо/йу). Loanwords use Russian spelling (дезинфекция, технология). Only Cyrillic in translatable content (exceptions: brand names like OZONOXY, abbreviations, units).
- **Reference:** Always use `ru` files as the reference for meaning and structure.

---

## Styling

### CRITICAL: Tailwind Only — No New CSS Classes

> **This is the most important styling rule in the project.**

- **ALL new styling MUST use Tailwind CSS utility classes** in `className`. No exceptions.
- **NEVER add new CSS classes, rules, or selectors** to `src/styles/globals.css` or any other CSS file.
- **NEVER create new CSS files** (no CSS modules, no styled-components, no new `.css` imports).
- `src/styles/globals.css` is **legacy only** — it exists for historical reasons. Only touch it to fix existing global styles or Tailwind `@theme` variables.
- When modifying existing components that use legacy CSS classes, **migrate them to Tailwind** where practical.
- Use `cn()` from `@/shared/lib` for conditional class merging (clsx + tailwind-merge).
- If you need a custom value, use Tailwind arbitrary value syntax (e.g. `w-[120px]`, `text-[#1a1a1a]`) instead of writing CSS.

### Tailwind CSS v4

- Configured via `postcss.config.mjs` → `@tailwindcss/postcss`
- **No `tailwind.config.*` file** — theme is defined in `globals.css` via `@theme { }`
- Entry: `src/styles/globals.css` with `@import 'tailwindcss';`

### Design Tokens

Defined in `@theme` block in `globals.css`. Use them as Tailwind classes: `bg-primary`, `text-text-secondary`, `border-border`, etc.

| Token                    | Value             | Usage                           |
| ------------------------ | ----------------- | ------------------------------- |
| `--color-primary`        | `#22c55e` (green) | Primary brand, buttons, success |
| `--color-primary-dark`   | `#16a34a`         | Hover states                    |
| `--color-accent`         | `#0ea5e9` (blue)  | Accent, links, info             |
| `--color-bg-white`       | `#ffffff`         | Main background                 |
| `--color-bg-light`       | `#f8fafc`         | Section backgrounds             |
| `--color-text-primary`   | `#1e293b`         | Main text                       |
| `--color-text-secondary` | `#64748b`         | Muted text                      |
| `--color-border`         | `#e2e8f0`         | Borders                         |

### Font

Inter (400, 500, 600, 700) loaded via `next/font/google` in `_app.tsx`.

---

## Code Conventions

### TypeScript

- Strict mode enabled
- Named exports for components: `export function ComponentName()`
- Props as inline interfaces or separate `interface`
- No `as any` except `staticData as any` (with `/* eslint-disable @typescript-eslint/no-explicit-any */` at file top)

### React

- Functional components only
- No class components, no HOCs (except `withTolgee`)
- No global state management — React state + Tolgee + localStorage
- Hooks: `useTranslate`, `useLang`, `useIsLangInRoute`, `useScrolled`, `useScrollAnimation`

### Imports (enforced by Prettier)

Order (separated by blank lines):

1. Third-party modules
2. `@/app` (unused currently)
3. `@/@pages`
4. `@/widgets`
5. `@/features` (unused currently)
6. `@/entities` (unused currently)
7. `@/shared`
8. Relative imports

### Formatting

- **Prettier runs on every save** (see `.cursor/rules/prettier-format.mdc`)
- Single quotes, no semicolons, trailing commas, 120 char width
- Tailwind class sorting via `prettier-plugin-tailwindcss`
- Import sorting via `@ianvs/prettier-plugin-sort-imports`

### Comments

- No obvious comments that restate what code does
- Comments only in English
- Lowercase first letter (unless proper noun or acronym)
- Only explain "why", not "what"
- Prefer self-documenting code

### ESLint

- `react-hooks/exhaustive-deps`: off
- `@typescript-eslint/no-unused-vars`: warn
- Extends: `next/core-web-vitals`, `next/typescript`

---

## Data Layer

### Applications (`src/shared/config/applications-data.ts`)

```typescript
interface ApplicationCategory {
  id: string // URL slug: 'medicine', 'agriculture', etc.
  icon: string // Icon component name: 'IconMedical'
  image: string // Unsplash/Pexels URL for card
  subcategories: ApplicationSubcategory[]
}

interface ApplicationSubcategory {
  id: string // URL slug: 'hospitals', 'poultry', etc.
  image: string // Unsplash/Pexels URL for card/hero
}
```

**11 categories**, ~48 subcategories total. Full list in `applications-data.ts`.

### Articles (`src/shared/config/articles-data.ts`)

```typescript
interface ArticleMeta {
  id: string // camelCase identifier
  slug: string // URL slug: 'ozone-grain-protection'
  image: string // Card image URL (Unsplash w=800&q=80)
  date: string // ISO date string
  sourceName: string // Source attribution
  sourceUrl: string // Source link (empty string if book/no URL)
}
```

**16+ articles**. Each article has a standalone page file in `@pages/articles/`.

### Image URLs

- Card images: `https://images.unsplash.com/photo-{ID}?w=800&q=80`
- Hero images: same with `w=1920`
- Also supports Pexels: `https://images.pexels.com/photos/{ID}/pexels-photo-{ID}.jpeg`
- Always validate images load and match the topic

---

## Shared Utilities

### `cn(...args)` — `@/shared/lib/cn`

Merges class names with `clsx` + `tailwind-merge`.

### `useLang()` — `@/shared/lib/lang`

Returns current locale (`TLocale`) from Tolgee or router.

### `useIsLangInRoute()` — `@/shared/lib/lang`

Returns `true` if current route has `[lang]` parameter.

### `LangSync` — `@/shared/lib/lang`

Component that syncs language between localStorage, Tolgee, and router.

### `loadNamespaces(lang, namespaces)` — `@/shared/lib/load-namespaces`

Dynamically imports JSON translation files. Returns `TolgeeStaticDataProp`.

### `withTolgee(Component)` — `@/shared/lib/page-static-functions`

Wraps a page component with TolgeeProvider + LangSync.

### `getStaticPathsLang` / `getStaticPropsLang` — `@/shared/lib/page-static-functions`

Pre-built static generation functions for `[lang]` routes (common namespace only).

### `createGetStaticPropsLang(namespaces)` / `createGetStaticPropsDefault(namespaces)`

Factory functions for pages needing additional namespaces beyond `common`.

### `AppLink` — `@/shared/ui/app-link`

Next.js `<Link>` that auto-prefixes `/{lang}` when route has `[lang]`.

### `Seo` — `@/shared/ui/seo`

`<Head>` wrapper with title suffix (" — OZONOXY") and safe stringification.

### Article Components — `@/shared/ui/article-components`

Reusable content components: `StatCard`, `StatGrid`, `HighlightBox`, `DataTable`, `ComparisonTable`, `ProcessList`, `BulletList`, `FeatureGrid`, `FeatureCard`, `ArticleHero`, `ArticleContainer`, `ArticleSection`, `Breadcrumb`, `SourcesList`, `CTASection`, `ImageWithCaption`, `QuoteBlock`.

### Data Utils — `@/shared/lib/data-utils`

Legacy helpers: `ensureArray`, `convertHeadersObjectToArray`, `convertRowsObjectToArray`, `ensureHeadersArray`, `ensureRowsArray`. Used for backward compatibility with object-format JSON. New pages should use array-format JSON directly.

---

## Build & Deploy

### Local Development

```bash
pnpm install
pnpm dev          # starts Next.js dev server with Turbopack
```

### Production Build

```bash
pnpm build        # next build && next-sitemap
```

Outputs static HTML/CSS/JS to `out/` directory. Generates `sitemap.xml` and `robots.txt`.

### CI/CD

- **GitHub Actions** (`.github/workflows/deploy.yml`)
- Triggers on push to `main`/`master` or manual dispatch
- Uses pnpm 9, Node.js 20
- Deploys to **GitHub Pages** from `out/`
- Sets `BASE_PATH` automatically for non-root repos

### Package Manager

- **pnpm** (lockfile: `pnpm-lock.yaml`)
- `.npmrc`: `public-hoist-pattern[]=*eslint*`
- CI: `pnpm install --frozen-lockfile`

---

## Scripts

> Full scripts documentation: [`scripts/AGENTS.md`](scripts/AGENTS.md)

| Script                              | Purpose                                           |
| ----------------------------------- | ------------------------------------------------- |
| `extract-subcategory-jsons.mjs`     | Extract per-subcategory JSONs from category JSONs |
| `update-subcategory-pages.mjs`      | Update route files to use subcategory namespaces  |
| `trim-category-jsons.mjs`           | Trim category JSONs to titles + shortDesc only    |
| `fix-uz-cyr-spelling.mjs`           | Fix Russian-style Cyrillic spelling in uz-cyr     |
| `report-uz-cyr-spelling.mjs`        | Audit uz-cyr for spelling issues                  |
| `report-latin-in-uz-cyr.mjs`        | Find Latin text in uz-cyr files                   |
| `fix-uz-cyr-latin-exceptions.mjs`   | Fix sourcesTitle + restore allowed Latin          |
| `convert-all-uz-to-uz-cyr.mjs`      | Bulk Latin → Cyrillic conversion                  |
| `convert_latin_to_cyrillic.js`      | Character map utility for conversion              |
| `restore-sources-from-uz.mjs`       | Copy sources from uz to uz-cyr                    |
| `analyze-missing-translations.mjs`  | Find missing translation keys across languages    |
| `audit-subcategory-render-keys.mjs` | Audit i18n key usage in subcategory pages         |

---

## AI Tooling (.cursor)

### Rules (`.cursor/rules/` — `.mdc` files)

| Rule                           | Always Apply | Scope                                                 |
| ------------------------------ | ------------ | ----------------------------------------------------- |
| `prettier-format.mdc`          | Yes          | All files — format with Prettier                      |
| `tailwind-styling.mdc`         | Yes          | All files — use Tailwind, don't add to globals.css    |
| `uzbek-translations.mdc`       | No           | `uz/` and `uz-cyr/` JSON files — follow quality skill |
| `subcategory-i18n-scripts.mdc` | No           | Subcategory i18n refactoring — use scripts            |

### Agents (`.cursor/agents/` — `.md` files)

| Agent                       | Purpose                                                    |
| --------------------------- | ---------------------------------------------------------- |
| `articles-writer.md`        | Create/edit articles (page files + i18n + images)          |
| `subcategory-i18n.md`       | Fix i18n for one subcategory (Tolgee + staticData pattern) |
| `subcategory-refactorer.md` | Clean up TSX + convert JSON to array format                |
| `translation-fixer.md`      | Add missing translation keys to i18n files                 |
| `eslint-fixer.md`           | Find and fix ESLint errors                                 |
| `typescript-fixer.md`       | Find and fix TypeScript errors                             |

### Skills (`.cursor/skills/` — `SKILL.md` files)

| Skill                        | Purpose                                                          |
| ---------------------------- | ---------------------------------------------------------------- |
| `subcategory-articles/`      | Add new categories, subcategories, and articles                  |
| `subcategory-i18n-split/`    | Split subcategory translations into per-page namespaces          |
| `subcategory-refactorer/`    | Refactor TSX + JSON (remove String/??/as any, convert to arrays) |
| `article-card-images/`       | Find and validate Unsplash images                                |
| `uzbek-translation-quality/` | Quality rules for uz and uz-cyr translations                     |

### Worktrees (`.cursor/worktrees.json`)

Cursor worktrees run `npm install` on setup.

---

## Per-Folder Documentation

| Path                                                                     | Content                                                 |
| ------------------------------------------------------------------------ | ------------------------------------------------------- |
| [`src/@pages/applications/AGENTS.md`](src/@pages/applications/AGENTS.md) | Subcategory page patterns, component usage, data access |
| [`src/@pages/articles/AGENTS.md`](src/@pages/articles/AGENTS.md)         | Article page patterns, standalone file convention       |
| [`src/shared/config/i18n/AGENTS.md`](src/shared/config/i18n/AGENTS.md)   | i18n file naming, namespace rules, JSON structure       |
| [`scripts/AGENTS.md`](scripts/AGENTS.md)                                 | Detailed scripts reference and execution order          |
