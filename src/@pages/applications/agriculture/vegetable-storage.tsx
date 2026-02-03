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

interface VegetableStoragePageProps {
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
      text?: string
      items?: string[] | Array<{ title: string; description: string }>
      tableCaption?: string
      tableHeaders?: string[] | [string, string, string]
      tableData?: string[][] | Array<{ parameter: string; value1: string; value2: string }>
      note?: string
      highlight?: string
    }
  }
}

export function VegetableStoragePage({ staticData, lang }: VegetableStoragePageProps) {
  const { t } = useTranslate()
  const ns = getCategoryNamespace('agriculture')

  // Get category data from staticData
  const categoryData = (staticData as Record<string, { subcategories?: { 'vegetable-storage'?: SubcategoryData } }>)[
    `${lang}:${ns}`
  ]
  const data = categoryData?.subcategories?.['vegetable-storage']

  const breadcrumbs = [
    { label: t('nav.applications', { ns: NAMESPACES.common }), href: '/applications' },
    { label: t('title', { ns }), href: '/applications/agriculture' },
    { label: t('subcategories.vegetable-storage.title', { ns }) },
  ]

  return (
    <Layout>
      <Seo
        title={t('subcategories.vegetable-storage.title', { ns })}
        description={t('subcategories.vegetable-storage.shortDesc', { ns })}
      />

      <ArticleHero
        title={t('subcategories.vegetable-storage.title', { ns })}
        description={t('subcategories.vegetable-storage.shortDesc', { ns })}
        image="https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?w=1920&q=80"
        imageAlt={t('subcategories.vegetable-storage.title', { ns })}
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
              value={data?.stats?.storageExtension?.value ?? ''}
              label={data?.stats?.storageExtension?.label ?? ''}
              description={data?.stats?.storageExtension?.description ?? ''}
              variant="primary"
            />
            <StatCard
              value={data?.stats?.moldReduction?.value ?? ''}
              label={data?.stats?.moldReduction?.label ?? ''}
              description={data?.stats?.moldReduction?.description ?? ''}
              variant="accent"
            />
            <StatCard
              value={data?.stats?.lossReduction?.value ?? ''}
              label={data?.stats?.lossReduction?.label ?? ''}
              description={data?.stats?.lossReduction?.description ?? ''}
              variant="primary"
            />
            <StatCard
              value={data?.stats?.noChemicals?.value ?? ''}
              label={data?.stats?.noChemicals?.label ?? ''}
              description={data?.stats?.noChemicals?.description ?? ''}
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
            <strong>{data?.sections?.principle?.title ?? ''}</strong> {data?.sections?.principle?.text ?? ''}
          </HighlightBox>

          <ArticleSection title={data?.sections?.efficiency?.title}>
            <DataTable
              caption={data?.sections?.efficiency?.tableCaption}
              headers={(data?.sections?.efficiency?.tableHeaders as string[]) ?? []}
              rows={(data?.sections?.efficiency?.tableData as string[][]) ?? []}
            />
          </ArticleSection>

          <ArticleSection title={data?.sections?.diseases?.title}>
            <Paragraph>{data?.sections?.diseases?.intro ?? ''}</Paragraph>
            <BulletList items={(data?.sections?.diseases?.items as string[]) ?? []} />

            <HighlightBox variant="success">{data?.sections?.diseases?.highlight ?? ''}</HighlightBox>
          </ArticleSection>

          <ArticleSection title={data?.sections?.modes?.title}>
            <DataTable
              caption={data?.sections?.modes?.tableCaption}
              headers={(data?.sections?.modes?.tableHeaders as string[]) ?? []}
              rows={(data?.sections?.modes?.tableData as string[][]) ?? []}
            />

            <Paragraph>{data?.sections?.modes?.note ?? ''}</Paragraph>
          </ArticleSection>

          <ArticleSection title={data?.sections?.additionalEffects?.title}>
            <FeatureGrid columns={2}>
              {((data?.sections?.additionalEffects?.items as Array<{ title: string; description: string }>) ?? []).map(
                (item, index) => (
                  <FeatureCard
                    key={index}
                    icon={<IconCheck style={{ width: 24, height: 24 }} />}
                    title={item.title}
                    description={item.description}
                  />
                ),
              )}
            </FeatureGrid>
          </ArticleSection>

          <ArticleSection title={data?.sections?.economic?.title}>
            <Paragraph>{data?.sections?.economic?.intro ?? ''}</Paragraph>
            <ComparisonTable
              headers={(data?.sections?.economic?.tableHeaders as [string, string, string]) ?? ['', '', '']}
              rows={
                (data?.sections?.economic?.tableData as Array<{
                  parameter: string
                  value1: string
                  value2: string
                }>) ?? []
              }
            />

            <HighlightBox variant="success">{data?.sections?.economic?.highlight ?? ''}</HighlightBox>
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
