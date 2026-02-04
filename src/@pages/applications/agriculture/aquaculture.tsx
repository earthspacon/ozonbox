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

interface AquaculturePageProps {
  staticData: TolgeeStaticDataProp
  lang: TLocale
}

export function AquaculturePage({ staticData, lang }: AquaculturePageProps) {
  const { t } = useTranslate()
  const ns = getCategoryNamespace('agriculture')

  // get category data from staticData
  const categoryData = (staticData as Record<string, { subcategories?: { aquaculture?: any } }>)[
    `${lang}:${ns}`
  ]
  const data = categoryData?.subcategories?.aquaculture

  const breadcrumbs = [
    { label: t('nav.applications', { ns: NAMESPACES.common }), href: '/applications' },
    { label: t('title', { ns }), href: '/applications/agriculture' },
    { label: t('subcategories.aquaculture.title', { ns }) },
  ]

  return (
    <Layout>
      <Seo
        title={t('subcategories.aquaculture.title', { ns })}
        description={t('subcategories.aquaculture.shortDesc', { ns })}
      />

      <ArticleHero
        title={t('subcategories.aquaculture.title', { ns })}
        description={t('subcategories.aquaculture.shortDesc', { ns })}
        image="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1920&q=80"
        imageAlt={t('subcategories.aquaculture.title', { ns })}
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
              value={data.stats.disinfection.value}
              label={data.stats.disinfection.label}
              description={data.stats.disinfection.description}
              variant="primary"
            />
            <StatCard
              value={data.stats.cycleSaving.value}
              label={data.stats.cycleSaving.label}
              description={data.stats.cycleSaving.description}
              variant="accent"
            />
            <StatCard
              value={data.stats.mortalityReduction.value}
              label={data.stats.mortalityReduction.label}
              description={data.stats.mortalityReduction.description}
              variant="primary"
            />
            <StatCard
              value={data.stats.waterSaving.value}
              label={data.stats.waterSaving.label}
              description={data.stats.waterSaving.description}
              variant="accent"
            />
          </StatGrid>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-12 md:py-20">
        <div className="container max-w-4xl">
          <ArticleSection>
            <Paragraph>{data.sections.intro.paragraph1}</Paragraph>
            <Paragraph>{data.sections.intro.paragraph2}</Paragraph>
          </ArticleSection>

          <HighlightBox variant="info">
            <strong>{data.sections.dosage.title}</strong> {data.sections.dosage.text}
          </HighlightBox>

          <ArticleSection title={data.sections.advantages.title}>
            <BulletList items={data.sections.advantages.items} />
          </ArticleSection>

          <ArticleSection title={data.sections.waterQuality.title}>
            <Paragraph>{data.sections.waterQuality.intro}</Paragraph>

            <DataTable
              caption={data.sections.waterQuality.tableCaption}
              headers={data.sections.waterQuality.tableHeaders}
              rows={data.sections.waterQuality.tableData}
            />

            <HighlightBox variant="success">{data.sections.waterQuality.note}</HighlightBox>
          </ArticleSection>

          <ArticleSection title={data.sections.pathogens.title}>
            <Paragraph>{data.sections.pathogens.intro}</Paragraph>

            <DataTable
              caption={data.sections.pathogens.tableCaption}
              headers={data.sections.pathogens.tableHeaders}
              rows={data.sections.pathogens.tableData}
            />
          </ArticleSection>

          <ArticleSection title={data.sections.fishTypes.title}>
            <Paragraph>{data.sections.fishTypes.intro}</Paragraph>

            <DataTable
              caption={data.sections.fishTypes.tableCaption}
              headers={data.sections.fishTypes.tableHeaders}
              rows={data.sections.fishTypes.tableData}
            />

            <HighlightBox variant="warning">
              <strong>{data.sections.fishTypes.warning.title}</strong>{' '}
              {data.sections.fishTypes.warning.text}
            </HighlightBox>
          </ArticleSection>

          <ArticleSection title={data.sections.scheme.title}>
            <ProcessList steps={data.sections.scheme.steps} />
          </ArticleSection>

          <ArticleSection title={data.sections.economic.title}>
            <Paragraph>{data.sections.economic.intro}</Paragraph>

            <DataTable
              caption={data.sections.economic.tableCaption}
              headers={data.sections.economic.tableHeaders}
              rows={data.sections.economic.tableData}
            />
          </ArticleSection>

          <ArticleSection title={data.sections.benefits.title}>
            <FeatureGrid columns={2}>
              {data.sections.benefits.items.map((item: { title: string; description: string }, idx: number) => (
                <FeatureCard
                  key={idx}
                  icon={<IconCheck style={{ width: 24, height: 24 }} />}
                  title={item.title}
                  description={item.description}
                />
              ))}
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
