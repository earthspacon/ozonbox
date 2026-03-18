---
name: subcategory-i18n-split
description: Refactor one application subcategory so its pages load only that subcategory's translation namespace (no whole-category JSON). Use scripts for bulk work or run parallel agents—one agent per (categoryId, subcategoryId) pair.
---

# Subcategory i18n split

Refactor subcategory pages so each loads only its own translation namespace (like article pages with `article-{slug}`). Category index keeps loading trimmed category JSONs (title, description, and per-subcategory only `title` + `shortDesc`).

## Script-based workflow (no single agent eating context)

Run from project root. Order matters.

1. **Extract subcategory JSONs** (creates 180 files from category JSONs):
   ```bash
   node scripts/extract-subcategory-jsons.mjs
   ```

2. **Update page files** (getStaticProps + @pages ns): run the update script for all pairs (or do one subcategory manually):
   ```bash
   node scripts/update-subcategory-pages.mjs
   ```
   (If you added new subcategories, add their `[categoryId, subcategoryId]` to the `PAIRS` array in the script.)

3. **Trim category JSONs** (remove heavy content; keep only what category index needs):
   ```bash
   node scripts/trim-category-jsons.mjs
   ```
   After trim, each `category-{id}.json` has only `title`, `description`, and `subcategories.{id}.{ title, shortDesc }`. Full subcategory content lives only in `subcategory-{category}-{sub}.json`.

Use this workflow to avoid one agent loading all category JSONs and burning context. Optionally run parallel agents per subcategory for step 1 (each agent creates 4 JSONs for one pair); then run steps 2–3 once.

## Input

One **(categoryId, subcategoryId)** pair, e.g. `agriculture`, `aquaculture`.

## Dependency

`getSubcategoryNamespace(categoryId, subcategoryId)` must exist in `src/shared/config/tolgee.ts` before running.

## Steps (per subcategory)

1. **Read source files**
   - `src/shared/config/i18n/{ru,en,uz,uz-cyr}/category-{categoryId}.json` — to extract `title`, optional `description`, and full `subcategories.{subcategoryId}` object.
   - `src/@pages/applications/{categoryId}/{subcategoryId}.tsx` — to confirm every key and nested path used (all `t(...)` and `data.*`).

2. **Create 4 JSON files**
   - Path: `src/shared/config/i18n/{lang}/subcategory-{categoryId}-{subcategoryId}.json` for each of `ru`, `en`, `uz`, `uz-cyr`.
   - Content: `title` (and `description` if used on the page) from the category JSON; `subcategories.{subcategoryId}` = **full** subcategory object. If category JSONs were already trimmed, the full block exists only in existing `subcategory-*.json` or must be written from the @pages component’s data shape; do not drop keys.

3. **Update page with [lang]**
   - File: `src/pages/[lang]/applications/{categoryId}/{subcategoryId}.tsx`
   - In getStaticProps: load `getSubcategoryNamespace(categoryId, subcategoryId)` instead of `getCategoryNamespace(categoryId)`.
   - Use `params.category` and literal subcategory id (from file name, e.g. `'aquaculture'`). Namespaces: `[NAMESPACES.common, NAMESPACES.applications, getSubcategoryNamespace(category, subcategory)]`.

4. **Update page without [lang]**
   - File: `src/pages/applications/{categoryId}/{subcategoryId}.tsx`
   - Same change: load subcategory namespace with literal categoryId and subcategoryId.

5. **Do not change**
   - The @pages component (`src/@pages/applications/{categoryId}/{subcategoryId}.tsx`).
   - The category index page (`src/pages/[lang]/applications/[category]/index.tsx`).

## Output

- 4 new JSON files: `subcategory-{categoryId}-{subcategoryId}.json` in ru, en, uz, uz-cyr.
- 2 updated page files (getStaticProps only).
- No missing translation keys; same structure as in the source category JSON for that subcategory.

## Full list of (categoryId, subcategoryId) pairs

Run one agent per line. Pairs from `getAllSubcategoryPaths()`:

- medicine, hospitals
- medicine, equipment-sterilization
- medicine, dental
- medicine, rehabilitation
- medicine, ambulances
- agriculture, poultry
- agriculture, livestock
- agriculture, vegetable-storage
- agriculture, greenhouses
- agriculture, aquaculture
- agriculture, grain-storage
- agriculture, beekeeping
- food-production, bottled-water
- food-production, dairy
- food-production, meat-sausages
- food-production, cheese
- food-production, cold-storage
- horeca, hotels
- horeca, restaurants
- horeca, laundries
- horeca, tobacco-hookah
- horeca, secondhand
- water-treatment, drinking-water
- water-treatment, wastewater
- water-treatment, pools-spa
- water-treatment, iron-removal
- disinfection, offices
- disinfection, public-transport
- disinfection, sports-facilities
- disinfection, shopping-malls
- cleaning, odor-removal
- cleaning, fire-smoke
- cleaning, pet-odors
- cleaning, car-interiors
- cleaning, carpet-cleaning
- warehouses, mold-prevention
- warehouses, general-storage
- industry, oil-removal
- industry, manufacturing
- transport, public-buses
- transport, railway
- transport, shipping-containers
- transport, auto-transport
- mining-metals, extraction-and-metals
- mining-metals, gold-mining-global
- mining-metals, cyanide-destruction
- mining-metals, metal-storage-surface
