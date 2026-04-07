# Articles

> Per-folder documentation for `src/@pages/articles/`.
> Root reference: [`AGENTS.md`](../../../AGENTS.md)

---

## Overview

Each article is a **standalone page file** — no dynamic `[slug]` route. Articles cover ozone-related scientific/technical topics in 4 languages.

---

## File Organization

```
src/@pages/articles/
├── index.tsx                    # Articles list page (card grid)
├── ozone-grain-protection.tsx   # standalone article page
├── ozone-virus-disinfection.tsx
├── ...                          # one file per article slug
```

Each article also has:

- Route files: `src/pages/articles/{slug}.tsx` + `src/pages/[lang]/articles/{slug}.tsx`
- i18n content: `src/shared/config/i18n/{lang}/article-{slug}.json`
- Metadata entry in `src/shared/config/articles-data.ts`
- List metadata in `src/shared/config/i18n/{lang}/articles.json`

---

## Article Page Template

```typescript
/* eslint-disable @typescript-eslint/no-explicit-any */
import { TolgeeStaticDataProp, useTranslate } from '@tolgee/react'

import { getArticleNamespace, NAMESPACES } from '@/shared/config/tolgee'
import { useLang } from '@/shared/lib/lang'
import {
  ArticleContainer, ArticleHero, ArticleSection, Breadcrumb,
  BulletList, DataTable, HighlightBox, Paragraph, SourcesList,
} from '@/shared/ui/article-components'
import { Seo } from '@/shared/ui/seo'
import { Layout } from '@/widgets/layout'

const ARTICLE_NS = getArticleNamespace('article-slug')

export function ArticleSlugPage({ staticData }: { staticData: TolgeeStaticDataProp }) {
  const { t } = useTranslate()
  const lang = useLang()

  // get sources from staticData (NOT via t() with returnObjects)
  type Source = { title: string; url?: string }
  const nsData = (staticData as any)[`${lang}:${ARTICLE_NS}`]
  const sources: Source[] = nsData?.sources ?? []

  return (
    <Layout>
      <Seo
        title={t('title', { ns: ARTICLE_NS })}
        description={t('excerpt', { ns: ARTICLE_NS })}
      />

      <Breadcrumb items={[
        { label: t('nav.home', { ns: NAMESPACES.common }), href: '/' },
        { label: t('nav.articles', { ns: NAMESPACES.common }), href: '/articles' },
        { label: t('title', { ns: ARTICLE_NS }) },
      ]} />

      <ArticleHero
        title={t('title', { ns: ARTICLE_NS })}
        description={t('excerpt', { ns: ARTICLE_NS })}
        image="https://images.unsplash.com/photo-{ID}?w=1920&q=80"
      />

      <ArticleContainer>
        <ArticleSection>
          <Paragraph>{t('body.lead', { ns: ARTICLE_NS })}</Paragraph>
        </ArticleSection>

        {/* more sections using t() for text, staticData for arrays */}

        {sources.length > 0 && (
          <SourcesList
            title={t('sourcesTitle', { ns: ARTICLE_NS })}
            items={sources}
          />
        )}
      </ArticleContainer>
    </Layout>
  )
}
```

---

## Route File Pattern

### Default locale (`src/pages/articles/{slug}.tsx`)

```typescript
import { GetStaticProps } from 'next'

import { ArticleSlugPage } from '@/@pages/articles/article-slug'

import { DEFAULT_LOCALE, getArticleNamespace, NAMESPACES, TLocale } from '@/shared/config/tolgee'
import { loadNamespaces } from '@/shared/lib/load-namespaces'
import { withTolgee } from '@/shared/lib/page-static-functions'

export const getStaticProps: GetStaticProps = async () => {
  const staticData = await loadNamespaces(DEFAULT_LOCALE as TLocale, [
    NAMESPACES.common,
    NAMESPACES.articles,
    getArticleNamespace('article-slug'),
  ])
  return { props: { staticData, lang: DEFAULT_LOCALE } }
}

export default withTolgee(ArticleSlugPage)
```

### Localized (`src/pages/[lang]/articles/{slug}.tsx`)

```typescript
import { GetStaticPaths, GetStaticProps } from 'next'

import { ArticleSlugPage } from '@/@pages/articles/article-slug'

import { getArticleNamespace, LOCALES_LIST, NAMESPACES, TLocale } from '@/shared/config/tolgee'
import { loadNamespaces } from '@/shared/lib/load-namespaces'
import { withTolgee } from '@/shared/lib/page-static-functions'

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: LOCALES_LIST.map((lang) => ({ params: { lang } })),
  fallback: false,
})

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const lang = (params?.lang as TLocale) || 'ru'
  const staticData = await loadNamespaces(lang, [
    NAMESPACES.common,
    NAMESPACES.articles,
    getArticleNamespace('article-slug'),
  ])
  return { props: { staticData, lang } }
}

export default withTolgee(ArticleSlugPage)
```

---

## i18n Structure

### `articles.json` (list metadata — loaded on articles list page)

```json
{
  "ozoneGrainProtection": {
    "title": "Article title for card",
    "excerpt": "Short excerpt for card description"
  }
}
```

### `article-{slug}.json` (full content — loaded on article page)

```json
{
  "title": "Full Article Title",
  "excerpt": "Article excerpt / description",
  "body": {
    "lead": "Opening paragraph...",
    "sectionKey": {
      "title": "Section Title",
      "text": "Section content..."
    }
  },
  "sourcesTitle": "Sources",
  "sources": [{ "title": "Source Name", "url": "https://..." }]
}
```

---

## Adding a New Article

1. **`articles-data.ts`** — add `ArticleMeta` entry (id, slug, image, date, sourceName, sourceUrl)
2. **`articles.json`** — add title + excerpt in all 4 languages
3. **`article-{slug}.json`** — create in all 4 languages (title, excerpt, body.\*, sourcesTitle, sources)
4. **`src/@pages/articles/{slug}.tsx`** — create standalone page component
5. **`src/pages/articles/{slug}.tsx`** — create default-locale route
6. **`src/pages/[lang]/articles/{slug}.tsx`** — create localized route
7. Validate image URL, format with Prettier, verify TypeScript

---

## Content Rules

- **No `returnObjects: true`** — sources and structured data come from `staticData`
- **No dynamic `[slug]`** — each article is a separate file
- **Content neutrality** — remove country-specific references, brand mentions, sales language
- **Scientific sources** — include SourcesList with verified URLs; never fabricate citations
- **Non-scientific text** — rephrase slightly to avoid copy-paste from source
- **All 4 languages required** — ru, en, uz, uz-cyr with full content
- **Card images** — Unsplash `w=800&q=80`, validated for loading and topic relevance
- **Hero** — darkened overlay (`bg-black/65`), white text, breadcrumb above hero
