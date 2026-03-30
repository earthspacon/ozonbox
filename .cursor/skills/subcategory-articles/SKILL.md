---
name: subcategory-articles
description: Adds and writes application subcategory pages and related articles in this repo, including full translations. Use when adding a new application category or subcategory, writing subcategory-style content, or when the user asks how to create application subcategory pages or articles with translations (ru, en, uz, uz-cyr).
---

# Application subcategory pages and articles

Use this skill when adding a new application category/subcategory or writing subcategory-style articles (applications or articles section) in this repo. All new content must be translated to ru, en, uz, uz-cyr.

## Category (applications page card)

1. **applications-data.ts** — Add a new entry to `APPLICATION_CATEGORIES`: `id`, `icon` (e.g. `IconFactory`), `image` (Unsplash `w=800&q=80`, validated per article-card-images skill), `subcategories` array with `{ id, image }` (hero use `w=1920` where needed).
2. **tolgee.ts** — Add `categoryXxx: 'category-xxx'` to `NAMESPACES` and map `'category-id': NAMESPACES.categoryXxx` in `getCategoryNamespace()`.
3. **applications.json** (ru, en, uz, uz-cyr) — Add under `categories`: `"category-id": { "title": "...", "description": "..." }` for the category card on the applications page.

## Category and subcategory i18n (per-page loading)

Subcategory pages load **only their own** translation file (like article pages load `article-{slug}.json`), not the whole category.

1. **category-{id}.json** — Used by the **category index** page only. Keep it trimmed: root `title`, `description`, and `subcategories.{subId}` with only `title` and `shortDesc`. One file per category per lang.
2. **subcategory-{categoryId}-{subId}.json** — One file **per subcategory** per lang. Structure: root `title`, `description` (for breadcrumbs/back link); `subcategories.{subId}` with the **full** subcategory object: `title`, `shortDesc`, `content`, `stats` (e.g. four stat cards: value, label, description), `benefits`, `sections` (intro, dosage, tables with tableCaption/tableHeaders/tableData, scheme with steps, benefits with title/items). Mirror an existing subcategory (e.g. `subcategory-agriculture-beekeeping.json`).
3. Subcategory page component reads `staticData[\`${lang}:${ns}\`].subcategories[subId]` where `ns = getSubcategoryNamespace(categoryId, subcategoryId)`; same data shape, smaller payload. Renders StatGrid, ArticleSection, HighlightBox, DataTable, ProcessList, FeatureGrid, CTASection as in existing subcategory pages.

When adding a new subcategory: add `subcategories.{subId}.{ title, shortDesc }` to **category-{id}.json** in all 4 langs (for the index), and create **subcategory-{categoryId}-{subId}.json** in all 4 langs with the full content. Optionally add the pair to `scripts/extract-subcategory-jsons.mjs` and `scripts/update-subcategory-pages.mjs` (run extract only before trim; see subcategory-i18n-split skill).

## Subcategory page and routes

1. **Component** — `src/@pages/applications/{categoryId}/{subId}.tsx`: use `getSubcategoryNamespace(categoryId, subId)`, `categoryData?.subcategories?.[subId]`, breadcrumbs and links to `/applications/{categoryId}` and `/applications/{categoryId}/{subId}`. Hero image: same URL as subcategory image in applications-data (e.g. `w=1920`).
2. **Routes** — Two files; each loads the **subcategory** namespace only:
   - `src/pages/applications/{categoryId}/{subId}.tsx`: `getStaticProps` loads `common`, `applications`, `getSubcategoryNamespace(categoryId, subId)` for `DEFAULT_LOCALE`; export `withTolgee(PageComponent)`.
   - `src/pages/[lang]/applications/{categoryId}/{subId}.tsx`: `getStaticPaths` with `LOCALES_LIST`; `getStaticProps` with `params.lang`; load same namespaces including `getSubcategoryNamespace(categoryId, subId)`; export same page with `withTolgee`.

## Articles (standalone, in /articles)

