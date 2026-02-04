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
  ProcessList,
  StatCard,
  StatGrid,
} from '@/shared/ui/article-components'
import { IconCheck } from '@/shared/ui/icons'
import { Seo } from '@/shared/ui/seo'

interface WastewaterPageProps {
  staticData: TolgeeStaticDataProp
  lang: TLocale
}

export function WastewaterPage({ staticData, lang }: WastewaterPageProps) {
  const { t } = useTranslate()
  const ns = getCategoryNamespace('water-treatment')

  // get category data from staticData
  const categoryData = (staticData as Record<string, { subcategories?: { wastewater?: any } }>)[`${lang}:${ns}`]
  const data = categoryData?.subcategories?.wastewater

  const breadcrumbs = [
    { label: t('nav.applications', { ns: NAMESPACES.common }), href: '/applications' },
    { label: t('title', { ns }), href: '/applications/water-treatment' },
    { label: t('subcategories.wastewater.title', { ns }) },
  ]

  return (
    <Layout>
      <Seo
        title={t('subcategories.wastewater.title', { ns })}
        description={t('subcategories.wastewater.shortDesc', { ns })}
      />

      <ArticleHero
        title={t('subcategories.wastewater.title', { ns })}
        description={t('subcategories.wastewater.shortDesc', { ns })}
        image="https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=1920&q=80"
        imageAlt={t('subcategories.wastewater.title', { ns })}
        breadcrumbs={breadcrumbs}
        backLink={{
          href: '/applications/water-treatment',
          label: t('title', { ns }),
        }}
      />

      {/* Key Stats */}
      <section className="bg-bg-light py-12">
        <div className="container">
          <StatGrid columns={4}>
            <StatCard
              value={data?.stats?.bpkReduction?.value}
              label={data?.stats?.bpkReduction?.label}
              description={data?.stats?.bpkReduction?.description}
              variant="primary"
            />
            <StatCard
              value={data?.stats?.disinfection?.value}
              label={data?.stats?.disinfection?.label}
              description={data?.stats?.disinfection?.description}
              variant="accent"
            />
            <StatCard
              value={data?.stats?.toxicCompounds?.value}
              label={data?.stats?.toxicCompounds?.label}
              description={data?.stats?.toxicCompounds?.description}
              variant="primary"
            />
            <StatCard
              value={data?.stats?.colorReduction?.value}
              label={data?.stats?.colorReduction?.label}
              description={data?.stats?.colorReduction?.description}
              variant="accent"
            />
          </StatGrid>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-12 md:py-20">
        <div className="container max-w-4xl">
          <ArticleSection>
            <Paragraph>{data?.sections?.intro?.paragraph1}</Paragraph>
            <Paragraph>{data?.sections?.intro?.paragraph2}</Paragraph>
          </ArticleSection>

          <HighlightBox variant="info">
            <strong>{data?.sections?.ecologicalAdvantage?.label}</strong> {data?.sections?.ecologicalAdvantage?.text}
          </HighlightBox>

          <ArticleSection title={data?.sections?.comparison?.title}>
            <ComparisonTable
              headers={
                (data?.sections?.comparison?.headers as [string, string, string] | [string, string, string, string]) ||
                []
              }
              rows={
                (data?.sections?.comparison?.rows as Array<{
                  parameter: string
                  value1: string
                  value2: string
                }>) || []
              }
            />
          </ArticleSection>

          <ArticleSection title={data?.sections?.technicalParams?.title}>
            <DataTable
              caption={data?.sections?.technicalParams?.caption}
              headers={data?.sections?.technicalParams?.headers}
              rows={data?.sections?.technicalParams?.rows}
            />

            <HighlightBox variant="success">{data?.sections?.technicalParams?.highlightBox?.text}</HighlightBox>
          </ArticleSection>

          <ArticleSection title={data?.sections?.process?.title}>
            <ProcessList steps={data?.sections?.process?.steps} />
          </ArticleSection>

          <ArticleSection title={data?.sections?.pollutants?.title}>
            <BulletList items={data?.sections?.pollutants?.items as string[]} />
          </ArticleSection>

          <ArticleSection title={data?.sections?.results?.title}>
            <DataTable
              caption={data?.sections?.results?.caption}
              headers={data?.sections?.results?.headers}
              rows={data?.sections?.results?.rows}
            />

            <Paragraph>{data?.sections?.results?.paragraph}</Paragraph>
          </ArticleSection>

          <ArticleSection title={data?.sections?.benefits?.title}>
            <FeatureGrid columns={2}>
              {(
                (data?.sections?.benefits?.items as Array<{
                  title: string
                  description: string
                }>) || []
              ).map((item: { title: string; description: string }, idx: number) => (
                <FeatureCard
                  key={idx}
                  icon={<IconCheck style={{ width: 24, height: 24 }} />}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </FeatureGrid>
          </ArticleSection>

          <ArticleSection title={data?.sections?.applications?.title}>
            <DataTable
              caption={data?.sections?.applications?.caption}
              headers={data?.sections?.applications?.headers}
              rows={data?.sections?.applications?.rows}
            />
          </ArticleSection>

          <ArticleSection title={data?.sections?.regulations?.title}>
            <BulletList items={data?.sections?.regulations?.items as string[]} />

            <HighlightBox variant="warning">
              <strong>{data?.sections?.regulations?.highlightBox?.label}</strong>{' '}
              {data?.sections?.regulations?.highlightBox?.text}
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
          href: 'tel:+998942909977',
        }}
      />
    </Layout>
  )
}
