import { TolgeeStaticDataProp, useTranslate } from '@tolgee/react'

import { Layout } from '@/widgets/layout'

import { getCategoryNamespace, NAMESPACES, TLocale } from '@/shared/config/tolgee'
import {
  ArticleHero,
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
import { IconCheck } from '@/shared/ui/icons'
import { Seo } from '@/shared/ui/seo'

interface ShippingContainersPageProps {
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
      intro?: string
      paragraph1?: string
      paragraph2?: string
      text?: string
      text2?: string
      items?: string[] | Array<{ title: string; description: string }>
      tableCaption?: string
      tableHeaders?: string[]
      tableData?: string[][]
      steps?: Array<{ title: string; description: string }>
      note?: string
      warning?: { title: string; text: string }
      highlight?: { title: string; text: string }
      comparisonTitle?: string
      features?: Array<{ title: string; description: string }>
    }
  }
}

export function ShippingContainersPage({ staticData, lang }: ShippingContainersPageProps) {
  const { t } = useTranslate()
  const ns = getCategoryNamespace('transport')

  // get category data from staticData
  const categoryData = (staticData as Record<string, { subcategories?: { 'shipping-containers'?: SubcategoryData } }>)[
    `${lang}:${ns}`
  ]
  const data = categoryData?.subcategories?.['shipping-containers']

  const breadcrumbs = [
    { label: t('nav.applications', { ns: NAMESPACES.common }), href: '/applications' },
    { label: t('title', { ns }), href: '/applications/transport' },
    { label: t('subcategories.shipping-containers.title', { ns }) },
  ]

  return (
    <Layout>
      <Seo
        title={t('subcategories.shipping-containers.title', { ns })}
        description={t('subcategories.shipping-containers.shortDesc', { ns })}
      />

      <ArticleHero
        title={t('subcategories.shipping-containers.title', { ns })}
        description={t('subcategories.shipping-containers.shortDesc', { ns })}
        image="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1920&q=80"
        imageAlt={t('subcategories.shipping-containers.title', { ns })}
        breadcrumbs={breadcrumbs}
        backLink={{
          href: '/applications/transport',
          label: t('title', { ns }),
        }}
      />

      {/* Key Stats */}
      <section className="bg-bg-light py-12">
        <div className="container">
          <StatGrid columns={4}>
            <StatCard
              value={data?.stats?.cycle?.value ?? ''}
              label={data?.stats?.cycle?.label ?? ''}
              description={data?.stats?.cycle?.description ?? ''}
              variant="primary"
            />
            <StatCard
              value={data?.stats?.eggs?.value ?? ''}
              label={data?.stats?.eggs?.label ?? ''}
              description={data?.stats?.eggs?.description ?? ''}
              variant="accent"
            />
            <StatCard
              value={data?.stats?.residues?.value ?? ''}
              label={data?.stats?.residues?.label ?? ''}
              description={data?.stats?.residues?.description ?? ''}
              variant="primary"
            />
            <StatCard
              value={data?.stats?.sizes?.value ?? ''}
              label={data?.stats?.sizes?.label ?? ''}
              description={data?.stats?.sizes?.description ?? ''}
              variant="accent"
            />
          </StatGrid>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-12 md:py-20">
        <div className="container max-w-4xl">
          <ArticleSection>
            <Paragraph>{data?.sections?.intro?.paragraph1 ?? ''}</Paragraph>
            <Paragraph>{data?.sections?.intro?.paragraph2 ?? ''}</Paragraph>
          </ArticleSection>

          <HighlightBox variant="info">
            <strong>{data?.sections?.highlight1?.title ?? ''}</strong> {data?.sections?.highlight1?.text ?? ''}
          </HighlightBox>

          <ArticleSection title={data?.sections?.problems?.title}>
            <Paragraph>{data?.sections?.problems?.text ?? ''}</Paragraph>
            <BulletList items={(data?.sections?.problems?.items as string[]) ?? []} />
          </ArticleSection>

          <ArticleSection title={data?.sections?.comparison?.title}>
            <ComparisonTable
              title={data?.sections?.comparison?.comparisonTitle ?? ''}
              headers={
                (data?.sections?.comparison?.tableHeaders ?? []) as
                  | [string, string, string]
                  | [string, string, string, string]
              }
              rows={
                (data?.sections?.comparison?.tableData ?? []) as unknown as Array<{
                  parameter: string
                  value1: string
                  value2: string
                  value3?: string
                }>
              }
            />
          </ArticleSection>

          <ArticleSection title={data?.sections?.technology?.title}>
            <ProcessList steps={data?.sections?.technology?.steps ?? []} />

            <HighlightBox variant="success">{String(data?.sections?.technology?.highlight ?? '')}</HighlightBox>
          </ArticleSection>

          <ArticleSection title={data?.sections?.modes?.title}>
            <DataTable
              caption={data?.sections?.modes?.tableCaption}
              headers={data?.sections?.modes?.tableHeaders ?? []}
              rows={data?.sections?.modes?.tableData ?? []}
            />

            <Paragraph>{data?.sections?.modes?.text ?? ''}</Paragraph>
          </ArticleSection>

          <ArticleSection title={data?.sections?.efficiency?.title}>
            <DataTable
              caption={data?.sections?.efficiency?.tableCaption}
              headers={data?.sections?.efficiency?.tableHeaders ?? []}
              rows={data?.sections?.efficiency?.tableData ?? []}
            />

            <HighlightBox variant="info">
              <strong>{data?.sections?.efficiency?.highlight?.title ?? ''}</strong>{' '}
              {data?.sections?.efficiency?.highlight?.text ?? ''}
            </HighlightBox>
          </ArticleSection>

          <ArticleSection title={data?.sections?.types?.title}>
            <FeatureGrid columns={2}>
              {((data?.sections?.types?.features as Array<{ title: string; description: string }>) ?? []).map(
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

            <DataTable
              caption={data?.sections?.types?.tableCaption}
              headers={data?.sections?.types?.tableHeaders ?? []}
              rows={data?.sections?.types?.tableData ?? []}
            />
          </ArticleSection>

          <ArticleSection title={data?.sections?.applications?.title}>
            <Paragraph>{data?.sections?.applications?.text ?? ''}</Paragraph>
            <BulletList items={(data?.sections?.applications?.items as string[]) ?? []} />

            <HighlightBox variant="warning">
              <strong>{data?.sections?.applications?.warning?.title ?? ''}</strong>{' '}
              {data?.sections?.applications?.warning?.text ?? ''}
            </HighlightBox>
          </ArticleSection>

          <ArticleSection title={data?.sections?.economics?.title}>
            <ComparisonTable
              title={data?.sections?.economics?.comparisonTitle ?? ''}
              headers={
                (data?.sections?.economics?.tableHeaders ?? []) as
                  | [string, string, string]
                  | [string, string, string, string]
              }
              rows={
                (data?.sections?.economics?.tableData ?? []) as unknown as Array<{
                  parameter: string
                  value1: string
                  value2: string
                  value3?: string
                }>
              }
            />

            <Paragraph>{data?.sections?.economics?.text ?? ''}</Paragraph>
          </ArticleSection>

          <ArticleSection title={data?.sections?.equipment?.title}>
            <Paragraph>{data?.sections?.equipment?.text ?? ''}</Paragraph>
            <BulletList items={(data?.sections?.equipment?.items as string[]) ?? []} />

            <HighlightBox variant="success">
              <strong>{data?.sections?.equipment?.highlight?.title ?? ''}</strong>{' '}
              {data?.sections?.equipment?.highlight?.text ?? ''}
            </HighlightBox>
          </ArticleSection>

          <ArticleSection title={data?.sections?.regulatory?.title}>
            <Paragraph>{data?.sections?.regulatory?.text ?? ''}</Paragraph>
            <BulletList items={(data?.sections?.regulatory?.items as string[]) ?? []} />

            <Paragraph>{data?.sections?.regulatory?.text2 ?? ''}</Paragraph>
          </ArticleSection>

          <ArticleSection title={data?.sections?.safety?.title}>
            <BulletList items={(data?.sections?.safety?.items as string[]) ?? []} />

            <HighlightBox variant="warning">
              <strong>{data?.sections?.safety?.warning?.title ?? ''}</strong>{' '}
              {data?.sections?.safety?.warning?.text ?? ''}
            </HighlightBox>
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
          href: 'tel:+78001234567',
        }}
      />
    </Layout>
  )
}
