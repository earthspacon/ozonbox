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

const SLUG = 'pool-ventilation-dehumidifiers'
const ARTICLE_NS = getArticleNamespace(SLUG)

type Source = { title: string; url: string }

export function PoolVentilationDehumidifiersPage({ staticData }: { staticData: TolgeeStaticDataProp }) {
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

          <ArticleSection title={t('body.humidityStandardsTitle', { ns: ARTICLE_NS })}>
            <Paragraph>{t('body.humidityStandards', { ns: ARTICLE_NS })}</Paragraph>
          </ArticleSection>

          <ArticleSection title={t('body.dewPointTitle', { ns: ARTICLE_NS })}>
            <Paragraph>{t('body.dewPoint', { ns: ARTICLE_NS })}</Paragraph>
          </ArticleSection>

          <ArticleSection title={t('body.evaporationTitle', { ns: ARTICLE_NS })}>
            <Paragraph>{t('body.evaporation', { ns: ARTICLE_NS })}</Paragraph>
          </ArticleSection>

          <ArticleSection title={t('body.wallMountedTitle', { ns: ARTICLE_NS })}>
            <Paragraph>{t('body.wallMounted', { ns: ARTICLE_NS })}</Paragraph>
          </ArticleSection>

          <ArticleSection title={t('body.ductedTitle', { ns: ARTICLE_NS })}>
            <Paragraph>{t('body.ductedText', { ns: ARTICLE_NS })}</Paragraph>
          </ArticleSection>

          <ArticleSection title={t('body.heatPumpTitle', { ns: ARTICLE_NS })}>
            <Paragraph>{t('body.heatPump', { ns: ARTICLE_NS })}</Paragraph>
          </ArticleSection>

          <ArticleSection title={t('body.ventilationRequirementsTitle', { ns: ARTICLE_NS })}>
            <Paragraph>{t('body.ventilationRequirements', { ns: ARTICLE_NS })}</Paragraph>
          </ArticleSection>

          <ArticleSection title={t('body.chloraminesTitle', { ns: ARTICLE_NS })}>
            <Paragraph>{t('body.chloramines', { ns: ARTICLE_NS })}</Paragraph>
          </ArticleSection>

          <ArticleSection title={t('body.airDistributionTitle', { ns: ARTICLE_NS })}>
            <Paragraph>{t('body.airDistribution', { ns: ARTICLE_NS })}</Paragraph>
          </ArticleSection>

          <ArticleSection title={t('body.energyRecoveryTitle', { ns: ARTICLE_NS })}>
            <Paragraph>{t('body.energyRecovery', { ns: ARTICLE_NS })}</Paragraph>
          </ArticleSection>

          <ArticleSection title={t('body.systemIntegrationTitle', { ns: ARTICLE_NS })}>
            <Paragraph>{t('body.systemIntegration', { ns: ARTICLE_NS })}</Paragraph>
          </ArticleSection>

          {sources.length > 0 && <SourcesList items={sources} title={t('sourcesTitle', { ns: ARTICLE_NS })} />}
        </ArticleContent>
      </ArticleContainer>
    </Layout>
  )
}
