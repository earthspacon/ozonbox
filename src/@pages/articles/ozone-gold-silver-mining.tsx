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
} from '@/shared/ui/article-components'
import { Seo } from '@/shared/ui/seo'

const SLUG = 'ozone-gold-silver-mining'
const ARTICLE_NS = getArticleNamespace(SLUG)

type Source = { title: string; url: string }

export function OzoneGoldSilverMiningPage({ staticData }: { staticData: TolgeeStaticDataProp }) {
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

          <ArticleSection title={t('body.refractoryOresTitle', { ns: ARTICLE_NS })}>
            <Paragraph>{t('body.refractoryOresIntro', { ns: ARTICLE_NS })}</Paragraph>
            <HighlightBox variant="success">{t('body.refractoryOresResults', { ns: ARTICLE_NS })}</HighlightBox>
            <Paragraph>{t('body.refractoryOresMechanism', { ns: ARTICLE_NS })}</Paragraph>
          </ArticleSection>

          <ArticleSection title={t('body.heapLeachingTitle', { ns: ARTICLE_NS })}>
            <Paragraph>{t('body.heapLeachingIntro', { ns: ARTICLE_NS })}</Paragraph>
            <HighlightBox variant="info">{t('body.heapLeachingResults', { ns: ARTICLE_NS })}</HighlightBox>
            <Paragraph>{t('body.heapLeachingPhases', { ns: ARTICLE_NS })}</Paragraph>
          </ArticleSection>

          <ArticleSection title={t('body.directLeachingTitle', { ns: ARTICLE_NS })}>
            <Paragraph>{t('body.directLeachingIntro', { ns: ARTICLE_NS })}</Paragraph>
            <Paragraph>{t('body.directLeachingMechanism', { ns: ARTICLE_NS })}</Paragraph>
            <Paragraph>{t('body.directLeachingEconomics', { ns: ARTICLE_NS })}</Paragraph>
          </ArticleSection>

          <ArticleSection title={t('body.cyanideDestructionTitle', { ns: ARTICLE_NS })}>
            <Paragraph>{t('body.cyanideDestructionIntro', { ns: ARTICLE_NS })}</Paragraph>
            <Paragraph>{t('body.cyanideDestructionProcess', { ns: ARTICLE_NS })}</Paragraph>
            <HighlightBox variant="success">{t('body.cyanideDestructionResults', { ns: ARTICLE_NS })}</HighlightBox>
            <Paragraph>{t('body.cyanideDestructionAdvanced', { ns: ARTICLE_NS })}</Paragraph>
          </ArticleSection>

          <ArticleSection title={t('body.environmentalBenefitsTitle', { ns: ARTICLE_NS })}>
            <BulletList
              items={[
                t('body.environmentalBenefits1', { ns: ARTICLE_NS }),
                t('body.environmentalBenefits2', { ns: ARTICLE_NS }),
                t('body.environmentalBenefits3', { ns: ARTICLE_NS }),
                t('body.environmentalBenefits4', { ns: ARTICLE_NS }),
                t('body.environmentalBenefits5', { ns: ARTICLE_NS }),
              ]}
            />
          </ArticleSection>

          <ArticleSection title={t('body.industrialApplicationsTitle', { ns: ARTICLE_NS })}>
            <Paragraph>{t('body.industrialApplicationsIntro', { ns: ARTICLE_NS })}</Paragraph>
            <BulletList
              items={[
                t('body.industrialApp1', { ns: ARTICLE_NS }),
                t('body.industrialApp2', { ns: ARTICLE_NS }),
                t('body.industrialApp3', { ns: ARTICLE_NS }),
              ]}
            />
            <Paragraph>{t('body.industrialEconomics', { ns: ARTICLE_NS })}</Paragraph>
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
