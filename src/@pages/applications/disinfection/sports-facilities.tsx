/* eslint-disable @typescript-eslint/no-explicit-any */
import { TolgeeStaticDataProp, useTranslate } from '@tolgee/react'
import Image from 'next/image'

import { Layout } from '@/widgets/layout'

import { getCategoryNamespace, NAMESPACES, TLocale } from '@/shared/config/tolgee'
import { useLang } from '@/shared/lib'
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

interface SportsFacilitiesPageProps {
  staticData: TolgeeStaticDataProp
  lang: TLocale
}

export function SportsFacilitiesPage({ staticData }: SportsFacilitiesPageProps) {
  const { t } = useTranslate()
  const lang = useLang()
  const ns = getCategoryNamespace('disinfection')

  // get category data from staticData
  const categoryData = (staticData as Record<string, { subcategories?: { 'sports-facilities'?: any } }>)[
    `${lang}:${ns}`
  ]
  const data = categoryData?.subcategories?.['sports-facilities']

  return (
    <Layout>
      <Seo
        title={t('subcategories.sports-facilities.title', { ns })}
        description={t('subcategories.sports-facilities.shortDesc', { ns })}
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
              href="/applications/disinfection"
              className="text-text-secondary hover:text-primary transition-colors"
            >
              {t('title', { ns })}
            </AppLink>
            <span className="text-text-light">/</span>
            <span className="text-text-primary font-medium">{t('subcategories.sports-facilities.title', { ns })}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80"
            alt={t('subcategories.sports-facilities.title', { ns })}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        </div>
        <div className="relative z-10 container">
          <AppLink
            href="/applications/disinfection"
            className="mb-6 inline-flex items-center gap-2 text-white/80 transition-colors hover:text-white"
          >
            <IconArrowLeft style={{ width: 20, height: 20 }} />
            <span>{t('title', { ns })}</span>
          </AppLink>
          <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            {t('subcategories.sports-facilities.title', { ns })}
          </h1>
          <p className="max-w-3xl text-xl text-white/80 md:text-2xl">
            {t('subcategories.sports-facilities.shortDesc', { ns })}
          </p>
        </div>
      </section>

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
      <article className="py-12 md:py-16">
        <div className="container max-w-4xl">
          <ArticleSection>
            <Paragraph>{data?.sections?.intro?.paragraph1 ?? ''}</Paragraph>
            <Paragraph>{data?.sections?.intro?.paragraph2 ?? ''}</Paragraph>
          </ArticleSection>

          <HighlightBox variant="warning">
            <strong>{data?.sections?.warning?.title ?? ''}</strong> {data?.sections?.warning?.text ?? ''}
          </HighlightBox>

          <ArticleSection title={data?.sections?.whatDisinfects?.title}>
            <BulletList items={(data?.sections?.whatDisinfects?.items as string[]) ?? []} />
          </ArticleSection>

          <ArticleSection title={data?.sections?.odorProblem?.title}>
            <Paragraph>{data?.sections?.odorProblem?.text ?? ''}</Paragraph>

            <DataTable
              caption={data?.sections?.odorProblem?.tableCaption}
              headers={data?.sections?.odorProblem?.tableHeaders ?? []}
              rows={data?.sections?.odorProblem?.tableData ?? []}
            />
          </ArticleSection>

          <ArticleSection title={data?.sections?.process?.title}>
            <Paragraph>{data?.sections?.process?.text ?? ''}</Paragraph>

            <ProcessList steps={data?.sections?.process?.steps ?? []} />
          </ArticleSection>

          <ArticleSection title={data?.sections?.equipment?.title}>
            <DataTable
              caption={data?.sections?.equipment?.tableCaption}
              headers={data?.sections?.equipment?.tableHeaders ?? []}
              rows={data?.sections?.equipment?.tableData ?? []}
            />

            <HighlightBox variant="info">
              {typeof data?.sections?.equipment?.highlight === 'string' ? (
                data?.sections?.equipment?.highlight
              ) : (
                <>
                  <strong>{data?.sections?.equipment?.highlight?.title ?? ''}</strong>{' '}
                  {data?.sections?.equipment?.highlight?.text ?? ''}
                </>
              )}
            </HighlightBox>
          </ArticleSection>

          <ArticleSection title={data?.sections?.specialZones?.title}>
            <FeatureGrid columns={2}>
              {((data?.sections?.specialZones?.features as Array<{ title: string; description: string }>) ?? []).map(
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

          <ArticleSection title={data?.sections?.pathogens?.title}>
            <DataTable
              caption={data?.sections?.pathogens?.tableCaption}
              headers={data?.sections?.pathogens?.tableHeaders ?? []}
              rows={data?.sections?.pathogens?.tableData ?? []}
            />
          </ArticleSection>

          <ArticleSection title={data?.sections?.comparison?.title}>
            <ComparisonTable
              title={data?.sections?.comparison?.tableTitle ?? ''}
              headers={
                (data?.sections?.comparison?.headers as [string, string, string] | [string, string, string, string]) ??
                []
              }
              rows={(
                (data?.sections?.comparison?.rows as Array<{
                  parameter?: string
                  value1?: string
                  value2?: string
                }>) ?? []
              ).map((row) => ({
                parameter: row.parameter ?? '',
                value1: row.value1 ?? '',
                value2: row.value2 ?? '',
              }))}
            />
          </ArticleSection>

          <ArticleSection title={data?.sections?.benefits?.title}>
            <FeatureGrid columns={2}>
              {((data?.sections?.benefits?.features as Array<{ title: string; description: string }>) ?? []).map(
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

          <ArticleSection title={data?.sections?.safety?.title}>
            <BulletList items={(data?.sections?.safety?.items as string[]) ?? []} />

            <HighlightBox variant="success">
              {typeof data?.sections?.safety?.highlight === 'string' ? data?.sections?.safety?.highlight : ''}
            </HighlightBox>
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
