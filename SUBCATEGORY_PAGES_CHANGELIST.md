# Subcategory pages — subagent tasks

## Subagent

**Name:** `subcategory-i18n`  
**Path:** `.cursor/agents/subcategory-i18n.md`

One subagent run = one subcategory. Run each line below in a **separate** chat / subagent so they can work in parallel.

---

## Invocations (copy each line into a new chat and run)

```
Use the subcategory-i18n subagent. Task: category: agriculture, subcategory: aquaculture
```

```
Use the subcategory-i18n subagent. Task: category: agriculture, subcategory: beekeeping
```

```
Use the subcategory-i18n subagent. Task: category: agriculture, subcategory: grain-storage
```

```
Use the subcategory-i18n subagent. Task: category: agriculture, subcategory: greenhouses
```

```
Use the subcategory-i18n subagent. Task: category: agriculture, subcategory: livestock
```

```
Use the subcategory-i18n subagent. Task: category: agriculture, subcategory: poultry
```

```
Use the subcategory-i18n subagent. Task: category: agriculture, subcategory: vegetable-storage
```

```
Use the subcategory-i18n subagent. Task: category: cleaning, subcategory: car-interiors
```

```
Use the subcategory-i18n subagent. Task: category: cleaning, subcategory: carpet-cleaning
```

```
Use the subcategory-i18n subagent. Task: category: cleaning, subcategory: fire-smoke
```

```
Use the subcategory-i18n subagent. Task: category: cleaning, subcategory: odor-removal
```

```
Use the subcategory-i18n subagent. Task: category: cleaning, subcategory: pet-odors
```

```
Use the subcategory-i18n subagent. Task: category: disinfection, subcategory: offices
```

```
Use the subcategory-i18n subagent. Task: category: disinfection, subcategory: public-transport
```

```
Use the subcategory-i18n subagent. Task: category: disinfection, subcategory: shopping-malls
```

```
Use the subcategory-i18n subagent. Task: category: disinfection, subcategory: sports-facilities
```

```
Use the subcategory-i18n subagent. Task: category: food-production, subcategory: bottled-water
```

```
Use the subcategory-i18n subagent. Task: category: food-production, subcategory: cheese
```

```
Use the subcategory-i18n subagent. Task: category: food-production, subcategory: cold-storage
```

```
Use the subcategory-i18n subagent. Task: category: food-production, subcategory: dairy
```

```
Use the subcategory-i18n subagent. Task: category: food-production, subcategory: meat-sausages
```

```
Use the subcategory-i18n subagent. Task: category: horeca, subcategory: hotels
```

```
Use the subcategory-i18n subagent. Task: category: horeca, subcategory: laundries
```

```
Use the subcategory-i18n subagent. Task: category: horeca, subcategory: restaurants
```

```
Use the subcategory-i18n subagent. Task: category: horeca, subcategory: secondhand
```

```
Use the subcategory-i18n subagent. Task: category: horeca, subcategory: tobacco-hookah
```

```
Use the subcategory-i18n subagent. Task: category: industry, subcategory: manufacturing
```

```
Use the subcategory-i18n subagent. Task: category: industry, subcategory: oil-removal
```

```
Use the subcategory-i18n subagent. Task: category: medicine, subcategory: ambulances
```

```
Use the subcategory-i18n subagent. Task: category: medicine, subcategory: dental
```

```
Use the subcategory-i18n subagent. Task: category: medicine, subcategory: equipment-sterilization
```

```
Use the subcategory-i18n subagent. Task: category: medicine, subcategory: hospitals
```

```
Use the subcategory-i18n subagent. Task: category: medicine, subcategory: rehabilitation
```

```
Use the subcategory-i18n subagent. Task: category: transport, subcategory: auto-transport
```

```
Use the subcategory-i18n subagent. Task: category: transport, subcategory: public-buses
```

```
Use the subcategory-i18n subagent. Task: category: transport, subcategory: railway
```

```
Use the subcategory-i18n subagent. Task: category: transport, subcategory: shipping-containers
```

```
Use the subcategory-i18n subagent. Task: category: warehouses, subcategory: general-storage
```

```
Use the subcategory-i18n subagent. Task: category: warehouses, subcategory: mold-prevention
```

```
Use the subcategory-i18n subagent. Task: category: water-treatment, subcategory: drinking-water
```

```
Use the subcategory-i18n subagent. Task: category: water-treatment, subcategory: iron-removal
```

```
Use the subcategory-i18n subagent. Task: category: water-treatment, subcategory: pools-spa
```

```
Use the subcategory-i18n subagent. Task: category: water-treatment, subcategory: wastewater
```

---

## Already done (no subagent needed)

- **Shared loadNamespaces:** `src/shared/lib/load-namespaces.ts`, exported from `src/shared/lib/index.ts`.
- **Article pages:** `src/pages/articles/ozone-grain-protection.tsx` and `src/pages/[lang]/articles/ozone-grain-protection.tsx` use `loadNamespaces` from lib.
- **One [lang] page example:** `src/pages/[lang]/applications/agriculture/aquaculture.tsx` — already updated to loadNamespaces + getStaticPaths + getStaticProps + export default withTolgee(AquaculturePage). The subagent will overwrite it again; that’s fine.

## What each subagent does (summary)

1. **`src/pages/[lang]/applications/{category}/{subcategory}.tsx`**  
   Rewrite to: only `getStaticPaths`, `getStaticProps` (load `common` + `applications` + `getCategoryNamespace(category)` via `loadNamespaces`), and `export default withTolgee(PageComponent)`. No wrapper, no Seo here.

2. **`src/@pages/applications/{category}/{subcategory}.tsx`**  
   Add Seo inside the component with `t('subcategories.{subcategory}.title')` and `t('subcategories.{subcategory}.shortDesc')`. Replace all hardcoded text with Tolgee keys (breadcrumb: common + category; hero, stats, sections, CTA from category or common). Add missing keys to `src/shared/config/i18n/{ru,en,uz,uz-cyr}/category-{category}.json` for all four languages if needed.
