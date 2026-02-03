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
  HighlightBox,
  Paragraph,
  SourcesList,
} from '@/shared/ui/article-components'
import { Seo } from '@/shared/ui/seo'

const SLUG = 'ozone-dried-fruits-storage'
const ARTICLE_NS = getArticleNamespace(SLUG)

type Source = { title: string; url: string }

export function OzoneDriedFruitsStoragePage({ staticData }: { staticData: TolgeeStaticDataProp }) {
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

          <ArticleSection title={t('body.sectionMicrobial', { ns: ARTICLE_NS })}>
            <Paragraph>{t('body.microbialText1', { ns: ARTICLE_NS })}</Paragraph>
            <Paragraph>{t('body.microbialText2', { ns: ARTICLE_NS })}</Paragraph>
          </ArticleSection>

          <ArticleSection title={t('body.sectionAflatoxin', { ns: ARTICLE_NS })}>
            <Paragraph>{t('body.aflatoxinText1', { ns: ARTICLE_NS })}</Paragraph>
            <HighlightBox variant="success">
              <Paragraph>{t('body.aflatoxinText2', { ns: ARTICLE_NS })}</Paragraph>
            </HighlightBox>
          </ArticleSection>

          <ArticleSection title={t('body.sectionPesticide', { ns: ARTICLE_NS })}>
            <Paragraph>{t('body.pesticideText1', { ns: ARTICLE_NS })}</Paragraph>
            <Paragraph>{t('body.pesticideText2', { ns: ARTICLE_NS })}</Paragraph>
          </ArticleSection>

          <ArticleSection title={t('body.sectionShelfLife', { ns: ARTICLE_NS })}>
            <Paragraph>{t('body.shelfLifeText1', { ns: ARTICLE_NS })}</Paragraph>
            <Paragraph>{t('body.shelfLifeText2', { ns: ARTICLE_NS })}</Paragraph>
          </ArticleSection>

          <ArticleSection title={t('body.sectionApplications', { ns: ARTICLE_NS })}>
            <h3 className="mb-3 mt-6 text-lg font-semibold">{t('body.appNuts', { ns: ARTICLE_NS })}</h3>
            <Paragraph>{t('body.appNutsText', { ns: ARTICLE_NS })}</Paragraph>

            <h3 className="mb-3 mt-6 text-lg font-semibold">{t('body.appRaisins', { ns: ARTICLE_NS })}</h3>
            <Paragraph>{t('body.appRaisinsText', { ns: ARTICLE_NS })}</Paragraph>

            <h3 className="mb-3 mt-6 text-lg font-semibold">{t('body.appDates', { ns: ARTICLE_NS })}</h3>
            <Paragraph>{t('body.appDatesText', { ns: ARTICLE_NS })}</Paragraph>

            <h3 className="mb-3 mt-6 text-lg font-semibold">{t('body.appDriedApricots', { ns: ARTICLE_NS })}</h3>
            <Paragraph>{t('body.appDriedApricotsText', { ns: ARTICLE_NS })}</Paragraph>
          </ArticleSection>

          <ArticleSection title={t('body.sectionParameters', { ns: ARTICLE_NS })}>
            <HighlightBox variant="info">
              <Paragraph>{t('body.parametersText', { ns: ARTICLE_NS })}</Paragraph>
            </HighlightBox>
          </ArticleSection>

          <ArticleSection title={t('body.sectionLimitations', { ns: ARTICLE_NS })}>
            <HighlightBox variant="warning">
              <Paragraph>{t('body.limitationsText1', { ns: ARTICLE_NS })}</Paragraph>
            </HighlightBox>
            <Paragraph>{t('body.limitationsText2', { ns: ARTICLE_NS })}</Paragraph>
          </ArticleSection>

          <ArticleSection title={t('body.sectionConclusion', { ns: ARTICLE_NS })}>
            <HighlightBox variant="success">
              <Paragraph>{t('body.conclusionText', { ns: ARTICLE_NS })}</Paragraph>
            </HighlightBox>
          </ArticleSection>

          {sources.length > 0 && <SourcesList items={sources} title={t('sourcesTitle', { ns: ARTICLE_NS })} />}
        </ArticleContent>
      </ArticleContainer>
    </Layout>
  )
}
