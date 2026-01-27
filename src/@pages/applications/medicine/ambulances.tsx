import { useTranslate } from '@tolgee/react'
import Image from 'next/image'

import { Layout } from '@/widgets'

import { AppLink } from '@/shared/ui/app-link'
import {
  ArticleSection,
  BulletList,
  ComparisonTable,
  DataTable,
  FeatureCard,
  FeatureGrid,
  HighlightBox,
  Paragraph,
  ProcessList,
  StatCard,
  StatGrid,
} from '@/shared/ui/article-components'
import { IconArrowLeft, IconCheck } from '@/shared/ui/icons'

const NS = 'category-medicine'

export function AmbulancesPage() {
  const { t } = useTranslate()

  return (
    <Layout>
      {/* Breadcrumbs */}
      <div className="bg-bg-light border-border border-b">
        <div className="container py-4">
          <nav className="flex items-center gap-2 text-sm">
            <AppLink href="/applications" className="text-text-secondary hover:text-primary transition-colors">
              {t('breadcrumb.applications', { ns: 'common' })}
            </AppLink>
            <span className="text-text-light">/</span>
            <AppLink href="/applications/medicine" className="text-text-secondary hover:text-primary transition-colors">
              {t('title', { ns: NS })}
            </AppLink>
            <span className="text-text-light">/</span>
            <span className="text-text-primary font-medium">{t('subcategories.ambulances.title', { ns: NS })}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1587745416684-47953f16f02f?w=1920&q=80"
            alt={t('subcategories.ambulances.title', { ns: NS })}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        </div>
        <div className="relative z-10 container">
          <AppLink
            href="/applications/medicine"
            className="mb-6 inline-flex items-center gap-2 text-white/80 transition-colors hover:text-white"
          >
            <IconArrowLeft style={{ width: 20, height: 20 }} />
            <span>{t('title', { ns: NS })}</span>
          </AppLink>
          <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            {t('subcategories.ambulances.title', { ns: NS })}
          </h1>
          <p className="max-w-3xl text-xl text-white/80 md:text-2xl">
            {t('subcategories.ambulances.heroText', { ns: NS })}
          </p>
        </div>
      </section>

      {/* Key Stats */}
      <section className="bg-bg-light py-12">
        <div className="container">
          <StatGrid columns={4}>
            <StatCard
              value={t('subcategories.ambulances.stats.stat1.value', { ns: NS })}
              label={t('subcategories.ambulances.stats.stat1.label', { ns: NS })}
              description={t('subcategories.ambulances.stats.stat1.description', { ns: NS })}
              variant="primary"
            />
            <StatCard
              value={t('subcategories.ambulances.stats.stat2.value', { ns: NS })}
              label={t('subcategories.ambulances.stats.stat2.label', { ns: NS })}
              description={t('subcategories.ambulances.stats.stat2.description', { ns: NS })}
              variant="accent"
            />
            <StatCard
              value={t('subcategories.ambulances.stats.stat3.value', { ns: NS })}
              label={t('subcategories.ambulances.stats.stat3.label', { ns: NS })}
              description={t('subcategories.ambulances.stats.stat3.description', { ns: NS })}
              variant="primary"
            />
            <StatCard
              value={t('subcategories.ambulances.stats.stat4.value', { ns: NS })}
              label={t('subcategories.ambulances.stats.stat4.label', { ns: NS })}
              description={t('subcategories.ambulances.stats.stat4.description', { ns: NS })}
              variant="accent"
            />
          </StatGrid>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-12 md:py-20">
        <div className="container max-w-4xl">
          <ArticleSection>
            <Paragraph>{t('subcategories.ambulances.sections.intro.text', { ns: NS })}</Paragraph>
            <Paragraph>{t('subcategories.ambulances.sections.intro.text2', { ns: NS })}</Paragraph>
          </ArticleSection>

          <HighlightBox variant="info">
            <strong>{t('subcategories.ambulances.sections.highlight1.title', { ns: NS })}</strong>{' '}
            {t('subcategories.ambulances.sections.highlight1.text', { ns: NS })}
          </HighlightBox>

          <ArticleSection title={t('subcategories.ambulances.sections.problem.title', { ns: NS })}>
            <Paragraph>{t('subcategories.ambulances.sections.problem.text', { ns: NS })}</Paragraph>
            <BulletList
              items={[
                t('subcategories.ambulances.sections.problem.items.0', { ns: NS }),
                t('subcategories.ambulances.sections.problem.items.1', { ns: NS }),
                t('subcategories.ambulances.sections.problem.items.2', { ns: NS }),
                t('subcategories.ambulances.sections.problem.items.3', { ns: NS }),
                t('subcategories.ambulances.sections.problem.items.4', { ns: NS }),
              ]}
            />
          </ArticleSection>

          <ArticleSection title={t('subcategories.ambulances.sections.process.title', { ns: NS })}>
            <Paragraph>{t('subcategories.ambulances.sections.process.text', { ns: NS })}</Paragraph>

            <ProcessList
              steps={[
                {
                  title: t('subcategories.ambulances.sections.process.steps.0.title', { ns: NS }),
                  description: t('subcategories.ambulances.sections.process.steps.0.description', { ns: NS }),
                },
                {
                  title: t('subcategories.ambulances.sections.process.steps.1.title', { ns: NS }),
                  description: t('subcategories.ambulances.sections.process.steps.1.description', { ns: NS }),
                },
                {
                  title: t('subcategories.ambulances.sections.process.steps.2.title', { ns: NS }),
                  description: t('subcategories.ambulances.sections.process.steps.2.description', { ns: NS }),
                },
                {
                  title: t('subcategories.ambulances.sections.process.steps.3.title', { ns: NS }),
                  description: t('subcategories.ambulances.sections.process.steps.3.description', { ns: NS }),
                },
              ]}
            />

            <HighlightBox variant="success">
              {t('subcategories.ambulances.sections.process.highlight', { ns: NS })}
            </HighlightBox>
          </ArticleSection>

          <ArticleSection title={t('subcategories.ambulances.sections.modes.title', { ns: NS })}>
            <Paragraph>{t('subcategories.ambulances.sections.modes.text', { ns: NS })}</Paragraph>

            <DataTable
              caption={t('subcategories.ambulances.sections.modes.table.caption', { ns: NS })}
              headers={[
                t('subcategories.ambulances.sections.modes.table.headers.0', { ns: NS }),
                t('subcategories.ambulances.sections.modes.table.headers.1', { ns: NS }),
                t('subcategories.ambulances.sections.modes.table.headers.2', { ns: NS }),
                t('subcategories.ambulances.sections.modes.table.headers.3', { ns: NS }),
              ]}
              rows={[
                [
                  t('subcategories.ambulances.sections.modes.table.rows.0.0', { ns: NS }),
                  t('subcategories.ambulances.sections.modes.table.rows.0.1', { ns: NS }),
                  t('subcategories.ambulances.sections.modes.table.rows.0.2', { ns: NS }),
                  t('subcategories.ambulances.sections.modes.table.rows.0.3', { ns: NS }),
                ],
                [
                  t('subcategories.ambulances.sections.modes.table.rows.1.0', { ns: NS }),
                  t('subcategories.ambulances.sections.modes.table.rows.1.1', { ns: NS }),
                  t('subcategories.ambulances.sections.modes.table.rows.1.2', { ns: NS }),
                  t('subcategories.ambulances.sections.modes.table.rows.1.3', { ns: NS }),
                ],
                [
                  t('subcategories.ambulances.sections.modes.table.rows.2.0', { ns: NS }),
                  t('subcategories.ambulances.sections.modes.table.rows.2.1', { ns: NS }),
                  t('subcategories.ambulances.sections.modes.table.rows.2.2', { ns: NS }),
                  t('subcategories.ambulances.sections.modes.table.rows.2.3', { ns: NS }),
                ],
              ]}
            />
          </ArticleSection>

          <ArticleSection title={t('subcategories.ambulances.sections.equipment.title', { ns: NS })}>
            <Paragraph>{t('subcategories.ambulances.sections.equipment.text', { ns: NS })}</Paragraph>

            <FeatureGrid columns={2}>
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title={t('subcategories.ambulances.sections.equipment.features.0.title', { ns: NS })}
                description={t('subcategories.ambulances.sections.equipment.features.0.description', { ns: NS })}
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title={t('subcategories.ambulances.sections.equipment.features.1.title', { ns: NS })}
                description={t('subcategories.ambulances.sections.equipment.features.1.description', { ns: NS })}
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title={t('subcategories.ambulances.sections.equipment.features.2.title', { ns: NS })}
                description={t('subcategories.ambulances.sections.equipment.features.2.description', { ns: NS })}
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title={t('subcategories.ambulances.sections.equipment.features.3.title', { ns: NS })}
                description={t('subcategories.ambulances.sections.equipment.features.3.description', { ns: NS })}
              />
            </FeatureGrid>
          </ArticleSection>

          <ArticleSection title={t('subcategories.ambulances.sections.comparison.title', { ns: NS })}>
            <ComparisonTable
              title={t('subcategories.ambulances.sections.comparison.tableTitle', { ns: NS })}
              headers={[
                t('subcategories.ambulances.sections.comparison.headers.0', { ns: NS }),
                t('subcategories.ambulances.sections.comparison.headers.1', { ns: NS }),
                t('subcategories.ambulances.sections.comparison.headers.2', { ns: NS }),
              ]}
              rows={[
                {
                  parameter: t('subcategories.ambulances.sections.comparison.rows.0.parameter', { ns: NS }),
                  value1: t('subcategories.ambulances.sections.comparison.rows.0.value1', { ns: NS }),
                  value2: t('subcategories.ambulances.sections.comparison.rows.0.value2', { ns: NS }),
                },
                {
                  parameter: t('subcategories.ambulances.sections.comparison.rows.1.parameter', { ns: NS }),
                  value1: t('subcategories.ambulances.sections.comparison.rows.1.value1', { ns: NS }),
                  value2: t('subcategories.ambulances.sections.comparison.rows.1.value2', { ns: NS }),
                },
                {
                  parameter: t('subcategories.ambulances.sections.comparison.rows.2.parameter', { ns: NS }),
                  value1: t('subcategories.ambulances.sections.comparison.rows.2.value1', { ns: NS }),
                  value2: t('subcategories.ambulances.sections.comparison.rows.2.value2', { ns: NS }),
                },
                {
                  parameter: t('subcategories.ambulances.sections.comparison.rows.3.parameter', { ns: NS }),
                  value1: t('subcategories.ambulances.sections.comparison.rows.3.value1', { ns: NS }),
                  value2: t('subcategories.ambulances.sections.comparison.rows.3.value2', { ns: NS }),
                },
                {
                  parameter: t('subcategories.ambulances.sections.comparison.rows.4.parameter', { ns: NS }),
                  value1: t('subcategories.ambulances.sections.comparison.rows.4.value1', { ns: NS }),
                  value2: t('subcategories.ambulances.sections.comparison.rows.4.value2', { ns: NS }),
                },
              ]}
            />
          </ArticleSection>

          <ArticleSection title={t('subcategories.ambulances.sections.benefits.title', { ns: NS })}>
            <BulletList
              items={[
                t('subcategories.ambulances.sections.benefits.items.0', { ns: NS }),
                t('subcategories.ambulances.sections.benefits.items.1', { ns: NS }),
                t('subcategories.ambulances.sections.benefits.items.2', { ns: NS }),
                t('subcategories.ambulances.sections.benefits.items.3', { ns: NS }),
                t('subcategories.ambulances.sections.benefits.items.4', { ns: NS }),
                t('subcategories.ambulances.sections.benefits.items.5', { ns: NS }),
              ]}
            />

            <HighlightBox variant="warning">
              {t('subcategories.ambulances.sections.benefits.warning', { ns: NS })}
            </HighlightBox>
          </ArticleSection>
        </div>
      </article>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <h2 className="cta__title">{t('subcategories.ambulances.cta.title', { ns: NS })}</h2>
          <p className="cta__text">{t('subcategories.ambulances.cta.text', { ns: NS })}</p>
          <div className="cta__actions">
            <AppLink href="/contacts" className="btn btn--white btn--large">
              {t('cta.consultation', { ns: 'common' })}
            </AppLink>
            <a
              href="tel:+78001234567"
              className="btn btn--secondary btn--large"
              style={{ borderColor: 'white', color: 'white' }}
            >
              {t('cta.call', { ns: 'common' })}
            </a>
          </div>
        </div>
      </section>
    </Layout>
  )
}
