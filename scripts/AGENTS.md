# Scripts Reference

> Per-folder documentation for `scripts/`.
> Root reference: [`AGENTS.md`](../AGENTS.md)

---

## Overview

Node.js utility scripts for i18n management, translation quality, and codebase auditing. All scripts run from the project root with `node scripts/{name}.mjs`.

---

## Subcategory i18n Split (Run in Order)

These three scripts handle the process of splitting monolithic category JSONs into per-subcategory files.

### 1. `extract-subcategory-jsons.mjs`

**Purpose:** Creates individual `subcategory-{cat}-{sub}.json` files from `category-{cat}.json` for all 4 languages.

```bash
node scripts/extract-subcategory-jsons.mjs
```

- Reads `(categoryId, subcategoryId)` pairs from an internal `PAIRS` array
- For each pair: extracts `title`, `description`, and `subcategories.{subId}` from the category JSON
- Creates `subcategory-{cat}-{sub}.json` in `ru/`, `en/`, `uz/`, `uz-cyr/`
- **Must run BEFORE** `trim-category-jsons.mjs`
- If adding new subcategories, add pairs to the `PAIRS` array in the script

### 2. `update-subcategory-pages.mjs`

**Purpose:** Updates route files to load subcategory namespace instead of full category namespace.

```bash
node scripts/update-subcategory-pages.mjs
```

- Rewrites `getStaticProps` in both `pages/{cat}/{sub}.tsx` and `pages/[lang]/{cat}/{sub}.tsx`
- Changes `getCategoryNamespace(cat)` → `getSubcategoryNamespace(cat, sub)`
- Uses same `PAIRS` array — add new pairs if needed

### 3. `trim-category-jsons.mjs`

**Purpose:** Removes full subcategory content from category JSONs, keeping only titles and short descriptions.

```bash
node scripts/trim-category-jsons.mjs
```

- After trim, `category-{cat}.json` contains only: `title`, `description`, `subcategories.{subId}.{title, shortDesc}`
- Full content is only in `subcategory-*.json` files
- **Run ONCE after all subcategory extraction is complete**

### Execution Order

```
1. extract-subcategory-jsons.mjs   (create subcategory JSONs)
2. update-subcategory-pages.mjs    (update route files)
3. trim-category-jsons.mjs         (trim category JSONs)
```

---

## Uzbek Cyrillic Quality

### `report-uz-cyr-spelling.mjs`

**Purpose:** Scans uz-cyr JSON files for Russian-style spelling issues.

```bash
node scripts/report-uz-cyr-spelling.mjs              # human-readable
node scripts/report-uz-cyr-spelling.mjs --json        # machine-readable
node scripts/report-uz-cyr-spelling.mjs path/to/file  # single file
```

Detects: `-сийа` (should be `-ция`), `йа`/`йо`/`йу` (should be `я`/`ё`/`ю`), and similar patterns.

### `fix-uz-cyr-spelling.mjs`

**Purpose:** Applies ordered replacements to fix Russian-style Cyrillic.

```bash
node scripts/fix-uz-cyr-spelling.mjs                  # fix all uz-cyr files
node scripts/fix-uz-cyr-spelling.mjs --dry-run         # preview without writing
node scripts/fix-uz-cyr-spelling.mjs path/to/file.json # fix single file
```

### `fix-uz-cyr-latin-exceptions.mjs`

**Purpose:** Fixes `sourcesTitle` to Cyrillic and restores allowed Latin abbreviations/brands.

```bash
node scripts/fix-uz-cyr-latin-exceptions.mjs
```

### `report-latin-in-uz-cyr.mjs`

**Purpose:** Reports Latin script found in uz-cyr strings (except whitelisted tokens like OZONOXY, FDA, etc.).

```bash
node scripts/report-latin-in-uz-cyr.mjs
```

---

## Translation Tools

### `analyze-missing-translations.mjs`

**Purpose:** Compares JSON files across all 4 languages, reports missing keys.

```bash
node scripts/analyze-missing-translations.mjs
```

### `restore-sources-from-uz.mjs`

**Purpose:** For each `article-*.json` in uz-cyr, copies `sources` and `sourcesTitle` from matching uz files (keeps citations in Latin).

```bash
node scripts/restore-sources-from-uz.mjs
```

---

## Transliteration

### `convert_latin_to_cyrillic.js`

**Purpose:** CommonJS utility with Uzbek Latin → Cyrillic character mapping. Used by other scripts.

### `convert-all-uz-to-uz-cyr.mjs`

**Purpose:** Bulk converts all `.json` files in `uz/` to Cyrillic using the character map.

```bash
node scripts/convert-all-uz-to-uz-cyr.mjs
```

---

## Auditing

### `audit-subcategory-render-keys.mjs`

**Purpose:** Walks `src/@pages/applications/` TSX files and checks which i18n keys are actually used in rendering — cross-references with JSON files.

```bash
node scripts/audit-subcategory-render-keys.mjs
```

---

## Parallel Agent Strategy

For bulk i18n work, prefer running scripts instead of having one agent process everything:

1. Run `extract-subcategory-jsons.mjs` once
2. Launch one agent per `(categoryId, subcategoryId)` pair for page updates
3. Run `trim-category-jsons.mjs` once after all agents finish

This avoids a single agent loading all 320+ JSON files and exhausting context.
