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

interface GreenhousesPageProps {
  staticData: TolgeeStaticDataProp
  lang: TLocale
}

export function GreenhousesPage({ staticData, lang }: GreenhousesPageProps) {
  const { t } = useTranslate()
  const ns = getCategoryNamespace('agriculture')

  // get category data from staticData
  const categoryData = (staticData as Record<string, { subcategories?: { greenhouses?: any } }>)[`${lang}:${ns}`]
  const data = categoryData?.subcategories?.greenhouses

  const breadcrumbs = [
    { label: t('nav.applications', { ns: NAMESPACES.common }), href: '/applications' },
    { label: t('title', { ns }), href: '/applications/agriculture' },
    { label: t('subcategories.greenhouses.title', { ns }) },
  ]

  return (
    <Layout>
      <Seo
        title={t('subcategories.greenhouses.title', { ns })}
        description={t('subcategories.greenhouses.shortDesc', { ns })}
      />

      <ArticleHero
        title={t('subcategories.greenhouses.title', { ns })}
        description={t('subcategories.greenhouses.shortDesc', { ns })}
        image="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1920&q=80"
        imageAlt={t('subcategories.greenhouses.title', { ns })}
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
              value={data?.stats?.yieldIncrease?.value ?? ''}
              label={data?.stats?.yieldIncrease?.label ?? ''}
              description={data?.stats?.yieldIncrease?.description ?? ''}
              variant="primary"
            />
            <StatCard
              value={data?.stats?.nematodeDestruction?.value ?? ''}
              label={data?.stats?.nematodeDestruction?.label ?? ''}
              description={data?.stats?.nematodeDestruction?.description ?? ''}
              variant="accent"
            />
            <StatCard
              value={data?.stats?.oxygenIncrease?.value ?? ''}
              label={data?.stats?.oxygenIncrease?.label ?? ''}
              description={data?.stats?.oxygenIncrease?.description ?? ''}
              variant="primary"
            />
            <StatCard
              value={data?.stats?.biomassGrowth?.value ?? ''}
              label={data?.stats?.biomassGrowth?.label ?? ''}
              description={data?.stats?.biomassGrowth?.description ?? ''}
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

          <HighlightBox variant="info">{data.sections.intro.scientificFact}</HighlightBox>

          <ArticleSection title={data.sections.applications.title}>
            <BulletList items={data.sections.applications.items} />
          </ArticleSection>

          <ArticleSection title={data.sections.irrigation.title}>
            <Paragraph>{data.sections.irrigation.intro}</Paragraph>

            <DataTable
              caption={data.sections.irrigation.tableCaption}
              headers={data.sections.irrigation.tableHeaders}
              rows={data.sections.irrigation.tableData}
            />

            <HighlightBox variant="success">{data.sections.irrigation.highlight}</HighlightBox>
          </ArticleSection>

          <ArticleSection title={data.sections.soilDisinfection.title}>
            <Paragraph>{data.sections.soilDisinfection.intro}</Paragraph>

            <DataTable
              caption={data.sections.soilDisinfection.tableCaption}
              headers={data.sections.soilDisinfection.tableHeaders}
              rows={data.sections.soilDisinfection.tableData}
            />

            <ProcessList steps={data.sections.soilDisinfection.steps} />
          </ArticleSection>

          <ArticleSection title={data.sections.airOzonation.title}>
            <Paragraph>{data.sections.airOzonation.intro}</Paragraph>

            <DataTable
              caption={data.sections.airOzonation.tableCaption}
              headers={data.sections.airOzonation.tableHeaders}
              rows={data.sections.airOzonation.tableData}
            />

            {typeof data.sections.airOzonation.warning === 'string' ? (
              <HighlightBox variant="warning">
                <strong>{data.sections.airOzonation.warning}</strong>
              </HighlightBox>
            ) : data.sections.airOzonation.warning ? (
              <HighlightBox variant="warning">
                <strong>{data.sections.airOzonation.warning.title}</strong> {data.sections.airOzonation.warning.text}
              </HighlightBox>
            ) : null}
          </ArticleSection>

          <ArticleSection title={data.sections.seedTreatment.title}>
            <Paragraph>{data.sections.seedTreatment.intro}</Paragraph>

            <DataTable
              caption={data.sections.seedTreatment.tableCaption}
              headers={data.sections.seedTreatment.tableHeaders}
              rows={data.sections.seedTreatment.tableData}
            />
          </ArticleSection>

          <ArticleSection title={data.sections.benefits.title}>
            <FeatureGrid columns={2}>
              {data.sections.benefits.items.map((item: { title: string; description: string }, index: number) => (
                <FeatureCard
                  key={index}
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
