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
  DataTable,
  HighlightBox,
  Paragraph,
  SourcesList,
} from '@/shared/ui/article-components'
import { Seo } from '@/shared/ui/seo'

const SLUG = 'ozone-cucumber-greenhouse'
const ARTICLE_NS = getArticleNamespace(SLUG)

type Source = { title: string; url?: string }
type TableData = { headers: string[]; rows: (string | number)[][] }

export function OzoneCucumberGreenhousePage({ staticData }: { staticData: TolgeeStaticDataProp }) {
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

  const nsData = (staticData as Record<string, { sources?: Source[]; keyFindings?: string[]; table1?: TableData; table2?: TableData; table3?: TableData; table4?: TableData }>)[`${lang}:${ARTICLE_NS}`]
  const sources = nsData?.sources ?? []
  const keyFindings = nsData?.keyFindings ?? []
  const table1 = nsData?.table1
  const table2 = nsData?.table2
  const table3 = nsData?.table3
  const table4 = nsData?.table4

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
          <Paragraph>{t('body.ozoneProperties', { ns: ARTICLE_NS })}</Paragraph>
          <Paragraph>{t('body.experimentSetup', { ns: ARTICLE_NS })}</Paragraph>

          <ArticleSection title={t('body.firstExperimentTitle', { ns: ARTICLE_NS })}>
            <Paragraph>{t('body.firstExperiment', { ns: ARTICLE_NS })}</Paragraph>
            <HighlightBox variant="success">
              {t('body.firstExperimentResult', { ns: ARTICLE_NS })}
            </HighlightBox>
            {table1 && <DataTable headers={table1.headers} rows={table1.rows} caption={t('table1Title', { ns: ARTICLE_NS })} />}
            <Paragraph>{t('body.nematodeEffect', { ns: ARTICLE_NS })}</Paragraph>
          </ArticleSection>

          <ArticleSection title={t('body.seedGerminationTitle', { ns: ARTICLE_NS })}>
            <Paragraph>{t('body.seedGermination', { ns: ARTICLE_NS })}</Paragraph>
            <Paragraph>{t('body.cucumberSeedExperiment', { ns: ARTICLE_NS })}</Paragraph>
          </ArticleSection>

          <ArticleSection title={t('body.fullCycleTitle', { ns: ARTICLE_NS })}>
            <Paragraph>{t('body.fullCycleIntro', { ns: ARTICLE_NS })}</Paragraph>
            <Paragraph>{t('body.ozoneVariants', { ns: ARTICLE_NS })}</Paragraph>
            <Paragraph>{t('body.seedlingResults', { ns: ARTICLE_NS })}</Paragraph>
            <Paragraph>{t('body.leafAreaResults', { ns: ARTICLE_NS })}</Paragraph>
            {table2 && <DataTable headers={table2.headers} rows={table2.rows} caption={t('table2Title', { ns: ARTICLE_NS })} />}
            <Paragraph>{t('body.rootDevelopment', { ns: ARTICLE_NS })}</Paragraph>
          </ArticleSection>

          <ArticleSection title={t('body.floweringPhaseTitle', { ns: ARTICLE_NS })}>
            <Paragraph>{t('body.floweringPhase', { ns: ARTICLE_NS })}</Paragraph>
            {table3 && <DataTable headers={table3.headers} rows={table3.rows} caption={t('table3Title', { ns: ARTICLE_NS })} />}
            <Paragraph>{t('body.seedProductivity', { ns: ARTICLE_NS })}</Paragraph>
            {table4 && <DataTable headers={table4.headers} rows={table4.rows} caption={t('table4Title', { ns: ARTICLE_NS })} />}
          </ArticleSection>

          <ArticleSection title={t('body.conclusionTitle', { ns: ARTICLE_NS })}>
            <Paragraph>{t('body.conclusion', { ns: ARTICLE_NS })}</Paragraph>
            {keyFindings.length > 0 && (
              <HighlightBox variant="info">
                <BulletList items={keyFindings} />
              </HighlightBox>
            )}
            <Paragraph>{t('body.perspectiveNote', { ns: ARTICLE_NS })}</Paragraph>
          </ArticleSection>

          {sources.length > 0 && <SourcesList items={sources} title={t('sourcesTitle', { ns: ARTICLE_NS })} />}
        </ArticleContent>
      </ArticleContainer>
    </Layout>
  )
}
