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

const SLUG = 'ozone-food-interaction'
const ARTICLE_NS = getArticleNamespace(SLUG)

type Source = { title: string; url: string }
type TableData = {
  headers: string[]
  rows: string[][]
}

export function OzoneFoodInteractionPage({ staticData }: { staticData: TolgeeStaticDataProp }) {
  const { t } = useTranslate()
  const lang = useLang()
  const hasLangInRoute = useIsLangInRoute()
  const article = getArticleBySlug(SLUG)

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

  const nsData = (staticData as Record<string, { sources?: Source[]; table?: TableData }>)[`${lang}:${ARTICLE_NS}`]
  const sources = nsData?.sources ?? []
  const tableData = nsData?.table

  return (
    <Layout>
      <Seo title={t('title', { ns: ARTICLE_NS })} description={t('excerpt', { ns: ARTICLE_NS })} />
      <ArticleHero
        title={t('title', { ns: ARTICLE_NS })}
        description={t('excerpt', { ns: ARTICLE_NS })}
        image={article.image}
        imageAlt={t('title', { ns: ARTICLE_NS })}
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
          <Paragraph>{t('body.intro', { ns: ARTICLE_NS })}</Paragraph>

          <ArticleSection title={t('body.oxidationTitle', { ns: ARTICLE_NS })}>
            <Paragraph>{t('body.oxidation1', { ns: ARTICLE_NS })}</Paragraph>
            <Paragraph>{t('body.oxidation2', { ns: ARTICLE_NS })}</Paragraph>
          </ArticleSection>

          <ArticleSection title={t('body.grasTitle', { ns: ARTICLE_NS })}>
            <HighlightBox variant="success">
              <Paragraph>{t('body.gras', { ns: ARTICLE_NS })}</Paragraph>
            </HighlightBox>
          </ArticleSection>

          <ArticleSection title={t('body.kuprianovTitle', { ns: ARTICLE_NS })}>
            <Paragraph>{t('body.kuprianov', { ns: ARTICLE_NS })}</Paragraph>
          </ArticleSection>

          <ArticleSection title={t('body.bacterialTitle', { ns: ARTICLE_NS })}>
            <Paragraph>{t('body.bacterial1', { ns: ARTICLE_NS })}</Paragraph>
            <HighlightBox variant="warning">
              <Paragraph>{t('body.bacterial2', { ns: ARTICLE_NS })}</Paragraph>
            </HighlightBox>
            <Paragraph>{t('body.bacterial3', { ns: ARTICLE_NS })}</Paragraph>
          </ArticleSection>

          <ArticleSection title={t('body.antifungalTitle', { ns: ARTICLE_NS })}>
            <Paragraph>{t('body.antifungal1', { ns: ARTICLE_NS })}</Paragraph>
            <Paragraph>{t('body.antifungal2', { ns: ARTICLE_NS })}</Paragraph>
            <Paragraph>{t('body.antifungal3', { ns: ARTICLE_NS })}</Paragraph>
          </ArticleSection>

          <ArticleSection title={t('body.yeastMoldTitle', { ns: ARTICLE_NS })}>
            <Paragraph>{t('body.yeastMold1', { ns: ARTICLE_NS })}</Paragraph>
            <Paragraph>{t('body.yeastMold2', { ns: ARTICLE_NS })}</Paragraph>
            <Paragraph>{t('body.yeastMold3', { ns: ARTICLE_NS })}</Paragraph>
          </ArticleSection>

          <ArticleSection title={t('body.humidityTitle', { ns: ARTICLE_NS })}>
            <Paragraph>{t('body.humidity1', { ns: ARTICLE_NS })}</Paragraph>
            <HighlightBox variant="info">
              <Paragraph>{t('body.humidity2', { ns: ARTICLE_NS })}</Paragraph>
            </HighlightBox>
            <Paragraph>{t('body.humidity3', { ns: ARTICLE_NS })}</Paragraph>
          </ArticleSection>

          <ArticleSection title={t('body.ethyleneTitle', { ns: ARTICLE_NS })}>
            <Paragraph>{t('body.ethylene1', { ns: ARTICLE_NS })}</Paragraph>
            <Paragraph>{t('body.ethylene2', { ns: ARTICLE_NS })}</Paragraph>
            <HighlightBox variant="success">
              <Paragraph>{t('body.ethylene3', { ns: ARTICLE_NS })}</Paragraph>
            </HighlightBox>
          </ArticleSection>

          {tableData && (
            <ArticleSection title={t('body.tableTitle', { ns: ARTICLE_NS })}>
              <DataTable headers={tableData.headers} rows={tableData.rows} />
            </ArticleSection>
          )}

          <ArticleSection title={t('body.conclusionTitle', { ns: ARTICLE_NS })}>
            <HighlightBox variant="success">
              <Paragraph>{t('body.conclusion', { ns: ARTICLE_NS })}</Paragraph>
            </HighlightBox>
          </ArticleSection>

          {sources.length > 0 && <SourcesList items={sources} title={t('sourcesTitle', { ns: ARTICLE_NS })} />}
        </ArticleContent>
      </ArticleContainer>
    </Layout>
  )
}
