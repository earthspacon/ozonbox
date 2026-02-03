import { TolgeeStaticDataProp, useTranslate } from '@tolgee/react'

import { Layout } from '@/widgets/layout'

import { getCategoryNamespace, NAMESPACES, TLocale } from '@/shared/config/tolgee'
import { useLang } from '@/shared/lib'
import {
  ArticleHero,
  ArticleSection,
  BulletList,
  ComparisonTable,
  CTASection,
  DataTable,
  FeatureCard,
  FeatureGrid,
  HighlightBox,
  Paragraph,
  StatCard,
  StatGrid,
} from '@/shared/ui/article-components'
import { IconCheck } from '@/shared/ui/icons'
import { Seo } from '@/shared/ui/seo'

interface CheesePageProps {
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
  sections?: {
    [key: string]: {
      title?: string
      intro?: string
      paragraph1?: string
      paragraph2?: string
      paragraph?: string
      label?: string
      text?: string
      items?: string[] | Array<{ title: string; description: string }>
      tableCaption?: string
      tableHeaders?: string[]
      tableRows?: string[][]
      tableData?: string[][]
      warningLabel?: string
      warningText?: string
      successText?: string
      recommendationTitle?: string
      recommendationText?: string
      rows?: Array<{ parameter: string; value1: string; value2: string; value3?: string }>
      headers?: string[]
    }
  }
}

export function CheesePage({ staticData, lang }: CheesePageProps) {
  const { t } = useTranslate()
  const ns = getCategoryNamespace('food-production')

  // get category data from staticData
  const categoryData = (staticData as Record<string, { subcategories?: { cheese?: SubcategoryData } }>)[
    `${lang}:${ns}`
  ]
  const data = categoryData?.subcategories?.cheese

  const breadcrumbs = [
    { label: t('nav.applications', { ns: NAMESPACES.common }), href: '/applications' },
    { label: t('title', { ns }), href: '/applications/food-production' },
    { label: t('subcategories.cheese.title', { ns }) },
  ]

  return (
    <Layout>
      <Seo title={t('subcategories.cheese.title', { ns })} description={t('subcategories.cheese.shortDesc', { ns })} />

      <ArticleHero
        title={t('subcategories.cheese.title', { ns })}
        description={t('subcategories.cheese.shortDesc', { ns })}
        image="https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=1920&q=80"
        imageAlt={t('subcategories.cheese.title', { ns })}
        breadcrumbs={breadcrumbs}
        backLink={{
          href: '/applications/food-production',
          label: t('title', { ns }),
        }}
      />

      {/* Key Stats */}
      <section className="bg-bg-light py-12">
        <div className="container">
          <StatGrid columns={4}>
            <StatCard
              value={data?.stats?.efficiency?.value ?? ''}
              label={data?.stats?.efficiency?.label ?? ''}
              description={data?.stats?.efficiency?.description ?? ''}
              variant="primary"
            />
            <StatCard
              value={data?.stats?.concentration?.value ?? ''}
              label={data?.stats?.concentration?.label ?? ''}
              description={data?.stats?.concentration?.description ?? ''}
              variant="accent"
            />
            <StatCard
              value={data?.stats?.tastePreservation?.value ?? ''}
              label={data?.stats?.tastePreservation?.label ?? ''}
              description={data?.stats?.tastePreservation?.description ?? ''}
              variant="primary"
            />
            <StatCard
              value={data?.stats?.instructionYear?.value ?? ''}
              label={data?.stats?.instructionYear?.label ?? ''}
              description={data?.stats?.instructionYear?.description ?? ''}
              variant="accent"
            />
          </StatGrid>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-12 md:py-16">
        <div className="container max-w-4xl">
          <ArticleSection>
            <Paragraph>{data?.sections?.intro?.paragraph1 ?? ''}</Paragraph>
            <Paragraph>{data?.sections?.intro?.paragraph2 ?? ''}</Paragraph>
          </ArticleSection>

          <HighlightBox variant="info">
            <strong>{data?.sections?.instruction?.label ?? ''}</strong> {data?.sections?.instruction?.text ?? ''}
          </HighlightBox>

          <ArticleSection title={data?.sections?.regimes?.title}>
            <DataTable
              caption={data?.sections?.regimes?.tableCaption}
              headers={data?.sections?.regimes?.tableHeaders ?? []}
              rows={data?.sections?.regimes?.tableRows ?? []}
            />

            <HighlightBox variant="warning">
              <strong>{data?.sections?.regimes?.warningLabel ?? ''}</strong>{' '}
              {data?.sections?.regimes?.warningText ?? ''}
            </HighlightBox>
          </ArticleSection>

          <ArticleSection title={data?.sections?.benefits?.title}>
            <BulletList items={(data?.sections?.benefits?.items as string[]) ?? []} />
          </ArticleSection>

          <ArticleSection title={data?.sections?.impact?.title}>
            <Paragraph>{data?.sections?.impact?.paragraph ?? ''}</Paragraph>

            <DataTable
              caption={data?.sections?.impact?.tableCaption}
              headers={data?.sections?.impact?.tableHeaders ?? []}
              rows={data?.sections?.impact?.tableRows ?? []}
            />
          </ArticleSection>

          <ComparisonTable
            title={data?.sections?.comparison?.title}
            headers={
              (data?.sections?.comparison?.headers as [string, string, string] | [string, string, string, string]) ?? []
            }
            rows={
              (data?.sections?.comparison?.rows as Array<{
                parameter: string
                value1: string
                value2: string
                value3?: string
              }>) ?? []
            }
          />

          <ArticleSection title={data?.sections?.chamberTreatment?.title}>
            <Paragraph>{data?.sections?.chamberTreatment?.paragraph ?? ''}</Paragraph>

            <DataTable
              caption={data?.sections?.chamberTreatment?.tableCaption}
              headers={data?.sections?.chamberTreatment?.tableHeaders ?? []}
              rows={data?.sections?.chamberTreatment?.tableRows ?? []}
            />

            <HighlightBox variant="success">{data?.sections?.chamberTreatment?.successText ?? ''}</HighlightBox>
          </ArticleSection>

          <ArticleSection title={data?.sections?.regulations?.title}>
            <BulletList items={(data?.sections?.regulations?.items as string[]) ?? []} />
          </ArticleSection>

          <ArticleSection title={data?.sections?.features?.title}>
            <FeatureGrid columns={2}>
              {((data?.sections?.features?.items as Array<{ title: string; description: string }>) ?? []).map(
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
