import { TolgeeStaticDataProp, useTranslate } from '@tolgee/react'

import { Layout } from '@/widgets/layout'

import { getCategoryNamespace, NAMESPACES, TLocale } from '@/shared/config/tolgee'
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

interface PoolsSpaPageProps {
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
      paragraph?: string
      paragraph1?: string
      paragraph2?: string
      text?: string
      items?: string[] | Array<{ title: string; description: string }>
      tableCaption?: string
      tableHeaders?: string[]
      tableData?: string[][]
      headers?: string[]
      rows?: string[][] | Array<{ parameter: string; value1: string; value2: string }>
      steps?: Array<{ title: string; description: string }>
      note?: string
      warning?: { title: string; text: string }
    }
  }
}

export function PoolsSpaPage({ staticData, lang }: PoolsSpaPageProps) {
  const { t } = useTranslate()
  const ns = getCategoryNamespace('water-treatment')

  // get category data from staticData
  const categoryData = (staticData as Record<string, { subcategories?: { 'pools-spa'?: SubcategoryData } }>)[
    `${lang}:${ns}`
  ]
  const data = categoryData?.subcategories?.['pools-spa']

  const breadcrumbs = [
    { label: t('nav.applications', { ns: NAMESPACES.common }), href: '/applications' },
    { label: t('title', { ns }), href: '/applications/water-treatment' },
    { label: t('subcategories.pools-spa.title', { ns }) },
  ]

  return (
    <Layout>
      <Seo
        title={t('subcategories.pools-spa.title', { ns })}
        description={t('subcategories.pools-spa.shortDesc', { ns })}
      />

      <ArticleHero
        title={t('subcategories.pools-spa.title', { ns })}
        description={t('subcategories.pools-spa.shortDesc', { ns })}
        image="https://images.unsplash.com/photo-1572331165267-854da2b10ccc?w=1920&q=80"
        imageAlt={t('subcategories.pools-spa.title', { ns })}
        breadcrumbs={breadcrumbs}
        backLink={{
          href: '/applications/water-treatment',
          label: t('title', { ns }),
        }}
      />

      {/* Key Stats */}
      <section className="bg-bg-light py-12">
        <div className="container">
          <StatGrid columns={4}>
            <StatCard
              value={data?.stats?.chlorineReduction?.value ?? ''}
              label={data?.stats?.chlorineReduction?.label ?? ''}
              description={data?.stats?.chlorineReduction?.description ?? ''}
              variant="primary"
            />
            <StatCard
              value={data?.stats?.irritation?.value ?? ''}
              label={data?.stats?.irritation?.label ?? ''}
              description={data?.stats?.irritation?.description ?? ''}
              variant="accent"
            />
            <StatCard
              value={data?.stats?.bactericidal?.value ?? ''}
              label={data?.stats?.bactericidal?.label ?? ''}
              description={data?.stats?.bactericidal?.description ?? ''}
              variant="primary"
            />
            <StatCard
              value={data?.stats?.waterColor?.value ?? ''}
              label={data?.stats?.waterColor?.label ?? ''}
              description={data?.stats?.waterColor?.description ?? ''}
              variant="accent"
            />
          </StatGrid>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-12 md:py-20">
        <div className="container max-w-4xl">
          <ArticleSection>
            <Paragraph>{data?.sections?.intro?.paragraph1 ?? ''}</Paragraph>
            <Paragraph>{data?.sections?.intro?.paragraph2 ?? ''}</Paragraph>
          </ArticleSection>

          <HighlightBox variant="info">
            <strong>
              {(data?.sections?.highlightBox as { regulation?: { label?: string; text?: string } })?.regulation
                ?.label ?? ''}
            </strong>{' '}
            {(data?.sections?.highlightBox as { regulation?: { label?: string; text?: string } })?.regulation?.text ??
              ''}
          </HighlightBox>

          <ArticleSection title={data?.sections?.comparison?.title}>
            <ComparisonTable
              headers={
                (data?.sections?.comparison?.headers ?? []) as
                  | [string, string, string]
                  | [string, string, string, string]
              }
              rows={
                (data?.sections?.comparison?.rows as Array<{ parameter: string; value1: string; value2: string }>) ?? []
              }
            />
          </ArticleSection>

          <ArticleSection title={data?.sections?.technology?.title}>
            <Paragraph>{data?.sections?.technology?.intro ?? ''}</Paragraph>

            <DataTable
              caption={data?.sections?.technology?.tableCaption}
              headers={data?.sections?.technology?.tableHeaders ?? []}
              rows={data?.sections?.technology?.tableData ?? []}
            />

            <HighlightBox variant="success">{data?.sections?.technology?.note ?? ''}</HighlightBox>
          </ArticleSection>

          <ArticleSection title={data?.sections?.pathogens?.title}>
            <BulletList items={(data?.sections?.pathogens?.items as string[]) ?? []} />

            <Paragraph>{data?.sections?.pathogens?.note ?? ''}</Paragraph>
          </ArticleSection>

          <ArticleSection title={data?.sections?.poolTypes?.title}>
            <DataTable
              caption={data?.sections?.poolTypes?.tableCaption}
              headers={data?.sections?.poolTypes?.tableHeaders ?? []}
              rows={data?.sections?.poolTypes?.tableData ?? []}
            />
          </ArticleSection>

          <ArticleSection title={data?.sections?.benefits?.title}>
            <FeatureGrid columns={2}>
              {((data?.sections?.benefits?.items as Array<{ title: string; description: string }>) ?? []).map(
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

          <ArticleSection title={data?.sections?.spa?.title}>
            <Paragraph>{data?.sections?.spa?.intro ?? ''}</Paragraph>
            <BulletList items={(data?.sections?.spa?.items as string[]) ?? []} />
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
