import { TolgeeStaticDataProp, useTranslate } from '@tolgee/react'

import { Layout } from '@/widgets/layout'

import { getArticleBySlug } from '@/shared/config/articles-data'
import { getArticleNamespace, NAMESPACES } from '@/shared/config/tolgee'
import { useIsLangInRoute, useLang } from '@/shared/lib/lang'
import { ArticleContainer, ArticleContent, ArticleHero, Paragraph, SourcesList } from '@/shared/ui/article-components'
import { Seo } from '@/shared/ui/seo'

const SLUG = 'ozone-cancer-risk-reduction'
const ARTICLE_NS = getArticleNamespace(SLUG)

type Source = { title: string; url?: string }

export function OzoneCancerRiskReductionPage({ staticData }: { staticData: TolgeeStaticDataProp }) {
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

          <h2>{t('body.carcinogensProblemHeading', { ns: ARTICLE_NS })}</h2>
          <Paragraph>{t('body.carcinogensProblem', { ns: ARTICLE_NS })}</Paragraph>

          <h2>{t('body.industrialExposureHeading', { ns: ARTICLE_NS })}</h2>
          <Paragraph>{t('body.industrialExposure', { ns: ARTICLE_NS })}</Paragraph>

          <h2>{t('body.oxidationPrincipleHeading', { ns: ARTICLE_NS })}</h2>
          <Paragraph>{t('body.oxidationPrinciple', { ns: ARTICLE_NS })}</Paragraph>

          <h2>{t('body.effectiveCompoundsHeading', { ns: ARTICLE_NS })}</h2>
          <Paragraph>{t('body.effectiveCompounds', { ns: ARTICLE_NS })}</Paragraph>

          <h2>{t('body.safeConcentrationsHeading', { ns: ARTICLE_NS })}</h2>
          <Paragraph>{t('body.safeConcentrations', { ns: ARTICLE_NS })}</Paragraph>

          <h2>{t('body.bactericidalEffectHeading', { ns: ARTICLE_NS })}</h2>
          <Paragraph>{t('body.bactericidalEffect', { ns: ARTICLE_NS })}</Paragraph>

          <h2>{t('body.healthBenefitsHeading', { ns: ARTICLE_NS })}</h2>
          <Paragraph>{t('body.healthBenefits', { ns: ARTICLE_NS })}</Paragraph>

          <h2>{t('body.conclusionHeading', { ns: ARTICLE_NS })}</h2>
          <Paragraph>{t('body.conclusion', { ns: ARTICLE_NS })}</Paragraph>

          {sources.length > 0 ? <SourcesList items={sources} title={t('sourcesTitle', { ns: ARTICLE_NS })} /> : null}
        </ArticleContent>
      </ArticleContainer>
    </Layout>
  )
}
