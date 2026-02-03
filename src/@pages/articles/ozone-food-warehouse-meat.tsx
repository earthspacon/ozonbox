import { TolgeeStaticDataProp, useTranslate } from '@tolgee/react'

import { Layout } from '@/widgets/layout'

import { getArticleBySlug } from '@/shared/config/articles-data'
import { getArticleNamespace, NAMESPACES } from '@/shared/config/tolgee'
import { useIsLangInRoute, useLang } from '@/shared/lib/lang'
import {
  ArticleContainer,
  ArticleContent,
  ArticleHero,
  ArticleSection,
  Paragraph,
  SourcesList,
} from '@/shared/ui/article-components'
import { Seo } from '@/shared/ui/seo'

const SLUG = 'ozone-food-warehouse-meat'
const ARTICLE_NS = getArticleNamespace(SLUG)

type Source = { title: string; url: string }

export function OzoneFoodWarehouseMeatPage({ staticData }: { staticData: TolgeeStaticDataProp }) {
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

  const nsData = (staticData as Record<string, { sources?: Source[] }>)[`${lang}:${ARTICLE_NS}`]
  const sources = nsData?.sources ?? []

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

          <ArticleSection title={t('sections.coldStorage', { ns: ARTICLE_NS })}>
            <Paragraph>{t('body.coldStorage1', { ns: ARTICLE_NS })}</Paragraph>
            <Paragraph>{t('body.coldStorage2', { ns: ARTICLE_NS })}</Paragraph>
            <Paragraph>{t('body.coldStorage3', { ns: ARTICLE_NS })}</Paragraph>
          </ArticleSection>

          <ArticleSection title={t('sections.meatPreservation', { ns: ARTICLE_NS })}>
            <Paragraph>{t('body.meatPreservation1', { ns: ARTICLE_NS })}</Paragraph>
            <Paragraph>{t('body.meatPreservation2', { ns: ARTICLE_NS })}</Paragraph>
            <Paragraph>{t('body.meatPreservation3', { ns: ARTICLE_NS })}</Paragraph>
          </ArticleSection>

          <ArticleSection title={t('sections.pathogenControl', { ns: ARTICLE_NS })}>
            <Paragraph>{t('body.pathogenControl1', { ns: ARTICLE_NS })}</Paragraph>
            <Paragraph>{t('body.pathogenControl2', { ns: ARTICLE_NS })}</Paragraph>
            <Paragraph>{t('body.pathogenControl3', { ns: ARTICLE_NS })}</Paragraph>
          </ArticleSection>

          <ArticleSection title={t('sections.industryAdoption', { ns: ARTICLE_NS })}>
            <Paragraph>{t('body.industryAdoption1', { ns: ARTICLE_NS })}</Paragraph>
            <Paragraph>{t('body.industryAdoption2', { ns: ARTICLE_NS })}</Paragraph>
            <Paragraph>{t('body.industryAdoption3', { ns: ARTICLE_NS })}</Paragraph>
          </ArticleSection>

          <ArticleSection title={t('sections.benefits', { ns: ARTICLE_NS })}>
            <Paragraph>{t('body.benefits1', { ns: ARTICLE_NS })}</Paragraph>
            <Paragraph>{t('body.benefits2', { ns: ARTICLE_NS })}</Paragraph>
            <Paragraph>{t('body.benefits3', { ns: ARTICLE_NS })}</Paragraph>
            <Paragraph>{t('body.benefits4', { ns: ARTICLE_NS })}</Paragraph>
          </ArticleSection>

          <ArticleSection title={t('sections.shelfLife', { ns: ARTICLE_NS })}>
            <Paragraph>{t('body.shelfLife1', { ns: ARTICLE_NS })}</Paragraph>
            <Paragraph>{t('body.shelfLife2', { ns: ARTICLE_NS })}</Paragraph>
            <Paragraph>{t('body.shelfLife3', { ns: ARTICLE_NS })}</Paragraph>
          </ArticleSection>

          <ArticleSection title={t('sections.regulatory', { ns: ARTICLE_NS })}>
            <Paragraph>{t('body.regulatory1', { ns: ARTICLE_NS })}</Paragraph>
            <Paragraph>{t('body.regulatory2', { ns: ARTICLE_NS })}</Paragraph>
            <Paragraph>{t('body.regulatory3', { ns: ARTICLE_NS })}</Paragraph>
            <Paragraph>{t('body.regulatory4', { ns: ARTICLE_NS })}</Paragraph>
          </ArticleSection>

          <ArticleSection title={t('sections.conclusion', { ns: ARTICLE_NS })}>
            <Paragraph>{t('body.conclusion', { ns: ARTICLE_NS })}</Paragraph>
          </ArticleSection>

          {sources.length > 0 && <SourcesList items={sources} title={t('sourcesTitle', { ns: ARTICLE_NS })} />}
        </ArticleContent>
      </ArticleContainer>
    </Layout>
  )
}
