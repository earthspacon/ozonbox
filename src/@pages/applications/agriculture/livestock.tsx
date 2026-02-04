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
  StatCard,
  StatGrid,
} from '@/shared/ui/article-components'
import { IconCheck } from '@/shared/ui/icons'
import { Seo } from '@/shared/ui/seo'

interface LivestockPageProps {
  staticData: TolgeeStaticDataProp
  lang: TLocale
}

export function LivestockPage({ staticData, lang }: LivestockPageProps) {
  const { t } = useTranslate()
  const ns = getCategoryNamespace('agriculture')

  // get category data from staticData
  const categoryData = (staticData as Record<string, { subcategories?: { livestock?: any } }>)[`${lang}:${ns}`]
  const data = categoryData?.subcategories?.livestock

  const breadcrumbs = [
    { label: t('nav.applications', { ns: NAMESPACES.common }), href: '/applications' },
    { label: t('title', { ns }), href: '/applications/agriculture' },
    { label: t('subcategories.livestock.title', { ns }) },
  ]

  return (
    <Layout>
      <Seo
        title={t('subcategories.livestock.title', { ns })}
        description={t('subcategories.livestock.shortDesc', { ns })}
      />

      <ArticleHero
        title={t('subcategories.livestock.title', { ns })}
        description={t('subcategories.livestock.shortDesc', { ns })}
        image="https://images.unsplash.com/photo-1636998980792-63f27ddea4e3?w=1920&q=80"
        imageAlt={t('subcategories.livestock.title', { ns })}
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
              value={data.stats.microfloraReduction.value}
              label={data.stats.microfloraReduction.label}
              description={data.stats.microfloraReduction.description}
              variant="primary"
            />
            <StatCard
              value={data.stats.morbidityReduction.value}
              label={data.stats.morbidityReduction.label}
              description={data.stats.morbidityReduction.description}
              variant="accent"
            />
            <StatCard
              value={data.stats.productivityGrowth.value}
              label={data.stats.productivityGrowth.label}
              description={data.stats.productivityGrowth.description}
              variant="primary"
            />
            <StatCard
              value={data.stats.antibiotics.value}
              label={data.stats.antibiotics.label}
              description={data.stats.antibiotics.description}
              variant="accent"
            />
          </StatGrid>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-12 md:py-20">
        <div className="container max-w-4xl">
          <ArticleSection>
            <Paragraph>{data.sections.intro.paragraph1}</Paragraph>
            <Paragraph>{data.sections.intro.paragraph2}</Paragraph>
          </ArticleSection>

          <HighlightBox variant="info">
            <strong>{data.sections.pdkInfo.label}</strong> {data.sections.pdkInfo.text}
          </HighlightBox>

          <ArticleSection title={data.sections.applications.title}>
            <BulletList items={data.sections.applications.items} />
          </ArticleSection>

          <ArticleSection title={data.sections.airDisinfection.title}>
            <Paragraph>{data.sections.airDisinfection.intro}</Paragraph>

            <DataTable
              caption={data.sections.airDisinfection.tableCaption}
              headers={data.sections.airDisinfection.tableHeaders}
              rows={data.sections.airDisinfection.tableData}
            />

            <HighlightBox variant="success">{data.sections.airDisinfection.highlight}</HighlightBox>
          </ArticleSection>

          <ArticleSection title={data.sections.waterDisinfection.title}>
            <Paragraph>{data.sections.waterDisinfection.intro}</Paragraph>
            <Paragraph>{data.sections.waterDisinfection.intro2}</Paragraph>
            <BulletList items={data.sections.waterDisinfection.items} />

            <DataTable
              caption={data.sections.waterDisinfection.tableCaption}
              headers={data.sections.waterDisinfection.tableHeaders}
              rows={data.sections.waterDisinfection.tableData}
            />
          </ArticleSection>

          <ArticleSection title={data.sections.feedTreatment.title}>
            <Paragraph>{data.sections.feedTreatment.intro}</Paragraph>
            <BulletList items={data.sections.feedTreatment.items} />

            <HighlightBox variant="info">{data.sections.feedTreatment.highlight}</HighlightBox>
          </ArticleSection>

          <ArticleSection title={data.sections.dairyEquipment.title}>
            <Paragraph>{data.sections.dairyEquipment.intro}</Paragraph>

            <DataTable
              caption={data.sections.dairyEquipment.tableCaption}
              headers={data.sections.dairyEquipment.tableHeaders}
              rows={data.sections.dairyEquipment.tableData}
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
