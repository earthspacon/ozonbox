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

interface ColdStoragePageProps {
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
      instructionTitle?: string
      instructionText?: string
      animalProductsTableCaption?: string
      vegetableProductsTableCaption?: string
      tableCaption?: string
      tableHeaders?: string[]
      tableData?: string[][]
      animalProductsTableData?: string[][]
      vegetableProductsTableData?: string[][]
      items?: string[] | Array<{ title: string; description: string }>
      headers?: [string, string, string] | [string, string, string, string]
      rows?: Array<{ parameter: string; value1: string; value2: string; value3?: string }>
      warning?: string
      recommendationTitle?: string
      recommendationText?: string
      feature1?: { title: string; description: string }
      feature2?: { title: string; description: string }
      feature3?: { title: string; description: string }
      feature4?: { title: string; description: string }
    }
  }
}

export function ColdStoragePage({ staticData, lang }: ColdStoragePageProps) {
  const { t } = useTranslate()
  const ns = getCategoryNamespace('food-production')

  // get category data from staticData
  const categoryData = (staticData as Record<string, { subcategories?: { 'cold-storage'?: SubcategoryData } }>)[
    `${lang}:${ns}`
  ]
  const data = categoryData?.subcategories?.['cold-storage']

  const breadcrumbs = [
    { label: t('nav.applications', { ns: NAMESPACES.common }), href: '/applications' },
    { label: t('title', { ns }), href: '/applications/food-production' },
    { label: t('subcategories.cold-storage.title', { ns }) },
  ]

  return (
    <Layout>
      <Seo
        title={t('subcategories.cold-storage.title', { ns })}
        description={t('subcategories.cold-storage.shortDesc', { ns })}
      />

      <ArticleHero
        title={t('subcategories.cold-storage.title', { ns })}
        description={t('subcategories.cold-storage.shortDesc', { ns })}
        image="https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=1920&q=80"
        imageAlt={t('subcategories.cold-storage.title', { ns })}
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
              value={data?.stats?.downtimeReduction?.value ?? ''}
              label={data?.stats?.downtimeReduction?.label ?? ''}
              description={data?.stats?.downtimeReduction?.description ?? ''}
              variant="primary"
            />
            <StatCard
              value={data?.stats?.emptyChamberConcentration?.value ?? ''}
              label={data?.stats?.emptyChamberConcentration?.label ?? ''}
              description={data?.stats?.emptyChamberConcentration?.description ?? ''}
              variant="accent"
            />
            <StatCard
              value={data?.stats?.emptyChamberTime?.value ?? ''}
              label={data?.stats?.emptyChamberTime?.label ?? ''}
              description={data?.stats?.emptyChamberTime?.description ?? ''}
              variant="primary"
            />
            <StatCard
              value={data?.stats?.noWarming?.value ?? ''}
              label={data?.stats?.noWarming?.label ?? ''}
              description={data?.stats?.noWarming?.description ?? ''}
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
            <strong>{data?.sections?.intro?.instructionTitle ?? ''}</strong> {data?.sections?.intro?.instructionText ?? ''}
          </HighlightBox>

          <ArticleSection title={data?.sections?.benefits?.title}>
            <BulletList items={(data?.sections?.benefits?.items as string[]) ?? []} />
          </ArticleSection>

          <ArticleSection title={data?.sections?.emptyChambers?.title}>
            <Paragraph>{data?.sections?.emptyChambers?.intro ?? ''}</Paragraph>

            <DataTable
              caption={data?.sections?.emptyChambers?.tableCaption}
              headers={data?.sections?.emptyChambers?.tableHeaders ?? []}
              rows={data?.sections?.emptyChambers?.tableData ?? []}
            />

            <HighlightBox variant="warning">{data?.sections?.emptyChambers?.warning ?? ''}</HighlightBox>
          </ArticleSection>

          <ArticleSection title={data?.sections?.loadedChambers?.title}>
            <Paragraph>{data?.sections?.loadedChambers?.intro ?? ''}</Paragraph>

            <DataTable
              caption={data?.sections?.loadedChambers?.animalProductsTableCaption}
              headers={data?.sections?.loadedChambers?.tableHeaders ?? []}
              rows={data?.sections?.loadedChambers?.animalProductsTableData ?? []}
            />

            <DataTable
              caption={data?.sections?.loadedChambers?.vegetableProductsTableCaption}
              headers={data?.sections?.loadedChambers?.tableHeaders ?? []}
              rows={data?.sections?.loadedChambers?.vegetableProductsTableData ?? []}
            />
          </ArticleSection>

          <ComparisonTable
            title={data?.sections?.comparison?.title}
            headers={(data?.sections?.comparison?.headers as [string, string, string] | [string, string, string, string]) ?? []}
            rows={(data?.sections?.comparison?.rows as Array<{ parameter: string; value1: string; value2: string; value3?: string }>) ?? []}
          />

          <ArticleSection title={data?.sections?.deodorization?.title}>
            <Paragraph>{data?.sections?.deodorization?.paragraph1 ?? ''}</Paragraph>
            <Paragraph>{data?.sections?.deodorization?.paragraph2 ?? ''}</Paragraph>
          </ArticleSection>

          <ArticleSection title={data?.sections?.organization?.title}>
            <Paragraph>{data?.sections?.organization?.intro ?? ''}</Paragraph>

            <HighlightBox variant="success">
              <strong>{data?.sections?.organization?.recommendationTitle ?? ''}</strong>{' '}
              {data?.sections?.organization?.recommendationText ?? ''}
            </HighlightBox>
          </ArticleSection>

          <ArticleSection title={data?.sections?.advantages?.title}>
            <FeatureGrid columns={2}>
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title={data?.sections?.advantages?.feature1?.title ?? ''}
                description={data?.sections?.advantages?.feature1?.description ?? ''}
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title={data?.sections?.advantages?.feature2?.title ?? ''}
                description={data?.sections?.advantages?.feature2?.description ?? ''}
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title={data?.sections?.advantages?.feature3?.title ?? ''}
                description={data?.sections?.advantages?.feature3?.description ?? ''}
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title={data?.sections?.advantages?.feature4?.title ?? ''}
                description={data?.sections?.advantages?.feature4?.description ?? ''}
              />
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
          href: 'tel:+998942909977',
        }}
      />
    </Layout>
  )
}
