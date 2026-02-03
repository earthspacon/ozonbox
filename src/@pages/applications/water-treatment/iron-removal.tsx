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

interface IronRemovalPageProps {
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
      title?: string
      paragraph?: string
      paragraph1?: string
      paragraph2?: string
      text?: string
      items?: string[] | Array<{ title: string; description: string }>
      tableCaption?: string
      tableHeaders?: string[]
      tableData?: string[][]
      headers?: string[]
      rows?: Array<{ parameter: string; value1: string; value2: string; value3?: string }>
      steps?: Array<{ title: string; description: string }>
      note?: string
      warning?: { title: string; text: string }
      reactionLabel?: string
      reaction1?: string
      reaction2?: string
      reaction?: string
      description?: string
      importantLabel?: string
      importantText?: string
      advantageLabel?: string
      advantageText?: string
      noteLabel?: string
      noteText?: string
      table?: {
        caption?: string
        headers?: string[]
        rows?: string[][]
      }
    }
  }
}

export function IronRemovalPage({ staticData, lang }: IronRemovalPageProps) {
  const { t } = useTranslate()
  const ns = getCategoryNamespace('water-treatment')

  // get category data from staticData
  const categoryData = (staticData as Record<string, { subcategories?: { 'iron-removal'?: SubcategoryData } }>)[
    `${lang}:${ns}`
  ]
  const data = categoryData?.subcategories?.['iron-removal']

  return (
    <Layout>
      <Seo
        title={t('subcategories.iron-removal.title', { ns })}
        description={t('subcategories.iron-removal.shortDesc', { ns })}
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
            <span className="text-text-primary font-medium">{t('subcategories.iron-removal.title', { ns })}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1527689368864-3a821dbccc34?w=1920&q=80"
            alt={t('subcategories.iron-removal.title', { ns })}
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
            {t('subcategories.iron-removal.title', { ns })}
          </h1>
          <p className="max-w-3xl text-xl text-white/80 md:text-2xl">
            {t('subcategories.iron-removal.shortDesc', { ns })}
          </p>
        </div>
      </section>

      {/* Key Stats */}
      <section className="bg-bg-light py-12">
        <div className="container">
          <StatGrid columns={4}>
            <StatCard
              value={data?.stats?.ozoneForIron?.value ?? ''}
              label={data?.stats?.ozoneForIron?.label ?? ''}
              description={data?.stats?.ozoneForIron?.description ?? ''}
              variant="primary"
            />
            <StatCard
              value={data?.stats?.ozoneForManganese?.value ?? ''}
              label={data?.stats?.ozoneForManganese?.label ?? ''}
              description={data?.stats?.ozoneForManganese?.description ?? ''}
              variant="accent"
            />
            <StatCard
              value={data?.stats?.residualIron?.value ?? ''}
              label={data?.stats?.residualIron?.label ?? ''}
              description={data?.stats?.residualIron?.description ?? ''}
              variant="primary"
            />
            <StatCard
              value={data?.stats?.residualManganese?.value ?? ''}
              label={data?.stats?.residualManganese?.label ?? ''}
              description={data?.stats?.residualManganese?.description ?? ''}
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
            <strong>{data?.sections?.intro?.warning?.title ?? ''}</strong> {data?.sections?.intro?.warning?.text ?? ''}
          </HighlightBox>

          <ArticleSection title={data?.sections?.comparison?.title}>
            <ComparisonTable
              headers={
                (data?.sections?.comparison?.headers as [string, string, string] | [string, string, string, string]) ??
                []
              }
              rows={data?.sections?.comparison?.rows ?? []}
            />
          </ArticleSection>

          <ArticleSection title={data?.sections?.ironChemistry?.title}>
            <HighlightBox variant="info">
              <strong>{data?.sections?.ironChemistry?.reactionLabel ?? ''}</strong>
              <br />
              {data?.sections?.ironChemistry?.reaction1 ?? ''}
              <br />
              {data?.sections?.ironChemistry?.reaction2 ?? ''}
              <br />
              <br />
              {data?.sections?.ironChemistry?.description ?? ''}
            </HighlightBox>

            <DataTable
              caption={data?.sections?.ironChemistry?.table?.caption}
              headers={data?.sections?.ironChemistry?.table?.headers ?? []}
              rows={data?.sections?.ironChemistry?.table?.rows ?? []}
            />
          </ArticleSection>

          <ArticleSection title={data?.sections?.manganeseChemistry?.title}>
            <HighlightBox variant="info">
              <strong>{data?.sections?.manganeseChemistry?.reactionLabel ?? ''}</strong>
              <br />
              {data?.sections?.manganeseChemistry?.reaction ?? ''}
              <br />
              <br />
              {data?.sections?.manganeseChemistry?.description ?? ''}
            </HighlightBox>

            <Paragraph>
              <strong>{data?.sections?.manganeseChemistry?.importantLabel ?? ''}</strong>{' '}
              {data?.sections?.manganeseChemistry?.importantText ?? ''}
            </Paragraph>
          </ArticleSection>

          <ArticleSection title={data?.sections?.process?.title}>
            <ProcessList steps={data?.sections?.process?.steps ?? []} />
          </ArticleSection>

          <ArticleSection title={data?.sections?.doubleOzonation?.title}>
            <Paragraph>{data?.sections?.doubleOzonation?.paragraph ?? ''}</Paragraph>

            <DataTable
              caption={data?.sections?.doubleOzonation?.table?.caption}
              headers={data?.sections?.doubleOzonation?.table?.headers ?? []}
              rows={data?.sections?.doubleOzonation?.table?.rows ?? []}
            />
          </ArticleSection>

          <ArticleSection title={data?.sections?.organicComplexes?.title}>
            <Paragraph>{data?.sections?.organicComplexes?.paragraph ?? ''}</Paragraph>

            <BulletList items={(data?.sections?.organicComplexes?.items as string[]) ?? []} />

            <HighlightBox variant="success">
              <strong>{data?.sections?.organicComplexes?.advantageLabel ?? ''}</strong>{' '}
              {data?.sections?.organicComplexes?.advantageText ?? ''}
            </HighlightBox>
          </ArticleSection>

          <ArticleSection title={data?.sections?.systemParams?.title}>
            <DataTable
              caption={data?.sections?.systemParams?.table?.caption}
              headers={data?.sections?.systemParams?.table?.headers ?? []}
              rows={data?.sections?.systemParams?.table?.rows ?? []}
            />

            <Paragraph>
              <strong>{data?.sections?.systemParams?.noteLabel ?? ''}</strong>{' '}
              {data?.sections?.systemParams?.noteText ?? ''}
            </Paragraph>
          </ArticleSection>

          <ArticleSection title={data?.sections?.benefits?.title}>
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

          <ArticleSection title={data?.sections?.regulations?.title}>
            <DataTable
              caption={data?.sections?.regulations?.table?.caption}
              headers={data?.sections?.regulations?.table?.headers ?? []}
              rows={data?.sections?.regulations?.table?.rows ?? []}
            />

            <BulletList items={(data?.sections?.regulations?.items as string[]) ?? []} />
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
