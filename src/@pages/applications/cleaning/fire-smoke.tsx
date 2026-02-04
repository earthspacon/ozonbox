import { useTranslate } from '@tolgee/react'

import { Layout } from '@/widgets/layout'

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

const FS = 'subcategories.fire-smoke'

export function FireSmokePage() {
  const { t } = useTranslate()
  const ns = getCategoryNamespace('cleaning')

  return (
    <Layout>
      <Seo title={t(`${FS}.title`, { ns })} description={t(`${FS}.shortDesc`, { ns })} />
      <ArticleHero
        title={t(`${FS}.title`, { ns })}
        description={t(`${FS}.shortDesc`, { ns })}
        image="https://images.pexels.com/photos/12828224/pexels-photo-12828224.jpeg"
        imageAlt={t(`${FS}.title`, { ns })}
        breadcrumbs={[
          { label: t('nav.applications', { ns: NAMESPACES.common }), href: '/applications' },
          { label: t('title', { ns }), href: '/applications/cleaning' },
          { label: t(`${FS}.title`, { ns }) },
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
              value={t(`${FS}.stats.stat1.value`, { ns })}
              label={t(`${FS}.stats.stat1.label`, { ns })}
              description={t(`${FS}.stats.stat1.description`, { ns })}
              variant="primary"
            />
            <StatCard
              value={t(`${FS}.stats.stat2.value`, { ns })}
              label={t(`${FS}.stats.stat2.label`, { ns })}
              description={t(`${FS}.stats.stat2.description`, { ns })}
              variant="accent"
            />
            <StatCard
              value={t(`${FS}.stats.stat3.value`, { ns })}
              label={t(`${FS}.stats.stat3.label`, { ns })}
              description={t(`${FS}.stats.stat3.description`, { ns })}
              variant="primary"
            />
            <StatCard
              value={t(`${FS}.stats.stat4.value`, { ns })}
              label={t(`${FS}.stats.stat4.label`, { ns })}
              description={t(`${FS}.stats.stat4.description`, { ns })}
              variant="accent"
            />
          </StatGrid>
        </div>
      </section>

      <article className="py-12 md:py-16">
        <div className="container max-w-4xl">
          <ArticleSection>
            <Paragraph>{t(`${FS}.sections.intro.text`, { ns })}</Paragraph>
            <Paragraph>{t(`${FS}.sections.intro.text2`, { ns })}</Paragraph>
          </ArticleSection>

          <HighlightBox variant="info">
            <strong>{t(`${FS}.sections.highlight1.title`, { ns })}</strong>{' '}
            {t(`${FS}.sections.highlight1.text`, { ns })}
          </HighlightBox>

          <ArticleSection title={t(`${FS}.sections.howOzone.title`, { ns })}>
            <Paragraph>{t(`${FS}.sections.howOzone.text`, { ns })}</Paragraph>
            <BulletList items={[0, 1, 2, 3, 4, 5].map((i) => t(`${FS}.sections.howOzone.items.${i}`, { ns }))} />
          </ArticleSection>

          <ArticleSection title={t(`${FS}.sections.process.title`, { ns })}>
            <ProcessList
              steps={[0, 1, 2, 3, 4].map((i) => ({
                title: t(`${FS}.sections.process.steps.${i}.title`, { ns }),
                description: t(`${FS}.sections.process.steps.${i}.description`, { ns }),
              }))}
            />
          </ArticleSection>

          <ArticleSection title={t(`${FS}.sections.modes.title`, { ns })}>
            <DataTable
              caption={t(`${FS}.sections.modes.tableCaption`, { ns })}
              headers={[0, 1, 2, 3].map((i) => t(`${FS}.sections.modes.tableHeaders.${i}`, { ns }))}
              rows={[0, 1, 2, 3].map((row) =>
                [0, 1, 2, 3].map((col) => t(`${FS}.sections.modes.tableData.${row}.${col}`, { ns })),
              )}
            />
            <HighlightBox variant="warning">
              <strong>{t(`${FS}.sections.modes.highlight.title`, { ns })}</strong>{' '}
              {t(`${FS}.sections.modes.highlight.text`, { ns })}
            </HighlightBox>
          </ArticleSection>

          <ArticleSection title={t(`${FS}.sections.comparison.title`, { ns })}>
            <ComparisonTable
              title={t(`${FS}.sections.comparison.tableTitle`, { ns })}
              headers={
                [0, 1, 2].map((i) => t(`${FS}.sections.comparison.headers.${i}`, { ns })) as [string, string, string]
              }
              rows={[0, 1, 2, 3, 4, 5].map((i) => ({
                parameter: t(`${FS}.sections.comparison.rows.${i}.parameter`, { ns }),
                value1: t(`${FS}.sections.comparison.rows.${i}.value1`, { ns }),
                value2: t(`${FS}.sections.comparison.rows.${i}.value2`, { ns }),
              }))}
            />
          </ArticleSection>

          <ArticleSection title={t(`${FS}.sections.whatCanTreat.title`, { ns })}>
            <FeatureGrid columns={2}>
              {[0, 1, 2, 3].map((i) => (
                <FeatureCard
                  key={i}
                  icon={<IconCheck style={{ width: 24, height: 24 }} />}
                  title={t(`${FS}.sections.whatCanTreat.items.${i}.title`, { ns })}
                  description={t(`${FS}.sections.whatCanTreat.items.${i}.description`, { ns })}
                />
              ))}
            </FeatureGrid>
          </ArticleSection>

          <ArticleSection title={t(`${FS}.sections.whenNotHelp.title`, { ns })}>
            <Paragraph>{t(`${FS}.sections.whenNotHelp.text`, { ns })}</Paragraph>
            <BulletList items={[0, 1, 2, 3, 4].map((i) => t(`${FS}.sections.whenNotHelp.items.${i}`, { ns }))} />
            <HighlightBox variant="success">
              <strong>{t(`${FS}.sections.whenNotHelp.highlight.title`, { ns })}</strong>{' '}
              {t(`${FS}.sections.whenNotHelp.highlight.text`, { ns })}
            </HighlightBox>
          </ArticleSection>

          <ArticleSection title={t(`${FS}.sections.economic.title`, { ns })}>
            <Paragraph>{t(`${FS}.sections.economic.text`, { ns })}</Paragraph>
            <DataTable
              caption={t(`${FS}.sections.economic.tableCaption`, { ns })}
              headers={[0, 1, 2].map((i) => t(`${FS}.sections.economic.tableHeaders.${i}`, { ns }))}
              rows={[0, 1, 2, 3, 4, 5].map((row) =>
                [0, 1, 2].map((col) => t(`${FS}.sections.economic.tableData.${row}.${col}`, { ns })),
              )}
            />
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
