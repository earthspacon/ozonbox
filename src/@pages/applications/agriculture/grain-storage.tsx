import { TolgeeStaticDataProp, useTranslate } from '@tolgee/react'

import { Layout } from '@/widgets/layout'

import { getCategoryNamespace, NAMESPACES, TLocale } from '@/shared/config/tolgee'
import {
  ArticleHero,
  ArticleSection,
  BulletList,
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

interface GrainStoragePageProps {
  staticData: TolgeeStaticDataProp
  lang: TLocale
}

interface SubcategoryData {
  title: string
  shortDesc: string
  benefits?: string[]
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
      items?: string[] | Array<{ title: string; description: string }>
      tableCaption?: string
      tableHeaders?: string[]
      tableData?: string[][]
      steps?: Array<{ title: string; description: string }>
      note?: string
      highlight?: string
      warning?: { title: string; text: string }
      highlightText?: string
      label?: string
      warningLabel?: string
      warningText?: string
    }
  }
}

export function GrainStoragePage({ staticData, lang }: GrainStoragePageProps) {
  const { t } = useTranslate()
  const ns = getCategoryNamespace('agriculture')

  // get category data from staticData
  const categoryData = (staticData as Record<string, { subcategories?: { 'grain-storage'?: SubcategoryData } }>)[
    `${lang}:${ns}`
  ]
  const data = categoryData?.subcategories?.['grain-storage']

  const breadcrumbs = [
    { label: t('nav.applications', { ns: NAMESPACES.common }), href: '/applications' },
    { label: t('title', { ns }), href: '/applications/agriculture' },
    { label: t('subcategories.grain-storage.title', { ns }) },
  ]

  return (
    <Layout>
      <Seo
        title={t('subcategories.grain-storage.title', { ns })}
        description={t('subcategories.grain-storage.shortDesc', { ns })}
      />

      <ArticleHero
        title={t('subcategories.grain-storage.title', { ns })}
        description={t('subcategories.grain-storage.shortDesc', { ns })}
        image="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=1920&q=80"
        imageAlt={t('subcategories.grain-storage.title', { ns })}
        breadcrumbs={breadcrumbs}
        backLink={{
          href: '/applications/agriculture',
          label: t('title', { ns }),
        }}
      />

      {/* Key Stats */}
      <section className="bg-bg-light py-12">
        <div className="container">
          <StatGrid columns={4}>
            <StatCard
              value={data?.stats?.pestDestruction?.value ?? ''}
              label={data?.stats?.pestDestruction?.label ?? ''}
              description={data?.stats?.pestDestruction?.description ?? ''}
              variant="primary"
            />
            <StatCard
              value={data?.stats?.disinfection?.value ?? ''}
              label={data?.stats?.disinfection?.label ?? ''}
              description={data?.stats?.disinfection?.description ?? ''}
              variant="accent"
            />
            <StatCard
              value={data?.stats?.yieldIncrease?.value ?? ''}
              label={data?.stats?.yieldIncrease?.label ?? ''}
              description={data?.stats?.yieldIncrease?.description ?? ''}
              variant="primary"
            />
            <StatCard
              value={data?.stats?.lossReduction?.value ?? ''}
              label={data?.stats?.lossReduction?.label ?? ''}
              description={data?.stats?.lossReduction?.description ?? ''}
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
            <strong>{data?.sections?.worldExperience?.label ?? ''}</strong> {data?.sections?.worldExperience?.text ?? ''}
          </HighlightBox>

          <ArticleSection title={data?.sections?.applications?.title}>
            <BulletList items={(data?.sections?.applications?.items as string[]) ?? []} />
          </ArticleSection>

          <ArticleSection title={data?.sections?.pests?.title}>
            <Paragraph>{data?.sections?.pests?.intro ?? ''}</Paragraph>

            <DataTable
              caption={data?.sections?.pests?.tableCaption}
              headers={data?.sections?.pests?.tableHeaders ?? []}
              rows={data?.sections?.pests?.tableData ?? []}
            />

            <HighlightBox variant="success">{data?.sections?.pests?.highlightText ?? ''}</HighlightBox>
          </ArticleSection>

          <ArticleSection title={data?.sections?.fungi?.title}>
            <Paragraph>{data?.sections?.fungi?.intro ?? ''}</Paragraph>

            <DataTable
              caption={data?.sections?.fungi?.tableCaption}
              headers={data?.sections?.fungi?.tableHeaders ?? []}
              rows={data?.sections?.fungi?.tableData ?? []}
            />
          </ArticleSection>

          <ArticleSection title={data?.sections?.modes?.title}>
            <Paragraph>{data?.sections?.modes?.intro ?? ''}</Paragraph>

            <DataTable
              caption={data?.sections?.modes?.tableCaption}
              headers={data?.sections?.modes?.tableHeaders ?? []}
              rows={data?.sections?.modes?.tableData ?? []}
            />

            <HighlightBox variant="warning">
              <strong>{data?.sections?.modes?.warningLabel ?? ''}</strong> {data?.sections?.modes?.warningText ?? ''}
            </HighlightBox>
          </ArticleSection>

          <ArticleSection title={data?.sections?.presowing?.title}>
            <Paragraph>{data?.sections?.presowing?.intro ?? ''}</Paragraph>

            <DataTable
              caption={data?.sections?.presowing?.tableCaption}
              headers={data?.sections?.presowing?.tableHeaders ?? []}
              rows={data?.sections?.presowing?.tableData ?? []}
            />
          </ArticleSection>

          <ArticleSection title={data?.sections?.technology?.title}>
            <ProcessList steps={data?.sections?.technology?.steps ?? []} />
          </ArticleSection>

          <ArticleSection title={data?.sections?.comparison?.title}>
            <DataTable
              caption={data?.sections?.comparison?.tableCaption}
              headers={data?.sections?.comparison?.tableHeaders ?? []}
              rows={data?.sections?.comparison?.tableData ?? []}
            />
          </ArticleSection>

          <ArticleSection title={data?.sections?.benefits?.title}>
            <FeatureGrid columns={2}>
              {((data?.benefits ?? []) as string[]).map((benefit, idx) => {
                const benefitParts = benefit.split(' — ')
                const title = benefitParts[0] || benefit
                const description = benefitParts[1] || ''
                return (
                  <FeatureCard
                    key={idx}
                    icon={<IconCheck style={{ width: 24, height: 24 }} />}
                    title={title}
                    description={description}
                  />
                )
              })}
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
