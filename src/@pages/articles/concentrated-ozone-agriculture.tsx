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

const SLUG = 'concentrated-ozone-agriculture'
const ARTICLE_NS = getArticleNamespace(SLUG)

type Source = { title: string; url: string }
type TableData = {
  headers: string[]
  rows: string[][]
}

export function ConcentratedOzoneAgriculturePage({ staticData }: { staticData: TolgeeStaticDataProp }) {
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

          <HighlightBox variant="success">
            {t('body.generatorSection', { ns: ARTICLE_NS })}
          </HighlightBox>

          <ArticleSection title={t('body.applicationsTitle', { ns: ARTICLE_NS })}>
            <BulletList
              items={[
                t('body.applicationsList.0', { ns: ARTICLE_NS }),
                t('body.applicationsList.1', { ns: ARTICLE_NS }),
                t('body.applicationsList.2', { ns: ARTICLE_NS }),
              ]}
            />
            <Paragraph>{t('body.speedAdvantage', { ns: ARTICLE_NS })}</Paragraph>
          </ArticleSection>

          <ArticleSection title={t('body.comparisonTitle', { ns: ARTICLE_NS })}>
            <Paragraph>{t('body.comparisonIntro', { ns: ARTICLE_NS })}</Paragraph>
            <BulletList
              items={[
                t('body.comparisonList.0', { ns: ARTICLE_NS }),
                t('body.comparisonList.1', { ns: ARTICLE_NS }),
                t('body.comparisonList.2', { ns: ARTICLE_NS }),
              ]}
            />
          </ArticleSection>

          <ArticleSection title={t('body.displacementTitle', { ns: ARTICLE_NS })}>
            <Paragraph>{t('body.displacementText', { ns: ARTICLE_NS })}</Paragraph>
          </ArticleSection>

          <ArticleSection title={t('body.sideEffectsTitle', { ns: ARTICLE_NS })}>
            <HighlightBox variant="info">
              <BulletList
                items={[
                  t('body.sideEffectsList.0', { ns: ARTICLE_NS }),
                  t('body.sideEffectsList.1', { ns: ARTICLE_NS }),
                ]}
              />
            </HighlightBox>
          </ArticleSection>

          {tableData && (
            <ArticleSection title={t('body.tableTitle', { ns: ARTICLE_NS })}>
              <DataTable
                headers={tableData.headers}
                rows={tableData.rows}
                caption={t('body.tableCaption', { ns: ARTICLE_NS })}
              />
            </ArticleSection>
          )}

          <Paragraph>{t('body.conclusion', { ns: ARTICLE_NS })}</Paragraph>

          {sources.length > 0 && <SourcesList items={sources} title={t('sourcesTitle', { ns: ARTICLE_NS })} />}
        </ArticleContent>
      </ArticleContainer>
    </Layout>
  )
}
