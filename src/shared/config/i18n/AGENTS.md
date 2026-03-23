# i18n — Translations

> Per-folder documentation for `src/shared/config/i18n/`.
> Root reference: [`AGENTS.md`](../../../../AGENTS.md)

---

## Overview

All translations are static JSON files loaded at build time via `getStaticProps`. The site supports 4 languages:

| Code     | Language         | Role                                           |
| -------- | ---------------- | ---------------------------------------------- |
| `ru`     | Russian          | Default locale, reference for all translations |
| `en`     | English          | Professional technical English                 |
| `uz`     | Uzbek (Latin)    | Modern, readable Uzbek                         |
| `uz-cyr` | Uzbek (Cyrillic) | Russian-style Cyrillic spelling                |

---

## Directory Structure

```
src/shared/config/i18n/
├── ru.json, en.json, uz.json, uz-cyr.json   # root locale bundles (legacy, not used by pages)
├── ru/                                        # per-namespace JSONs
│   ├── common.json                            # shared strings (nav, footer, CTA, meta)
│   ├── applications.json                      # application categories for list page
│   ├── articles.json                          # article titles + excerpts for list page
│   ├── category-medicine.json                 # category index (trimmed)
│   ├── category-agriculture.json
│   ├── ...                                    # one per category
│   ├── subcategory-medicine-hospitals.json     # full subcategory content
│   ├── subcategory-agriculture-poultry.json
│   ├── ...                                    # one per subcategory
│   ├── article-ozone-grain-protection.json    # full article content
│   └── ...                                    # one per article
├── en/                                        # same structure as ru/
├── uz/                                        # same structure as ru/
└── uz-cyr/                                    # same structure as ru/
```

---

## Namespace File Naming

| Namespace                 | File Pattern                   | Loaded On                         |
| ------------------------- | ------------------------------ | --------------------------------- |
| `common`                  | `common.json`                  | Every page                        |
| `applications`            | `applications.json`            | Applications hub + category pages |
| `articles`                | `articles.json`                | Articles list page                |
| `category-{id}`           | `category-{id}.json`           | Category index page               |
| `subcategory-{cat}-{sub}` | `subcategory-{cat}-{sub}.json` | Individual subcategory page       |
| `article-{slug}`          | `article-{slug}.json`          | Individual article page           |

### Namespace loading in code

```typescript
import { getArticleNamespace, getCategoryNamespace, getSubcategoryNamespace, NAMESPACES } from '@/shared/config/tolgee'

// examples
NAMESPACES.common // 'common'
NAMESPACES.applications // 'applications'
getCategoryNamespace('medicine') // 'category-medicine'
getSubcategoryNamespace('medicine', 'hospitals') // 'subcategory-medicine-hospitals'
getArticleNamespace('ozone-grain-protection') // 'article-ozone-grain-protection'
```

---

## JSON Structure Conventions

### category-{id}.json (trimmed — category index only)

```json
{
  "title": "Category Title",
  "description": "Category description for hero/meta",
  "subcategories": {
    "subcategory-id": {
      "title": "Subcategory Title",
      "shortDesc": "Short description for card"
    }
  }
}
```

Only `title` + `shortDesc` per subcategory. Full content is in subcategory JSONs.

### subcategory-{cat}-{sub}.json (full subcategory content)

```json
{
  "title": "Category Title",
  "description": "Category description (for breadcrumbs)",
  "subcategories": {
    "subcategory-id": {
      "title": "Subcategory Title",
      "shortDesc": "Short description",
      "stats": {
        "stat1": { "value": "99.9%", "label": "Efficiency", "description": "Pathogen elimination" },
        "stat2": { "value": "20-30", "label": "Minutes", "description": "Treatment cycle" }
      },
      "sections": {
        "intro": {
          "title": "Introduction",
          "paragraph1": "First paragraph...",
          "paragraph2": "Second paragraph..."
        },
        "benefits": {
          "title": "Benefits",
          "items": [
            { "title": "Benefit One", "description": "Description..." },
            { "title": "Benefit Two", "description": "Description..." }
          ]
        },
        "dosage": {
          "title": "Dosage Table",
          "tableCaption": "Recommended concentrations",
          "tableHeaders": ["Area", "Volume", "Concentration"],
          "tableData": [
            ["50-100 m²", "150-300 m³", "2-5 ppm"],
            ["100-200 m²", "300-600 m³", "5-10 ppm"]
          ]
        },
        "scheme": {
          "title": "Process",
          "steps": [
            { "title": "Step 1", "description": "..." },
            { "title": "Step 2", "description": "..." }
          ]
        },
        "advantages": {
          "title": "Advantages",
          "items": ["Advantage one", "Advantage two", "Advantage three"]
        }
      }
    }
  }
}
```

