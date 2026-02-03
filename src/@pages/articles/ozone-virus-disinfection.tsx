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
  ProcessList,
  SourcesList,
} from '@/shared/ui/article-components'
import { Seo } from '@/shared/ui/seo'

const SLUG = 'ozone-virus-disinfection'
const ARTICLE_NS = getArticleNamespace(SLUG)

type Source = { title: string; url: string }
type MechanismStep = { title: string; description: string }

export function OzoneVirusDisinfectionPage({ staticData }: { staticData: TolgeeStaticDataProp }) {
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

  const nsData = (
    staticData as Record<
      string,
      {
        sources?: Source[]
        body?: {
          properties?: string[]
          mechanismSteps?: MechanismStep[]
          factors?: string[]
          applications?: string[]
          advantages?: string[]
        }
      }
    >
  )[`${lang}:${ARTICLE_NS}`]
  const sources = nsData?.sources ?? []
  const properties = nsData?.body?.properties ?? []
  const mechanismSteps = nsData?.body?.mechanismSteps ?? []
  const factors = nsData?.body?.factors ?? []
  const applications = nsData?.body?.applications ?? []
  const advantages = nsData?.body?.advantages ?? []

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

          <Paragraph>{t('body.whatIsOzone', { ns: ARTICLE_NS })}</Paragraph>

          <ArticleSection title={t('body.propertiesTitle', { ns: ARTICLE_NS })}>
            {properties.length > 0 && <BulletList items={properties} />}
          </ArticleSection>

          <ArticleSection title={t('body.mechanismTitle', { ns: ARTICLE_NS })}>
            <Paragraph>{t('body.mechanismIntro', { ns: ARTICLE_NS })}</Paragraph>
            {mechanismSteps.length > 0 && <ProcessList steps={mechanismSteps} />}
          </ArticleSection>

          <ArticleSection title={t('body.envelopedTitle', { ns: ARTICLE_NS })}>
            <Paragraph>{t('body.envelopedText', { ns: ARTICLE_NS })}</Paragraph>
          </ArticleSection>

          <ArticleSection title={t('body.researchTitle', { ns: ARTICLE_NS })}>
            <Paragraph>{t('body.researchSarsCov2', { ns: ARTICLE_NS })}</Paragraph>
            <Paragraph>{t('body.researchAirborne', { ns: ARTICLE_NS })}</Paragraph>
          </ArticleSection>

          <ArticleSection title={t('body.bacteriaTitle', { ns: ARTICLE_NS })}>
            <Paragraph>{t('body.bacteriaText', { ns: ARTICLE_NS })}</Paragraph>
          </ArticleSection>

          <ArticleSection title={t('body.factorsTitle', { ns: ARTICLE_NS })}>
            {factors.length > 0 && <BulletList items={factors} />}
          </ArticleSection>

          <ArticleSection title={t('body.applicationsTitle', { ns: ARTICLE_NS })}>
            <Paragraph>{t('body.applicationsIntro', { ns: ARTICLE_NS })}</Paragraph>
            {applications.length > 0 && <BulletList items={applications} />}
          </ArticleSection>

          <ArticleSection title={t('body.advantagesTitle', { ns: ARTICLE_NS })}>
            <HighlightBox variant="success">{t('body.advantagesHighlight', { ns: ARTICLE_NS })}</HighlightBox>
            {advantages.length > 0 && <BulletList items={advantages} />}
          </ArticleSection>

          <ArticleSection title={t('body.safetyTitle', { ns: ARTICLE_NS })}>
            <Paragraph>{t('body.safetyText', { ns: ARTICLE_NS })}</Paragraph>
          </ArticleSection>

          <ArticleSection title={t('body.conclusionTitle', { ns: ARTICLE_NS })}>
            <Paragraph>{t('body.conclusion', { ns: ARTICLE_NS })}</Paragraph>
          </ArticleSection>

          {sources.length > 0 && <SourcesList items={sources} title={t('sourcesTitle', { ns: ARTICLE_NS })} />}
        </ArticleContent>
      </ArticleContainer>
    </Layout>
  )
}
