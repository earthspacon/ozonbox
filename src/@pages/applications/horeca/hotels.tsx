/* eslint-disable @typescript-eslint/no-explicit-any */
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

interface HotelsPageProps {
  staticData: TolgeeStaticDataProp
  lang: TLocale
}

export function HotelsPage({ staticData, lang }: HotelsPageProps) {
  const { t } = useTranslate()
  const ns = getCategoryNamespace('horeca')

  // get category data from staticData
  const categoryData = (staticData as Record<string, { subcategories?: { hotels?: any } }>)[
    `${lang}:${ns}`
  ]
  const data = categoryData?.subcategories?.hotels

  const breadcrumbs = [
    { label: t('nav.applications', { ns: NAMESPACES.common }), href: '/applications' },
    { label: t('title', { ns }), href: '/applications/horeca' },
    { label: t('subcategories.hotels.title', { ns }) },
  ]

  return (
    <Layout>
      <Seo
        title={t('subcategories.hotels.title', { ns })}
        description={t('subcategories.hotels.shortDesc', { ns })}
      />

      <ArticleHero
        title={t('subcategories.hotels.title', { ns })}
        description={t('subcategories.hotels.shortDesc', { ns })}
        image="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1920&q=80"
        imageAlt={t('subcategories.hotels.title', { ns })}
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
              value={data?.stats?.processingTime?.value ?? ''}
              label={data?.stats?.processingTime?.label ?? ''}
              description={data?.stats?.processingTime?.description ?? ''}
              variant="primary"
            />
            <StatCard
              value={data?.stats?.odorRemoval?.value ?? ''}
              label={data?.stats?.odorRemoval?.label ?? ''}
              description={data?.stats?.odorRemoval?.description ?? ''}
              variant="accent"
            />
            <StatCard
              value={data?.stats?.disinfection?.value ?? ''}
              label={data?.stats?.disinfection?.label ?? ''}
              description={data?.stats?.disinfection?.description ?? ''}
              variant="primary"
            />
            <StatCard
              value={data?.stats?.noChemistry?.value ?? ''}
              label={data?.stats?.noChemistry?.label ?? ''}
              description={data?.stats?.noChemistry?.description ?? ''}
              variant="accent"
            />
          </StatGrid>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-12 md:py-20">
        <div className="container max-w-4xl">
          <ArticleSection>
            <Paragraph>{data?.sections?.intro?.p1 ?? ''}</Paragraph>
            <Paragraph>{data?.sections?.intro?.p2 ?? ''}</Paragraph>
          </ArticleSection>

          <HighlightBox variant="info">
            <strong>{data?.sections?.automation?.title ?? ''}</strong> {data?.sections?.automation?.text ?? ''}
          </HighlightBox>

          <ArticleSection title={data?.sections?.problems?.title}>
            <BulletList items={(data?.sections?.problems?.items as string[]) ?? []} />
          </ArticleSection>

          <ArticleSection title={data?.sections?.process?.title}>
            <ProcessList steps={data?.sections?.process?.steps ?? []} />

            <DataTable
              caption={data?.sections?.process?.tableCaption}
              headers={data?.sections?.process?.tableHeaders ?? []}
              rows={data?.sections?.process?.tableData ?? []}
            />
          </ArticleSection>

          <ArticleSection title={data?.sections?.whatIsTreated?.title}>
            <Paragraph>{data?.sections?.whatIsTreated?.intro ?? ''}</Paragraph>
            <FeatureGrid columns={2}>
              {((data?.sections?.whatIsTreated?.items as Array<{ title: string; description: string }>) ?? []).map(
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

          <ArticleSection title={data?.sections?.benefits?.title}>
            <BulletList items={(data?.sections?.benefits?.items as string[]) ?? []} />

            <HighlightBox variant="success">{data?.sections?.benefits?.highlight ?? ''}</HighlightBox>
          </ArticleSection>

          <ArticleSection title={data?.sections?.equipment?.title}>
            <Paragraph>{data?.sections?.equipment?.intro ?? ''}</Paragraph>
            <DataTable
              headers={data?.sections?.equipment?.tableHeaders ?? []}
              rows={data?.sections?.equipment?.tableData ?? []}
            />
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
