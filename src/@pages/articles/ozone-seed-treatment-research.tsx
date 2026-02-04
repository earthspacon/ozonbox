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
  StatCard,
  StatGrid,
} from '@/shared/ui/article-components'
import { Seo } from '@/shared/ui/seo'

const SLUG = 'ozone-seed-treatment-research'
const ARTICLE_NS = getArticleNamespace(SLUG)

type Source = { title: string; url?: string }

interface TableData {
  barleyTitle: string
  barleyHeaders: string[]
  barleyRows: string[][]
  barleyNote: string
}

interface Highlights {
  yieldIncrease: string
  energyCost: string
  optimalMode: string
  combinedBenefit: string
}

export function OzoneSeedTreatmentResearchPage({ staticData }: { staticData: TolgeeStaticDataProp }) {
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

  const nsData = (staticData as Record<string, { sources?: Source[]; tables?: TableData; highlights?: Highlights }>)[
    `${lang}:${ARTICLE_NS}`
  ]
  const sources = nsData?.sources ?? []
  const tables = nsData?.tables
  const highlights = nsData?.highlights

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
          {/* Authors */}
          <p className="text-text-light mb-6 text-sm italic">{t('authors', { ns: ARTICLE_NS })}</p>

          {/* Introduction */}
          <Paragraph>{t('body.intro', { ns: ARTICLE_NS })}</Paragraph>

          {/* Key Results Highlights */}
          {highlights && (
            <StatGrid columns={2}>
              <StatCard value="15–20%" label={highlights.yieldIncrease} variant="primary" />
              <StatCard value="5 kWh/t" label={highlights.energyCost} variant="accent" />
              <StatCard value="1 g/m³" label={highlights.optimalMode} variant="neutral" />
              <StatCard value="50%" label={highlights.combinedBenefit} variant="neutral" />
            </StatGrid>
          )}

          {/* Problem Section */}
          <ArticleSection title={t('body.problemTitle', { ns: ARTICLE_NS })}>
            <Paragraph>{t('body.problem', { ns: ARTICLE_NS })}</Paragraph>
            <Paragraph>{t('body.ozoneAdvantage', { ns: ARTICLE_NS })}</Paragraph>
            <HighlightBox variant="info">
              <strong>{t('body.mechanism', { ns: ARTICLE_NS })}</strong>
            </HighlightBox>
          </ArticleSection>

          {/* FDA Certification */}
          <ArticleSection title={t('body.fdaTitle', { ns: ARTICLE_NS })}>
            <Paragraph>{t('body.fda', { ns: ARTICLE_NS })}</Paragraph>
          </ArticleSection>

          {/* Laboratory Experiments */}
          <ArticleSection title={t('body.labTitle', { ns: ARTICLE_NS })}>
            <Paragraph>{t('body.labIntro', { ns: ARTICLE_NS })}</Paragraph>
            <HighlightBox variant="success">{t('body.labResult', { ns: ARTICLE_NS })}</HighlightBox>
          </ArticleSection>

          {/* Field Experiments */}
          <ArticleSection title={t('body.fieldTitle', { ns: ARTICLE_NS })}>
            <Paragraph>{t('body.fieldIntro', { ns: ARTICLE_NS })}</Paragraph>
            <Paragraph>{t('body.fieldBarley', { ns: ARTICLE_NS })}</Paragraph>

            {/* Barley yield table */}
            {tables && (
              <DataTable headers={tables.barleyHeaders} rows={tables.barleyRows} caption={tables.barleyTitle} />
            )}
            {tables?.barleyNote && <p className="text-text-light mt-2 text-sm italic">{tables.barleyNote}</p>}

            <Paragraph>{t('body.fieldObservation', { ns: ARTICLE_NS })}</Paragraph>
            <HighlightBox variant="success">
              <strong>{t('body.fieldConclusion', { ns: ARTICLE_NS })}</strong>
            </HighlightBox>
          </ArticleSection>

          {/* Production Testing */}
          <ArticleSection title={t('body.productionTitle', { ns: ARTICLE_NS })}>
            <Paragraph>{t('body.productionIntro', { ns: ARTICLE_NS })}</Paragraph>
            <Paragraph>{t('body.productionTriticale', { ns: ARTICLE_NS })}</Paragraph>
            <Paragraph>{t('body.productionWheat', { ns: ARTICLE_NS })}</Paragraph>
          </ArticleSection>

          {/* Economic Advantages */}
          <ArticleSection title={t('body.economicTitle', { ns: ARTICLE_NS })}>
            <Paragraph>{t('body.economic', { ns: ARTICLE_NS })}</Paragraph>
          </ArticleSection>

          {/* Compatibility with Seed Treatments */}
          <ArticleSection title={t('body.combinedTitle', { ns: ARTICLE_NS })}>
            <Paragraph>{t('body.combined', { ns: ARTICLE_NS })}</Paragraph>
          </ArticleSection>

          {/* Equipment Requirements */}
          <ArticleSection title={t('body.equipmentTitle', { ns: ARTICLE_NS })}>
            <Paragraph>{t('body.equipment', { ns: ARTICLE_NS })}</Paragraph>
            <BulletList
              items={[
                t('body.equipmentRequirements.0', { ns: ARTICLE_NS, defaultValue: '' }),
                t('body.equipmentRequirements.1', { ns: ARTICLE_NS, defaultValue: '' }),
                t('body.equipmentRequirements.2', { ns: ARTICLE_NS, defaultValue: '' }),
                t('body.equipmentRequirements.3', { ns: ARTICLE_NS, defaultValue: '' }),
              ].filter(Boolean)}
            />
          </ArticleSection>

          {/* Conclusion */}
          <ArticleSection title={t('body.conclusionTitle', { ns: ARTICLE_NS })}>
            <Paragraph>{t('body.conclusion', { ns: ARTICLE_NS })}</Paragraph>
            <HighlightBox variant="info">{t('body.methodologyNote', { ns: ARTICLE_NS })}</HighlightBox>
          </ArticleSection>

          {/* Sources */}
          {sources.length > 0 && <SourcesList items={sources} title={t('sourcesTitle', { ns: ARTICLE_NS })} />}
        </ArticleContent>
      </ArticleContainer>
    </Layout>
  )
}
