import { useTranslate } from '@tolgee/react'

import { Layout } from '@/widgets/layout'

import { getSubcategoryById } from '@/shared/config/applications-data'
import { getCategoryNamespace, NAMESPACES } from '@/shared/config/tolgee'
import {
  ArticleHero,
  ArticleSection,
  BulletList,
  ComparisonTable,
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

const OR = 'subcategories.odor-removal'

export function OdorRemovalPage() {
  const { t } = useTranslate()
  const ns = getCategoryNamespace('cleaning')
  const subcategory = getSubcategoryById('cleaning', 'odor-removal')

  return (
    <Layout>
      <Seo title={t(`${OR}.title`, { ns })} description={t(`${OR}.shortDesc`, { ns })} />
      <ArticleHero
        title={t(`${OR}.title`, { ns })}
        description={t(`${OR}.shortDesc`, { ns })}
        image={subcategory?.image ?? 'https://images.pexels.com/photos/5207303/pexels-photo-5207303.jpeg'}
        imageAlt={t(`${OR}.title`, { ns })}
        breadcrumbs={[
          { label: t('nav.applications', { ns: NAMESPACES.common }), href: '/applications' },
          { label: t('title', { ns }), href: '/applications/cleaning' },
          { label: t(`${OR}.title`, { ns }) },
        ]}
        backLink={{
          href: '/applications/cleaning',
          label: t('title', { ns }),
        }}
      />

      <section className="bg-bg-light py-12">
        <div className="container">
          <StatGrid columns={4}>
            <StatCard
              value={t(`${OR}.stats.stat1.value`, { ns })}
              label={t(`${OR}.stats.stat1.label`, { ns })}
              description={t(`${OR}.stats.stat1.description`, { ns })}
              variant="primary"
            />
            <StatCard
              value={t(`${OR}.stats.stat2.value`, { ns })}
              label={t(`${OR}.stats.stat2.label`, { ns })}
              description={t(`${OR}.stats.stat2.description`, { ns })}
              variant="accent"
            />
            <StatCard
              value={t(`${OR}.stats.stat3.value`, { ns })}
              label={t(`${OR}.stats.stat3.label`, { ns })}
              description={t(`${OR}.stats.stat3.description`, { ns })}
              variant="primary"
            />
            <StatCard
              value={t(`${OR}.stats.stat4.value`, { ns })}
              label={t(`${OR}.stats.stat4.label`, { ns })}
              description={t(`${OR}.stats.stat4.description`, { ns })}
              variant="accent"
            />
          </StatGrid>
        </div>
      </section>

      <article className="py-12 md:py-16">
        <div className="container max-w-4xl">
          <ArticleSection>
            <Paragraph>{t(`${OR}.sections.intro.text`, { ns })}</Paragraph>
            <Paragraph>{t(`${OR}.sections.intro.text2`, { ns })}</Paragraph>
          </ArticleSection>

          <HighlightBox variant="info">
            <strong>{t(`${OR}.sections.highlight1.title`, { ns })}</strong>{' '}
            {t(`${OR}.sections.highlight1.text`, { ns })}
          </HighlightBox>

          <ArticleSection title={t(`${OR}.sections.odors.title`, { ns })}>
            <Paragraph>{t(`${OR}.sections.odors.text`, { ns })}</Paragraph>
            <BulletList items={[0, 1, 2, 3, 4, 5].map((i) => t(`${OR}.sections.odors.items.${i}`, { ns }))} />
          </ArticleSection>

          <ArticleSection title={t(`${OR}.sections.comparison.title`, { ns })}>
            <ComparisonTable
              title={t(`${OR}.sections.comparison.tableTitle`, { ns })}
              headers={
                [0, 1, 2].map((i) => t(`${OR}.sections.comparison.headers.${i}`, { ns })) as [string, string, string]
              }
              rows={[0, 1, 2, 3, 4, 5].map((i) => ({
                parameter: t(`${OR}.sections.comparison.rows.${i}.parameter`, { ns }),
                value1: t(`${OR}.sections.comparison.rows.${i}.value1`, { ns }),
                value2: t(`${OR}.sections.comparison.rows.${i}.value2`, { ns }),
              }))}
            />
          </ArticleSection>

          <ArticleSection title={t(`${OR}.sections.factors.title`, { ns })}>
            <Paragraph>{t(`${OR}.sections.factors.text`, { ns })}</Paragraph>
            <DataTable
              caption={t(`${OR}.sections.factors.tableCaption`, { ns })}
              headers={[0, 1, 2].map((i) => t(`${OR}.sections.factors.tableHeaders.${i}`, { ns }))}
              rows={[0, 1, 2, 3, 4].map((row) =>
                [0, 1, 2].map((col) => t(`${OR}.sections.factors.tableData.${row}.${col}`, { ns })),
              )}
            />
            <HighlightBox variant="success">
              <strong>{t(`${OR}.sections.factors.highlight.title`, { ns })}</strong>{' '}
              {t(`${OR}.sections.factors.highlight.text`, { ns })}
            </HighlightBox>
          </ArticleSection>

          <ArticleSection title={t(`${OR}.sections.process.title`, { ns })}>
            <ProcessList
              steps={[0, 1, 2, 3, 4].map((i) => ({
                title: t(`${OR}.sections.process.steps.${i}.title`, { ns }),
                description: t(`${OR}.sections.process.steps.${i}.description`, { ns }),
              }))}
            />
          </ArticleSection>

          <ArticleSection title={t(`${OR}.sections.scenarios.title`, { ns })}>
            <FeatureGrid columns={2}>
              {[0, 1, 2, 3].map((i) => (
                <FeatureCard
                  key={i}
                  icon={<IconCheck style={{ width: 24, height: 24 }} />}
                  title={t(`${OR}.sections.scenarios.items.${i}.title`, { ns })}
                  description={t(`${OR}.sections.scenarios.items.${i}.description`, { ns })}
                />
              ))}
            </FeatureGrid>
          </ArticleSection>

          <ArticleSection title={t(`${OR}.sections.benefits.title`, { ns })}>
            <Paragraph>{t(`${OR}.sections.benefits.text`, { ns })}</Paragraph>
            <BulletList items={[0, 1, 2, 3, 4, 5].map((i) => t(`${OR}.sections.benefits.items.${i}`, { ns }))} />
            <HighlightBox variant="warning">
              <strong>{t(`${OR}.sections.benefits.highlight.title`, { ns })}</strong>{' '}
              {t(`${OR}.sections.benefits.highlight.text`, { ns })}
            </HighlightBox>
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
