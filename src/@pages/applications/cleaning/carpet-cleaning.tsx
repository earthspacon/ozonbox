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

const PO = 'subcategories.carpet-cleaning'

export function CarpetCleaningPage() {
  const { t } = useTranslate()
  const ns = getCategoryNamespace('cleaning')
  const subcategory = getSubcategoryById('cleaning', 'carpet-cleaning')

  return (
    <Layout>
      <Seo title={t(`${PO}.title`, { ns })} description={t(`${PO}.shortDesc`, { ns })} />
      <ArticleHero
        title={t(`${PO}.title`, { ns })}
        description={t(`${PO}.shortDesc`, { ns })}
        image={subcategory?.image ?? 'https://images.pexels.com/photos/12715511/pexels-photo-12715511.jpeg'}
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

      {/* Key Stats */}
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

      {/* Main Content */}
      <article className="py-12 md:py-16">
        <div className="container max-w-4xl">
          <ArticleSection>
            <Paragraph>{t(`${PO}.sections.intro.paragraph1`, { ns })}</Paragraph>
            <Paragraph>{t(`${PO}.sections.intro.paragraph2`, { ns })}</Paragraph>
          </ArticleSection>

          <HighlightBox variant="info">
            <strong>{t(`${PO}.sections.highlight1.title`, { ns })}</strong>{' '}
            {t(`${PO}.sections.highlight1.text`, { ns })}
          </HighlightBox>

          <ArticleSection title={t(`${PO}.sections.items.title`, { ns })}>
            <BulletList
              items={[
                t(`${PO}.sections.items.items.0`, { ns }),
                t(`${PO}.sections.items.items.1`, { ns }),
                t(`${PO}.sections.items.items.2`, { ns }),
                t(`${PO}.sections.items.items.3`, { ns }),
                t(`${PO}.sections.items.items.4`, { ns }),
                t(`${PO}.sections.items.items.5`, { ns }),
              ]}
            />
          </ArticleSection>

          <ArticleSection title={t(`${PO}.sections.methods.title`, { ns })}>
            <Paragraph>{t(`${PO}.sections.methods.paragraph`, { ns })}</Paragraph>

            <ComparisonTable
              title={t(`${PO}.sections.methods.tableTitle`, { ns })}
              headers={[
                t(`${PO}.sections.methods.headers.0`, { ns }),
                t(`${PO}.sections.methods.headers.1`, { ns }),
                t(`${PO}.sections.methods.headers.2`, { ns }),
              ]}
              rows={[
                {
                  parameter: t(`${PO}.sections.methods.rows.0.parameter`, { ns }),
                  value1: t(`${PO}.sections.methods.rows.0.value1`, { ns }),
                  value2: t(`${PO}.sections.methods.rows.0.value2`, { ns }),
                },
                {
                  parameter: t(`${PO}.sections.methods.rows.1.parameter`, { ns }),
                  value1: t(`${PO}.sections.methods.rows.1.value1`, { ns }),
                  value2: t(`${PO}.sections.methods.rows.1.value2`, { ns }),
                },
                {
                  parameter: t(`${PO}.sections.methods.rows.2.parameter`, { ns }),
                  value1: t(`${PO}.sections.methods.rows.2.value1`, { ns }),
                  value2: t(`${PO}.sections.methods.rows.2.value2`, { ns }),
                },
                {
                  parameter: t(`${PO}.sections.methods.rows.3.parameter`, { ns }),
                  value1: t(`${PO}.sections.methods.rows.3.value1`, { ns }),
                  value2: t(`${PO}.sections.methods.rows.3.value2`, { ns }),
                },
                {
                  parameter: t(`${PO}.sections.methods.rows.4.parameter`, { ns }),
                  value1: t(`${PO}.sections.methods.rows.4.value1`, { ns }),
                  value2: t(`${PO}.sections.methods.rows.4.value2`, { ns }),
                },
                {
                  parameter: t(`${PO}.sections.methods.rows.5.parameter`, { ns }),
                  value1: t(`${PO}.sections.methods.rows.5.value1`, { ns }),
                  value2: t(`${PO}.sections.methods.rows.5.value2`, { ns }),
                },
              ]}
            />
          </ArticleSection>

          <ArticleSection title={t(`${PO}.sections.chamber.title`, { ns })}>
            <ProcessList
              steps={[
                {
                  title: t(`${PO}.sections.chamber.steps.0.title`, { ns }),
                  description: t(`${PO}.sections.chamber.steps.0.description`, { ns }),
                },
                {
                  title: t(`${PO}.sections.chamber.steps.1.title`, { ns }),
                  description: t(`${PO}.sections.chamber.steps.1.description`, { ns }),
                },
                {
                  title: t(`${PO}.sections.chamber.steps.2.title`, { ns }),
                  description: t(`${PO}.sections.chamber.steps.2.description`, { ns }),
                },
                {
                  title: t(`${PO}.sections.chamber.steps.3.title`, { ns }),
                  description: t(`${PO}.sections.chamber.steps.3.description`, { ns }),
                },
                {
                  title: t(`${PO}.sections.chamber.steps.4.title`, { ns }),
                  description: t(`${PO}.sections.chamber.steps.4.description`, { ns }),
                },
              ]}
            />

            <HighlightBox variant="success">
              <strong>{t(`${PO}.sections.chamber.highlight.title`, { ns })}</strong>{' '}
              {t(`${PO}.sections.chamber.highlight.text`, { ns })}
            </HighlightBox>
          </ArticleSection>

          <ArticleSection title={t(`${PO}.sections.afterCleaning.title`, { ns })}>
            <Paragraph>{t(`${PO}.sections.afterCleaning.paragraph`, { ns })}</Paragraph>
            <BulletList
              items={[
                t(`${PO}.sections.afterCleaning.items.0`, { ns }),
                t(`${PO}.sections.afterCleaning.items.1`, { ns }),
                t(`${PO}.sections.afterCleaning.items.2`, { ns }),
                t(`${PO}.sections.afterCleaning.items.3`, { ns }),
                t(`${PO}.sections.afterCleaning.items.4`, { ns }),
                t(`${PO}.sections.afterCleaning.items.5`, { ns }),
              ]}
            />

            <DataTable
              caption={t(`${PO}.sections.afterCleaning.tableCaption`, { ns })}
              headers={[
                t(`${PO}.sections.afterCleaning.tableHeaders.0`, { ns }),
                t(`${PO}.sections.afterCleaning.tableHeaders.1`, { ns }),
                t(`${PO}.sections.afterCleaning.tableHeaders.2`, { ns }),
              ]}
              rows={[
                [
                  t(`${PO}.sections.afterCleaning.tableRows.0.0`, { ns }),
                  t(`${PO}.sections.afterCleaning.tableRows.0.1`, { ns }),
                  t(`${PO}.sections.afterCleaning.tableRows.0.2`, { ns }),
                ],
                [
                  t(`${PO}.sections.afterCleaning.tableRows.1.0`, { ns }),
                  t(`${PO}.sections.afterCleaning.tableRows.1.1`, { ns }),
                  t(`${PO}.sections.afterCleaning.tableRows.1.2`, { ns }),
                ],
                [
                  t(`${PO}.sections.afterCleaning.tableRows.2.0`, { ns }),
                  t(`${PO}.sections.afterCleaning.tableRows.2.1`, { ns }),
                  t(`${PO}.sections.afterCleaning.tableRows.2.2`, { ns }),
                ],
                [
                  t(`${PO}.sections.afterCleaning.tableRows.3.0`, { ns }),
                  t(`${PO}.sections.afterCleaning.tableRows.3.1`, { ns }),
                  t(`${PO}.sections.afterCleaning.tableRows.3.2`, { ns }),
                ],
              ]}
            />
          </ArticleSection>

          <ArticleSection title={t(`${PO}.sections.afterFlood.title`, { ns })}>
            <Paragraph>{t(`${PO}.sections.afterFlood.paragraph`, { ns })}</Paragraph>
            <BulletList
              items={[
                t(`${PO}.sections.afterFlood.items.0`, { ns }),
                t(`${PO}.sections.afterFlood.items.1`, { ns }),
                t(`${PO}.sections.afterFlood.items.2`, { ns }),
                t(`${PO}.sections.afterFlood.items.3`, { ns }),
                t(`${PO}.sections.afterFlood.items.4`, { ns }),
                t(`${PO}.sections.afterFlood.items.5`, { ns }),
              ]}
            />

            <HighlightBox variant="warning">
              <strong>{t(`${PO}.sections.afterFlood.highlight.title`, { ns })}</strong>{' '}
              {t(`${PO}.sections.afterFlood.highlight.text`, { ns })}
            </HighlightBox>
          </ArticleSection>

          <ArticleSection title={t(`${PO}.sections.benefitsCompanies.title`, { ns })}>
            <FeatureGrid columns={2}>
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title={t(`${PO}.sections.benefitsCompanies.features.0.title`, { ns })}
                description={t(`${PO}.sections.benefitsCompanies.features.0.description`, { ns })}
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title={t(`${PO}.sections.benefitsCompanies.features.1.title`, { ns })}
                description={t(`${PO}.sections.benefitsCompanies.features.1.description`, { ns })}
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title={t(`${PO}.sections.benefitsCompanies.features.2.title`, { ns })}
                description={t(`${PO}.sections.benefitsCompanies.features.2.description`, { ns })}
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title={t(`${PO}.sections.benefitsCompanies.features.3.title`, { ns })}
                description={t(`${PO}.sections.benefitsCompanies.features.3.description`, { ns })}
              />
            </FeatureGrid>
          </ArticleSection>

          <ArticleSection title={t(`${PO}.sections.modes.title`, { ns })}>
            <DataTable
              caption={t(`${PO}.sections.modes.tableCaption`, { ns })}
              headers={[
                t(`${PO}.sections.modes.tableHeaders.0`, { ns }),
                t(`${PO}.sections.modes.tableHeaders.1`, { ns }),
                t(`${PO}.sections.modes.tableHeaders.2`, { ns }),
                t(`${PO}.sections.modes.tableHeaders.3`, { ns }),
              ]}
              rows={[
                [
                  t(`${PO}.sections.modes.tableRows.0.0`, { ns }),
                  t(`${PO}.sections.modes.tableRows.0.1`, { ns }),
                  t(`${PO}.sections.modes.tableRows.0.2`, { ns }),
                  t(`${PO}.sections.modes.tableRows.0.3`, { ns }),
                ],
                [
                  t(`${PO}.sections.modes.tableRows.1.0`, { ns }),
                  t(`${PO}.sections.modes.tableRows.1.1`, { ns }),
                  t(`${PO}.sections.modes.tableRows.1.2`, { ns }),
                  t(`${PO}.sections.modes.tableRows.1.3`, { ns }),
                ],
                [
                  t(`${PO}.sections.modes.tableRows.2.0`, { ns }),
                  t(`${PO}.sections.modes.tableRows.2.1`, { ns }),
                  t(`${PO}.sections.modes.tableRows.2.2`, { ns }),
                  t(`${PO}.sections.modes.tableRows.2.3`, { ns }),
                ],
                [
                  t(`${PO}.sections.modes.tableRows.3.0`, { ns }),
                  t(`${PO}.sections.modes.tableRows.3.1`, { ns }),
                  t(`${PO}.sections.modes.tableRows.3.2`, { ns }),
                  t(`${PO}.sections.modes.tableRows.3.3`, { ns }),
                ],
                [
                  t(`${PO}.sections.modes.tableRows.4.0`, { ns }),
                  t(`${PO}.sections.modes.tableRows.4.1`, { ns }),
                  t(`${PO}.sections.modes.tableRows.4.2`, { ns }),
                  t(`${PO}.sections.modes.tableRows.4.3`, { ns }),
                ],
                [
                  t(`${PO}.sections.modes.tableRows.5.0`, { ns }),
                  t(`${PO}.sections.modes.tableRows.5.1`, { ns }),
                  t(`${PO}.sections.modes.tableRows.5.2`, { ns }),
                  t(`${PO}.sections.modes.tableRows.5.3`, { ns }),
                ],
              ]}
            />
          </ArticleSection>

          <ArticleSection title={t(`${PO}.sections.materials.title`, { ns })}>
            <Paragraph>{t(`${PO}.sections.materials.paragraph`, { ns })}</Paragraph>
            <BulletList
              items={[
                t(`${PO}.sections.materials.items.0`, { ns }),
                t(`${PO}.sections.materials.items.1`, { ns }),
                t(`${PO}.sections.materials.items.2`, { ns }),
                t(`${PO}.sections.materials.items.3`, { ns }),
                t(`${PO}.sections.materials.items.4`, { ns }),
                t(`${PO}.sections.materials.items.5`, { ns }),
              ]}
            />

            <HighlightBox variant="info">
              <strong>{t(`${PO}.sections.materials.highlight.title`, { ns })}</strong>{' '}
              {t(`${PO}.sections.materials.highlight.text`, { ns })}
            </HighlightBox>
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
