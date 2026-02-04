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
  StatCard,
  StatGrid,
} from '@/shared/ui/article-components'
import { IconCheck } from '@/shared/ui/icons'
import { Seo } from '@/shared/ui/seo'

interface DentalPageProps {
  staticData: TolgeeStaticDataProp
  lang: TLocale
}

export function DentalPage({ staticData, lang }: DentalPageProps) {
  const { t } = useTranslate()
  const ns = getCategoryNamespace('medicine')

  // get category data from staticData
  const categoryData = (staticData as Record<string, { subcategories?: { dental?: any } }>)[
    `${lang}:${ns}`
  ]
  const data = categoryData?.subcategories?.dental || {}

  const breadcrumbs = [
    { label: t('nav.applications', { ns: NAMESPACES.common }), href: '/applications' },
    { label: t('title', { ns }), href: '/applications/medicine' },
    { label: t('subcategories.dental.title', { ns }) },
  ]

  return (
    <Layout>
      <Seo
        title={t('subcategories.dental.title', { ns })}
        description={t('subcategories.dental.shortDesc', { ns })}
      />

      <ArticleHero
        title={t('subcategories.dental.title', { ns })}
        description={t('subcategories.dental.shortDesc', { ns })}
        image="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1920&q=80"
        imageAlt={t('subcategories.dental.title', { ns })}
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

          <ArticleSection title={data.sections?.applications?.title}>
            <BulletList items={Array.isArray(data.sections?.applications?.items) ? data.sections.applications.items : []} />
          </ArticleSection>

          <ArticleSection title={data.sections?.disinfection?.title}>
            <Paragraph>{data.sections?.disinfection?.text || ''}</Paragraph>

            <DataTable
              caption={data.sections?.disinfection?.table?.caption}
              headers={data.sections?.disinfection?.table?.headers || []}
              rows={(Array.isArray(data.sections?.disinfection?.table?.rows) ? data.sections.disinfection.table.rows : []) as (string | number)[][]}
            />

            <HighlightBox variant="success">{data.sections?.disinfection?.highlight || ''}</HighlightBox>
          </ArticleSection>

          <ArticleSection title={data.sections?.ozonotherapy?.title}>
            <Paragraph>{data.sections?.ozonotherapy?.text || ''}</Paragraph>

            <FeatureGrid columns={2}>
              {(Array.isArray(data.sections?.ozonotherapy?.features) ? data.sections.ozonotherapy.features : []).map(
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

            <DataTable
              caption={data.sections?.ozonotherapy?.table?.caption}
              headers={data.sections?.ozonotherapy?.table?.headers || []}
              rows={(Array.isArray(data.sections?.ozonotherapy?.table?.rows) ? data.sections.ozonotherapy.table.rows : []) as (string | number)[][]}
            />
          </ArticleSection>

          <ArticleSection title={data.sections?.waterSystems?.title}>
            <Paragraph>{data.sections?.waterSystems?.text || ''}</Paragraph>
            <BulletList items={Array.isArray(data.sections?.waterSystems?.items) ? data.sections.waterSystems.items : []} />
          </ArticleSection>

          <ArticleSection title={data.sections?.benefits?.title}>
            <BulletList items={Array.isArray(data.sections?.benefits?.items) ? data.sections.benefits.items : []} />

            <HighlightBox variant="success">{data.sections?.benefits?.highlight || ''}</HighlightBox>
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
