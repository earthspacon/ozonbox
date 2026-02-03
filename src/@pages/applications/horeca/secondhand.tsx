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

interface SecondhandPageProps {
  staticData: TolgeeStaticDataProp
  lang: TLocale
}

export function SecondhandPage({ staticData, lang }: SecondhandPageProps) {
  const { t } = useTranslate()
  const ns = getCategoryNamespace('horeca')

  // get category data from staticData
  const categoryData = (staticData as Record<string, { subcategories?: { secondhand?: any } }>)[
    `${lang}:${ns}`
  ]
  const data = categoryData?.subcategories?.secondhand

  const breadcrumbs = [
    { label: t('nav.applications', { ns: NAMESPACES.common }), href: '/applications' },
    { label: t('title', { ns }), href: '/applications/horeca' },
    { label: t('subcategories.secondhand.title', { ns }) },
  ]

  return (
    <Layout>
      <Seo
        title={t('subcategories.secondhand.title', { ns })}
        description={t('subcategories.secondhand.shortDesc', { ns })}
      />

      <ArticleHero
        title={t('subcategories.secondhand.title', { ns })}
        description={t('subcategories.secondhand.shortDesc', { ns })}
        image="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80"
        imageAlt={t('subcategories.secondhand.title', { ns })}
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
              value={data?.stats?.stayIncrease?.value ?? ''}
              label={data?.stats?.stayIncrease?.label ?? ''}
              description={data?.stats?.stayIncrease?.description ?? ''}
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
            <Paragraph>{data?.sections?.intro?.p1 ?? ''}</Paragraph>
            <Paragraph>{data?.sections?.intro?.p2 ?? ''}</Paragraph>
          </ArticleSection>

          <HighlightBox variant="warning">
            <strong>{data?.sections?.businessProblem?.title ?? ''}</strong>{' '}
            {data?.sections?.businessProblem?.text ?? ''}
          </HighlightBox>

          <ArticleSection title={data?.sections?.businessImpact?.title}>
            <DataTable
              caption={data?.sections?.businessImpact?.tableCaption}
              headers={data?.sections?.businessImpact?.tableHeaders ?? []}
              rows={data?.sections?.businessImpact?.tableData ?? []}
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

          <ArticleSection title={data?.sections?.process?.title}>
            <ProcessList steps={data?.sections?.process?.steps ?? []} />
          </ArticleSection>

          <ArticleSection title={data?.sections?.calculation?.title}>
            <Paragraph>{data?.sections?.calculation?.text ?? ''}</Paragraph>
            <DataTable
              caption={data?.sections?.calculation?.tableCaption}
              headers={data?.sections?.calculation?.tableHeaders ?? []}
              rows={data?.sections?.calculation?.tableData ?? []}
            />
          </ArticleSection>

          <ArticleSection title={data?.sections?.workMode?.title}>
            <BulletList items={Array.isArray(data?.sections?.workMode?.items) ? data?.sections?.workMode?.items : Object.values((data?.sections?.workMode?.items as Record<string, string>) ?? {}) ?? []} />

            <HighlightBox variant="info">
              <strong>{(data?.sections?.workMode?.highlight as { title?: string } | undefined)?.title ?? ''}</strong>{' '}
              {(data?.sections?.workMode?.highlight as { text?: string } | undefined)?.text ?? ''}
            </HighlightBox>
          </ArticleSection>

          <ArticleSection title={data?.sections?.economics?.title}>
            <DataTable
              headers={data?.sections?.economics?.tableHeaders ?? []}
              rows={data?.sections?.economics?.tableData ?? []}
            />

            <HighlightBox variant="success">
              <strong>{(data?.sections?.economics?.payback as { title?: string } | undefined)?.title ?? ''}</strong>{' '}
              {(data?.sections?.economics?.payback as { text?: string } | undefined)?.text ?? ''}
            </HighlightBox>
          </ArticleSection>

          <ArticleSection title={data?.sections?.additionalAdvantages?.title}>
            <BulletList items={(data?.sections?.additionalAdvantages?.items as string[]) ?? []} />
          </ArticleSection>

          <ArticleSection title={data?.sections?.equipment?.title}>
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
