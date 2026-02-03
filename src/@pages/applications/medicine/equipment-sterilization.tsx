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
  ProcessList,
  StatCard,
  StatGrid,
} from '@/shared/ui/article-components'
import { IconCheck } from '@/shared/ui/icons'
import { Seo } from '@/shared/ui/seo'

interface EquipmentSterilizationPageProps {
  staticData: TolgeeStaticDataProp
  lang: TLocale
}

interface SubcategoryData {
  title: string
  shortDesc: string
  heroText?: string
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
      text2?: string
      items?: string[] | Array<{ title: string; description: string }>
      tableCaption?: string
      tableHeaders?: string[]
      tableData?: string[][]
      steps?: Array<{ title: string; description: string }>
      note?: string
      warning?: { title: string; text: string }
      highlight?: string
      features?: Array<{ title: string; description: string }>
      table?: {
        caption?: string
        headers?: string[]
        rows?: string[][] | Array<{ parameter?: string; value1?: string; value2?: string }>
      }
      tableTitle?: string
      rows?: Array<{ parameter: string; value1: string; value2: string }>
    }
  }
  cta?: {
    title?: string
    text?: string
  }
}

export function EquipmentSterilizationPage({ staticData, lang }: EquipmentSterilizationPageProps) {
  const { t } = useTranslate()
  const ns = getCategoryNamespace('medicine')

  // get category data from staticData
  const categoryData = (
    staticData as Record<string, { subcategories?: { 'equipment-sterilization'?: SubcategoryData } }>
  )[`${lang}:${ns}`]
  const data = categoryData?.subcategories?.['equipment-sterilization']

  const breadcrumbs = [
    { label: t('nav.applications', { ns: NAMESPACES.common }), href: '/applications' },
    { label: t('title', { ns }), href: '/applications/medicine' },
    { label: t('subcategories.equipment-sterilization.title', { ns }) },
  ]

  return (
    <Layout>
      <Seo
        title={t('subcategories.equipment-sterilization.title', { ns })}
        description={t('subcategories.equipment-sterilization.shortDesc', { ns })}
      />

      <ArticleHero
        title={t('subcategories.equipment-sterilization.title', { ns })}
        description={data?.heroText ?? t('subcategories.equipment-sterilization.shortDesc', { ns })}
        image="https://images.unsplash.com/photo-1581093458791-9d42e3c7e117?w=1920&q=80"
        imageAlt={t('subcategories.equipment-sterilization.title', { ns })}
        breadcrumbs={breadcrumbs}
        backLink={{
          href: '/applications/medicine',
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
            <strong>{data?.sections?.highlight1?.title ?? ''}</strong> {data?.sections?.highlight1?.text ?? ''}
          </HighlightBox>

          <ArticleSection title={data?.sections?.problem?.title}>
            <Paragraph>{data?.sections?.problem?.text ?? ''}</Paragraph>
            <BulletList items={(data?.sections?.problem?.items as string[]) ?? []} />
          </ArticleSection>

          <ArticleSection title={data?.sections?.endoscopes?.title}>
            <Paragraph>{data?.sections?.endoscopes?.text ?? ''}</Paragraph>

            <DataTable
              caption={data?.sections?.endoscopes?.table?.caption}
              headers={data?.sections?.endoscopes?.table?.headers ?? []}
              rows={(data?.sections?.endoscopes?.table?.rows ?? []) as (string | number)[][]}
            />

            <HighlightBox variant="success">{String(data?.sections?.endoscopes?.highlight ?? '')}</HighlightBox>
          </ArticleSection>

          <ArticleSection title={data?.sections?.lowtemp?.title}>
            <Paragraph>{data?.sections?.lowtemp?.text ?? ''}</Paragraph>
            <ProcessList steps={data?.sections?.lowtemp?.steps ?? []} />
          </ArticleSection>

          <ArticleSection title={data?.sections?.materials?.title}>
            <Paragraph>{data?.sections?.materials?.text ?? ''}</Paragraph>

            <FeatureGrid columns={2}>
              {((data?.sections?.materials?.features as Array<{ title: string; description: string }>) ?? []).map(
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

          <ArticleSection title={data?.sections?.comparison?.title}>
            <ComparisonTable
              title={data?.sections?.comparison?.tableTitle}
              headers={
                (data?.sections?.comparison?.table?.headers ?? []) as
                  | [string, string, string]
                  | [string, string, string, string]
              }
              rows={
                (data?.sections?.comparison?.rows as Array<{ parameter: string; value1: string; value2: string }>) ?? []
              }
            />
          </ArticleSection>

          <ArticleSection title={data?.sections?.benefits?.title}>
            <BulletList items={(data?.sections?.benefits?.items as string[]) ?? []} />

            <HighlightBox variant="warning">{String(data?.sections?.benefits?.warning ?? '')}</HighlightBox>
          </ArticleSection>
        </div>
      </article>

      <CTASection
        title={data?.cta?.title ?? t('cta.applications.title', { ns: NAMESPACES.common })}
        description={data?.cta?.text ?? t('cta.applications.text', { ns: NAMESPACES.common })}
        primaryButton={{
          label: t('cta.consultation', { ns: NAMESPACES.common }),
          href: '/contacts',
        }}
        secondaryButton={{
          label: t('cta.call', { ns: NAMESPACES.common }),
          href: 'tel:+998942909977',
        }}
      />
    </Layout>
  )
}
