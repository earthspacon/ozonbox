# Applications — Subcategory Pages

> Per-folder documentation for `src/@pages/applications/`.
> Root reference: [`AGENTS.md`](../../../AGENTS.md)

---

## Overview

Each application subcategory has a standalone page component in `src/@pages/applications/{category}/{subcategory}.tsx`. These are the main content-heavy pages of the site, rendered inside `<Layout>` with `<Seo>`.

---

## File Organization

```
src/@pages/applications/
├── index.tsx              # Applications hub page (category cards grid)
├── category.tsx           # Generic category page (subcategory cards grid)
├── {category}/
│   ├── index.ts           # barrel export for all subcategory pages
│   └── {subcategory}.tsx  # individual subcategory page component
```

### Categories (11 total)

`agriculture`, `cleaning`, `disinfection`, `food-production`, `horeca`, `industry`, `medicine`, `mining-metals`, `transport`, `warehouses`, `water-treatment`

### Example barrel (`cleaning/index.ts`)

```typescript
export { OdorRemovalPage } from './odor-removal'
export { FireSmokePage } from './fire-smoke'
export { PetOdorsPage } from './pet-odors'
export { CarInteriorsPage } from './car-interiors'
export { CarpetCleaningPage } from './carpet-cleaning'
```

---

## Subcategory Page Template

```typescript
/* eslint-disable @typescript-eslint/no-explicit-any */
import { TolgeeStaticDataProp, useTranslate } from '@tolgee/react'

import { getSubcategoryNamespace, NAMESPACES } from '@/shared/config/tolgee'
import { useLang } from '@/shared/lib'
import {
  ArticleSection, Breadcrumb, BulletList, CTASection, DataTable,
  FeatureCard, FeatureGrid, HighlightBox, ProcessList,
  StatCard, StatGrid,
} from '@/shared/ui/article-components'
import { AppLink } from '@/shared/ui/app-link'
import { Seo } from '@/shared/ui/seo'
import { Layout } from '@/widgets/layout'

export function SubcategoryPage({ staticData }: { staticData: TolgeeStaticDataProp }) {
  const { t } = useTranslate()
  const lang = useLang()
  const ns = getSubcategoryNamespace('category-id', 'subcategory-id')

  // data extraction from staticData (REQUIRED pattern)
  const categoryData = (staticData as any)[`${lang}:${ns}`]
  const data = categoryData?.subcategories?.['subcategory-id']

  return (
    <Layout>
      <Seo
        title={t('subcategories.subcategory-id.title', { ns })}
        description={t('subcategories.subcategory-id.shortDesc', { ns })}
      />

      <Breadcrumb
        items={[
          { label: t('nav.home', { ns: NAMESPACES.common }), href: '/' },
          { label: t('nav.applications', { ns: NAMESPACES.common }), href: '/applications' },
          { label: t('title', { ns }), href: `/applications/category-id` },
          { label: t('subcategories.subcategory-id.title', { ns }) },
        ]}
      />

      {/* Hero with Unsplash image */}
      {/* StatGrid with StatCards from data?.stats */}
      {/* ArticleSections with content from data?.sections */}
      {/* CTASection at the end */}
    </Layout>
  )
}
```

---

## Data Access Rules

### Simple strings → `t()`

```typescript
t('subcategories.subcategory-id.title', { ns })
t('subcategories.subcategory-id.shortDesc', { ns })
t('nav.applications', { ns: NAMESPACES.common })
```

### Arrays and objects → `staticData`

**NEVER use `{ returnObjects: true }` — it does not work with Tolgee.**

```typescript
// stats
<StatCard
  value={data?.stats?.stat1?.value}
  label={data?.stats?.stat1?.label}
  description={data?.stats?.stat1?.description}
/>

// bullet list
<BulletList items={data?.sections?.advantages?.items} />

// data table
<DataTable
  caption={data?.sections?.dosage?.tableCaption}
  headers={data?.sections?.dosage?.tableHeaders}
  rows={data?.sections?.dosage?.tableData}
/>

// process steps
<ProcessList steps={data?.sections?.scheme?.steps} />

// feature grid
<FeatureGrid columns={2}>
  {data?.sections?.benefits?.items?.map((item, idx) => (
    <FeatureCard key={idx} title={item.title} description={item.description} />
  ))}
</FeatureGrid>
```

