/* eslint-disable @typescript-eslint/no-explicit-any */
import { TolgeeStaticDataProp, useTranslate } from '@tolgee/react'

import { Layout } from '@/widgets/layout'

import { getCategoryNamespace, NAMESPACES, TLocale } from '@/shared/config/tolgee'
import { useLang } from '@/shared/lib'
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

interface ShoppingMallsPageProps {
  staticData: TolgeeStaticDataProp
  lang: TLocale
}

export function ShoppingMallsPage({ staticData }: ShoppingMallsPageProps) {
  const { t } = useTranslate()
  const lang = useLang()
  const ns = getCategoryNamespace('disinfection')

  // get category data from staticData
  const categoryData = (staticData as Record<string, { subcategories?: { 'shopping-malls'?: any } }>)[`${lang}:${ns}`]
  const data = categoryData?.subcategories?.['shopping-malls']

  const breadcrumbs = [
    { label: t('nav.applications', { ns: NAMESPACES.common }), href: '/applications' },
    { label: t('title', { ns }), href: '/applications/disinfection' },
    { label: t('subcategories.shopping-malls.title', { ns }) },
  ]

  return (
    <Layout>
      <Seo
        title={t('subcategories.shopping-malls.title', { ns })}
        description={t('subcategories.shopping-malls.shortDesc', { ns })}
      />

      <ArticleHero
        title={t('subcategories.shopping-malls.title', { ns })}
        description={t('subcategories.shopping-malls.shortDesc', { ns })}
        image="https://images.pexels.com/photos/13425897/pexels-photo-13425897.jpeg"
        imageAlt={t('subcategories.shopping-malls.title', { ns })}
        breadcrumbs={breadcrumbs}
        backLink={{
          href: '/applications/disinfection',
          label: t('title', { ns }),
        }}
      />

      {/* Key Stats */}
      <section className="bg-bg-light py-12">
        <div className="container">
          <StatGrid columns={4}>
            <StatCard
              value={data?.stats?.visitors?.value ?? ''}
              label={data?.stats?.visitors?.label ?? ''}
              description={data?.stats?.visitors?.description ?? ''}
              variant="primary"
            />
            <StatCard
              value={data?.stats?.protection?.value ?? ''}
              label={data?.stats?.protection?.label ?? ''}
              description={data?.stats?.protection?.description ?? ''}
              variant="accent"
            />
            <StatCard
              value={data?.stats?.odors?.value ?? ''}
              label={data?.stats?.odors?.label ?? ''}
              description={data?.stats?.odors?.description ?? ''}
              variant="primary"
            />
            <StatCard
              value={data?.stats?.chemicals?.value ?? ''}
              label={data?.stats?.chemicals?.label ?? ''}
              description={data?.stats?.chemicals?.description ?? ''}
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
            <strong>{data?.sections?.comfort?.label ?? ''}</strong> {data?.sections?.comfort?.text ?? ''}
          </HighlightBox>

          <ArticleSection title={data?.sections?.zones?.title}>
            <BulletList items={(data?.sections?.zones?.items as string[]) ?? []} />
          </ArticleSection>

          <ArticleSection title={data?.sections?.odorProblem?.title}>
            <Paragraph>{data?.sections?.odorProblem?.intro ?? ''}</Paragraph>

            <DataTable
              caption={data?.sections?.odorProblem?.tableCaption}
              headers={data?.sections?.odorProblem?.tableHeaders ?? []}
              rows={data?.sections?.odorProblem?.tableData ?? []}
            />
          </ArticleSection>

          <ArticleSection title={data?.sections?.organization?.title}>
            <FeatureGrid columns={2}>
              {((data?.sections?.organization?.items as Array<{ title: string; description: string }>) ?? []).map(
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

          <ArticleSection title={data?.sections?.treatmentMode?.title}>
            <ProcessList steps={data?.sections?.treatmentMode?.steps ?? []} />
          </ArticleSection>

          <ArticleSection title={data?.sections?.equipment?.title}>
            <DataTable
              caption={data?.sections?.equipment?.tableCaption}
              headers={data?.sections?.equipment?.tableHeaders ?? []}
              rows={data?.sections?.equipment?.tableData ?? []}
            />

            <HighlightBox variant="success">{data?.sections?.equipment?.highlight ?? ''}</HighlightBox>
          </ArticleSection>

          <ArticleSection title={data?.sections?.pathogens?.title}>
            <DataTable
              caption={data?.sections?.pathogens?.tableCaption}
              headers={data?.sections?.pathogens?.tableHeaders ?? []}
              rows={data?.sections?.pathogens?.tableData ?? []}
            />
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

          <ArticleSection title={data?.sections?.comparison?.title}>
            <ComparisonTable
              title={data?.sections?.comparison?.text ?? ''}
              headers={
                (data?.sections?.comparison?.tableHeaders as unknown as
                  | [string, string, string]
                  | [string, string, string, string]) ?? ['', '', '']
              }
              rows={
                (data?.sections?.comparison?.tableData as unknown as Array<{
                  parameter: string
                  value1: string
                  value2: string
                  value3?: string
                }>) ?? []
              }
            />
          </ArticleSection>

          <ArticleSection title={data?.sections?.safety?.title}>
            <Paragraph>{data?.sections?.safety?.intro ?? ''}</Paragraph>
            <BulletList items={(data?.sections?.safety?.items as string[]) ?? []} />

            <HighlightBox variant="warning">{data?.sections?.safety?.warning ?? ''}</HighlightBox>
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
