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
  StatCard,
  StatGrid,
} from '@/shared/ui/article-components'
import { IconCheck } from '@/shared/ui/icons'
import { Seo } from '@/shared/ui/seo'

interface RetailSupermarketsPageProps {
  staticData: TolgeeStaticDataProp
  lang: TLocale
}

const SUB_ID = 'retail-supermarkets'

export function RetailSupermarketsPage({ staticData, lang }: RetailSupermarketsPageProps) {
  const { t } = useTranslate()
  const ns = getSubcategoryNamespace('food-production', SUB_ID)

  const categoryData = (staticData as Record<string, { subcategories?: { [SUB_ID]: any } }>)[`${lang}:${ns}`]
  const data = categoryData?.subcategories?.[SUB_ID]

  const breadcrumbs = [
    { label: t('nav.applications', { ns: NAMESPACES.common }), href: '/applications' },
    { label: t('title', { ns }), href: '/applications/food-production' },
    { label: t(`subcategories.${SUB_ID}.title`, { ns }) },
  ]

  return (
    <Layout>
      <Seo
        title={t(`subcategories.${SUB_ID}.title`, { ns })}
        description={t(`subcategories.${SUB_ID}.shortDesc`, { ns })}
      />

      <ArticleHero
        title={t(`subcategories.${SUB_ID}.title`, { ns })}
        description={t(`subcategories.${SUB_ID}.shortDesc`, { ns })}
        image="https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=1920&q=80"
        imageAlt={t(`subcategories.${SUB_ID}.title`, { ns })}
        breadcrumbs={breadcrumbs}
        backLink={{
          href: '/applications/food-production',
          label: t('title', { ns }),
        }}
      />

      {data?.stats && (
        <section className="bg-bg-light py-12">
          <div className="container">
            <StatGrid columns={4}>
              {data.stats.standardAdoption && (
                <StatCard
                  value={data.stats.standardAdoption.value}
                  label={data.stats.standardAdoption.label}
                  description={data.stats.standardAdoption.description}
                  variant="primary"
                />
              )}
              {data.stats.fdaGras && (
                <StatCard
                  value={data.stats.fdaGras.value}
                  label={data.stats.fdaGras.label}
                  description={data.stats.fdaGras.description}
                  variant="accent"
                />
              )}
              {data.stats.noResidues && (
                <StatCard
                  value={data.stats.noResidues.value}
                  label={data.stats.noResidues.label}
                  description={data.stats.noResidues.description}
                  variant="primary"
                />
              )}
              {data.stats.shelfLife && (
                <StatCard
                  value={data.stats.shelfLife.value}
                  label={data.stats.shelfLife.label}
                  description={data.stats.shelfLife.description}
                  variant="accent"
                />
              )}
            </StatGrid>
          </div>
        </section>
      )}

      <article className="py-12 md:py-16">
        <div className="container max-w-4xl">
          {data?.sections?.intro && (
            <ArticleSection>
              <Paragraph>{data.sections.intro.paragraph1}</Paragraph>
              <Paragraph>{data.sections.intro.paragraph2}</Paragraph>
            </ArticleSection>
          )}

          {data?.sections?.benefitsVsOther && (
            <ArticleSection title={data.sections.benefitsVsOther.title}>
              <Paragraph>{data.sections.benefitsVsOther.intro}</Paragraph>
              <BulletList items={data.sections.benefitsVsOther.items as string[]} />
            </ArticleSection>
          )}

          {data?.sections?.standards && (
            <ArticleSection title={data.sections.standards.title}>
              <Paragraph>{data.sections.standards.intro}</Paragraph>
              <BulletList items={data.sections.standards.items as string[]} />
              {data.sections.standards.highlight && (
                <HighlightBox variant="info">{data.sections.standards.highlight}</HighlightBox>
              )}
            </ArticleSection>
          )}

          {data?.sections?.adopters && (
            <ArticleSection title={data.sections.adopters.title}>
              <Paragraph>{data.sections.adopters.intro}</Paragraph>
              <BulletList items={data.sections.adopters.items as string[]} />
            </ArticleSection>
          )}

          {data?.sections?.globalExperience && (
            <ArticleSection title={data.sections.globalExperience.title}>
              <Paragraph>{data.sections.globalExperience.intro}</Paragraph>
              {data.sections.globalExperience.tableHeaders && data.sections.globalExperience.tableData && (
                <DataTable
                  headers={data.sections.globalExperience.tableHeaders as string[]}
                  rows={data.sections.globalExperience.tableData as string[][]}
                  caption={data.sections.globalExperience.tableCaption}
                />
              )}
              {data.sections.globalExperience.highlight && (
                <HighlightBox variant="info">{data.sections.globalExperience.highlight}</HighlightBox>
              )}
            </ArticleSection>
          )}

          {data?.sections?.advantages && (
            <ArticleSection title={data.sections.advantages.title}>
              <FeatureGrid columns={2}>
                {data.sections.advantages.feature1 && (
                  <FeatureCard
                    icon={<IconCheck style={{ width: 24, height: 24 }} />}
                    title={data.sections.advantages.feature1.title}
                    description={data.sections.advantages.feature1.description}
                  />
                )}
                {data.sections.advantages.feature2 && (
                  <FeatureCard
                    icon={<IconCheck style={{ width: 24, height: 24 }} />}
                    title={data.sections.advantages.feature2.title}
                    description={data.sections.advantages.feature2.description}
                  />
                )}
                {data.sections.advantages.feature3 && (
                  <FeatureCard
                    icon={<IconCheck style={{ width: 24, height: 24 }} />}
                    title={data.sections.advantages.feature3.title}
                    description={data.sections.advantages.feature3.description}
                  />
                )}
                {data.sections.advantages.feature4 && (
                  <FeatureCard
                    icon={<IconCheck style={{ width: 24, height: 24 }} />}
                    title={data.sections.advantages.feature4.title}
                    description={data.sections.advantages.feature4.description}
                  />
                )}
              </FeatureGrid>
            </ArticleSection>
          )}
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
