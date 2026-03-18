---
name: article-card-images
description: Find and validate Unsplash card images for articles and application categories. Use when adding or changing card/hero images in articles-data.ts, applications-data.ts, or i18n; when the user asks to fix, replace, or verify an image; or when topic relevance or "no pig"/"no X" constraints are specified.
---

# Article and card image finding

Use this skill when choosing or replacing Unsplash images for article cards or application categories (e.g. Животноводство / livestock).

## URL format

Use only this format:

```
https://images.unsplash.com/photo-{ID}?w=800&q=80
```

For hero/full-width use `w=1920` where the codebase expects it.

## Mandatory validation

1. **Test the image URL** — always verify every image URL before using it: open in browser or use a HEAD/fetch request; confirm it loads (200, not 404, not empty).
2. **Check topic relevance** — the image MUST match the subject (livestock = cattle/sheep/barn, not milk; beekeeping = bees/hives, not honey; aquaculture/RAS = fish/water treatment; water article = water scene; not pig if "no pig").
3. **Re-verify relevance** — after choosing an image, double-check that the content is relevant: read the subcategory/article description and confirm the image matches (e.g. Livestock farming ≠ milk; Пчеловодство = bees/ульи, not honey; Аквакультура УЗВ = water treatment/fish in RAS; "Medicine" = hospital/healthcare; "Disinfection" = visible disinfection context). Do not finalise without this step.
4. **Respect constraints** — if the user says "no pig", "no X", or "must show Y", treat that as mandatory. Search Unsplash for the right subject (e.g. "cattle farm", "cow pasture", "beehive", "fish farm") and pick an image that fits.
5. If an image does not load or does not match, find another; do not reuse a random or wrong image.

## Workflow

1. Identify the slot (article slug or category/subcategory id) and any constraints (e.g. "no pig").
2. Search Unsplash (unsplash.com/s/photos/{query}) for a relevant term; prefer cattle, cow, dairy, barn, pasture for livestock when pig is excluded.
3. From the search results, get a photo ID. Build the URL as above. Prefer IDs already used elsewhere in the project (same format) to reduce 404 risk.
4. **Verify the URL loads** (e.g. HEAD request, 200 response) and the content matches the topic and constraints.
5. **Re-check relevance**: confirm the image fits the description (e.g. livestock → cattle/barn, not milk; beekeeping → bees/hives, not honey; aquaculture УЗВ → fish/water/RAS; cleaning → professional context; disinfection → visible disinfection context). Always perform this step before finalising.
6. Update the config (e.g. `applications-data.ts`, `articles-data.ts`) and any page that uses the same image (e.g. `src/@pages/applications/agriculture/livestock.tsx`).

## Where images are set

- **Application categories/subcategories:** `src/shared/config/applications-data.ts`. Same image is often used in the matching page under `src/@pages/applications/{category}/{subcategory}.tsx` (e.g. livestock.tsx) with `w=1920` for hero.
- **Articles:** `src/shared/config/articles-data.ts` (card image field).

## Constraints examples

- "No pig" for livestock → use cattle, cow, sheep, barn, or pasture; avoid pig/sow.
- Livestock farming → cattle/barn/pasture, not milk or dairy product.
- Пчеловодство (beekeeping) → bees, beehives, hives; not honey or honey jar.
- Аквакультура УЗВ → fish farming, water treatment, RAS; relevant to fish and recirculating systems.
- "Must match topic" → water article = water image; grain = grain/storage; etc.
- "Cleaning" in context of cleaning companies → professional/industrial cleaning (e.g. person in gloves, cleaning equipment, office/space being cleaned), not just home broom.
- "Disinfection" → use a scene that reads as disinfection/sanitization of premises (e.g. office, corridor, large space), not a single small spray bottle.
