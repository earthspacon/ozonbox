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

interface MeatSausagesPageProps {
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
      rows?: Array<{ parameter: string; value1: string; value2: string; value3?: string }>
      headers?: string[]
      recommendedMode?: { label?: string; text: string }
    }
  }
}

export function MeatSausagesPage({ staticData, lang }: MeatSausagesPageProps) {
  const { t } = useTranslate()
  const ns = getCategoryNamespace('food-production')

  // get category data from staticData
  const categoryData = (staticData as Record<string, { subcategories?: { 'meat-sausages'?: SubcategoryData } }>)[
    `${lang}:${ns}`
  ]
  const data = categoryData?.subcategories?.['meat-sausages']

  const breadcrumbs = [
    { label: t('nav.applications', { ns: NAMESPACES.common }), href: '/applications' },
    { label: t('title', { ns }), href: '/applications/food-production' },
    { label: t('subcategories.meat-sausages.title', { ns }) },
  ]

  return (
    <Layout>
      <Seo title={t('subcategories.meat-sausages.title', { ns })} description={t('subcategories.meat-sausages.shortDesc', { ns })} />

      <ArticleHero
        title={t('subcategories.meat-sausages.title', { ns })}
        description={t('subcategories.meat-sausages.shortDesc', { ns })}
        image="https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=1920&q=80"
        imageAlt={t('subcategories.meat-sausages.title', { ns })}
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
              value={data?.stats?.shelfLife?.value ?? ''}
              label={data?.stats?.shelfLife?.label ?? ''}
              description={data?.stats?.shelfLife?.description ?? ''}
              variant="primary"
            />
            <StatCard
              value={data?.stats?.disinfection?.value ?? ''}
              label={data?.stats?.disinfection?.label ?? ''}
              description={data?.stats?.disinfection?.description ?? ''}
              variant="accent"
            />
            <StatCard
              value={data?.stats?.concentration?.value ?? ''}
              label={data?.stats?.concentration?.label ?? ''}
              description={data?.stats?.concentration?.description ?? ''}
              variant="primary"
            />
            <StatCard
              value={data?.stats?.organoleptics?.value ?? ''}
              label={data?.stats?.organoleptics?.label ?? ''}
              description={data?.stats?.organoleptics?.description ?? ''}
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
            <strong>{data?.sections?.instruction?.label ?? ''}</strong> {data?.sections?.instruction?.text ?? ''}
          </HighlightBox>

          <ArticleSection title={data?.sections?.storage?.title}>
            <Paragraph>{data?.sections?.storage?.paragraph ?? ''}</Paragraph>

            <DataTable
              caption={data?.sections?.storage?.tableCaption}
              headers={data?.sections?.storage?.tableHeaders ?? []}
              rows={data?.sections?.storage?.tableRows ?? []}
            />
          </ArticleSection>

          <ArticleSection title={data?.sections?.ripeningChambers?.title}>
            <Paragraph>{data?.sections?.ripeningChambers?.paragraph ?? ''}</Paragraph>

            <DataTable
              caption={data?.sections?.ripeningChambers?.tableCaption}
              headers={data?.sections?.ripeningChambers?.tableHeaders ?? []}
              rows={data?.sections?.ripeningChambers?.tableRows ?? []}
            />

            <HighlightBox variant="success">
              <strong>{data?.sections?.ripeningChambers?.recommendedMode?.label ?? ''}</strong> {data?.sections?.ripeningChambers?.recommendedMode?.text ?? ''}
            </HighlightBox>
          </ArticleSection>

          <ArticleSection title={data?.sections?.benefits?.title}>
            <BulletList items={(data?.sections?.benefits?.items as string[]) ?? []} />
          </ArticleSection>

          <ComparisonTable
            title={data?.sections?.comparison?.title}
            headers={(data?.sections?.comparison?.headers as [string, string, string] | [string, string, string, string]) ?? []}
            rows={(data?.sections?.comparison?.rows as Array<{ parameter: string; value1: string; value2: string; value3?: string }>) ?? []}
          />

          <ArticleSection title={data?.sections?.regulations?.title}>
            <Paragraph>{data?.sections?.regulations?.paragraph ?? ''}</Paragraph>
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
