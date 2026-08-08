import { TolgeeStaticDataProp, useTranslate } from '@tolgee/react'

import { Layout } from '@/widgets/layout'

import { getArticleBySlug } from '@/shared/config/articles-data'
import { getArticleNamespace, NAMESPACES } from '@/shared/config/tolgee'
import { useIsLangInRoute, useLang } from '@/shared/lib/lang'
import { AppLink } from '@/shared/ui/app-link'
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

const SLUG = 'aqueous-ozone-poultry'
const ARTICLE_NS = getArticleNamespace(SLUG)

type Source = { title: string; url?: string }
type TableData = {
  caption?: string
  headers: string[]
  rows: string[][]
}

export function AqueousOzonePoultryPage({ staticData }: { staticData: TolgeeStaticDataProp }) {
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

          <ArticleSection title={t('body.whyWaterTitle', { ns: ARTICLE_NS })}>
            <Paragraph>{t('body.whyWater', { ns: ARTICLE_NS })}</Paragraph>
            <Paragraph>{t('body.whyWater2', { ns: ARTICLE_NS })}</Paragraph>
          </ArticleSection>

          <ArticleSection title={t('body.solubilityTitle', { ns: ARTICLE_NS })}>
            <HighlightBox variant="info">
              <Paragraph>{t('body.solubility', { ns: ARTICLE_NS })}</Paragraph>
            </HighlightBox>
          </ArticleSection>

          <ArticleSection title={t('body.drinkingTitle', { ns: ARTICLE_NS })}>
            <Paragraph>{t('body.drinking1', { ns: ARTICLE_NS })}</Paragraph>
            <HighlightBox variant="success">
              <Paragraph>{t('body.drinking2', { ns: ARTICLE_NS })}</Paragraph>
            </HighlightBox>
            <Paragraph>{t('body.drinking3', { ns: ARTICLE_NS })}</Paragraph>
          </ArticleSection>

          <ArticleSection title={t('body.eggsTitle', { ns: ARTICLE_NS })}>
            <Paragraph>{t('body.eggs1', { ns: ARTICLE_NS })}</Paragraph>
            <HighlightBox variant="success">
              <Paragraph>{t('body.eggs2', { ns: ARTICLE_NS })}</Paragraph>
            </HighlightBox>
          </ArticleSection>

          <ArticleSection title={t('body.processingTitle', { ns: ARTICLE_NS })}>
            <Paragraph>{t('body.processing1', { ns: ARTICLE_NS })}</Paragraph>
            <Paragraph>{t('body.processing2', { ns: ARTICLE_NS })}</Paragraph>
            {tableData && <DataTable headers={tableData.headers} rows={tableData.rows} caption={tableData.caption} />}
          </ArticleSection>

          <ArticleSection title={t('body.regulationTitle', { ns: ARTICLE_NS })}>
            <Paragraph>{t('body.regulation', { ns: ARTICLE_NS })}</Paragraph>
          </ArticleSection>

          <ArticleSection title={t('body.safetyTitle', { ns: ARTICLE_NS })}>
            <HighlightBox variant="warning">
              <Paragraph>{t('body.safety', { ns: ARTICLE_NS })}</Paragraph>
            </HighlightBox>
          </ArticleSection>

          <ArticleSection title={t('body.economicsTitle', { ns: ARTICLE_NS })}>
            <Paragraph>{t('body.economics', { ns: ARTICLE_NS })}</Paragraph>
          </ArticleSection>

          <ArticleSection title={t('body.recommendationsTitle', { ns: ARTICLE_NS })}>
            <Paragraph>{t('body.recommendations', { ns: ARTICLE_NS })}</Paragraph>
          </ArticleSection>

          <ArticleSection title={t('body.conclusionTitle', { ns: ARTICLE_NS })}>
            <HighlightBox variant="success">
              <Paragraph>{t('body.conclusion', { ns: ARTICLE_NS })}</Paragraph>
            </HighlightBox>
          </ArticleSection>

          <ArticleSection title={t('body.relatedTitle', { ns: ARTICLE_NS })}>
            <Paragraph>{t('body.relatedText', { ns: ARTICLE_NS })}</Paragraph>
            <HighlightBox variant="info">
              <AppLink
                href={hasLangInRoute ? `/${lang}/articles/ozone-poultry-farming` : '/articles/ozone-poultry-farming'}
              >
                {t('body.relatedLink', { ns: ARTICLE_NS })} →
              </AppLink>
            </HighlightBox>
          </ArticleSection>

          {sources.length > 0 && <SourcesList items={sources} title={t('sourcesTitle', { ns: ARTICLE_NS })} />}
        </ArticleContent>
      </ArticleContainer>
    </Layout>
  )
}
