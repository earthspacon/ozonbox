import { TolgeeStaticDataProp, useTranslate } from '@tolgee/react'

import { Layout } from '@/widgets/layout'

import { getArticleBySlug } from '@/shared/config/articles-data'
import { getArticleNamespace, NAMESPACES } from '@/shared/config/tolgee'
import { useIsLangInRoute, useLang } from '@/shared/lib/lang'
import {
  ArticleContainer,
  ArticleContent,
  ArticleHero,
  Paragraph,
  QuoteBlock,
  SourcesList,
} from '@/shared/ui/article-components'
import { Seo } from '@/shared/ui/seo'

const SLUG = 'ozone-grain-protection'
const ARTICLE_NS = getArticleNamespace(SLUG)

function parseSources(raw: unknown): { title: string; url: string }[] {
  if (Array.isArray(raw)) {
    return raw.filter(
      (item): item is { title: string; url: string } =>
        item != null &&
        typeof item === 'object' &&
        'title' in item &&
        'url' in item &&
        typeof (item as { title: unknown }).title === 'string' &&
        typeof (item as { url: unknown }).url === 'string',
    )
  }
  if (typeof raw === 'string') {
    try {
      return parseSources(JSON.parse(raw) as unknown)
    } catch {
      return []
    }
  }
  return []
}

export function OzoneGrainProtectionPage({ staticData }: { staticData: TolgeeStaticDataProp }) {
  const { t } = useTranslate()
  const lang = useLang()
  const hasLangInRoute = useIsLangInRoute()
  const article = getArticleBySlug(SLUG)
  const backHref = hasLangInRoute ? `/${lang}/articles` : '/articles'

  if (!article) {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <h1>Article not found</h1>
          </div>
        </section>
      </Layout>
    )
  }

  const nsData = (staticData as Record<string, { sources?: unknown }>)[`${lang}:${ARTICLE_NS}`]
  const sources = parseSources(nsData?.sources)
  const masonQuote = t('body.masonQuote', { ns: ARTICLE_NS, defaultValue: '' })
  const origin = t('body.origin', { ns: ARTICLE_NS, defaultValue: '' })

  return (
    <Layout>
      <Seo title={t('title', { ns: ARTICLE_NS })} description={t('excerpt', { ns: ARTICLE_NS })} />
      <ArticleHero
        title={t('title', { ns: ARTICLE_NS })}
        description={t('excerpt', { ns: ARTICLE_NS })}
        image={article.image}
        imageAlt={t('title', { ns: ARTICLE_NS })}
        backLink={{ href: backHref, label: t('list.backToArticles', { ns: NAMESPACES.articles }) }}
        breadcrumbs={[
          { label: t('footer.home', { ns: NAMESPACES.common }), href: '/' },
          {
            label: t('nav.articles', { ns: NAMESPACES.common }),
            href: hasLangInRoute ? `/${lang}/articles` : '/articles',
          },
          { label: t('title', { ns: ARTICLE_NS }) },
        ]}
      />
      <ArticleContainer>
        <ArticleContent>
          <Paragraph>{t('body.lead', { ns: ARTICLE_NS })}</Paragraph>
          <Paragraph>{t('body.montreal', { ns: ARTICLE_NS })}</Paragraph>
          <Paragraph>{t('body.purdue', { ns: ARTICLE_NS })}</Paragraph>
          <Paragraph>{t('body.twoPhase', { ns: ARTICLE_NS })}</Paragraph>
          {masonQuote ? <QuoteBlock text={masonQuote} source="Linda Mason, Purdue University" /> : null}
          <Paragraph>{t('body.quality', { ns: ARTICLE_NS })}</Paragraph>
          {origin ? <Paragraph>{origin}</Paragraph> : null}
          <Paragraph>{t('body.limitation', { ns: ARTICLE_NS })}</Paragraph>
          {sources.length > 0 ? <SourcesList items={sources} title={t('sourcesTitle', { ns: ARTICLE_NS })} /> : null}
        </ArticleContent>
      </ArticleContainer>
    </Layout>
  )
}
