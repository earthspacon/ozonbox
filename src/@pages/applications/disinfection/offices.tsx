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

interface OfficesPageProps {
  staticData: TolgeeStaticDataProp
  lang: TLocale
}

export function OfficesPage({ staticData }: OfficesPageProps) {
  const { t } = useTranslate()
  const lang = useLang()
  const ns = getCategoryNamespace('disinfection')

  // get category data from staticData
  const categoryData = (staticData as Record<string, { subcategories?: { offices?: any } }>)[`${lang}:${ns}`]
  const data = categoryData?.subcategories?.offices

  return (
    <Layout>
      <Seo
        title={t('subcategories.offices.title', { ns })}
        description={t('subcategories.offices.shortDesc', { ns })}
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
            <span className="text-text-primary font-medium">{t('subcategories.offices.title', { ns })}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
            alt={t('subcategories.offices.title', { ns })}
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
            {t('subcategories.offices.title', { ns })}
          </h1>
          <p className="max-w-3xl text-xl text-white/80 md:text-2xl">{t('subcategories.offices.shortDesc', { ns })}</p>
        </div>
      </section>

      {/* Key Stats */}
      <section className="bg-bg-light py-12">
        <div className="container">
          <StatGrid columns={4}>
            <StatCard
              value={data?.stats?.pollution?.value ?? ''}
              label={data?.stats?.pollution?.label ?? ''}
              description={data?.stats?.pollution?.description ?? ''}
              variant="primary"
            />
            <StatCard
              value={data?.stats?.sickLeave?.value ?? ''}
              label={data?.stats?.sickLeave?.label ?? ''}
              description={data?.stats?.sickLeave?.description ?? ''}
              variant="accent"
            />
            <StatCard
              value={data?.stats?.treatment?.value ?? ''}
              label={data?.stats?.treatment?.label ?? ''}
              description={data?.stats?.treatment?.description ?? ''}
              variant="primary"
            />
            <StatCard
              value={data?.stats?.residues?.value ?? ''}
              label={data?.stats?.residues?.label ?? ''}
              description={data?.stats?.residues?.description ?? ''}
              variant="accent"
            />
          </StatGrid>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-12 md:py-16">
        <div className="container max-w-4xl">
          <ArticleSection>
            <Paragraph>{data?.sections?.intro?.text ?? ''}</Paragraph>
            <Paragraph>{data?.sections?.intro?.text2 ?? ''}</Paragraph>
          </ArticleSection>

          <HighlightBox variant="warning">
            <strong>{data?.sections?.highlight1?.title ?? ''}</strong> {data?.sections?.highlight1?.text ?? ''}
          </HighlightBox>

          <ArticleSection title={data?.sections?.airQuality?.title ?? ''}>
            <Paragraph>{data?.sections?.airQuality?.text ?? ''}</Paragraph>
            <BulletList items={(data?.sections?.airQuality?.items as string[]) ?? []} />
          </ArticleSection>

          <ArticleSection title={data?.sections?.effectiveness?.title ?? ''}>
            <Paragraph>{data?.sections?.effectiveness?.text ?? ''}</Paragraph>

            <DataTable
              caption={data?.sections?.effectiveness?.table?.caption}
              headers={data?.sections?.effectiveness?.table?.headers ?? []}
              rows={data?.sections?.effectiveness?.table?.rows ?? []}
            />
          </ArticleSection>

          <ArticleSection title={data?.sections?.whatDisinfects?.title ?? ''}>
            <Paragraph>{data?.sections?.whatDisinfects?.text ?? ''}</Paragraph>

            <BulletList items={(data?.sections?.whatDisinfects?.items as string[]) ?? []} />
          </ArticleSection>

          <ArticleSection title={data?.sections?.treatmentMode?.title ?? ''}>
            <Paragraph>{data?.sections?.treatmentMode?.text ?? ''}</Paragraph>

            <ProcessList steps={data?.sections?.treatmentMode?.steps ?? []} />

            <DataTable
              caption={data?.sections?.treatmentMode?.table?.caption}
              headers={data?.sections?.treatmentMode?.table?.headers ?? []}
              rows={data?.sections?.treatmentMode?.table?.rows ?? []}
            />
          </ArticleSection>

          <ArticleSection title={data?.sections?.comparison?.title ?? ''}>
            <ComparisonTable
              title={data?.sections?.comparison?.table?.title}
              headers={
                (data?.sections?.comparison?.table?.headers as unknown as [string, string, string]) ?? ['', '', '']
              }
              rows={
                (data?.sections?.comparison?.table?.rows as unknown as Array<{
                  parameter: string
                  value1: string
                  value2: string
                }>) ?? []
              }
            />
          </ArticleSection>

          <ArticleSection title={data?.sections?.benefits?.title ?? ''}>
            <FeatureGrid columns={2}>
              {((data?.sections?.benefits?.features as Array<{ title: string; description: string }>) ?? []).map(
                (feature, index) => (
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

          <ArticleSection title={data?.sections?.toiletOdor?.title ?? ''}>
            <Paragraph>{data?.sections?.toiletOdor?.text ?? ''}</Paragraph>

            <HighlightBox variant="info">{data?.sections?.toiletOdor?.highlight?.text ?? ''}</HighlightBox>
          </ArticleSection>

          <ArticleSection title={data?.sections?.safety?.title ?? ''}>
            <BulletList items={(data?.sections?.safety?.items as string[]) ?? []} />
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
