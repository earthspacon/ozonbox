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

interface RailwayPageProps {
  staticData: TolgeeStaticDataProp
  lang: TLocale
}

export function RailwayPage({ staticData, lang }: RailwayPageProps) {
  const { t } = useTranslate()
  const ns = getCategoryNamespace('transport')

  // get category data from staticData
  const categoryData = (staticData as Record<string, { subcategories?: { railway?: any } }>)[
    `${lang}:${ns}`
  ]
  const data = categoryData?.subcategories?.railway

  const breadcrumbs = [
    { label: t('nav.applications', { ns: NAMESPACES.common }), href: '/applications' },
    { label: t('title', { ns }), href: '/applications/transport' },
    { label: t('subcategories.railway.title', { ns }) },
  ]

  return (
    <Layout>
      <Seo
        title={t('subcategories.railway.title', { ns })}
        description={t('subcategories.railway.shortDesc', { ns })}
      />

      <ArticleHero
        title={t('subcategories.railway.title', { ns })}
        description={t('subcategories.railway.shortDesc', { ns })}
        image="https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=1920&q=80"
        imageAlt={t('subcategories.railway.title', { ns })}
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
              value={data?.stats?.time?.value ?? ''}
              label={data?.stats?.time?.label ?? ''}
              description={data?.stats?.time?.description ?? ''}
              variant="primary"
            />
            <StatCard
              value={data?.stats?.efficiency?.value ?? ''}
              label={data?.stats?.efficiency?.label ?? ''}
              description={data?.stats?.efficiency?.description ?? ''}
              variant="accent"
            />
            <StatCard
              value={data?.stats?.compartments?.value ?? ''}
              label={data?.stats?.compartments?.label ?? ''}
              description={data?.stats?.compartments?.description ?? ''}
              variant="primary"
            />
            <StatCard
              value={data?.stats?.coverage?.value ?? ''}
              label={data?.stats?.coverage?.label ?? ''}
              description={data?.stats?.coverage?.description ?? ''}
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

          <ArticleSection title={data?.sections?.sanitation?.title}>
            <Paragraph>{data?.sections?.sanitation?.text ?? ''}</Paragraph>
            <BulletList items={(data?.sections?.sanitation?.items as string[]) ?? []} />
          </ArticleSection>

          <ArticleSection title={data?.sections?.technology?.title}>
            <Paragraph>{data?.sections?.technology?.text ?? ''}</Paragraph>

            <ProcessList steps={data?.sections?.technology?.steps ?? []} />
          </ArticleSection>

          <ArticleSection title={data?.sections?.modes?.title}>
            <DataTable
              caption={data?.sections?.modes?.tableCaption}
              headers={data?.sections?.modes?.tableHeaders ?? []}
              rows={data?.sections?.modes?.tableData ?? []}
            />

            <HighlightBox variant="success">{data?.sections?.modes?.highlight ?? ''}</HighlightBox>
          </ArticleSection>

          <ArticleSection title={data?.sections?.toilets?.title}>
            <Paragraph>{data?.sections?.toilets?.text ?? ''}</Paragraph>
            <BulletList items={(data?.sections?.toilets?.items as string[]) ?? []} />

            <Paragraph>{data?.sections?.toilets?.text2 ?? ''}</Paragraph>
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

          <ArticleSection title={data?.sections?.integration?.title}>
            <FeatureGrid columns={2}>
              {((data?.sections?.integration?.features as Array<{ title: string; description: string }>) ?? []).map(
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

          <ArticleSection title={data?.sections?.freight?.title}>
            <Paragraph>{data?.sections?.freight?.text ?? ''}</Paragraph>
            <BulletList items={(data?.sections?.freight?.items as string[]) ?? []} />

            <HighlightBox variant="info">
              <strong>{(data?.sections?.freight?.highlight as { title?: string } | undefined)?.title ?? ''}</strong>{' '}
              {(data?.sections?.freight?.highlight as { text?: string } | undefined)?.text ?? ''}
            </HighlightBox>
          </ArticleSection>

          <ArticleSection title={data?.sections?.economics?.title}>
            <DataTable
              caption={data?.sections?.economics?.tableCaption}
              headers={data?.sections?.economics?.tableHeaders ?? []}
              rows={data?.sections?.economics?.tableData ?? []}
            />

            <Paragraph>{data?.sections?.economics?.text ?? ''}</Paragraph>
          </ArticleSection>

          <ArticleSection title={data?.sections?.equipment?.title}>
            <Paragraph>{data?.sections?.equipment?.text ?? ''}</Paragraph>
            <BulletList items={(data?.sections?.equipment?.items as string[]) ?? []} />
          </ArticleSection>

          <ArticleSection title={data?.sections?.safety?.title}>
            <Paragraph>{data?.sections?.safety?.text ?? ''}</Paragraph>
            <BulletList items={(data?.sections?.safety?.items as string[]) ?? []} />

            <HighlightBox variant="warning">
              {typeof data?.sections?.safety?.warning === 'string' ? (
                data.sections.safety.warning
              ) : (data?.sections?.safety?.warning as { title?: string; text?: string } | undefined) ? (
                <>
                  <strong>{(data?.sections?.safety?.warning as { title?: string })?.title ?? ''}</strong>{' '}
                  {(data?.sections?.safety?.warning as { text?: string })?.text ?? ''}
                </>
              ) : (
                ''
              )}
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
