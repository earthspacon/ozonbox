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
  ImageWithCaption,
  Paragraph,
  SourcesList,
} from '@/shared/ui/article-components'
import { Seo } from '@/shared/ui/seo'

const SLUG = 'ozone-voc-study'
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
  figure1?: {
    caption: string
  }
}

export function OzoneVocStudyPage({ staticData }: { staticData: TolgeeStaticDataProp }) {
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
  const figure1 = nsData?.figure1

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
          <ArticleSection title={t('sections.introduction', { ns: ARTICLE_NS })}>
            <Paragraph>{t('body.introduction', { ns: ARTICLE_NS })}</Paragraph>
            <Paragraph>{t('body.introduction2', { ns: ARTICLE_NS })}</Paragraph>
            <Paragraph>{t('body.introduction3', { ns: ARTICLE_NS })}</Paragraph>
          </ArticleSection>

          <ArticleSection title={t('sections.experimental', { ns: ARTICLE_NS })}>
            <Paragraph>{t('body.experimental', { ns: ARTICLE_NS })}</Paragraph>
            <Paragraph>{t('body.experimental2', { ns: ARTICLE_NS })}</Paragraph>
            <Paragraph>{t('body.experimental3', { ns: ARTICLE_NS })}</Paragraph>
            <Paragraph>{t('body.experimental4', { ns: ARTICLE_NS })}</Paragraph>
            <Paragraph>{t('body.experimental5', { ns: ARTICLE_NS })}</Paragraph>
            <Paragraph>{t('body.experimental6', { ns: ARTICLE_NS })}</Paragraph>
          </ArticleSection>

          <ArticleSection title={t('sections.discussion', { ns: ARTICLE_NS })}>
            <Paragraph>{t('body.discussion1', { ns: ARTICLE_NS })}</Paragraph>
            <Paragraph>{t('body.discussion2', { ns: ARTICLE_NS })}</Paragraph>

            {tables?.table1 && (
              <DataTable caption={tables.table1.caption} headers={tables.table1.headers} rows={tables.table1.rows} />
            )}

            <Paragraph>{t('body.discussion3', { ns: ARTICLE_NS })}</Paragraph>
            <Paragraph>{t('body.discussion4', { ns: ARTICLE_NS })}</Paragraph>

            {figure1 && (
              <ImageWithCaption
                src="/images/articles/lemon-reaction.png"
                alt={figure1.caption}
                caption={figure1.caption}
              />
            )}

            <Paragraph>{t('body.discussion5', { ns: ARTICLE_NS })}</Paragraph>
            <Paragraph>{t('body.discussion6', { ns: ARTICLE_NS })}</Paragraph>

            {tables?.table2 && (
              <DataTable caption={tables.table2.caption} headers={tables.table2.headers} rows={tables.table2.rows} />
            )}

            <Paragraph>{t('body.discussion7', { ns: ARTICLE_NS })}</Paragraph>
            <Paragraph>{t('body.discussion8', { ns: ARTICLE_NS })}</Paragraph>
            <Paragraph>{t('body.discussion9', { ns: ARTICLE_NS })}</Paragraph>
            <Paragraph>{t('body.discussion10', { ns: ARTICLE_NS })}</Paragraph>

            {tables?.table3 && (
              <DataTable caption={tables.table3.caption} headers={tables.table3.headers} rows={tables.table3.rows} />
            )}

            <Paragraph>{t('body.discussion11', { ns: ARTICLE_NS })}</Paragraph>
          </ArticleSection>

          <ArticleSection title={t('sections.conclusions', { ns: ARTICLE_NS })}>
            <Paragraph>{t('body.conclusions', { ns: ARTICLE_NS })}</Paragraph>
          </ArticleSection>

          {sources.length > 0 ? <SourcesList items={sources} title={t('sourcesTitle', { ns: ARTICLE_NS })} /> : null}
        </ArticleContent>
      </ArticleContainer>
    </Layout>
  )
}
