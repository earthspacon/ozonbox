/* eslint-disable @typescript-eslint/no-explicit-any */
import { TolgeeStaticDataProp, useTranslate } from '@tolgee/react'

import { Layout } from '@/widgets/layout'

import { getSubcategoryById } from '@/shared/config/applications-data'
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
  NumberedList,
  Paragraph,
  StatCard,
  StatGrid,
} from '@/shared/ui/article-components'
import { IconCheck } from '@/shared/ui/icons'
import { Seo } from '@/shared/ui/seo'

interface MoldPreventionPageProps {
  staticData: TolgeeStaticDataProp
  lang: TLocale
}

const MP = 'subcategories.mold-prevention'

export function MoldPreventionPage({ staticData, lang }: MoldPreventionPageProps) {
  const { t } = useTranslate()
  const ns = getCategoryNamespace('warehouses')
  const subcategory = getSubcategoryById('warehouses', 'mold-prevention')
  const data = (staticData as any)[`${lang}:${ns}`]?.subcategories?.['mold-prevention']

  return (
    <Layout>
      <Seo title={t(`${MP}.title`, { ns })} description={t(`${MP}.shortDesc`, { ns })} />
      <ArticleHero
        title={t(`${MP}.title`, { ns })}
        description={t(`${MP}.shortDesc`, { ns })}
        image={subcategory?.image ?? 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1920&q=80'}
        imageAlt={t(`${MP}.title`, { ns })}
        breadcrumbs={[
          { label: t('nav.applications', { ns: NAMESPACES.common }), href: '/applications' },
          { label: t('title', { ns }), href: '/applications/warehouses' },
          { label: t(`${MP}.title`, { ns }) },
        ]}
        backLink={{ href: '/applications/warehouses', label: t('title', { ns }) }}
      />

      {/* Key Stats */}
      <section className="bg-bg-light py-12">
        <div className="container">
          <StatGrid columns={4}>
            <StatCard
              value={t(`${MP}.stats.destruction.value`, { ns })}
              label={t(`${MP}.stats.destruction.label`, { ns })}
              description={t(`${MP}.stats.destruction.description`, { ns })}
              variant="primary"
            />
            <StatCard
              value={t(`${MP}.stats.treatmentTime.value`, { ns })}
              label={t(`${MP}.stats.treatmentTime.label`, { ns })}
              description={t(`${MP}.stats.treatmentTime.description`, { ns })}
              variant="accent"
            />
            <StatCard
              value={t(`${MP}.stats.lossReduction.value`, { ns })}
              label={t(`${MP}.stats.lossReduction.label`, { ns })}
              description={t(`${MP}.stats.lossReduction.description`, { ns })}
              variant="primary"
            />
            <StatCard
              value={t(`${MP}.stats.chemicals.value`, { ns })}
              label={t(`${MP}.stats.chemicals.label`, { ns })}
              description={t(`${MP}.stats.chemicals.description`, { ns })}
              variant="accent"
            />
          </StatGrid>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-12 md:py-16">
        <div className="container max-w-4xl">
          <ArticleSection>
            <Paragraph>{t(`${MP}.sections.intro.paragraph1`, { ns })}</Paragraph>
            <Paragraph>{t(`${MP}.sections.intro.paragraph2`, { ns })}</Paragraph>
          </ArticleSection>

          <HighlightBox variant="warning">
            <strong>{t(`${MP}.sections.intro.warningLabel`, { ns })}</strong>{' '}
            {t(`${MP}.sections.intro.warningText`, { ns })}
          </HighlightBox>

          <ArticleSection title={t(`${MP}.sections.mechanism.title`, { ns })}>
            <Paragraph>{t(`${MP}.sections.mechanism.intro`, { ns })}</Paragraph>
            <BulletList items={data?.sections?.mechanism?.items ?? []} />
          </ArticleSection>

          <ArticleSection title={t(`${MP}.sections.equipment.title`, { ns })}>
            <Paragraph>{t(`${MP}.sections.equipment.intro`, { ns })}</Paragraph>

            <DataTable
              caption={t(`${MP}.sections.equipment.tableCaption`, { ns })}
              headers={data?.sections?.equipment?.tableHeaders ?? []}
              rows={data?.sections?.equipment?.tableRows ?? []}
            />

            <HighlightBox variant="info">
              <strong>{t(`${MP}.sections.equipment.hvacLabel`, { ns })}</strong>{' '}
              {t(`${MP}.sections.equipment.hvacText`, { ns })}
            </HighlightBox>
          </ArticleSection>

          <ArticleSection title={t(`${MP}.sections.processModes.title`, { ns })}>
            <Paragraph>{t(`${MP}.sections.processModes.intro`, { ns })}</Paragraph>

            <NumberedList
              items={(data?.sections?.processModes?.steps ?? []).map(
                (step: { title: string; description: string }) => step.description,
              )}
            />

            <DataTable
              caption={t(`${MP}.sections.processModes.treatmentTable`, { ns })}
              headers={data?.sections?.processModes?.treatmentHeaders ?? []}
              rows={data?.sections?.processModes?.treatmentRows ?? []}
            />
          </ArticleSection>

          <ArticleSection title={t(`${MP}.sections.humidity.title`, { ns })}>
            <Paragraph>{t(`${MP}.sections.humidity.intro`, { ns })}</Paragraph>
            <BulletList items={data?.sections?.humidity?.items ?? []} />
          </ArticleSection>

          <ArticleSection title={t(`${MP}.sections.economics.title`, { ns })}>
            <Paragraph>{t(`${MP}.sections.economics.intro`, { ns })}</Paragraph>

            <DataTable
              caption={t(`${MP}.sections.economics.tableCaption`, { ns })}
              headers={data?.sections?.economics?.tableHeaders ?? []}
              rows={data?.sections?.economics?.tableRows ?? []}
            />

            <HighlightBox variant="success">{t(`${MP}.sections.economics.highlightBox`, { ns })}</HighlightBox>
          </ArticleSection>

          <ArticleSection title={t(`${MP}.sections.standards.title`, { ns })}>
            <Paragraph>{t(`${MP}.sections.standards.intro`, { ns })}</Paragraph>
            <BulletList items={data?.sections?.standards?.items ?? []} />
          </ArticleSection>

          <ArticleSection title={t(`${MP}.sections.benefits.title`, { ns })}>
            <FeatureGrid columns={2}>
              {(data?.sections?.benefits?.features ?? []).map(
                (feature: { title: string; description: string }, i: number) => (
                  <FeatureCard
                    key={i}
                    icon={<IconCheck style={{ width: 24, height: 24 }} />}
                    title={feature.title}
                    description={feature.description}
                  />
                ),
              )}
            </FeatureGrid>
          </ArticleSection>
        </div>
      </article>

      {/* CTA Section */}
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
