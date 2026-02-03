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

interface DairyPageProps {
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
      tableHeaders?: string[]
      tableData?: (string | number)[][]
      rows?: Array<{ parameter: string; value1: string; value2: string; value3?: string }>
      highlight?: { title?: string; text: string }
      warning?: { title?: string; text: string }
    }
  }
}

export function DairyPage({ staticData, lang }: DairyPageProps) {
  const { t } = useTranslate()
  const ns = getCategoryNamespace('food-production')

  // get category data from staticData
  const categoryData = (staticData as Record<string, { subcategories?: { dairy?: SubcategoryData } }>)[`${lang}:${ns}`]
  const data = categoryData?.subcategories?.dairy

  const breadcrumbs = [
    { label: t('nav.applications', { ns: NAMESPACES.common }), href: '/applications' },
    { label: t('title', { ns }), href: '/applications/food-production' },
    { label: t('subcategories.dairy.title', { ns }) },
  ]

  return (
    <Layout>
      <Seo title={t('subcategories.dairy.title', { ns })} description={t('subcategories.dairy.shortDesc', { ns })} />

      <ArticleHero
        title={t('subcategories.dairy.title', { ns })}
        description={t('subcategories.dairy.shortDesc', { ns })}
        image="https://images.unsplash.com/photo-1550583724-b2692b85b150?w=1920&q=80"
        imageAlt={t('subcategories.dairy.title', { ns })}
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
            <Paragraph>{data?.sections?.intro?.paragraph1 ?? ''}</Paragraph>
            <Paragraph>{data?.sections?.intro?.paragraph2 ?? ''}</Paragraph>
          </ArticleSection>

          <HighlightBox variant="info">
            <strong>{data?.sections?.haccpHighlight?.title ?? ''}</strong> {data?.sections?.haccpHighlight?.text ?? ''}
          </HighlightBox>

          <ArticleSection title={data?.sections?.application?.title}>
            <DataTable
              caption={data?.sections?.application?.tableCaption}
              headers={data?.sections?.application?.tableHeaders ?? []}
              rows={data?.sections?.application?.tableData ?? []}
            />
          </ArticleSection>

          <ArticleSection title={data?.sections?.advantages?.title}>
            <BulletList items={(data?.sections?.advantages?.items as string[]) ?? []} />
          </ArticleSection>

          <ComparisonTable
            title={data?.sections?.comparison?.title}
            headers={
              (data?.sections?.comparison?.tableHeaders ?? []) as
                | [string, string, string]
                | [string, string, string, string]
            }
            rows={
              (data?.sections?.comparison?.rows ?? []) as Array<{
                parameter: string
                value1: string
                value2: string
                value3?: string
              }>
            }
          />

          <ArticleSection title={data?.sections?.storage?.title}>
            <Paragraph>{data?.sections?.storage?.intro ?? ''}</Paragraph>

            <DataTable
              caption={data?.sections?.storage?.tableCaption}
              headers={data?.sections?.storage?.tableHeaders ?? []}
              rows={data?.sections?.storage?.tableData ?? []}
            />

            <HighlightBox variant="success">{data?.sections?.storage?.highlight?.text ?? ''}</HighlightBox>
          </ArticleSection>

          <ArticleSection title={data?.sections?.listeriosis?.title}>
            <Paragraph>{data?.sections?.listeriosis?.paragraph1 ?? ''}</Paragraph>
            <Paragraph>{data?.sections?.listeriosis?.paragraph2 ?? ''}</Paragraph>
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
