/* eslint-disable @typescript-eslint/no-explicit-any */
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

export function EquipmentSterilizationPage({ staticData, lang }: EquipmentSterilizationPageProps) {
  const { t } = useTranslate()
  const ns = getCategoryNamespace('medicine')

  // get category data from staticData
  const categoryData = (staticData as Record<string, { subcategories?: { 'equipment-sterilization'?: any } }>)[
    `${lang}:${ns}`
  ]
  const data = categoryData?.subcategories?.['equipment-sterilization'] || {}

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
        description={data.heroText || t('subcategories.equipment-sterilization.shortDesc', { ns })}
        image="https://images.pexels.com/photos/13697729/pexels-photo-13697729.jpeg"
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
              value={data.stats?.[0]?.value || ''}
              label={data.stats?.[0]?.label || ''}
              description={data.stats?.[0]?.description || ''}
              variant="primary"
            />
            <StatCard
              value={data.stats?.[1]?.value || ''}
              label={data.stats?.[1]?.label || ''}
              description={data.stats?.[1]?.description || ''}
              variant="accent"
            />
            <StatCard
              value={data.stats?.[2]?.value || ''}
              label={data.stats?.[2]?.label || ''}
              description={data.stats?.[2]?.description || ''}
              variant="primary"
            />
            <StatCard
              value={data.stats?.[3]?.value || ''}
              label={data.stats?.[3]?.label || ''}
              description={data.stats?.[3]?.description || ''}
              variant="accent"
            />
          </StatGrid>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-12 md:py-20">
        <div className="container max-w-4xl">
          <ArticleSection>
            <Paragraph>{data.sections?.intro?.text || ''}</Paragraph>
            <Paragraph>{data.sections?.intro?.text2 || ''}</Paragraph>
          </ArticleSection>

          <HighlightBox variant="info">
            <strong>{data.sections?.highlight1?.title || ''}</strong> {data.sections?.highlight1?.text || ''}
          </HighlightBox>

          <ArticleSection title={data.sections?.problem?.title}>
            <Paragraph>{data.sections?.problem?.text || ''}</Paragraph>
            <BulletList items={Array.isArray(data.sections?.problem?.items) ? data.sections.problem.items : []} />
          </ArticleSection>

          <ArticleSection title={data.sections?.endoscopes?.title}>
            <Paragraph>{data.sections?.endoscopes?.text || ''}</Paragraph>

            <DataTable
              caption={data.sections?.endoscopes?.table?.caption}
              headers={data.sections?.endoscopes?.table?.headers || []}
              rows={
                (Array.isArray(data.sections?.endoscopes?.table?.rows) ? data.sections.endoscopes.table.rows : []) as (
                  | string
                  | number
                )[][]
              }
            />

            <HighlightBox variant="success">{data.sections?.endoscopes?.highlight || ''}</HighlightBox>
          </ArticleSection>

          <ArticleSection title={data.sections?.lowtemp?.title}>
            <Paragraph>{data.sections?.lowtemp?.text || ''}</Paragraph>
            <ProcessList steps={Array.isArray(data.sections?.lowtemp?.steps) ? data.sections.lowtemp.steps : []} />
          </ArticleSection>

          <ArticleSection title={data.sections?.materials?.title}>
            <Paragraph>{data.sections?.materials?.text || ''}</Paragraph>

            <FeatureGrid columns={2}>
              {(Array.isArray(data.sections?.materials?.features) ? data.sections.materials.features : []).map(
                (item: { title: string; description: string }, idx: number) => (
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

          <ArticleSection title={data.sections?.comparison?.title}>
            <ComparisonTable
              title={data.sections?.comparison?.tableTitle}
              headers={
                (Array.isArray(data.sections?.comparison?.headers) ? data.sections.comparison.headers : []) as
                  | [string, string, string]
                  | [string, string, string, string]
              }
              rows={
                (Array.isArray(data.sections?.comparison?.rows) ? data.sections.comparison.rows : []) as Array<{
                  parameter: string
                  value1: string
                  value2: string
                }>
              }
            />
          </ArticleSection>

          <ArticleSection title={data.sections?.benefits?.title}>
            <BulletList items={Array.isArray(data.sections?.benefits?.items) ? data.sections.benefits.items : []} />

            <HighlightBox variant="warning">{data.sections?.benefits?.warning || ''}</HighlightBox>
          </ArticleSection>
        </div>
      </article>

      <CTASection
        title={data.cta?.title || t('cta.applications.title', { ns: NAMESPACES.common })}
        description={data.cta?.text || t('cta.applications.text', { ns: NAMESPACES.common })}
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
