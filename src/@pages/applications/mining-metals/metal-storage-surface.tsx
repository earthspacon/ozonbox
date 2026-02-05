/* eslint-disable @typescript-eslint/no-explicit-any */
import { TolgeeStaticDataProp, useTranslate } from '@tolgee/react'

import { Layout } from '@/widgets/layout'

import { getCategoryNamespace, NAMESPACES, TLocale } from '@/shared/config/tolgee'
import {
  ArticleHero,
  ArticleSection,
  CTASection,
  FeatureCard,
  FeatureGrid,
  Paragraph,
  SourcesList,
  StatCard,
  StatGrid,
} from '@/shared/ui/article-components'
import { IconCheck } from '@/shared/ui/icons'
import { Seo } from '@/shared/ui/seo'

const SUBCATEGORY_ID = 'metal-storage-surface'
const HERO_IMAGE = 'https://waykenrm.com/wp-content/uploads/2022/06/metal-surface-finishing.jpg'

interface MetalStorageSurfacePageProps {
  staticData: TolgeeStaticDataProp
  lang: TLocale
}

export function MetalStorageSurfacePage({ staticData, lang }: MetalStorageSurfacePageProps) {
  const { t } = useTranslate()
  const ns = getCategoryNamespace('mining-metals')

  const categoryData = (staticData as Record<string, { subcategories?: Record<string, any> }>)[`${lang}:${ns}`]
  const data = categoryData?.subcategories?.[SUBCATEGORY_ID]

  const breadcrumbs = [
    { label: t('nav.applications', { ns: NAMESPACES.common }), href: '/applications' },
    { label: t('title', { ns }), href: '/applications/mining-metals' },
    { label: t(`subcategories.${SUBCATEGORY_ID}.title`, { ns }) },
  ]

  return (
    <Layout>
      <Seo
        title={t(`subcategories.${SUBCATEGORY_ID}.title`, { ns })}
        description={t(`subcategories.${SUBCATEGORY_ID}.shortDesc`, { ns })}
      />

      <ArticleHero
        title={t(`subcategories.${SUBCATEGORY_ID}.title`, { ns })}
        description={t(`subcategories.${SUBCATEGORY_ID}.shortDesc`, { ns })}
        image={HERO_IMAGE}
        imageAlt={t(`subcategories.${SUBCATEGORY_ID}.title`, { ns })}
        breadcrumbs={breadcrumbs}
        backLink={{
          href: '/applications/mining-metals',
          label: t('title', { ns }),
        }}
      />

      <section className="bg-bg-light py-12">
        <div className="container">
          <StatGrid columns={4}>
            <StatCard
              value={data.stats.cleaning.value}
              label={data.stats.cleaning.label}
              description={data.stats.cleaning.description}
              variant="primary"
            />
            <StatCard
              value={data.stats.passivation.value}
              label={data.stats.passivation.label}
              description={data.stats.passivation.description}
              variant="accent"
            />
            <StatCard
              value={data.stats.industries.value}
              label={data.stats.industries.label}
              description={data.stats.industries.description}
              variant="primary"
            />
            <StatCard
              value={data.stats.corrosion.value}
              label={data.stats.corrosion.label}
              description={data.stats.corrosion.description}
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

          <ArticleSection title={data.sections.cleaning.title}>
            <Paragraph>{data.sections.cleaning.intro}</Paragraph>
            <Paragraph>{data.sections.cleaning.methods}</Paragraph>
          </ArticleSection>

          <ArticleSection title={data.sections.passivation.title}>
            <Paragraph>{data.sections.passivation.intro}</Paragraph>
          </ArticleSection>

          <ArticleSection title={data.sections.applications.title}>
            <Paragraph>{data.sections.applications.intro}</Paragraph>
          </ArticleSection>

          <ArticleSection title={data.sections.corrosion.title}>
            <Paragraph>{data.sections.corrosion.intro}</Paragraph>
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
