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

const SLUG = 'ozone-poultry-farming'
const ARTICLE_NS = getArticleNamespace(SLUG)

type Source = { title: string; url: string }
type TableData = {
  caption?: string
  headers: string[]
  rows: string[][]
}

export function OzonePoultryFarmingPage({ staticData }: { staticData: TolgeeStaticDataProp }) {
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

          <ArticleSection title={t('body.applicationsTitle', { ns: ARTICLE_NS })}>
            <Paragraph>{t('body.applications', { ns: ARTICLE_NS })}</Paragraph>
          </ArticleSection>

          <ArticleSection title={t('body.vnitipTitle', { ns: ARTICLE_NS })}>
            <HighlightBox variant="info">
              <Paragraph>{t('body.vnitip', { ns: ARTICLE_NS })}</Paragraph>
            </HighlightBox>
          </ArticleSection>

          <ArticleSection title={t('body.eggOzonationTitle', { ns: ARTICLE_NS })}>
            <Paragraph>{t('body.eggOzonation1', { ns: ARTICLE_NS })}</Paragraph>
            <HighlightBox variant="success">
              <Paragraph>{t('body.eggOzonation2', { ns: ARTICLE_NS })}</Paragraph>
            </HighlightBox>
          </ArticleSection>

          <ArticleSection title={t('body.equipmentTitle', { ns: ARTICLE_NS })}>
            <Paragraph>{t('body.equipment', { ns: ARTICLE_NS })}</Paragraph>
          </ArticleSection>

          <ArticleSection title={t('body.wetDisinfectionTitle', { ns: ARTICLE_NS })}>
            <HighlightBox variant="warning">
              <Paragraph>{t('body.wetDisinfection1', { ns: ARTICLE_NS })}</Paragraph>
            </HighlightBox>
            <Paragraph>{t('body.wetDisinfection2', { ns: ARTICLE_NS })}</Paragraph>
          </ArticleSection>

          <ArticleSection title={t('body.mycoplasmaTitle', { ns: ARTICLE_NS })}>
            <Paragraph>{t('body.mycoplasma1', { ns: ARTICLE_NS })}</Paragraph>
            <Paragraph>{t('body.mycoplasma2', { ns: ARTICLE_NS })}</Paragraph>
            {tableData && <DataTable headers={tableData.headers} rows={tableData.rows} caption={tableData.caption} />}
          </ArticleSection>

          <ArticleSection title={t('body.salmonellaTitle', { ns: ARTICLE_NS })}>
            <Paragraph>{t('body.salmonella1', { ns: ARTICLE_NS })}</Paragraph>
            <HighlightBox variant="success">
              <Paragraph>{t('body.salmonella2', { ns: ARTICLE_NS })}</Paragraph>
            </HighlightBox>
          </ArticleSection>

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
