import { TolgeeStaticDataProp, useTranslate } from '@tolgee/react'

import { Layout } from '@/widgets/layout'

import { getCategoryNamespace, NAMESPACES, TLocale } from '@/shared/config/tolgee'
import {
  ArticleHero,
  ArticleSection,
  BulletList,
  CTASection,
  DataTable,
  FeatureCard,
  FeatureGrid,
  HighlightBox,
  Paragraph,
  ProcessList,
  StatCard,
  StatGrid,
} from '@/shared/ui/article-components'
import { IconCheck } from '@/shared/ui/icons'
import { Seo } from '@/shared/ui/seo'

interface RestaurantsPageProps {
  staticData: TolgeeStaticDataProp
  lang: TLocale
}

interface SubcategoryData {
  title: string
  shortDesc: string
  stats?: {
    [key: string]: {
      value: string
      label: string
      description: string
    }
  }
  problems?: string[]
  sections?: {
    [key: string]: {
      title?: string
      text?: string
      text2?: string
      intro?: string
      items?: string[] | Array<{ title: string; description: string }>
      tableCaption?: string
      tableHeaders?: string[]
      tableData?: string[][]
      steps?: Array<{ title: string; description: string }>
      automation?: {
        title?: string
        text?: string
      }
      savings?: {
        title?: string
        text?: string
      }
      factHighlight?: {
        title?: string
        text?: string
      }
    }
  }
}

export function RestaurantsPage({ staticData, lang }: RestaurantsPageProps) {
  const { t } = useTranslate()
  const ns = getCategoryNamespace('horeca')

  // get category data from staticData
  const categoryData = (staticData as Record<string, { subcategories?: { restaurants?: SubcategoryData } }>)[
    `${lang}:${ns}`
  ]
  const data = categoryData?.subcategories?.restaurants

  const breadcrumbs = [
    { label: t('nav.applications', { ns: NAMESPACES.common }), href: '/applications' },
    { label: t('title', { ns }), href: '/applications/horeca' },
    { label: t('subcategories.restaurants.title', { ns }) },
  ]

  return (
    <Layout>
      <Seo
        title={t('subcategories.restaurants.title', { ns })}
        description={t('subcategories.restaurants.shortDesc', { ns })}
      />

      <ArticleHero
        title={t('subcategories.restaurants.title', { ns })}
        description={t('subcategories.restaurants.shortDesc', { ns })}
        image="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80"
        imageAlt={t('subcategories.restaurants.title', { ns })}
        breadcrumbs={breadcrumbs}
        backLink={{
          href: '/applications/horeca',
          label: t('title', { ns }),
        }}
      />

      {/* Key Stats */}
      <section className="bg-bg-light py-12">
        <div className="container">
          <StatGrid columns={4}>
            <StatCard
              value={data?.stats?.stat1?.value ?? ''}
              label={data?.stats?.stat1?.label ?? ''}
              description={data?.stats?.stat1?.description ?? ''}
              variant="primary"
            />
            <StatCard
              value={data?.stats?.stat2?.value ?? ''}
              label={data?.stats?.stat2?.label ?? ''}
              description={data?.stats?.stat2?.description ?? ''}
              variant="accent"
            />
            <StatCard
              value={data?.stats?.stat3?.value ?? ''}
              label={data?.stats?.stat3?.label ?? ''}
              description={data?.stats?.stat3?.description ?? ''}
              variant="primary"
            />
            <StatCard
              value={data?.stats?.stat4?.value ?? ''}
              label={data?.stats?.stat4?.label ?? ''}
              description={data?.stats?.stat4?.description ?? ''}
              variant="accent"
            />
          </StatGrid>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-12 md:py-20">
        <div className="container max-w-4xl">
          <ArticleSection>
            <Paragraph>{data?.sections?.intro?.text ?? ''}</Paragraph>
            <Paragraph>{data?.sections?.intro?.text2 ?? ''}</Paragraph>
          </ArticleSection>

          <HighlightBox variant="success">
            <strong>{data?.sections?.factHighlight?.title ?? ''}</strong> {data?.sections?.factHighlight?.text ?? ''}
          </HighlightBox>

          <ArticleSection title={data?.sections?.problems?.title}>
            <BulletList items={(data?.problems ?? []) as string[]} />
          </ArticleSection>

          <ArticleSection title={data?.sections?.importance?.title}>
            <Paragraph>{data?.sections?.importance?.text ?? ''}</Paragraph>
            <DataTable
              caption={data?.sections?.importance?.tableCaption}
              headers={data?.sections?.importance?.tableHeaders ?? []}
              rows={data?.sections?.importance?.tableData ?? []}
            />
          </ArticleSection>

          <ArticleSection title={data?.sections?.process?.title}>
            <ProcessList steps={data?.sections?.process?.steps ?? []} />

            <HighlightBox variant="info">
              <strong>{data?.sections?.process?.automation?.title ?? ''}</strong>{' '}
              {data?.sections?.process?.automation?.text ?? ''}
            </HighlightBox>
          </ArticleSection>

          <ArticleSection title={data?.sections?.zones?.title}>
            <FeatureGrid columns={2}>
              {((data?.sections?.zones?.items as Array<{ title: string; description: string }>) ?? []).map(
                (item, idx) => (
                  <FeatureCard
                    key={idx}
                    icon={<IconCheck style={{ width: 24, height: 24 }} />}
                    title={item.title}
                    description={item.description}
                  />
                ),
              )}
            </FeatureGrid>
          </ArticleSection>

          <ArticleSection title={data?.sections?.calculation?.title}>
            <Paragraph>{data?.sections?.calculation?.text ?? ''}</Paragraph>
            <DataTable
              caption={data?.sections?.calculation?.tableCaption}
              headers={data?.sections?.calculation?.tableHeaders ?? []}
              rows={data?.sections?.calculation?.tableData ?? []}
            />
          </ArticleSection>

          <ArticleSection title={data?.sections?.additionalUses?.title}>
            <BulletList items={(data?.sections?.additionalUses?.items ?? []) as string[]} />

            <HighlightBox variant="success">
              <strong>{data?.sections?.additionalUses?.savings?.title ?? ''}</strong>{' '}
              {data?.sections?.additionalUses?.savings?.text ?? ''}
            </HighlightBox>
          </ArticleSection>

          <ArticleSection title={data?.sections?.benefits?.title}>
            <BulletList items={(data?.sections?.benefits?.items ?? []) as string[]} />
          </ArticleSection>
        </div>
      </article>

      <CTASection
        title={t('cta.applications.title', { ns: NAMESPACES.common })}
        description={t('cta.applications.text', { ns: NAMESPACES.common })}
        primaryButton={{
          label: t('hero.getConsultation', { ns: NAMESPACES.common }),
          href: '/contacts',
        }}
        secondaryButton={{
          label: t('header.phone', { ns: NAMESPACES.common }),
          href: 'tel:+78001234567',
        }}
      />
    </Layout>
  )
}