1. **articles-data.ts** — Add entry: `id`, `slug`, `image` (Unsplash `w=800&q=80`, validated), `date`, `sourceName`, `sourceUrl`.
2. **Article page** — `src/@pages/articles/{slug}.tsx`: same pattern as ozone-gold-silver-mining; use `getArticleBySlug(slug)`, article namespace `article-{slug}`, `staticData[\`${lang}:${ARTICLE_NS}\`]` for sources; ArticleHero, ArticleContainer, ArticleSection, Paragraph, HighlightBox, BulletList, SourcesList as needed.
3. **Routes** — `src/pages/articles/{slug}.tsx` (getStaticProps with DEFAULT_LOCALE) and `src/pages/[lang]/articles/{slug}.tsx` (getStaticPaths + getStaticProps with params.lang); both load `common`, `articles`, `article-{slug}`.
4. **i18n** — `article-{slug}.json` in ru, en, uz, uz-cyr with `title`, `excerpt`, `body.*` (lead + section keys used by the page), `sourcesTitle`, `sources` (array of `{ title, url }`).

### Writing rules for articles and subcategory content

- **Page structure:** One independent page component per article (no single dynamic `[slug]` component for content); component receives `staticData` and uses a fixed slug/namespace for that article.
- **Layout and UX:** Mobile-first layout; article card image and hero image as in existing articles (card from articles-data; hero same image or as in design).
- **Translations:** Every new or edited article must have full content in all four languages (ru, en, uz, uz-cyr): `article-{slug}.json` and, for the list, `articles.{id}.title` / `articles.{id}.excerpt` in `articles.json`.
- **Originality:** For non-scientific or marketing-style texts, rephrase rather than copy-paste from sources; keep tone consistent with the rest of the site.
- **Content structure:** Use clear sections (body.lead + body.* keys); support components: ArticleHero, ArticleContainer, ArticleSection, Paragraph, HighlightBox, BulletList; add SourcesList only when sources are present (sources block not mandatory).
- **Images:** Card/hero images must follow the project's image rules (e.g. Unsplash `w=800&q=80` for cards; validate per article-card-images skill when adding or changing images).

### Content quality — no filler, real research required

When creating or updating any content (articles, subcategory pages), **always research the topic on the internet first**:

- **Use WebSearch** to find real companies, real data, real case studies, and real regulatory standards relevant to the topic. Do not write generic "water" text with vague claims and no specifics.
- **Name real companies and organizations** — instead of "major chains in Japan", name Aeon Group, Seven & i Holdings, etc. Instead of "leading retailers in the US", name Walmart, Costco, Whole Foods Market.
- **Include concrete numbers and results** — "extends shelf life" is vague; "extends mango shelf life from 14 to 28 days (Edith Cowan University, 2025)" is meaningful.
- **Reference real standards** — cite specific regulatory documents (FDA 21 CFR 173.368, HACCP, EU regulations, China's GB 2760, FSANZ) rather than just saying "approved by regulators".
- **Cover multiple regions** when the topic is global — USA, EU, Japan, South Korea, China, Australia, Middle East with specific examples per region.
- **Verify claims** — if reference material provides unverified claims, use WebSearch to cross-check before including. Present unverifiable claims carefully or omit them.

## Translations

Always add or update **all four languages** (ru, en, uz, uz-cyr) for:

- **applications.json** — `categories.{id}.title`, `categories.{id}.description`.
- **category-{id}.json** — category index only: `title`, `description`, and `subcategories.{subId}.{ title, shortDesc }` (trimmed; full subcategory content lives in subcategory JSONs).
- **subcategory-{categoryId}-{subId}.json** — full content for one subcategory page: `title`, `description`, `subcategories.{subId}` with stats, sections, benefits, etc.
- **article-{slug}.json** — full article content (title, excerpt, body.*, sourcesTitle, sources).

File locations: `src/shared/config/i18n/{lang}/` where `{lang}` is one of ru, en, uz, uz-cyr.
