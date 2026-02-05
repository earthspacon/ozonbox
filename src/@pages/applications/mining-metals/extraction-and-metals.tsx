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
  SourcesList,
  StatCard,
  StatGrid,
} from '@/shared/ui/article-components'
import { IconCheck } from '@/shared/ui/icons'
import { Seo } from '@/shared/ui/seo'

interface ExtractionAndMetalsPageProps {
  staticData: TolgeeStaticDataProp
  lang: TLocale
}

export function ExtractionAndMetalsPage({ staticData, lang }: ExtractionAndMetalsPageProps) {
  const { t } = useTranslate()
  const ns = getCategoryNamespace('mining-metals')

  const categoryData = (staticData as Record<string, { subcategories?: { 'extraction-and-metals'?: any } }>)[
    `${lang}:${ns}`
  ]
  const data = categoryData?.subcategories?.['extraction-and-metals']

  const breadcrumbs = [
    { label: t('nav.applications', { ns: NAMESPACES.common }), href: '/applications' },
    { label: t('title', { ns }), href: '/applications/mining-metals' },
    { label: t('subcategories.extraction-and-metals.title', { ns }) },
  ]

  return (
    <Layout>
      <Seo
        title={t('subcategories.extraction-and-metals.title', { ns })}
        description={t('subcategories.extraction-and-metals.shortDesc', { ns })}
      />

      <ArticleHero
        title={t('subcategories.extraction-and-metals.title', { ns })}
        description={t('subcategories.extraction-and-metals.shortDesc', { ns })}
        image="https://images.pexels.com/photos/5139216/pexels-photo-5139216.jpeg"
        imageAlt={t('subcategories.extraction-and-metals.title', { ns })}
        breadcrumbs={breadcrumbs}
        backLink={{
          href: '/applications/mining-metals',
          label: t('title', { ns }),
        }}
      />

      <section className="bg-bg-light py-12">
        <div className="container">
          <StatGrid columns={4}>
            <StatCard
              value={data.stats.goldRecovery.value}
              label={data.stats.goldRecovery.label}
              description={data.stats.goldRecovery.description}
              variant="primary"
            />
            <StatCard
              value={data.stats.cyanideReduction.value}
              label={data.stats.cyanideReduction.label}
              description={data.stats.cyanideReduction.description}
              variant="accent"
            />
            <StatCard
              value={data.stats.cycleTime.value}
              label={data.stats.cycleTime.label}
              description={data.stats.cycleTime.description}
              variant="primary"
            />
            <StatCard
              value={data.stats.waterReuse.value}
              label={data.stats.waterReuse.label}
              description={data.stats.waterReuse.description}
              variant="accent"
            />
          </StatGrid>
        </div>
      </section>

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

          <ArticleSection title={data.sections.refractoryOre.title}>
            <Paragraph>{data.sections.refractoryOre.intro}</Paragraph>

            <DataTable
              caption={data.sections.refractoryOre.tableCaption}
              headers={data.sections.refractoryOre.tableHeaders}
              rows={data.sections.refractoryOre.tableData}
            />

            <HighlightBox variant="success">{data.sections.refractoryOre.note}</HighlightBox>
          </ArticleSection>

          <ArticleSection title={data.sections.cyanideDestruction.title}>
            <Paragraph>{data.sections.cyanideDestruction.intro}</Paragraph>

            <DataTable
              caption={data.sections.cyanideDestruction.tableCaption}
              headers={data.sections.cyanideDestruction.tableHeaders}
              rows={data.sections.cyanideDestruction.tableData}
            />
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

          {data.sources?.length > 0 ? <SourcesList items={data.sources} title={data.sourcesTitle} /> : null}
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
