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
  DataTable,
  HighlightBox,
  Paragraph,
  SourcesList,
} from '@/shared/ui/article-components'
import { Seo } from '@/shared/ui/seo'

const SLUG = 'aop-wastewater-agriculture'
const ARTICLE_NS = getArticleNamespace(SLUG)

type Source = { title: string; url: string }

interface TableData {
  caption: string
  headers: string[]
  rows: (string | number)[][]
}

interface ArticleData {
  sources?: Source[]
  tables?: {
    table1?: TableData
    table2?: TableData
    table3?: TableData
  }
}

export function AopWastewaterAgriculturePage({ staticData }: { staticData: TolgeeStaticDataProp }) {
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

  const nsData = (staticData as Record<string, ArticleData>)[`${lang}:${ARTICLE_NS}`]
  const sources = nsData?.sources ?? []
  const tables = nsData?.tables

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
          <ArticleSection title={t('sections.aquaculture', { ns: ARTICLE_NS })}>
            <Paragraph>{t('body.aquaculture1', { ns: ARTICLE_NS })}</Paragraph>
            <Paragraph>{t('body.aquaculture2', { ns: ARTICLE_NS })}</Paragraph>
            <HighlightBox variant="success">
              <strong>{t('body.aquacultureResult', { ns: ARTICLE_NS })}</strong>
            </HighlightBox>
          </ArticleSection>

          <ArticleSection title={t('sections.catalyticOzonation', { ns: ARTICLE_NS })}>
            <Paragraph>{t('body.catalytic1', { ns: ARTICLE_NS })}</Paragraph>
            <Paragraph>{t('body.catalytic2', { ns: ARTICLE_NS })}</Paragraph>

            {tables?.table1 && (
              <DataTable caption={tables.table1.caption} headers={tables.table1.headers} rows={tables.table1.rows} />
            )}

            <Paragraph>{t('body.catalytic3', { ns: ARTICLE_NS })}</Paragraph>
          </ArticleSection>

          <ArticleSection title={t('sections.municipalWastewater', { ns: ARTICLE_NS })}>
            <Paragraph>{t('body.municipal1', { ns: ARTICLE_NS })}</Paragraph>
            <Paragraph>{t('body.municipal2', { ns: ARTICLE_NS })}</Paragraph>
            <Paragraph>{t('body.municipal3', { ns: ARTICLE_NS })}</Paragraph>
            <Paragraph>{t('body.municipal4', { ns: ARTICLE_NS })}</Paragraph>

            <Paragraph>{t('body.french1', { ns: ARTICLE_NS })}</Paragraph>
            <Paragraph>{t('body.french2', { ns: ARTICLE_NS })}</Paragraph>

            {tables?.table2 && (
              <DataTable caption={tables.table2.caption} headers={tables.table2.headers} rows={tables.table2.rows} />
            )}

            <Paragraph>{t('body.french3', { ns: ARTICLE_NS })}</Paragraph>
          </ArticleSection>

          <ArticleSection title={t('sections.swissExperience', { ns: ARTICLE_NS })}>
            <Paragraph>{t('body.swiss1', { ns: ARTICLE_NS })}</Paragraph>
            <Paragraph>{t('body.swiss2', { ns: ARTICLE_NS })}</Paragraph>
            <Paragraph>{t('body.swiss3', { ns: ARTICLE_NS })}</Paragraph>
            <HighlightBox variant="info">{t('body.swiss4', { ns: ARTICLE_NS })}</HighlightBox>
          </ArticleSection>

          <ArticleSection title={t('sections.solarAcceleration', { ns: ARTICLE_NS })}>
            <Paragraph>{t('body.solar1', { ns: ARTICLE_NS })}</Paragraph>
            <Paragraph>{t('body.solar2', { ns: ARTICLE_NS })}</Paragraph>
          </ArticleSection>

          <ArticleSection title={t('sections.highConcentration', { ns: ARTICLE_NS })}>
            <Paragraph>{t('body.highConc1', { ns: ARTICLE_NS })}</Paragraph>

            {tables?.table3 && (
              <DataTable caption={tables.table3.caption} headers={tables.table3.headers} rows={tables.table3.rows} />
            )}

            <Paragraph>{t('body.highConc2', { ns: ARTICLE_NS })}</Paragraph>
          </ArticleSection>

          <ArticleSection title={t('sections.greenChemistry', { ns: ARTICLE_NS })}>
            <Paragraph>{t('body.green1', { ns: ARTICLE_NS })}</Paragraph>
            <Paragraph>{t('body.green2', { ns: ARTICLE_NS })}</Paragraph>
            <Paragraph>{t('body.green3', { ns: ARTICLE_NS })}</Paragraph>
          </ArticleSection>

          {sources.length > 0 ? <SourcesList items={sources} title={t('sourcesTitle', { ns: ARTICLE_NS })} /> : null}
        </ArticleContent>
      </ArticleContainer>
    </Layout>
  )
}
