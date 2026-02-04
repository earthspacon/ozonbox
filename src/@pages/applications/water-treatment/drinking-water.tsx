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
  Paragraph,
  ProcessList,
  StatCard,
  StatGrid,
} from '@/shared/ui/article-components'
import { IconArrowLeft, IconCheck } from '@/shared/ui/icons'
import { Seo } from '@/shared/ui/seo'

interface DrinkingWaterPageProps {
  staticData: TolgeeStaticDataProp
  lang: TLocale
}

export function DrinkingWaterPage({ staticData, lang }: DrinkingWaterPageProps) {
  const { t } = useTranslate()
  const ns = getCategoryNamespace('water-treatment')

  const categoryData = (staticData as any)[`${lang}:${ns}`]
  const data = categoryData?.subcategories?.['drinking-water']

  return (
    <Layout>
      <Seo
        title={t('subcategories.drinking-water.title', { ns })}
        description={t('subcategories.drinking-water.shortDesc', { ns })}
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
              href="/applications/water-treatment"
              className="text-text-secondary hover:text-primary transition-colors"
            >
              {t('title', { ns })}
            </AppLink>
            <span className="text-text-light">/</span>
            <span className="text-text-primary font-medium">{t('subcategories.drinking-water.title', { ns })}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=1920&q=80"
            alt={t('subcategories.drinking-water.title', { ns })}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        </div>
        <div className="relative z-10 container">
          <AppLink
            href="/applications/water-treatment"
            className="mb-6 inline-flex items-center gap-2 text-white/80 transition-colors hover:text-white"
          >
            <IconArrowLeft style={{ width: 20, height: 20 }} />
            <span>{t('title', { ns })}</span>
          </AppLink>
          <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            {t('subcategories.drinking-water.title', { ns })}
          </h1>
          <p className="max-w-3xl text-xl text-white/80 md:text-2xl">
            {t('subcategories.drinking-water.shortDesc', { ns })}
          </p>
        </div>
      </section>

      {/* Key Stats */}
      <section className="bg-bg-light py-12">
        <div className="container">
          <StatGrid columns={4}>
            <StatCard
              value={data?.stats?.disinfection?.value}
              label={data?.stats?.disinfection?.label}
              description={data?.stats?.disinfection?.description}
              variant="primary"
            />
            <StatCard
              value={data?.stats?.byproducts?.value}
              label={data?.stats?.byproducts?.label}
              description={data?.stats?.byproducts?.description}
              variant="accent"
            />
            <StatCard
              value={data?.stats?.chlorine?.value}
              label={data?.stats?.chlorine?.label}
              description={data?.stats?.chlorine?.description}
              variant="primary"
            />
            <StatCard
              value={data?.stats?.decay?.value}
              label={data?.stats?.decay?.label}
              description={data?.stats?.decay?.description}
              variant="accent"
            />
          </StatGrid>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-12 md:py-16">
        <div className="container max-w-4xl">
          <ArticleSection>
            <Paragraph>{data?.sections?.intro?.paragraph1}</Paragraph>
            <Paragraph>{data?.sections?.intro?.paragraph2}</Paragraph>
          </ArticleSection>

          <HighlightBox variant="warning">
            <strong>{data?.sections?.intro?.warningLabel}</strong> {data?.sections?.intro?.warningText}
          </HighlightBox>

          <ArticleSection title={data?.sections?.comparison?.title}>
            <ComparisonTable headers={data?.sections?.comparison?.headers} rows={data?.sections?.comparison?.rows} />
          </ArticleSection>

          <ArticleSection title={data?.sections?.technicalParams?.title}>
            <DataTable
              caption={data?.sections?.technicalParams?.tableCaption}
              headers={data?.sections?.technicalParams?.tableHeaders}
              rows={data?.sections?.technicalParams?.tableData}
            />

            <HighlightBox variant="info">
              <strong>{data?.sections?.technicalParams?.infoLabel}</strong> {data?.sections?.technicalParams?.infoText}
            </HighlightBox>
          </ArticleSection>

          <ArticleSection title={data?.sections?.process?.title}>
            <ProcessList steps={data?.sections?.process?.steps} />
          </ArticleSection>

          <ArticleSection title={data?.sections?.pathogens?.title}>
            <BulletList items={data?.sections?.pathogens?.items} />
          </ArticleSection>

          <ArticleSection title={data?.sections?.effectiveness?.title}>
            <DataTable
              caption={data?.sections?.effectiveness?.tableCaption}
              headers={data?.sections?.effectiveness?.tableHeaders}
              rows={data?.sections?.effectiveness?.tableData}
            />

            <HighlightBox variant="success">{data?.sections?.effectiveness?.highlightBox}</HighlightBox>
          </ArticleSection>

          <ArticleSection title={data?.sections?.benefits?.title}>
            <FeatureGrid columns={2}>
              {(data?.sections?.benefits?.items as Array<{ title: string; description: string }> | undefined)?.map(
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

          <ArticleSection title={data?.sections?.productivity?.title}>
            <DataTable
              caption={data?.sections?.productivity?.tableCaption}
              headers={data?.sections?.productivity?.tableHeaders}
              rows={data?.sections?.productivity?.tableData}
            />
          </ArticleSection>

          <ArticleSection title={data?.sections?.regulations?.title}>
            <BulletList items={data?.sections?.regulations?.items} />
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