---

## Component Reference

| Component         | Props                                                                    | Data Source                              |
| ----------------- | ------------------------------------------------------------------------ | ---------------------------------------- |
| `StatCard`        | `value`, `label`, `description?`, `variant?`                             | `data.stats.{statId}`                    |
| `StatGrid`        | `children`, `columns?: 2\|3\|4`                                          | wrapper                                  |
| `DataTable`       | `headers: string[]`, `rows: (string\|number)[][]`, `caption?`            | `data.sections.{id}`                     |
| `ComparisonTable` | `headers: [3-4 strings]`, `rows: {parameter, value1, value2, value3?}[]` | `data.sections.{id}`                     |
| `ProcessList`     | `steps: {title, description}[]`                                          | `data.sections.{id}.steps`               |
| `BulletList`      | `items: string[]`                                                        | `data.sections.{id}.items`               |
| `FeatureGrid`     | `children`, `columns?: 2\|3`                                             | wrapper                                  |
| `FeatureCard`     | `title`, `description`                                                   | iterated from `data.sections.{id}.items` |
| `HighlightBox`    | `children`, `variant?: 'info'\|'success'\|'warning'`                     | inline text                              |
| `ArticleSection`  | `title?`, `children`                                                     | section wrapper                          |
| `Breadcrumb`      | `items: {label, href?}[]`                                                | constructed in component                 |
| `CTASection`      | —                                                                        | common CTA block                         |

---

## JSON Format (Array-Based)

All new JSON structures must use **arrays**, not objects. See [`src/shared/config/i18n/AGENTS.md`](../../shared/config/i18n/AGENTS.md) for details.

**Correct (arrays):**

```json
{
  "tableHeaders": ["Area", "Volume", "Ozonator"],
  "tableData": [["50-100 m²", "150-300 m³", "10 g/hour"]],
  "steps": [{ "title": "Preparation", "description": "..." }],
  "items": ["Item one", "Item two"]
}
```

**Wrong (objects — legacy only):**

```json
{
  "tableHeaders": { "area": "Area", "volume": "Volume" },
  "steps": { "step1": { "title": "...", "description": "..." } }
}
```

---

## Route File Pairing

Each subcategory page has **two** route files that import it:

1. `src/pages/applications/{category}/{subcategory}.tsx` — default locale
2. `src/pages/[lang]/applications/{category}/{subcategory}.tsx` — localized

Both load: `[NAMESPACES.common, NAMESPACES.applications, getSubcategoryNamespace(cat, sub)]`

---

## Adding a New Subcategory

1. Add entry to `APPLICATION_CATEGORIES` in `applications-data.ts` (id + image)
2. Create `subcategory-{cat}-{sub}.json` in all 4 language directories
3. Add `title` + `shortDesc` to `category-{cat}.json` under `subcategories.{sub}`
4. Create `src/@pages/applications/{cat}/{sub}.tsx` component
5. Add export to `src/@pages/applications/{cat}/index.ts` barrel
6. Create both route files (`pages/` and `pages/[lang]/`)
7. Format with Prettier, verify TypeScript and ESLint

---

## Refactoring Checklist

When cleaning up existing subcategory pages:

- [ ] Add `/* eslint-disable @typescript-eslint/no-explicit-any */` at file top
- [ ] Remove `String()` wrappers
- [ ] Remove `??` and `||` operators
- [ ] Remove `as any` except for `staticData as any`
- [ ] Remove helper functions (`ensureArray`, `convertHeadersObjectToArray`, etc.)
- [ ] Convert JSON to array format in all 4 languages
- [ ] Verify no TypeScript or ESLint errors
