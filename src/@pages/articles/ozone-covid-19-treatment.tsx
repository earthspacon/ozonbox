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

const SLUG = 'ozone-covid-19-treatment'
const ARTICLE_NS = getArticleNamespace(SLUG)

type Source = { title: string; url?: string }

export function OzoneCovid19TreatmentPage({ staticData }: { staticData: TolgeeStaticDataProp }) {
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
          {/* Introduction */}
          <Paragraph>{t('body.intro', { ns: ARTICLE_NS })}</Paragraph>
          <Paragraph>{t('body.purpose', { ns: ARTICLE_NS })}</Paragraph>

          {/* Environmental Disinfection */}
          <ArticleSection title={t('body.disinfection.title', { ns: ARTICLE_NS })}>
            <Paragraph>{t('body.disinfection.p1', { ns: ARTICLE_NS })}</Paragraph>
            <Paragraph>{t('body.disinfection.p2', { ns: ARTICLE_NS })}</Paragraph>
            <Paragraph>{t('body.disinfection.p3', { ns: ARTICLE_NS })}</Paragraph>
            <HighlightBox variant="warning">{t('body.disinfection.warning', { ns: ARTICLE_NS })}</HighlightBox>
          </ArticleSection>

          {/* Therapeutic Effects */}
          <ArticleSection title={t('body.therapeutic.title', { ns: ARTICLE_NS })}>
            <Paragraph>{t('body.therapeutic.p1', { ns: ARTICLE_NS })}</Paragraph>
          </ArticleSection>

          {/* Mechanisms */}
          <ArticleSection title={t('body.mechanisms.title', { ns: ARTICLE_NS })}>
            <BulletList
              items={[
                t('body.mechanisms.item1', { ns: ARTICLE_NS }),
                t('body.mechanisms.item2', { ns: ARTICLE_NS }),
                t('body.mechanisms.item3', { ns: ARTICLE_NS }),
                t('body.mechanisms.item4', { ns: ARTICLE_NS }),
              ]}
            />
          </ArticleSection>

          {/* Oxidative Stress */}
          <ArticleSection title={t('body.oxidativeStress.title', { ns: ARTICLE_NS })}>
            <Paragraph>{t('body.oxidativeStress.p1', { ns: ARTICLE_NS })}</Paragraph>
            <Paragraph>{t('body.oxidativeStress.p2', { ns: ARTICLE_NS })}</Paragraph>
          </ArticleSection>

          {/* Cytokines */}
          <ArticleSection title={t('body.cytokines.title', { ns: ARTICLE_NS })}>
            <Paragraph>{t('body.cytokines.p1', { ns: ARTICLE_NS })}</Paragraph>
            <Paragraph>{t('body.cytokines.p2', { ns: ARTICLE_NS })}</Paragraph>
          </ArticleSection>

          {/* Oxygenation */}
          <ArticleSection title={t('body.oxygenation.title', { ns: ARTICLE_NS })}>
            <Paragraph>{t('body.oxygenation.p1', { ns: ARTICLE_NS })}</Paragraph>
            <Paragraph>{t('body.oxygenation.p2', { ns: ARTICLE_NS })}</Paragraph>
          </ArticleSection>

          {/* Routes of Administration */}
          <ArticleSection title={t('body.routes.title', { ns: ARTICLE_NS })}>
            <Paragraph>{t('body.routes.intro', { ns: ARTICLE_NS })}</Paragraph>
            <BulletList
              items={[
                t('body.routes.item1', { ns: ARTICLE_NS }),
                t('body.routes.item2', { ns: ARTICLE_NS }),
                t('body.routes.item3', { ns: ARTICLE_NS }),
                t('body.routes.item4', { ns: ARTICLE_NS }),
              ]}
            />
          </ArticleSection>

          {/* Ozonated Saline */}
          <ArticleSection title={t('body.saline.title', { ns: ARTICLE_NS })}>
            <Paragraph>{t('body.saline.p1', { ns: ARTICLE_NS })}</Paragraph>
            <Paragraph>{t('body.saline.p2', { ns: ARTICLE_NS })}</Paragraph>
            <Paragraph>{t('body.saline.p3', { ns: ARTICLE_NS })}</Paragraph>
          </ArticleSection>

          {/* Clinical Protocols */}
          <ArticleSection title={t('body.protocol.title', { ns: ARTICLE_NS })}>
            <HighlightBox variant="info">
              <strong>{t('body.protocol.preventive.title', { ns: ARTICLE_NS })}</strong>
              <p className="mt-2">{t('body.protocol.preventive.p1', { ns: ARTICLE_NS })}</p>
              <p className="mt-2">{t('body.protocol.preventive.p2', { ns: ARTICLE_NS })}</p>
            </HighlightBox>

            <HighlightBox variant="info">
              <strong>{t('body.protocol.intervention.title', { ns: ARTICLE_NS })}</strong>
              <p className="mt-2">{t('body.protocol.intervention.p1', { ns: ARTICLE_NS })}</p>
              <p className="mt-2">{t('body.protocol.intervention.p2', { ns: ARTICLE_NS })}</p>
            </HighlightBox>
          </ArticleSection>

          {/* Glutathione */}
          <ArticleSection title={t('body.glutathione.title', { ns: ARTICLE_NS })}>
            <Paragraph>{t('body.glutathione.p1', { ns: ARTICLE_NS })}</Paragraph>
            <Paragraph>{t('body.glutathione.p2', { ns: ARTICLE_NS })}</Paragraph>
          </ArticleSection>

          {/* Equipment */}
          <ArticleSection title={t('body.equipment.title', { ns: ARTICLE_NS })}>
            <Paragraph>{t('body.equipment.p1', { ns: ARTICLE_NS })}</Paragraph>
            <Paragraph>{t('body.equipment.p2', { ns: ARTICLE_NS })}</Paragraph>
          </ArticleSection>

          {/* Conclusion */}
          <ArticleSection title={t('body.conclusion.title', { ns: ARTICLE_NS })}>
            <Paragraph>{t('body.conclusion.p1', { ns: ARTICLE_NS })}</Paragraph>
            <Paragraph>{t('body.conclusion.p2', { ns: ARTICLE_NS })}</Paragraph>
            <Paragraph>{t('body.conclusion.p3', { ns: ARTICLE_NS })}</Paragraph>
          </ArticleSection>

          {/* Disclaimer */}
          <HighlightBox variant="warning">{t('body.disclaimer', { ns: ARTICLE_NS })}</HighlightBox>

          {/* Sources */}
          {sources.length > 0 ? <SourcesList items={sources} title={t('sourcesTitle', { ns: ARTICLE_NS })} /> : null}
        </ArticleContent>
      </ArticleContainer>
    </Layout>
  )
}
