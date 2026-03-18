---
name: subcategory-refactorer
description: Refactors subcategory and application pages: removes String(), ??, ||, and as any (except staticData), converts i18n JSON from object to array format for ComparisonTable, DataTable, ProcessList, BulletList, FeatureGrid, and fixes TypeScript/lint errors. Updates all language JSON files (en, ru, uz, uz-cyr). Use when refactoring subcategory pages, application pages, or cleaning up TSX + i18n for article components.
---

# Subcategory Refactorer

## Quick start

1. Read the TSX file and `src/shared/ui/article-components.tsx` for prop types.
2. Read all language JSON files for the page.
3. Refactor TSX (cleanup + direct data access), then convert JSON structures to arrays in every language file.
4. Verify: no TypeScript or lint errors.

## TypeScript cleanup

- Remove all `String()` wrappers, `??`, and `||`.
- Remove all `as any` except `staticData as any`.
- Remove helpers: `ensureArray`, `convertHeadersObjectToArray`, `convertRowsObjectToArray`, `ensureRowsArray`.
- Add at the very top of the TSX file (before any imports): `/* eslint-disable @typescript-eslint/no-explicit-any */`
- Fix any resulting TypeScript and lint errors. Do not add `?? ''` or `?? []`; let components handle undefined.

## Component prop types

| Component                 | Props                                                                                       |
| ------------------------- | ------------------------------------------------------------------------------------------- |
| ComparisonTable           | `headers`: 3- or 4-tuple of string, `rows`: `Array<{ parameter, value1, value2, value3? }>` |
| DataTable                 | `headers: string[]`, `rows: (string or number)[][]`                                         |
| ProcessList               | `steps: Array<{ title: string; description: string }>`                                      |
| BulletList                | `items: string[]`                                                                           |
| FeatureGrid / FeatureCard | `items: Array<{ title: string; description: string }>`                                      |

## JSON conversions

Apply the same conversion in every language file (en, ru, uz, uz-cyr). Preserve order and meaning.

### ComparisonTable

```json
"headers": { "indicator": "Metric", "without": "With odor", "with": "After ozonation" }
"rows": { "visitTime": { "indicator": "Average visit time", "without": "12 min", "with": "18-20 min" } }
```

→

```json
"headers": ["Metric", "With odor", "After ozonation"]
"rows": [{ "parameter": "Average visit time", "value1": "12 min", "value2": "18-20 min" }]
```

### DataTable

```json
"headers": { "area": "Store area", "volume": "Volume", "ozonator": "Ozonator" }
"rows": { "small": { "area": "50-100 m²", "volume": "150-300 m³", "ozonator": "10 g/hour" } }
```

→

```json
"headers": ["Store area", "Volume", "Ozonator"]
"rows": [["50-100 m²", "150-300 m³", "10 g/hour"]]
```

### ProcessList

```json
"steps": { "step1": { "title": "Preparation", "description": "..." }, "step2": { "title": "Ozonation", "description": "..." } }
```

→

```json
"steps": [{ "title": "Preparation", "description": "..." }, { "title": "Ozonation", "description": "..." }]
```

### BulletList

```json
"items": { "0": "Item one", "1": "Item two" }
```

or

```json
"items": { "daily": "Daily treatment", "automatic": "Automatic start" }
```

→

```json
"items": ["Item one", "Item two"]
```

or

```json
"items": ["Daily treatment", "Automatic start"]
```

### FeatureGrid

```json
"items": { "odorRemoval": { "title": "Odor removal", "description": "..." }, "disinfection": { "title": "Disinfection", "description": "..." } }
```

→

```json
"items": [{ "title": "Odor removal", "description": "..." }, { "title": "Disinfection", "description": "..." }]
```

## TSX file start

After refactor, the file must begin with:

```typescript
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ... } from '...'
```

## Rules

- Preserve semantic meaning when converting objects to arrays.
- Keep logical order (e.g. first column → first array element).
- All language JSONs must have identical structure.
- No type assertions except `staticData as any`.
- Refactored code must have no TypeScript or lint errors.
