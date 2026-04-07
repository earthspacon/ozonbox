/* eslint-disable @typescript-eslint/no-explicit-any */
import { TolgeeStaticDataProp, useTranslate } from '@tolgee/react'

import { Layout } from '@/widgets/layout'

import { getSubcategoryNamespace, NAMESPACES, TLocale } from '@/shared/config/tolgee'
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

interface SericulturePageProps {
  staticData: TolgeeStaticDataProp
  lang: TLocale
}

export function SericulturePage({ staticData, lang }: SericulturePageProps) {
  const { t } = useTranslate()
  const ns = getSubcategoryNamespace('agriculture', 'sericulture')

  const categoryData = (staticData as Record<string, { subcategories?: { sericulture?: any } }>)[`${lang}:${ns}`]
  const data = categoryData?.subcategories?.sericulture

  const breadcrumbs = [
    { label: t('nav.applications', { ns: NAMESPACES.common }), href: '/applications' },
    { label: t('title', { ns }), href: '/applications/agriculture' },
    { label: t('subcategories.sericulture.title', { ns }) },
  ]

  return (
    <Layout>
      <Seo
        title={t('subcategories.sericulture.title', { ns })}
        description={t('subcategories.sericulture.shortDesc', { ns })}
      />

      <ArticleHero
        title={t('subcategories.sericulture.title', { ns })}
        description={t('subcategories.sericulture.shortDesc', { ns })}
        image="https://images.unsplash.com/photo-1677142712515-10395dd3e469?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        imageAlt={t('subcategories.sericulture.title', { ns })}
        breadcrumbs={breadcrumbs}
        backLink={{
          href: '/applications/agriculture',
          label: t('title', { ns }),
        }}
      />

      <section className="bg-bg-light py-12">
        <div className="container">
          <StatGrid columns={4}>
            <StatCard
              value={data.stats.productionShare.value}
              label={data.stats.productionShare.label}
              description={data.stats.productionShare.description}
              variant="primary"
            />
            <StatCard
              value={data.stats.energySaving.value}
              label={data.stats.energySaving.label}
              description={data.stats.energySaving.description}
              variant="accent"
            />
            <StatCard
              value={data.stats.microbialReduction.value}
              label={data.stats.microbialReduction.label}
              description={data.stats.microbialReduction.description}
              variant="primary"
            />
            <StatCard
              value={data.stats.qualityGain.value}
              label={data.stats.qualityGain.label}
              description={data.stats.qualityGain.description}
              variant="accent"
            />
          </StatGrid>
        </div>
      </section>

      <article className="py-12 md:py-20">
        <div className="container max-w-4xl">
          <ArticleSection>
            <Paragraph>{data.sections.intro.paragraph1}</Paragraph>
            <Paragraph>{data.sections.intro.paragraph2}</Paragraph>
          </ArticleSection>

          <HighlightBox variant="info">
            <strong>{data.sections.protocol.title}</strong> {data.sections.protocol.text}
          </HighlightBox>

          <ArticleSection title={data.sections.advantages.title}>
            <BulletList items={data.sections.advantages.items} />
          </ArticleSection>

          <ArticleSection title={data.sections.geography.title}>
            <Paragraph>{data.sections.geography.intro}</Paragraph>
            <DataTable
              caption={data.sections.geography.tableCaption}
              headers={data.sections.geography.tableHeaders}
              rows={data.sections.geography.tableData}
            />
          </ArticleSection>

          <ArticleSection title={data.sections.companies.title}>
            <Paragraph>{data.sections.companies.intro}</Paragraph>
            <DataTable
              caption={data.sections.companies.tableCaption}
              headers={data.sections.companies.tableHeaders}
              rows={data.sections.companies.tableData}
            />
          </ArticleSection>

          <ArticleSection title={data.sections.research.title}>
            <Paragraph>{data.sections.research.intro}</Paragraph>
            <DataTable
              caption={data.sections.research.tableCaption}
              headers={data.sections.research.tableHeaders}
              rows={data.sections.research.tableData}
            />
            {data.sections.research.note ? (
              <HighlightBox variant="warning">
                <strong>{data.sections.research.note.title}</strong> {data.sections.research.note.text}
              </HighlightBox>
            ) : null}
          </ArticleSection>

          <ArticleSection title={data.sections.scheme.title}>
            <ProcessList steps={data.sections.scheme.steps} />
          </ArticleSection>

          <ArticleSection title={data.sections.economics.title}>
            <Paragraph>{data.sections.economics.intro}</Paragraph>
            <DataTable
              caption={data.sections.economics.tableCaption}
              headers={data.sections.economics.tableHeaders}
              rows={data.sections.economics.tableData}
            />
          </ArticleSection>

          <ArticleSection title={data.sections.benefits.title}>
            <FeatureGrid columns={2}>
              {data.sections.benefits.items.map((item: { title: string; description: string }, idx: number) => (
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
