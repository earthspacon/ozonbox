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

interface BeekeepingPageProps {
  staticData: TolgeeStaticDataProp
  lang: TLocale
}

export function BeekeepingPage({ staticData, lang }: BeekeepingPageProps) {
  const { t } = useTranslate()
  const ns = getCategoryNamespace('agriculture')

  // get category data from staticData
  const categoryData = (staticData as Record<string, { subcategories?: { beekeeping?: any } }>)[`${lang}:${ns}`]
  const data = categoryData?.subcategories?.beekeeping

  const breadcrumbs = [
    { label: t('nav.applications', { ns: NAMESPACES.common }), href: '/applications' },
    { label: t('title', { ns }), href: '/applications/agriculture' },
    { label: t('subcategories.beekeeping.title', { ns }) },
  ]

  return (
    <Layout>
      <Seo
        title={t('subcategories.beekeeping.title', { ns })}
        description={t('subcategories.beekeeping.shortDesc', { ns })}
      />

      <ArticleHero
        title={t('subcategories.beekeeping.title', { ns })}
        description={t('subcategories.beekeeping.shortDesc', { ns })}
        image="https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=1920&q=80"
        imageAlt={t('subcategories.beekeeping.title', { ns })}
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
              value={data.stats.honeyIncrease.value}
              label={data.stats.honeyIncrease.label}
              description={data.stats.honeyIncrease.description}
              variant="primary"
            />
            <StatCard
              value={data.stats.productivityGrowth.value}
              label={data.stats.productivityGrowth.label}
              description={data.stats.productivityGrowth.description}
              variant="accent"
            />
            <StatCard
              value={data.stats.disinfection.value}
              label={data.stats.disinfection.label}
              description={data.stats.disinfection.description}
              variant="primary"
            />
            <StatCard
              value={data.stats.chemicals.value}
              label={data.stats.chemicals.label}
              description={data.stats.chemicals.description}
              variant="accent"
            />
          </StatGrid>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-12 md:py-20">
        <div className="container max-w-4xl">
          <ArticleSection>
            <Paragraph>{data.paragraphs.intro1}</Paragraph>
            <Paragraph>{data.paragraphs.intro2}</Paragraph>
          </ArticleSection>

          <HighlightBox variant="info">
            <strong>{data.highlightBoxes.research.label}</strong> {data.highlightBoxes.research.text}
          </HighlightBox>

          <ArticleSection title={data.sections.applications.title}>
            <BulletList items={data.sections.applications.items} />
          </ArticleSection>

          <ArticleSection title={data.sections.ascospherosis.title}>
            <DataTable
              caption={data.sections.ascospherosis.tableCaption}
              headers={data.sections.ascospherosis.tableHeaders}
              rows={data.sections.ascospherosis.tableData}
            />

            <HighlightBox variant="success">{data.highlightBoxes.ascospherosis}</HighlightBox>
          </ArticleSection>

          <ArticleSection title={data.sections.pathogens.title}>
            <DataTable
              caption={data.sections.pathogens.tableCaption}
              headers={data.sections.pathogens.tableHeaders}
              rows={data.sections.pathogens.tableData}
            />
          </ArticleSection>

          <ArticleSection title={data.sections.stimulation.title}>
            <DataTable
              caption={data.sections.stimulation.tableCaption}
              headers={data.sections.stimulation.tableHeaders}
              rows={data.sections.stimulation.tableData}
            />
          </ArticleSection>

          <ArticleSection title={data.sections.equipment.title}>
            <DataTable
              caption={data.sections.equipment.tableCaption}
              headers={data.sections.equipment.tableHeaders}
              rows={data.sections.equipment.tableData}
            />
          </ArticleSection>

          <ArticleSection title={data.sections.calendar.title}>
            <DataTable
              caption={data.sections.calendar.tableCaption}
              headers={data.sections.calendar.tableHeaders}
              rows={data.sections.calendar.tableData}
            />
          </ArticleSection>

          <ArticleSection title={data.sections.benefits.title}>
            <FeatureGrid columns={2}>
              {(data.sections.benefits.items || []).map((item: { title: string; description: string }, idx: number) => (
                <FeatureCard
                  key={idx}
                  icon={<IconCheck style={{ width: 24, height: 24 }} />}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </FeatureGrid>
          </ArticleSection>

          <HighlightBox variant="warning">
            <strong>{data.highlightBoxes.warning.label}</strong> {data.highlightBoxes.warning.text}
          </HighlightBox>
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