### article-{slug}.json (full article content)

```json
{
  "title": "Article Title",
  "excerpt": "Short excerpt for card and meta description",
  "body": {
    "lead": "Opening paragraph...",
    "section1": {
      "title": "Section Title",
      "text": "Section content...",
      "items": ["Point 1", "Point 2"]
    }
  },
  "sourcesTitle": "Sources",
  "sources": [{ "title": "Source Name and Citation", "url": "https://..." }]
}
```

---

## Array vs Object Format

### Rule: Use arrays for ordered data

All new JSON must use **arrays** for ordered collections. Object format is legacy.

| Data Type     | Correct (Array)                              | Wrong (Object)                         |
| ------------- | -------------------------------------------- | -------------------------------------- |
| Table headers | `["Col1", "Col2", "Col3"]`                   | `{ "col1": "Col1", "col2": "Col2" }`   |
| Table rows    | `[["a", "b"], ["c", "d"]]`                   | `{ "row1": { "c1": "a", "c2": "b" } }` |
| Steps         | `[{ "title": "...", "description": "..." }]` | `{ "step1": { "title": "..." } }`      |
| Bullet items  | `["Item 1", "Item 2"]`                       | `{ "0": "Item 1", "1": "Item 2" }`     |
| Feature items | `[{ "title": "...", "description": "..." }]` | `{ "feat1": { "title": "..." } }`      |
| Sources       | `[{ "title": "...", "url": "..." }]`         | (already array)                        |

### ComparisonTable specific format

```json
{
  "headers": ["Parameter", "Without Ozone", "With Ozone"],
  "rows": [{ "parameter": "Metric Name", "value1": "Before", "value2": "After" }]
}
```

---

## Language-Specific Rules

### Russian (ru) — Reference

- Used as the **reference** for all translations
- All keys must exist in `ru` first
- Professional technical Russian

### English (en)

- Professional, clear, technical English
- Maintain same structure and meaning as Russian
- Use appropriate domain terminology (medical, agricultural, industrial)

### Uzbek Latin (uz)

- Natural, modern, highly readable Uzbek
- Understandable to common readers — no archaic or obscure words
- Prefer widely-used vocabulary over literary alternatives
- Professional but accessible tone

### Uzbek Cyrillic (uz-cyr)

- **Russian-style Cyrillic** — use я, ё, ю (NOT йа, йо, йу)
- Loanwords from Russian keep **Russian spelling**: дезинфекция, технология, препарат
- Uzbek words also use я/ё/ю for natural reading: тиббиёт (not тиббийот)
- **Only Cyrillic** in translatable content
- **Allowed Latin exceptions:** brand names (OZONOXY, FDA, USDA), scientific names (E. coli, Salmonella), abbreviations (HVAC, SARS-CoV-2), units (mg/m³, ppm, °C)

---

## Consistency Rules

1. **Identical structure** across all 4 languages — same keys, same nesting, same array lengths
2. **No missing keys** — every key in `ru` must exist in `en`, `uz`, `uz-cyr`
3. **No placeholders** — every value must be a complete, quality translation
4. **Preserve JSON key names** exactly — components access data by key path
5. **Values only** — translate string values, never change key names
6. **Format with Prettier** after any edit

---

## Loading Mechanism

Translations are loaded via dynamic import in `loadNamespaces()`:

```typescript
const nsData = await import(`@/shared/config/i18n/${lang}/${ns}.json`)
data[`${lang}:${ns}`] = nsData.default || nsData
```

This is called in `getStaticProps` and passed as `staticData` prop. The `TolgeeProvider` receives `staticData` for SSR hydration.

In components:

- **Simple strings:** `t('key.path', { ns: namespaceName })`
- **Structured data:** `(staticData as any)[\`${lang}:${ns}\`]` then access nested properties

---

## Useful Scripts

| Script                                     | Purpose                                      |
| ------------------------------------------ | -------------------------------------------- |
| `scripts/extract-subcategory-jsons.mjs`    | Create subcategory JSONs from category JSONs |
| `scripts/trim-category-jsons.mjs`          | Remove full content from category JSONs      |
| `scripts/analyze-missing-translations.mjs` | Find missing keys across languages           |
| `scripts/fix-uz-cyr-spelling.mjs`          | Fix Russian-style Cyrillic in uz-cyr         |
| `scripts/report-uz-cyr-spelling.mjs`       | Audit uz-cyr spelling issues                 |
| `scripts/report-latin-in-uz-cyr.mjs`       | Find Latin text in uz-cyr files              |

See [`scripts/AGENTS.md`](../../../../scripts/AGENTS.md) for full reference.
