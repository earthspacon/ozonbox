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

interface LaundriesPageProps {
  staticData: TolgeeStaticDataProp
  lang: TLocale
}

export function LaundriesPage({ staticData, lang }: LaundriesPageProps) {
  const { t } = useTranslate()
  const ns = getCategoryNamespace('horeca')

  // get category data from staticData
  const categoryData = (staticData as Record<string, { subcategories?: { laundries?: any } }>)[`${lang}:${ns}`]
  const data = categoryData?.subcategories?.laundries

  const breadcrumbs = [
    { label: t('nav.applications', { ns: NAMESPACES.common }), href: '/applications' },
    { label: t('title', { ns }), href: '/applications/horeca' },
    { label: t('subcategories.laundries.title', { ns }) },
  ]

  return (
    <Layout>
      <Seo
        title={t('subcategories.laundries.title', { ns })}
        description={t('subcategories.laundries.shortDesc', { ns })}
      />

      <ArticleHero
        title={t('subcategories.laundries.title', { ns })}
        description={t('subcategories.laundries.shortDesc', { ns })}
        image="https://images.unsplash.com/photo-1545173168-9f1947eebb7f?w=1920&q=80"
        imageAlt={t('subcategories.laundries.title', { ns })}
        breadcrumbs={breadcrumbs}
        backLink={{
          href: '/applications/horeca',
          label: t('title', { ns }),
        }}
      />

      {/* Key Stats */}
      <section className="bg-bg-light py-12">
        <div className="container">
          <StatGrid columns={4}>
            <StatCard
              value={data?.stats?.energySaving?.value ?? ''}
              label={data?.stats?.energySaving?.label ?? ''}
              description={data?.stats?.energySaving?.description ?? ''}
              variant="primary"
            />
            <StatCard
              value={data?.stats?.chemistrySaving?.value ?? ''}
              label={data?.stats?.chemistrySaving?.label ?? ''}
              description={data?.stats?.chemistrySaving?.description ?? ''}
              variant="accent"
            />
            <StatCard
              value={data?.stats?.linenLife?.value ?? ''}
              label={data?.stats?.linenLife?.label ?? ''}
              description={data?.stats?.linenLife?.description ?? ''}
              variant="primary"
            />
            <StatCard
              value={data?.stats?.disinfection?.value ?? ''}
              label={data?.stats?.disinfection?.label ?? ''}
              description={data?.stats?.disinfection?.description ?? ''}
              variant="accent"
            />
          </StatGrid>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-12 md:py-20">
        <div className="container max-w-4xl">
          <ArticleSection>
            <Paragraph>{data?.sections?.intro?.text}</Paragraph>
            <Paragraph>{data?.sections?.intro?.text2}</Paragraph>
          </ArticleSection>

          <HighlightBox variant="success">
            <strong>{data?.sections?.highlight1?.title}</strong> {data?.sections?.highlight1?.text}
          </HighlightBox>

          <ArticleSection title={data?.sections?.economicEffects?.title}>
            <ComparisonTable
              title={data?.sections?.economicEffects?.comparisonTitle}
              headers={
                data?.sections?.economicEffects?.headers as [string, string, string] | [string, string, string, string]
              }
              rows={
                data?.sections?.economicEffects?.rows as Array<{
                  parameter: string
                  value1: string
                  value2: string
                  value3?: string
                }>
              }
            />
          </ArticleSection>

          <ArticleSection title={data?.sections?.coldWater?.title}>
            <Paragraph>{data?.sections?.coldWater?.text}</Paragraph>
            <BulletList items={(data?.sections?.coldWater?.items as string[]) ?? []} />
          </ArticleSection>

          <ArticleSection title={data?.sections?.process?.title}>
            <DataTable
              caption={data?.sections?.process?.tableCaption}
              headers={data?.sections?.process?.tableHeaders ?? []}
              rows={data?.sections?.process?.tableRows ?? []}
            />
            <Paragraph>{data?.sections?.process?.text}</Paragraph>
          </ArticleSection>

          <ArticleSection title={data?.sections?.benefits?.title}>
            <FeatureGrid columns={2}>
              {((data?.sections?.benefits?.items as Array<{ title: string; description: string }>) ?? []).map(
                (item, index) => (
                  <FeatureCard
                    key={index}
                    icon={<IconCheck style={{ width: 24, height: 24 }} />}
                    title={item.title}
                    description={item.description}
                  />
                ),
              )}
            </FeatureGrid>
          </ArticleSection>

          <ArticleSection title={data?.sections?.ozoneClosets?.title}>
            <Paragraph>{data?.sections?.ozoneClosets?.desc}</Paragraph>
            <ProcessList steps={data?.sections?.ozoneClosets?.steps ?? []} />
          </ArticleSection>

          <ArticleSection title={data?.sections?.equipment?.title}>
            <DataTable
              headers={data?.sections?.equipment?.tableHeaders ?? []}
              rows={data?.sections?.equipment?.tableRows ?? []}
            />

            <HighlightBox variant="info">
              <strong>{data?.sections?.equipment?.highlightTitle}</strong> {data?.sections?.equipment?.highlightText}
            </HighlightBox>
          </ArticleSection>

          <ArticleSection title={data?.sections?.limitations?.title}>
            <Paragraph>{data?.sections?.limitations?.text}</Paragraph>
            <BulletList items={(data?.sections?.limitations?.items as string[]) ?? []} />
          </ArticleSection>

          <ArticleSection title={data?.sections?.roi?.title}>
            <BulletList items={(data?.sections?.roi?.items as string[]) ?? []} />
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
