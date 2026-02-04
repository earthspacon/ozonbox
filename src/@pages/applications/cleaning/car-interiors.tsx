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

const PO = 'subcategories.car-interiors'

export function CarInteriorsPage() {
  const { t } = useTranslate()
  const ns = getCategoryNamespace('cleaning')
  const subcategory = getSubcategoryById('cleaning', 'car-interiors')

  return (
    <Layout>
      <Seo title={t(`${PO}.title`, { ns })} description={t(`${PO}.shortDesc`, { ns })} />
      <ArticleHero
        title={t(`${PO}.title`, { ns })}
        description={t(`${PO}.shortDesc`, { ns })}
        image={subcategory?.image ?? 'https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=1920&q=80'}
        imageAlt={t(`${PO}.title`, { ns })}
        breadcrumbs={[
          { label: t('nav.applications', { ns: NAMESPACES.common }), href: '/applications' },
          { label: t('title', { ns }), href: '/applications/cleaning' },
          { label: t(`${PO}.title`, { ns }) },
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
              value={t(`${PO}.stats.stat1.value`, { ns })}
              label={t(`${PO}.stats.stat1.label`, { ns })}
              description={t(`${PO}.stats.stat1.description`, { ns })}
              variant="primary"
            />
            <StatCard
              value={t(`${PO}.stats.stat2.value`, { ns })}
              label={t(`${PO}.stats.stat2.label`, { ns })}
              description={t(`${PO}.stats.stat2.description`, { ns })}
              variant="accent"
            />
            <StatCard
              value={t(`${PO}.stats.stat3.value`, { ns })}
              label={t(`${PO}.stats.stat3.label`, { ns })}
              description={t(`${PO}.stats.stat3.description`, { ns })}
              variant="primary"
            />
            <StatCard
              value={t(`${PO}.stats.stat4.value`, { ns })}
              label={t(`${PO}.stats.stat4.label`, { ns })}
              description={t(`${PO}.stats.stat4.description`, { ns })}
              variant="accent"
            />
          </StatGrid>
        </div>
      </section>

      <article className="py-12 md:py-16">
        <div className="container max-w-4xl">
          <ArticleSection>
            <Paragraph>{t(`${PO}.sections.intro.text`, { ns })}</Paragraph>
            <Paragraph>{t(`${PO}.sections.intro.text2`, { ns })}</Paragraph>
          </ArticleSection>

          <HighlightBox variant="info">
            <strong>{t(`${PO}.sections.highlight1.title`, { ns })}</strong>{' '}
            {t(`${PO}.sections.highlight1.text`, { ns })}
          </HighlightBox>

          <ArticleSection title={t(`${PO}.sections.problems.title`, { ns })}>
            <BulletList items={[0, 1, 2, 3, 4, 5].map((i) => t(`${PO}.sections.problems.items.${i}`, { ns }))} />
          </ArticleSection>

          <ArticleSection title={t(`${PO}.sections.process.title`, { ns })}>
            <ProcessList
              steps={[0, 1, 2, 3, 4].map((i) => ({
                title: t(`${PO}.sections.process.steps.${i}.title`, { ns }),
                description: t(`${PO}.sections.process.steps.${i}.description`, { ns }),
              }))}
            />
          </ArticleSection>

          <ArticleSection title={t(`${PO}.sections.modes.title`, { ns })}>
            <DataTable
              caption={t(`${PO}.sections.modes.tableCaption`, { ns })}
              headers={[0, 1, 2, 3].map((i) => t(`${PO}.sections.modes.tableHeaders.${i}`, { ns }))}
              rows={[0, 1, 2, 3, 4, 5].map((row) =>
                [0, 1, 2, 3].map((col) => t(`${PO}.sections.modes.tableData.${row}.${col}`, { ns })),
              )}
            />
          </ArticleSection>

          <ArticleSection title={t(`${PO}.sections.service.title`, { ns })}>
            <Paragraph>{t(`${PO}.sections.service.text`, { ns })}</Paragraph>

            <FeatureGrid columns={2}>
              {[0, 1, 2, 3].map((i) => (
                <FeatureCard
                  key={i}
                  icon={<IconCheck style={{ width: 24, height: 24 }} />}
                  title={t(`${PO}.sections.service.features.${i}.title`, { ns })}
                  description={t(`${PO}.sections.service.features.${i}.description`, { ns })}
                />
              ))}
            </FeatureGrid>

            <HighlightBox variant="success">
              <strong>{t(`${PO}.sections.service.highlight.title`, { ns })}</strong>{' '}
              {t(`${PO}.sections.service.highlight.text`, { ns })}
            </HighlightBox>
          </ArticleSection>

          <ArticleSection title={t(`${PO}.sections.carsharing.title`, { ns })}>
            <Paragraph>{t(`${PO}.sections.carsharing.text`, { ns })}</Paragraph>
            <BulletList items={[0, 1, 2, 3, 4].map((i) => t(`${PO}.sections.carsharing.items.${i}`, { ns }))} />

            <DataTable
              caption={t(`${PO}.sections.carsharing.tableCaption`, { ns })}
              headers={[0, 1, 2].map((i) => t(`${PO}.sections.carsharing.tableHeaders.${i}`, { ns }))}
              rows={[0, 1, 2, 3, 4].map((row) =>
                [0, 1, 2].map((col) => t(`${PO}.sections.carsharing.tableData.${row}.${col}`, { ns })),
              )}
            />
          </ArticleSection>

          <ArticleSection title={t(`${PO}.sections.comparison.title`, { ns })}>
            <ComparisonTable
              title={t(`${PO}.sections.comparison.tableTitle`, { ns })}
              headers={
                [0, 1, 2].map((i) => t(`${PO}.sections.comparison.headers.${i}`, { ns })) as [string, string, string]
              }
              rows={[0, 1, 2, 3, 4, 5].map((i) => ({
                parameter: t(`${PO}.sections.comparison.rows.${i}.parameter`, { ns }),
                value1: t(`${PO}.sections.comparison.rows.${i}.value1`, { ns }),
                value2: t(`${PO}.sections.comparison.rows.${i}.value2`, { ns }),
              }))}
            />
          </ArticleSection>

          <ArticleSection title={t(`${PO}.sections.interiors.title`, { ns })}>
            <DataTable
              caption={t(`${PO}.sections.interiors.tableCaption`, { ns })}
              headers={[0, 1, 2].map((i) => t(`${PO}.sections.interiors.tableHeaders.${i}`, { ns }))}
              rows={[0, 1, 2, 3, 4].map((row) =>
                [0, 1, 2].map((col) => t(`${PO}.sections.interiors.tableData.${row}.${col}`, { ns })),
              )}
            />

            <HighlightBox variant="warning">
              <strong>{t(`${PO}.sections.interiors.highlight.title`, { ns })}</strong>{' '}
              {t(`${PO}.sections.interiors.highlight.text`, { ns })}
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
