/* eslint-disable @typescript-eslint/no-explicit-any */
import { TolgeeStaticDataProp, useTranslate } from '@tolgee/react'

import { Layout } from '@/widgets/layout'

import { getCategoryNamespace, NAMESPACES, TLocale } from '@/shared/config/tolgee'
import {
  ArticleHero,
  ArticleSection,
  BulletList,
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

interface AmbulancesPageProps {
  staticData: TolgeeStaticDataProp
  lang: TLocale
}

export function AmbulancesPage({ staticData, lang }: AmbulancesPageProps) {
  const { t } = useTranslate()
  const ns = getCategoryNamespace('medicine')

  // get category data from staticData
  const categoryData = (staticData as Record<string, { subcategories?: { ambulances?: any } }>)[
    `${lang}:${ns}`
  ]
  const data = categoryData?.subcategories?.ambulances || {}

  const breadcrumbs = [
    { label: t('nav.applications', { ns: NAMESPACES.common }), href: '/applications' },
    { label: t('title', { ns }), href: '/applications/medicine' },
    { label: t('subcategories.ambulances.title', { ns }) },
  ]

  return (
    <Layout>
      <Seo title={t('subcategories.ambulances.title', { ns })} description={t('subcategories.ambulances.shortDesc', { ns })} />

      <ArticleHero
        title={t('subcategories.ambulances.title', { ns })}
        description={t('subcategories.ambulances.shortDesc', { ns })}
        image="https://images.unsplash.com/photo-1587745416684-47953f16f02f?w=1920&q=80"
        imageAlt={t('subcategories.ambulances.title', { ns })}
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
            <strong>{data.sections?.dosage?.title || ''}</strong> {data.sections?.dosage?.text || ''}
          </HighlightBox>

          <ArticleSection title={data.sections?.problem?.title || ''}>
            <Paragraph>{data.sections?.problem?.paragraph || ''}</Paragraph>
            <BulletList items={Array.isArray(data.sections?.problem?.items) ? data.sections.problem.items : []} />
          </ArticleSection>

          <ArticleSection title={data.sections?.process?.title || ''}>
            <Paragraph>{data.sections?.process?.paragraph || ''}</Paragraph>

            <ProcessList steps={Array.isArray(data.sections?.process?.steps) ? data.sections.process.steps : []} />

            <HighlightBox variant="success">{data.sections?.process?.note || ''}</HighlightBox>
          </ArticleSection>

          <ArticleSection title={data.sections?.modes?.title}>
            <Paragraph>{data.sections?.modes?.intro || ''}</Paragraph>

            <DataTable
              caption={data.sections?.modes?.tableCaption}
              headers={data.sections?.modes?.tableHeaders || []}
              rows={(Array.isArray(data.sections?.modes?.tableData) ? data.sections.modes.tableData : []) as (string | number)[][]}
            />
          </ArticleSection>

          <ArticleSection title={data.sections?.equipment?.title || ''}>
            <Paragraph>{data.sections?.equipment?.intro || ''}</Paragraph>

            <FeatureGrid columns={2}>
              {(Array.isArray(data.sections?.equipment?.items) ? data.sections.equipment.items : []).map(
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

          <ArticleSection title={data.sections?.comparison?.title || ''}>
            <DataTable
              caption={data.sections?.comparison?.tableCaption}
              headers={data.sections?.comparison?.tableHeaders || []}
              rows={(Array.isArray(data.sections?.comparison?.tableData) ? data.sections.comparison.tableData : []) as (string | number)[][]}
            />
          </ArticleSection>

          <ArticleSection title={data.sections?.benefits?.title || ''}>
            <BulletList items={Array.isArray(data.sections?.benefits?.items) ? data.sections.benefits.items : []} />

            <HighlightBox variant="warning">{data.sections?.benefits?.warning?.text || ''}</HighlightBox>
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
