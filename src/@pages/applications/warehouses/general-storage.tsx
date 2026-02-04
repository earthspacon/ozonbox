/* eslint-disable @typescript-eslint/no-explicit-any */
import { TolgeeStaticDataProp, useTranslate } from '@tolgee/react'
import Image from 'next/image'

import { Layout } from '@/widgets/layout'

import { getCategoryNamespace, NAMESPACES, TLocale } from '@/shared/config/tolgee'
import { AppLink } from '@/shared/ui/app-link'
import {
  ArticleSection,
  BulletList,
  ComparisonTable,
  CTASection,
  DataTable,
  FeatureCard,
  FeatureGrid,
  HighlightBox,
  NumberedList,
  Paragraph,
  StatCard,
  StatGrid,
} from '@/shared/ui/article-components'
import { IconArrowLeft, IconCheck } from '@/shared/ui/icons'
import { Seo } from '@/shared/ui/seo'

interface GeneralStoragePageProps {
  staticData: TolgeeStaticDataProp
  lang: TLocale
}

export function GeneralStoragePage({ staticData, lang }: GeneralStoragePageProps) {
  const { t } = useTranslate()
  const ns = getCategoryNamespace('warehouses')

  const data = (staticData as any)[`${lang}:${ns}`]?.subcategories?.['general-storage']

  return (
    <Layout>
      <Seo
        title={t('subcategories.general-storage.title', { ns })}
        description={t('subcategories.general-storage.shortDesc', { ns })}
      />
      {/* Breadcrumbs */}
      <div className="bg-bg-light border-border border-b">
        <div className="container py-4">
          <nav className="flex items-center gap-2 text-sm">
            <AppLink href="/applications" className="text-text-secondary hover:text-primary transition-colors">
              {t('nav.applications', { ns: NAMESPACES.common })}
            </AppLink>
            <span className="text-text-light">/</span>
            <AppLink
              href="/applications/warehouses"
              className="text-text-secondary hover:text-primary transition-colors"
            >
              {t('title', { ns })}
            </AppLink>
            <span className="text-text-light">/</span>
            <span className="text-text-primary font-medium">{t('subcategories.general-storage.title', { ns })}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1553413077-190dd305871c?w=1920&q=80"
            alt={t('subcategories.general-storage.title', { ns })}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        </div>
        <div className="relative z-10 container">
          <AppLink
            href="/applications/warehouses"
            className="mb-6 inline-flex items-center gap-2 text-white/80 transition-colors hover:text-white"
          >
            <IconArrowLeft style={{ width: 20, height: 20 }} />
            <span>{t('title', { ns })}</span>
          </AppLink>
          <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            {t('subcategories.general-storage.title', { ns })}
          </h1>
          <p className="max-w-3xl text-xl text-white/80 md:text-2xl">
            {t('subcategories.general-storage.shortDesc', { ns })}
          </p>
        </div>
      </section>

      {/* Key Stats */}
      <section className="bg-bg-light py-12">
        <div className="container">
          <StatGrid columns={4}>
            <StatCard
              value={data.stats.microfloraReduction.value}
              label={data.stats.microfloraReduction.label}
              description={data.stats.microfloraReduction.description}
              variant="primary"
            />
            <StatCard
              value={data.stats.storageExtension.value}
              label={data.stats.storageExtension.label}
              description={data.stats.storageExtension.description}
              variant="accent"
            />
            <StatCard
              value={data.stats.odorElimination.value}
              label={data.stats.odorElimination.label}
              description={data.stats.odorElimination.description}
              variant="primary"
            />
            <StatCard
              value={data.stats.automation.value}
              label={data.stats.automation.label}
              description={data.stats.automation.description}
              variant="accent"
            />
          </StatGrid>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-12 md:py-16">
        <div className="container max-w-4xl">
          <ArticleSection>
            <Paragraph>{data.sections.intro.paragraph1}</Paragraph>
            <Paragraph>{data.sections.intro.paragraph2}</Paragraph>
          </ArticleSection>

          <HighlightBox variant="info">
            <strong>{data.sections.intro.infoLabel}</strong> {data.sections.intro.infoText}
          </HighlightBox>

          <ArticleSection title={data.sections.warehouseTypes.title}>
            <Paragraph>{data.sections.warehouseTypes.paragraph}</Paragraph>

            <DataTable
              caption={data.sections.warehouseTypes.tableCaption}
              headers={data.sections.warehouseTypes.tableHeaders}
              rows={data.sections.warehouseTypes.tableData}
            />
          </ArticleSection>

          <ArticleSection title={data.sections.calculation.title}>
            <Paragraph>{data.sections.calculation.paragraph}</Paragraph>

            <DataTable
              caption={data.sections.calculation.tableCaption}
              headers={data.sections.calculation.tableHeaders}
              rows={data.sections.calculation.tableData}
            />

            <HighlightBox variant="success">
              <strong>{data.sections.calculation.exampleLabel}</strong>{' '}
              {data.sections.calculation.exampleText}
            </HighlightBox>
          </ArticleSection>

          <ArticleSection title={data.sections.hvacIntegration.title}>
            <Paragraph>{data.sections.hvacIntegration.paragraph}</Paragraph>

            <NumberedList items={data.sections.hvacIntegration.numberedItems} />

            <BulletList items={data.sections.hvacIntegration.bulletItems} />
          </ArticleSection>

          <ArticleSection title={data.sections.frequency.title}>
            <Paragraph>{data.sections.frequency.paragraph}</Paragraph>

            <DataTable
              caption={data.sections.frequency.tableCaption}
              headers={data.sections.frequency.tableHeaders}
              rows={data.sections.frequency.tableData}
            />

            <HighlightBox variant="info">
              <strong>{data.sections.frequency.scheduleLabel}</strong>{' '}
              {data.sections.frequency.scheduleText}
            </HighlightBox>
          </ArticleSection>

          <ArticleSection title={data.sections.pestPrevention.title}>
            <Paragraph>{data.sections.pestPrevention.paragraph1}</Paragraph>

            <DataTable
              caption={data.sections.pestPrevention.tableCaption}
              headers={data.sections.pestPrevention.tableHeaders}
              rows={data.sections.pestPrevention.tableData}
            />

            <Paragraph>{data.sections.pestPrevention.paragraph2}</Paragraph>
          </ArticleSection>

          <ArticleSection title={data.sections.airQuality.title}>
            <Paragraph>{data.sections.airQuality.paragraph}</Paragraph>

            <ComparisonTable
              title={data.sections.airQuality.comparisonTitle}
              headers={data.sections.airQuality.comparisonHeaders as [string, string, string]}
              rows={data.sections.airQuality.comparisonRows}
            />

            <HighlightBox variant="warning">
              <strong>{data.sections.airQuality.warningLabel}</strong>{' '}
              {data.sections.airQuality.warningText}
            </HighlightBox>
          </ArticleSection>

          <ArticleSection title={data.sections.compliance.title}>
            <Paragraph>{data.sections.compliance.paragraph}</Paragraph>

            <BulletList items={data.sections.compliance.bulletItems} />
          </ArticleSection>

          <ArticleSection title={data.sections.economics.title}>
            <Paragraph>{data.sections.economics.paragraph1}</Paragraph>

            <DataTable
              caption={data.sections.economics.tableCaption}
              headers={data.sections.economics.tableHeaders}
              rows={data.sections.economics.tableData}
            />

            <Paragraph>{data.sections.economics.paragraph2}</Paragraph>
          </ArticleSection>

          <ArticleSection title={data.sections.benefits.title}>
            <FeatureGrid columns={2}>
              {data.sections.benefits.features.map(
                (feature: { title: string; description: string }, index: number) => (
                  <FeatureCard
                    key={index}
                    icon={<IconCheck style={{ width: 24, height: 24 }} />}
                    title={feature.title}
                    description={feature.description}
                  />
                ),
              )}
            </FeatureGrid>
          </ArticleSection>
        </div>
      </article>

      {/* CTA Section */}
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
