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

interface OilRemovalPageProps {
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
      paragraph?: string
      intro?: string
      paragraph1?: string
      paragraph2?: string
      text?: string
      items?: string[] | Array<{ title: string; description: string }>
      tableCaption?: string
      tableHeaders?: string[]
      tableRows?: string[][]
      tableData?: string[][]
      steps?: Array<{ title: string; description: string }>
      comparisonTitle?: string
      comparisonHeaders?: string[]
      comparisonRows?: Array<{ parameter: string; value1: string; value2: string }>
      infoBox?: { title: string; text: string }
      note?: string
      warning?: { title: string; text: string }
      highlight?: { title?: string; text?: string }
      bulletList?: string[]
    }
  }
}

export function OilRemovalPage({ staticData, lang }: OilRemovalPageProps) {
  const { t } = useTranslate()
  const ns = getCategoryNamespace('industry')

  // get category data from staticData
  const categoryData = (staticData as Record<string, { subcategories?: { 'oil-removal'?: SubcategoryData } }>)[
    `${lang}:${ns}`
  ]
  const data = categoryData?.subcategories?.['oil-removal']

  const breadcrumbs = [
    { label: t('nav.applications', { ns: NAMESPACES.common }), href: '/applications' },
    { label: t('title', { ns }), href: '/applications/industry' },
    { label: t('subcategories.oil-removal.title', { ns }) },
  ]

  return (
    <Layout>
      <Seo
        title={t('subcategories.oil-removal.title', { ns })}
        description={t('subcategories.oil-removal.shortDesc', { ns })}
      />

      <ArticleHero
        title={t('subcategories.oil-removal.title', { ns })}
        description={t('subcategories.oil-removal.shortDesc', { ns })}
        image="https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=1920&q=80"
        imageAlt={t('subcategories.oil-removal.title', { ns })}
        breadcrumbs={breadcrumbs}
        backLink={{
          href: '/applications/industry',
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
              value={data?.stats?.pdk?.value ?? ''}
              label={data?.stats?.pdk?.label ?? ''}
              description={data?.stats?.pdk?.description ?? ''}
              variant="accent"
            />
            <StatCard
              value={data?.stats?.consumption?.value ?? ''}
              label={data?.stats?.consumption?.label ?? ''}
              description={data?.stats?.consumption?.description ?? ''}
              variant="primary"
            />
            <StatCard
              value={data?.stats?.secondaryPollution?.value ?? ''}
              label={data?.stats?.secondaryPollution?.label ?? ''}
              description={data?.stats?.secondaryPollution?.description ?? ''}
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

          <HighlightBox variant="warning">
            <strong>{data?.sections?.regulatory?.highlight?.title ?? ''}</strong>{' '}
            {data?.sections?.regulatory?.highlight?.text ?? ''}
          </HighlightBox>

          <ArticleSection title={data?.sections?.mechanism?.title ?? ''}>
            <Paragraph>{data?.sections?.mechanism?.paragraph ?? ''}</Paragraph>
            <BulletList items={(data?.sections?.mechanism?.items as string[]) ?? []} />

            <DataTable
              caption={data?.sections?.mechanism?.tableCaption}
              headers={data?.sections?.mechanism?.tableHeaders ?? []}
              rows={data?.sections?.mechanism?.tableData ?? []}
            />

            <HighlightBox variant="info">
              <strong>{data?.sections?.mechanism?.highlight?.title ?? ''}</strong>{' '}
              {data?.sections?.mechanism?.highlight?.text ?? ''}
            </HighlightBox>
          </ArticleSection>

          <ArticleSection title={data?.sections?.wasteTypes?.title ?? ''}>
            <Paragraph>{data?.sections?.wasteTypes?.paragraph ?? ''}</Paragraph>

            <DataTable
              caption={data?.sections?.wasteTypes?.tableCaption}
              headers={data?.sections?.wasteTypes?.tableHeaders ?? []}
              rows={data?.sections?.wasteTypes?.tableData ?? []}
            />

            <HighlightBox variant="success">
              <strong>{data?.sections?.wasteTypes?.highlight?.title ?? ''}</strong>{' '}
              {data?.sections?.wasteTypes?.highlight?.text ?? ''}
            </HighlightBox>
          </ArticleSection>

          <ArticleSection title={data?.sections?.equipment?.title}>
            <Paragraph>{data?.sections?.equipment?.paragraph ?? ''}</Paragraph>

            <DataTable
              caption={data?.sections?.equipment?.tableCaption}
              headers={data?.sections?.equipment?.tableHeaders ?? []}
              rows={data?.sections?.equipment?.tableRows ?? []}
            />

            <BulletList items={(data?.sections?.equipment?.items as string[]) ?? []} />
          </ArticleSection>

          <ArticleSection title={data?.sections?.economics?.title}>
            <ComparisonTable
              title={data?.sections?.economics?.comparisonTitle}
              headers={
                (data?.sections?.economics?.comparisonHeaders ?? ['', '', '']) as
                  | [string, string, string]
                  | [string, string, string, string]
              }
              rows={
                (data?.sections?.economics?.comparisonRows ?? []) as Array<{
                  parameter: string
                  value1: string
                  value2: string
                  value3?: string
                }>
              }
            />

            <HighlightBox variant="info">
              <strong>{data?.sections?.economics?.infoBox?.title ?? ''}:</strong>{' '}
              {data?.sections?.economics?.infoBox?.text ?? ''}
            </HighlightBox>
          </ArticleSection>

          <ArticleSection title={data?.sections?.regulatory?.title}>
            <Paragraph>{data?.sections?.regulatory?.paragraph ?? ''}</Paragraph>
            <BulletList items={data?.sections?.regulatory?.bulletList ?? []} />

            <DataTable
              caption={data?.sections?.regulatory?.tableCaption}
              headers={data?.sections?.regulatory?.tableHeaders ?? []}
              rows={data?.sections?.regulatory?.tableData ?? []}
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

          <ArticleSection title={data?.sections?.case?.title}>
            <Paragraph>{data?.sections?.case?.paragraph ?? ''}</Paragraph>
            <DataTable
              caption={data?.sections?.case?.tableCaption}
              headers={data?.sections?.case?.tableHeaders ?? []}
              rows={data?.sections?.case?.tableData ?? []}
            />
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
          href: 'tel:+998942909977',
        }}
      />
    </Layout>
  )
}
