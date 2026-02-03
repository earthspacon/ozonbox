/* eslint-disable @typescript-eslint/no-explicit-any */
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
  StatCard,
  StatGrid,
} from '@/shared/ui/article-components'
import { IconCheck } from '@/shared/ui/icons'
import { Seo } from '@/shared/ui/seo'

interface BottledWaterPageProps {
  staticData: TolgeeStaticDataProp
  lang: TLocale
}

export function BottledWaterPage({ staticData, lang }: BottledWaterPageProps) {
  const { t } = useTranslate()
  const ns = getCategoryNamespace('food-production')

  // get category data from staticData
  const categoryData = (staticData as Record<string, { subcategories?: { 'bottled-water'?: any } }>)[
    `${lang}:${ns}`
  ]
  const data = categoryData?.subcategories?.['bottled-water']

  const breadcrumbs = [
    { label: t('nav.applications', { ns: NAMESPACES.common }), href: '/applications' },
    { label: t('title', { ns }), href: '/applications/food-production' },
    { label: t('subcategories.bottled-water.title', { ns }) },
  ]

  return (
    <Layout>
      <Seo
        title={t('subcategories.bottled-water.title', { ns })}
        description={t('subcategories.bottled-water.shortDesc', { ns })}
      />

      <ArticleHero
        title={t('subcategories.bottled-water.title', { ns })}
        description={t('subcategories.bottled-water.shortDesc', { ns })}
        image="https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=1920&q=80"
        imageAlt={t('subcategories.bottled-water.title', { ns })}
        breadcrumbs={breadcrumbs}
        backLink={{
          href: '/applications/food-production',
          label: t('title', { ns }),
        }}
      />

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
      <article className="py-12 md:py-20">
        <div className="container max-w-4xl">
          <ArticleSection>
            <Paragraph>{data?.sections?.intro?.text ?? ''}</Paragraph>
            <Paragraph>{data?.sections?.intro?.text2 ?? ''}</Paragraph>
          </ArticleSection>

          <HighlightBox variant="info">
            <strong>{data?.sections?.highlight1?.title ?? ''}</strong> {data?.sections?.highlight1?.text ?? ''}
          </HighlightBox>

          <ArticleSection title={data?.sections?.benefits?.title}>
            <BulletList items={(data?.sections?.benefits?.items as string[]) ?? []} />
          </ArticleSection>

          <ArticleSection title={data?.sections?.requirements?.title}>
            <DataTable
              caption={data?.sections?.requirements?.tableCaption}
              headers={data?.sections?.requirements?.tableHeaders ?? []}
              rows={data?.sections?.requirements?.tableData ?? []}
            />

            <HighlightBox variant="success">
              {typeof data?.sections?.requirements?.highlight === 'object'
                ? ((data.sections.requirements.highlight as { text?: string }).text ?? '')
                : ((data?.sections?.requirements?.highlight as string) ?? '')}
            </HighlightBox>
          </ArticleSection>

          <ArticleSection title={data?.sections?.scheme?.title}>
            <Paragraph>{data?.sections?.scheme?.text ?? ''}</Paragraph>

            <DataTable
              caption={data?.sections?.scheme?.tableCaption}
              headers={data?.sections?.scheme?.tableHeaders ?? []}
              rows={data?.sections?.scheme?.tableData ?? []}
            />
          </ArticleSection>

          <ArticleSection title={data?.sections?.limitations?.title}>
            <Paragraph>{data?.sections?.limitations?.text ?? ''}</Paragraph>
            <Paragraph>{data?.sections?.limitations?.text2 ?? ''}</Paragraph>
          </ArticleSection>

          <ComparisonTable
            title={data?.sections?.comparison?.title ?? ''}
            headers={
              (data?.sections?.comparison?.headers ?? []) as [string, string, string] | [string, string, string, string]
            }
            rows={
              (data?.sections?.comparison?.rows as Array<{ parameter: string; value1: string; value2: string }>) ?? []
            }
          />

          <ArticleSection title={data?.sections?.producerBenefits?.title}>
            <FeatureGrid columns={2}>
              {(
                (data?.sections?.producerBenefits?.features as Array<{ title: string; description: string }>) ?? []
              ).map((item, idx) => (
                <FeatureCard
                  key={idx}
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
