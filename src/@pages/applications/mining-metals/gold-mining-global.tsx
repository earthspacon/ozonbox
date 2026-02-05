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

const SUBCATEGORY_ID = 'gold-mining-global'
const HERO_IMAGE = 'https://images.pexels.com/photos/6804254/pexels-photo-6804254.jpeg'

interface GoldMiningGlobalPageProps {
  staticData: TolgeeStaticDataProp
  lang: TLocale
}

export function GoldMiningGlobalPage({ staticData, lang }: GoldMiningGlobalPageProps) {
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
              value={data.stats.regions.value}
              label={data.stats.regions.label}
              description={data.stats.regions.description}
              variant="primary"
            />
            <StatCard
              value={data.stats.cyanideReduction.value}
              label={data.stats.cyanideReduction.label}
              description={data.stats.cyanideReduction.description}
              variant="accent"
            />
            <StatCard
              value={data.stats.recoveryImprovement.value}
              label={data.stats.recoveryImprovement.label}
              description={data.stats.recoveryImprovement.description}
              variant="primary"
            />
            <StatCard
              value={data.stats.icmcCompliance.value}
              label={data.stats.icmcCompliance.label}
              description={data.stats.icmcCompliance.description}
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

          <ArticleSection title={data.sections.southAfrica.title}>
            <Paragraph>{data.sections.southAfrica.intro}</Paragraph>
            <Paragraph>{data.sections.southAfrica.trials}</Paragraph>
          </ArticleSection>

          <ArticleSection title={data.sections.chileCanada.title}>
            <Paragraph>{data.sections.chileCanada.intro}</Paragraph>
            <Paragraph>{data.sections.chileCanada.details}</Paragraph>
          </ArticleSection>

          <ArticleSection title={data.sections.refractory.title}>
            <Paragraph>{data.sections.refractory.intro}</Paragraph>
            <Paragraph>{data.sections.refractory.adoption}</Paragraph>
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
