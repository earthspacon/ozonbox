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
  SourcesList,
  StatCard,
  StatGrid,
} from '@/shared/ui/article-components'
import { IconCheck } from '@/shared/ui/icons'
import { Seo } from '@/shared/ui/seo'

interface PharmaceuticalsPageProps {
  staticData: TolgeeStaticDataProp
  lang: TLocale
}

export function PharmaceuticalsPage({ staticData, lang }: PharmaceuticalsPageProps) {
  const { t } = useTranslate()
  const ns = getSubcategoryNamespace('medicine', 'pharmaceuticals')

  const categoryData = (staticData as Record<string, { subcategories?: { pharmaceuticals?: any } }>)[`${lang}:${ns}`]
  const data = categoryData?.subcategories?.pharmaceuticals

  const breadcrumbs = [
    { label: t('nav.applications', { ns: NAMESPACES.common }), href: '/applications' },
    { label: t('title', { ns }), href: '/applications/medicine' },
    { label: t('subcategories.pharmaceuticals.title', { ns }) },
  ]

  return (
    <Layout>
      <Seo
        title={t('subcategories.pharmaceuticals.title', { ns })}
        description={t('subcategories.pharmaceuticals.shortDesc', { ns })}
      />

      <ArticleHero
        title={t('subcategories.pharmaceuticals.title', { ns })}
        description={t('subcategories.pharmaceuticals.shortDesc', { ns })}
        image="https://images.unsplash.com/photo-1583911860205-72f8ac8ddcbe?w=1920&q=80"
        imageAlt={t('subcategories.pharmaceuticals.title', { ns })}
        breadcrumbs={breadcrumbs}
        backLink={{
          href: '/applications/medicine',
          label: t('title', { ns }),
        }}
      />

      <section className="bg-bg-light py-12">
        <div className="container">
          <StatGrid columns={4}>
            <StatCard
              value={data.stats.waterLoops.value}
              label={data.stats.waterLoops.label}
              description={data.stats.waterLoops.description}
              variant="primary"
            />
            <StatCard
              value={data.stats.bleaching.value}
              label={data.stats.bleaching.label}
              description={data.stats.bleaching.description}
              variant="accent"
            />
            <StatCard
              value={data.stats.cleanrooms.value}
              label={data.stats.cleanrooms.label}
              description={data.stats.cleanrooms.description}
              variant="primary"
            />
            <StatCard
              value={data.stats.residues.value}
              label={data.stats.residues.label}
              description={data.stats.residues.description}
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
            <strong>{data.sections.focus.title}</strong> {data.sections.focus.text}
          </HighlightBox>

          <ArticleSection title={data.sections.applications.title}>
            <BulletList items={data.sections.applications.items} />
          </ArticleSection>

          <ArticleSection title={data.sections.chain.title}>
            <Paragraph>{data.sections.chain.intro}</Paragraph>
            <ProcessList steps={data.sections.chain.steps} />
          </ArticleSection>

          <ArticleSection title={data.sections.bleaching.title}>
            <Paragraph>{data.sections.bleaching.intro}</Paragraph>

            <DataTable
              caption={data.sections.bleaching.tableCaption}
              headers={data.sections.bleaching.tableHeaders}
              rows={data.sections.bleaching.tableData}
            />

            <HighlightBox variant="success">{data.sections.bleaching.note}</HighlightBox>
          </ArticleSection>

          <ArticleSection title={data.sections.logistics.title}>
            <Paragraph>{data.sections.logistics.intro}</Paragraph>
            <BulletList items={data.sections.logistics.items} />
          </ArticleSection>

          <ArticleSection title={data.sections.examples.title}>
            <Paragraph>{data.sections.examples.intro}</Paragraph>

            <DataTable
              caption={data.sections.examples.tableCaption}
              headers={data.sections.examples.tableHeaders}
              rows={data.sections.examples.tableData}
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

          {data.sources?.length > 0 ? <SourcesList items={data.sources} title={data.sourcesTitle} /> : null}
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
