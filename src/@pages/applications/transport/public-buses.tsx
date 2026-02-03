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

interface PublicBusesPageProps {
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
      highlight?: string
      comparisonTitle?: string
    }
  }
}

export function PublicBusesPage({ staticData, lang }: PublicBusesPageProps) {
  const { t } = useTranslate()
  const ns = getCategoryNamespace('transport')

  // get category data from staticData
  const categoryData = (staticData as Record<string, { subcategories?: { 'public-buses'?: SubcategoryData } }>)[
    `${lang}:${ns}`
  ]
  const data = categoryData?.subcategories?.['public-buses']

  const breadcrumbs = [
    { label: t('nav.applications', { ns: NAMESPACES.common }), href: '/applications' },
    { label: t('title', { ns }), href: '/applications/transport' },
    { label: t('subcategories.public-buses.title', { ns }) },
  ]

  return (
    <Layout>
      <Seo
        title={t('subcategories.public-buses.title', { ns })}
        description={t('subcategories.public-buses.shortDesc', { ns })}
      />

      <ArticleHero
        title={t('subcategories.public-buses.title', { ns })}
        description={t('subcategories.public-buses.shortDesc', { ns })}
        image="https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=1920&q=80"
        imageAlt={t('subcategories.public-buses.title', { ns })}
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
              value={data?.stats?.power?.value ?? ''}
              label={data?.stats?.power?.label ?? ''}
              description={data?.stats?.power?.description ?? ''}
              variant="primary"
            />
            <StatCard
              value={data?.stats?.consumables?.value ?? ''}
              label={data?.stats?.consumables?.label ?? ''}
              description={data?.stats?.consumables?.description ?? ''}
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

          <ArticleSection title={data?.sections?.sanitationProblems?.title}>
            <Paragraph>{data?.sections?.sanitationProblems?.text ?? ''}</Paragraph>
            <BulletList items={(data?.sections?.sanitationProblems?.items as string[]) ?? []} />
          </ArticleSection>

          <ArticleSection title={data?.sections?.technology?.title}>
            <Paragraph>{data?.sections?.technology?.text ?? ''}</Paragraph>

            <ProcessList steps={data?.sections?.technology?.steps ?? []} />

            <HighlightBox variant="success">{data?.sections?.technology?.highlight ?? ''}</HighlightBox>
          </ArticleSection>

          <ArticleSection title={data?.sections?.modes?.title}>
            <DataTable
              caption={data?.sections?.modes?.tableCaption}
              headers={data?.sections?.modes?.tableHeaders ?? []}
              rows={data?.sections?.modes?.tableData ?? []}
            />

            <Paragraph>{data?.sections?.modes?.text ?? ''}</Paragraph>
          </ArticleSection>

          <ArticleSection title={data?.sections?.pathogenEfficiency?.title}>
            <Paragraph>{data?.sections?.pathogenEfficiency?.text ?? ''}</Paragraph>

            <DataTable
              caption={data?.sections?.pathogenEfficiency?.tableCaption}
              headers={data?.sections?.pathogenEfficiency?.tableHeaders ?? []}
              rows={data?.sections?.pathogenEfficiency?.tableData ?? []}
            />
          </ArticleSection>

          <ArticleSection title={data?.sections?.odorRemoval?.title}>
            <Paragraph>{data?.sections?.odorRemoval?.text ?? ''}</Paragraph>
            <BulletList items={(data?.sections?.odorRemoval?.items as string[]) ?? []} />

            <Paragraph>{data?.sections?.odorRemoval?.text2 ?? ''}</Paragraph>
          </ArticleSection>

          <ArticleSection title={data?.sections?.integration?.title}>
            <FeatureGrid columns={2}>
              {((data?.sections?.integration?.items as Array<{ title: string; description: string }>) ?? []).map(
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

            <HighlightBox variant="info">
              <strong>{(data?.sections?.economics?.highlight as { title?: string } | undefined)?.title ?? ''}</strong>{' '}
              {(data?.sections?.economics?.highlight as { text?: string } | undefined)?.text ?? ''}
            </HighlightBox>
          </ArticleSection>

          <ArticleSection title={data?.sections?.equipment?.title}>
            <Paragraph>{data?.sections?.equipment?.text ?? ''}</Paragraph>
            <BulletList items={(data?.sections?.equipment?.items as string[]) ?? []} />

            <DataTable
              caption={data?.sections?.equipment?.tableCaption}
              headers={data?.sections?.equipment?.tableHeaders ?? []}
              rows={data?.sections?.equipment?.tableData ?? []}
            />
          </ArticleSection>

          <ArticleSection title={data?.sections?.compliance?.title}>
            <Paragraph>{data?.sections?.compliance?.text ?? ''}</Paragraph>
            <BulletList items={(data?.sections?.compliance?.items as string[]) ?? []} />

            <HighlightBox variant="warning">
              <strong>{data?.sections?.compliance?.warning?.title ?? ''}</strong>{' '}
              {data?.sections?.compliance?.warning?.text ?? ''}
            </HighlightBox>
          </ArticleSection>

          <ArticleSection title={data?.sections?.safety?.title}>
            <Paragraph>{data?.sections?.safety?.text ?? ''}</Paragraph>
            <BulletList items={(data?.sections?.safety?.items as string[]) ?? []} />
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
