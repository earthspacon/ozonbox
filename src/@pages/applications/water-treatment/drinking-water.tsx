import Image from 'next/image'
import { TolgeeStaticDataProp, useTranslate } from '@tolgee/react'

import { Layout } from '@/widgets/layout'

import { getCategoryNamespace, NAMESPACES, TLocale } from '@/shared/config/tolgee'
import { useLang } from '@/shared/lib'
import { AppLink } from '@/shared/ui/app-link'
import {
  ArticleSection,
  BulletList,
  ComparisonTable,
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

interface SubcategoryData {
  title: string
  shortDesc: string
  stats?: {
    [key: string]: {
      value: string
      label: string
      description: string
    }
  }
  sections?: {
    [key: string]: {
      [key: string]: unknown
    }
  }
}

export function DrinkingWaterPage({ staticData, lang }: DrinkingWaterPageProps) {
  const { t } = useTranslate()
  const ns = getCategoryNamespace('water-treatment')

  // get category data from staticData
  const categoryData = (staticData as Record<string, { subcategories?: { 'drinking-water'?: SubcategoryData } }>)[
    `${lang}:${ns}`
  ]
  const data = categoryData?.subcategories?.['drinking-water']

  return (
    <Layout>
      <Seo title={t('subcategories.drinking-water.title', { ns })} description={t('subcategories.drinking-water.shortDesc', { ns })} />
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
              value={data?.stats?.disinfection?.value ?? ''}
              label={data?.stats?.disinfection?.label ?? ''}
              description={data?.stats?.disinfection?.description ?? ''}
              variant="primary"
            />
            <StatCard
              value={data?.stats?.byproducts?.value ?? ''}
              label={data?.stats?.byproducts?.label ?? ''}
              description={data?.stats?.byproducts?.description ?? ''}
              variant="accent"
            />
            <StatCard
              value={data?.stats?.chlorine?.value ?? ''}
              label={data?.stats?.chlorine?.label ?? ''}
              description={data?.stats?.chlorine?.description ?? ''}
              variant="primary"
            />
            <StatCard
              value={data?.stats?.decay?.value ?? ''}
              label={data?.stats?.decay?.label ?? ''}
              description={data?.stats?.decay?.description ?? ''}
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
            <strong>{data?.sections?.intro?.warningLabel ?? ''}</strong>{' '}
            {data?.sections?.intro?.warningText ?? ''}
          </HighlightBox>

          <ArticleSection title={data?.sections?.comparison?.title ?? ''}>
            <ComparisonTable
              headers={[
                (data?.sections?.comparison?.headers?.[0] as string) ?? '',
                (data?.sections?.comparison?.headers?.[1] as string) ?? '',
                (data?.sections?.comparison?.headers?.[2] as string) ?? '',
              ]}
              rows={(data?.sections?.comparison?.rows as Array<{ parameter: string; value1: string; value2: string }>) ?? []}
            />
          </ArticleSection>

          <ArticleSection title={data?.sections?.technicalParams?.title ?? ''}>
            <DataTable
              caption={data?.sections?.technicalParams?.tableCaption as string}
              headers={(data?.sections?.technicalParams?.tableHeaders as string[]) ?? []}
              rows={(data?.sections?.technicalParams?.tableData as string[][]) ?? []}
            />

            <HighlightBox variant="info">
              <strong>{data?.sections?.technicalParams?.infoLabel ?? ''}</strong>{' '}
              {data?.sections?.technicalParams?.infoText ?? ''}
            </HighlightBox>
          </ArticleSection>

          <ArticleSection title={data?.sections?.process?.title ?? ''}>
            <ProcessList steps={(data?.sections?.process?.steps as Array<{ title: string; description: string }>) ?? []} />
          </ArticleSection>

          <ArticleSection title={data?.sections?.pathogens?.title ?? ''}>
            <BulletList
              items={((data?.sections?.pathogens?.items as string[]) ?? [])}
            />
          </ArticleSection>

          <ArticleSection title={data?.sections?.effectiveness?.title ?? ''}>
            <DataTable
              caption={data?.sections?.effectiveness?.tableCaption as string}
              headers={(data?.sections?.effectiveness?.tableHeaders as string[]) ?? []}
              rows={(data?.sections?.effectiveness?.tableData as string[][]) ?? []}
            />

            <HighlightBox variant="success">
              {data?.sections?.effectiveness?.note ?? ''}
            </HighlightBox>
          </ArticleSection>

          <ArticleSection title={data?.sections?.benefits?.title ?? ''}>
            <FeatureGrid columns={2}>
              {((data?.sections?.benefits?.items as Array<{ title: string; description: string }>) ?? []).map(
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

          <ArticleSection title={data?.sections?.productivity?.title ?? ''}>
            <DataTable
              caption={data?.sections?.productivity?.tableCaption as string}
              headers={(data?.sections?.productivity?.tableHeaders as string[]) ?? []}
              rows={(data?.sections?.productivity?.tableData as string[][]) ?? []}
            />
          </ArticleSection>

          <ArticleSection title={data?.sections?.regulations?.title ?? ''}>
            <BulletList
              items={((data?.sections?.regulations?.items as string[]) ?? [])}
            />
          </ArticleSection>
        </div>
      </article>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <h2 className="cta__title">{t('cta.applications.title', { ns: NAMESPACES.common })}</h2>
          <p className="cta__text">{t('cta.applications.text', { ns: NAMESPACES.common })}</p>
          <div className="cta__actions">
            <AppLink href="/contacts" className="btn btn--white btn--large">
              {t('hero.getConsultation', { ns: NAMESPACES.common })}
            </AppLink>
            <a
              href="tel:+78001234567"
              className="btn btn--secondary btn--large"
              style={{ borderColor: 'white', color: 'white' }}
            >
              {t('header.phone', { ns: NAMESPACES.common })}
            </a>
          </div>
        </div>
      </section>
    </Layout>
  )
}
