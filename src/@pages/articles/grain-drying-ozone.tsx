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
  BulletList,
  HighlightBox,
  Paragraph,
  SourcesList,
  StatCard,
  StatGrid,
} from '@/shared/ui/article-components'
import { Seo } from '@/shared/ui/seo'

const SLUG = 'grain-drying-ozone'
const ARTICLE_NS = getArticleNamespace(SLUG)

type Source = { title: string; url: string }

export function GrainDryingOzonePage({ staticData }: { staticData: TolgeeStaticDataProp }) {
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

          <ArticleSection title={t('body.problemTitle', { ns: ARTICLE_NS })}>
            <Paragraph>{t('body.problem', { ns: ARTICLE_NS })}</Paragraph>
          </ArticleSection>

          <ArticleSection title={t('body.technologyTitle', { ns: ARTICLE_NS })}>
            <Paragraph>{t('body.technology', { ns: ARTICLE_NS })}</Paragraph>
          </ArticleSection>

          <ArticleSection title={t('body.benefitsTitle', { ns: ARTICLE_NS })}>
            <BulletList
              items={[
                `${t('body.benefit1Title', { ns: ARTICLE_NS })}: ${t('body.benefit1', { ns: ARTICLE_NS })}`,
                `${t('body.benefit2Title', { ns: ARTICLE_NS })}: ${t('body.benefit2', { ns: ARTICLE_NS })}`,
                `${t('body.benefit3Title', { ns: ARTICLE_NS })}: ${t('body.benefit3', { ns: ARTICLE_NS })}`,
                `${t('body.benefit4Title', { ns: ARTICLE_NS })}: ${t('body.benefit4', { ns: ARTICLE_NS })}`,
                `${t('body.benefit5Title', { ns: ARTICLE_NS })}: ${t('body.benefit5', { ns: ARTICLE_NS })}`,
                `${t('body.benefit6Title', { ns: ARTICLE_NS })}: ${t('body.benefit6', { ns: ARTICLE_NS })}`,
              ]}
            />
          </ArticleSection>

          <ArticleSection title={t('body.economicsTitle', { ns: ARTICLE_NS })}>
            <Paragraph>{t('body.economics1', { ns: ARTICLE_NS })}</Paragraph>
            <Paragraph>{t('body.economics2', { ns: ARTICLE_NS })}</Paragraph>

            <StatGrid columns={3}>
              <StatCard value="1.5–2×" label={t('body.benefit1Title', { ns: ARTICLE_NS })} variant="primary" />
              <StatCard
                value="1.8–3.2"
                label="kg/t"
                description={t('body.economics1', { ns: ARTICLE_NS }).slice(0, 50) + '...'}
                variant="accent"
              />
              <StatCard
                value="10.9–19.4"
                label="t.e.f./year"
                description={t('body.economics2', { ns: ARTICLE_NS }).slice(0, 50) + '...'}
                variant="neutral"
              />
            </StatGrid>
          </ArticleSection>

          <ArticleSection title={t('body.scaleTitle', { ns: ARTICLE_NS })}>
            <HighlightBox variant="success">{t('body.scale', { ns: ARTICLE_NS })}</HighlightBox>
          </ArticleSection>

          <ArticleSection title={t('body.chartTitle', { ns: ARTICLE_NS })}>
            <Paragraph>{t('body.chartDescription', { ns: ARTICLE_NS })}</Paragraph>
          </ArticleSection>

          <ArticleSection title={t('body.conclusionTitle', { ns: ARTICLE_NS })}>
            <Paragraph>{t('body.conclusion', { ns: ARTICLE_NS })}</Paragraph>
          </ArticleSection>

          {sources.length > 0 ? <SourcesList items={sources} title={t('sourcesTitle', { ns: ARTICLE_NS })} /> : null}
        </ArticleContent>
      </ArticleContainer>
    </Layout>
  )
}
