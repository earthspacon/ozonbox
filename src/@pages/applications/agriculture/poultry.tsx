import { TolgeeStaticDataProp, useTranslate } from '@tolgee/react'

import { Layout } from '@/widgets/layout'

import { getCategoryNamespace, NAMESPACES, TLocale } from '@/shared/config/tolgee'
import {
  ArticleHero,
  ArticleSection,
  ComparisonTable,
  CTASection,
  DataTable,
  FeatureCard,
  FeatureGrid,
  HighlightBox,
  NumberedList,
  Paragraph,
  StatCard,
  StatGrid,
} from '@/shared/ui/article-components'
import { IconCheck } from '@/shared/ui/icons'
import { Seo } from '@/shared/ui/seo'

interface PoultryPageProps {
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
      intro1?: string
      intro2?: string
      paragraph1?: string
      paragraph2?: string
      text?: string
      items?: string[] | Array<{ title: string; description: string }>
      tableCaption?: string
      tableHeaders?: string[]
      tableData?: string[][] | Array<{ parameter: string; value1: string; value2: string }>
      tableTitle?: string
      steps?: Array<{ title: string; description: string }>
      note?: string
      highlight?: string
      warning?: string | { title: string; text: string }
      warningLabel?: string
      warningText?: string
      stats?: {
        [key: string]: {
          value: string
          label: string
          description: string
        }
      }
    }
  }
}

export function PoultryPage({ staticData, lang }: PoultryPageProps) {
  const { t } = useTranslate()
  const ns = getCategoryNamespace('agriculture')

  // get category data from staticData
  const categoryData = (staticData as Record<string, { subcategories?: { poultry?: SubcategoryData } }>)[
    `${lang}:${ns}`
  ]
  const data = categoryData?.subcategories?.poultry

  const breadcrumbs = [
    { label: t('nav.applications', { ns: NAMESPACES.common }), href: '/applications' },
    { label: t('title', { ns }), href: '/applications/agriculture' },
    { label: t('subcategories.poultry.title', { ns }) },
  ]

  return (
    <Layout>
      <Seo
        title={t('subcategories.poultry.title', { ns })}
        description={t('subcategories.poultry.shortDesc', { ns })}
      />

      <ArticleHero
        title={t('subcategories.poultry.title', { ns })}
        description={t('subcategories.poultry.shortDesc', { ns })}
        image="https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=1920&q=80"
        imageAlt={t('subcategories.poultry.title', { ns })}
        breadcrumbs={breadcrumbs}
        backLink={{
          href: '/applications/agriculture',
          label: t('title', { ns }),
        }}
      />

      {/* Key Stats */}
      <section className="bg-bg-light py-12">
        <div className="container">
          <StatGrid columns={4}>
            <StatCard
              value={data?.stats?.disinfection?.value ?? ''}
              label={data?.stats?.disinfection?.label ?? ''}
              description={data?.stats?.disinfection?.description ?? ''}
              variant="primary"
            />
            <StatCard
              value={data?.stats?.hatchability?.value ?? ''}
              label={data?.stats?.hatchability?.label ?? ''}
              description={data?.stats?.hatchability?.description ?? ''}
              variant="accent"
            />
            <StatCard
              value={data?.stats?.moldReduction?.value ?? ''}
              label={data?.stats?.moldReduction?.label ?? ''}
              description={data?.stats?.moldReduction?.description ?? ''}
              variant="primary"
            />
            <StatCard
              value={data?.stats?.storageExtension?.value ?? ''}
              label={data?.stats?.storageExtension?.label ?? ''}
              description={data?.stats?.storageExtension?.description ?? ''}
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
            <strong>{data?.sections?.intro?.warningLabel ?? ''}</strong> {data?.sections?.intro?.warningText ?? ''}
          </HighlightBox>

          <ArticleSection title={data?.sections?.applications?.title}>
            <NumberedList items={(data?.sections?.applications?.items as string[]) ?? []} />
          </ArticleSection>

          <ArticleSection title={data?.sections?.incubation?.title}>
            <Paragraph>{data?.sections?.incubation?.intro ?? ''}</Paragraph>

            <StatGrid columns={2}>
              <StatCard
                value={data?.sections?.incubation?.stats?.eggLayers?.value ?? ''}
                label={data?.sections?.incubation?.stats?.eggLayers?.label ?? ''}
                description={data?.sections?.incubation?.stats?.eggLayers?.description ?? ''}
                variant="neutral"
              />
              <StatCard
                value={data?.sections?.incubation?.stats?.meatChickens?.value ?? ''}
                label={data?.sections?.incubation?.stats?.meatChickens?.label ?? ''}
                description={data?.sections?.incubation?.stats?.meatChickens?.description ?? ''}
                variant="neutral"
              />
            </StatGrid>

            <DataTable
              caption={data?.sections?.incubation?.tableCaption}
              headers={data?.sections?.incubation?.tableHeaders ?? []}
              rows={data?.sections?.incubation?.tableData as string[][] ?? []}
            />

            <HighlightBox variant="success">{data?.sections?.incubation?.highlight ?? ''}</HighlightBox>
          </ArticleSection>

          <ArticleSection title={data?.sections?.airDisinfection?.title}>
            <Paragraph>{data?.sections?.airDisinfection?.intro1 ?? ''}</Paragraph>
            <Paragraph>{data?.sections?.airDisinfection?.intro2 ?? ''}</Paragraph>

            <DataTable
              caption={data?.sections?.airDisinfection?.tableCaption}
              headers={data?.sections?.airDisinfection?.tableHeaders ?? []}
              rows={data?.sections?.airDisinfection?.tableData as string[][] ?? []}
            />

            <HighlightBox variant="info">{data?.sections?.airDisinfection?.highlight ?? ''}</HighlightBox>
          </ArticleSection>

          <ArticleSection title={data?.sections?.feedDisinfection?.title}>
            <Paragraph>{data?.sections?.feedDisinfection?.intro ?? ''}</Paragraph>

            <DataTable
              caption={data?.sections?.feedDisinfection?.tableCaption}
              headers={data?.sections?.feedDisinfection?.tableHeaders ?? []}
              rows={data?.sections?.feedDisinfection?.tableData as string[][] ?? []}
            />
          </ArticleSection>

          <ArticleSection title={data?.sections?.storage?.title}>
            <Paragraph>{data?.sections?.storage?.intro ?? ''}</Paragraph>

            <ComparisonTable
              title={data?.sections?.storage?.tableTitle}
              headers={(data?.sections?.storage?.tableHeaders ?? []) as [string, string, string]}
              rows={
                (data?.sections?.storage?.tableData as Array<{
                  parameter: string
                  value1: string
                  value2: string
                }>) ?? []
              }
            />

            <HighlightBox variant="success">{data?.sections?.storage?.highlight ?? ''}</HighlightBox>
          </ArticleSection>

          <ArticleSection title={data?.sections?.modes?.title}>
            <DataTable
              headers={data?.sections?.modes?.tableHeaders ?? []}
              rows={data?.sections?.modes?.tableData as string[][] ?? []}
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
