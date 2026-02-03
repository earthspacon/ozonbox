import Image from 'next/image'
import { useTranslate } from '@tolgee/react'

import { Layout } from '@/widgets/layout'

import { getCategoryNamespace, NAMESPACES } from '@/shared/config/tolgee'
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
import { Seo } from '@/shared/ui/seo'

export function EquipmentSterilizationPage() {
  const { t } = useTranslate()
  const ns = getCategoryNamespace('medicine')

  return (
    <Layout>
      <Seo title={t('subcategories.equipment-sterilization.title', { ns })} description={t('subcategories.equipment-sterilization.shortDesc', { ns })} />
      {/* Breadcrumbs */}
      <div className="bg-bg-light border-border border-b">
        <div className="container py-4">
          <nav className="flex items-center gap-2 text-sm">
            <AppLink href="/applications" className="text-text-secondary hover:text-primary transition-colors">
              {t('nav.applications', { ns: NAMESPACES.common })}
            </AppLink>
            <span className="text-text-light">/</span>
            <AppLink href="/applications/medicine" className="text-text-secondary hover:text-primary transition-colors">
              {t('title', { ns })}
            </AppLink>
            <span className="text-text-light">/</span>
            <span className="text-text-primary font-medium">
              {t('subcategories.equipment-sterilization.title', { ns })}
            </span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1581093458791-9d42e3c7e117?w=1920&q=80"
            alt={t('subcategories.equipment-sterilization.title', { ns })}
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
            <span>{t('title', { ns })}</span>
          </AppLink>
          <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            {t('subcategories.equipment-sterilization.title', { ns })}
          </h1>
          <p className="max-w-3xl text-xl text-white/80 md:text-2xl">
            {t('subcategories.equipment-sterilization.heroText', { ns })}
          </p>
        </div>
      </section>

      {/* Key Stats */}
      <section className="bg-bg-light py-12">
        <div className="container">
          <StatGrid columns={4}>
            <StatCard
              value={t('subcategories.equipment-sterilization.stats.stat1.value', { ns })}
              label={t('subcategories.equipment-sterilization.stats.stat1.label', { ns })}
              description={t('subcategories.equipment-sterilization.stats.stat1.description', { ns })}
              variant="primary"
            />
            <StatCard
              value={t('subcategories.equipment-sterilization.stats.stat2.value', { ns })}
              label={t('subcategories.equipment-sterilization.stats.stat2.label', { ns })}
              description={t('subcategories.equipment-sterilization.stats.stat2.description', { ns })}
              variant="accent"
            />
            <StatCard
              value={t('subcategories.equipment-sterilization.stats.stat3.value', { ns })}
              label={t('subcategories.equipment-sterilization.stats.stat3.label', { ns })}
              description={t('subcategories.equipment-sterilization.stats.stat3.description', { ns })}
              variant="primary"
            />
            <StatCard
              value={t('subcategories.equipment-sterilization.stats.stat4.value', { ns })}
              label={t('subcategories.equipment-sterilization.stats.stat4.label', { ns })}
              description={t('subcategories.equipment-sterilization.stats.stat4.description', { ns })}
              variant="accent"
            />
          </StatGrid>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-12 md:py-20">
        <div className="container max-w-4xl">
          <ArticleSection>
            <Paragraph>{t('subcategories.equipment-sterilization.sections.intro.text', { ns })}</Paragraph>
            <Paragraph>{t('subcategories.equipment-sterilization.sections.intro.text2', { ns })}</Paragraph>
          </ArticleSection>

          <HighlightBox variant="info">
            <strong>{t('subcategories.equipment-sterilization.sections.highlight1.title', { ns })}</strong>{' '}
            {t('subcategories.equipment-sterilization.sections.highlight1.text', { ns })}
          </HighlightBox>

          <ArticleSection title={t('subcategories.equipment-sterilization.sections.problem.title', { ns })}>
            <Paragraph>{t('subcategories.equipment-sterilization.sections.problem.text', { ns })}</Paragraph>
            <BulletList
              items={[
                t('subcategories.equipment-sterilization.sections.problem.items.0', { ns }),
                t('subcategories.equipment-sterilization.sections.problem.items.1', { ns }),
                t('subcategories.equipment-sterilization.sections.problem.items.2', { ns }),
                t('subcategories.equipment-sterilization.sections.problem.items.3', { ns }),
                t('subcategories.equipment-sterilization.sections.problem.items.4', { ns }),
              ]}
            />
          </ArticleSection>

          <ArticleSection title={t('subcategories.equipment-sterilization.sections.endoscopes.title', { ns })}>
            <Paragraph>{t('subcategories.equipment-sterilization.sections.endoscopes.text', { ns })}</Paragraph>

            <DataTable
              caption={t('subcategories.equipment-sterilization.sections.endoscopes.table.caption', { ns })}
              headers={[
                t('subcategories.equipment-sterilization.sections.endoscopes.table.headers.0', { ns }),
                t('subcategories.equipment-sterilization.sections.endoscopes.table.headers.1', { ns }),
                t('subcategories.equipment-sterilization.sections.endoscopes.table.headers.2', { ns }),
                t('subcategories.equipment-sterilization.sections.endoscopes.table.headers.3', { ns }),
              ]}
              rows={[
                [
                  t('subcategories.equipment-sterilization.sections.endoscopes.table.rows.0.0', { ns }),
                  t('subcategories.equipment-sterilization.sections.endoscopes.table.rows.0.1', { ns }),
                  t('subcategories.equipment-sterilization.sections.endoscopes.table.rows.0.2', { ns }),
                  t('subcategories.equipment-sterilization.sections.endoscopes.table.rows.0.3', { ns }),
                ],
                [
                  t('subcategories.equipment-sterilization.sections.endoscopes.table.rows.1.0', { ns }),
                  t('subcategories.equipment-sterilization.sections.endoscopes.table.rows.1.1', { ns }),
                  t('subcategories.equipment-sterilization.sections.endoscopes.table.rows.1.2', { ns }),
                  t('subcategories.equipment-sterilization.sections.endoscopes.table.rows.1.3', { ns }),
                ],
                [
                  t('subcategories.equipment-sterilization.sections.endoscopes.table.rows.2.0', { ns }),
                  t('subcategories.equipment-sterilization.sections.endoscopes.table.rows.2.1', { ns }),
                  t('subcategories.equipment-sterilization.sections.endoscopes.table.rows.2.2', { ns }),
                  t('subcategories.equipment-sterilization.sections.endoscopes.table.rows.2.3', { ns }),
                ],
                [
                  t('subcategories.equipment-sterilization.sections.endoscopes.table.rows.3.0', { ns }),
                  t('subcategories.equipment-sterilization.sections.endoscopes.table.rows.3.1', { ns }),
                  t('subcategories.equipment-sterilization.sections.endoscopes.table.rows.3.2', { ns }),
                  t('subcategories.equipment-sterilization.sections.endoscopes.table.rows.3.3', { ns }),
                ],
              ]}
            />

            <HighlightBox variant="success">
              {t('subcategories.equipment-sterilization.sections.endoscopes.highlight', { ns })}
            </HighlightBox>
          </ArticleSection>

          <ArticleSection title={t('subcategories.equipment-sterilization.sections.lowtemp.title', { ns })}>
            <Paragraph>{t('subcategories.equipment-sterilization.sections.lowtemp.text', { ns })}</Paragraph>

            <ProcessList
              steps={[
                {
                  title: t('subcategories.equipment-sterilization.sections.lowtemp.steps.0.title', { ns }),
                  description: t('subcategories.equipment-sterilization.sections.lowtemp.steps.0.description', {
                    ns: NS,
                  }),
                },
                {
                  title: t('subcategories.equipment-sterilization.sections.lowtemp.steps.1.title', { ns }),
                  description: t('subcategories.equipment-sterilization.sections.lowtemp.steps.1.description', {
                    ns: NS,
                  }),
                },
                {
                  title: t('subcategories.equipment-sterilization.sections.lowtemp.steps.2.title', { ns }),
                  description: t('subcategories.equipment-sterilization.sections.lowtemp.steps.2.description', {
                    ns: NS,
                  }),
                },
                {
                  title: t('subcategories.equipment-sterilization.sections.lowtemp.steps.3.title', { ns }),
                  description: t('subcategories.equipment-sterilization.sections.lowtemp.steps.3.description', {
                    ns: NS,
                  }),
                },
              ]}
            />
          </ArticleSection>

          <ArticleSection title={t('subcategories.equipment-sterilization.sections.materials.title', { ns })}>
            <Paragraph>{t('subcategories.equipment-sterilization.sections.materials.text', { ns })}</Paragraph>

            <FeatureGrid columns={2}>
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title={t('subcategories.equipment-sterilization.sections.materials.features.0.title', { ns })}
                description={t('subcategories.equipment-sterilization.sections.materials.features.0.description', {
                  ns: NS,
                })}
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title={t('subcategories.equipment-sterilization.sections.materials.features.1.title', { ns })}
                description={t('subcategories.equipment-sterilization.sections.materials.features.1.description', {
                  ns: NS,
                })}
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title={t('subcategories.equipment-sterilization.sections.materials.features.2.title', { ns })}
                description={t('subcategories.equipment-sterilization.sections.materials.features.2.description', {
                  ns: NS,
                })}
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title={t('subcategories.equipment-sterilization.sections.materials.features.3.title', { ns })}
                description={t('subcategories.equipment-sterilization.sections.materials.features.3.description', {
                  ns: NS,
                })}
              />
            </FeatureGrid>
          </ArticleSection>

          <ArticleSection title={t('subcategories.equipment-sterilization.sections.comparison.title', { ns })}>
            <ComparisonTable
              title={t('subcategories.equipment-sterilization.sections.comparison.tableTitle', { ns })}
              headers={[
                t('subcategories.equipment-sterilization.sections.comparison.headers.0', { ns }),
                t('subcategories.equipment-sterilization.sections.comparison.headers.1', { ns }),
                t('subcategories.equipment-sterilization.sections.comparison.headers.2', { ns }),
              ]}
              rows={[
                {
                  parameter: t('subcategories.equipment-sterilization.sections.comparison.rows.0.parameter', {
                    ns: NS,
                  }),
                  value1: t('subcategories.equipment-sterilization.sections.comparison.rows.0.value1', { ns }),
                  value2: t('subcategories.equipment-sterilization.sections.comparison.rows.0.value2', { ns }),
                },
                {
                  parameter: t('subcategories.equipment-sterilization.sections.comparison.rows.1.parameter', {
                    ns: NS,
                  }),
                  value1: t('subcategories.equipment-sterilization.sections.comparison.rows.1.value1', { ns }),
                  value2: t('subcategories.equipment-sterilization.sections.comparison.rows.1.value2', { ns }),
                },
                {
                  parameter: t('subcategories.equipment-sterilization.sections.comparison.rows.2.parameter', {
                    ns: NS,
                  }),
                  value1: t('subcategories.equipment-sterilization.sections.comparison.rows.2.value1', { ns }),
                  value2: t('subcategories.equipment-sterilization.sections.comparison.rows.2.value2', { ns }),
                },
                {
                  parameter: t('subcategories.equipment-sterilization.sections.comparison.rows.3.parameter', {
                    ns: NS,
                  }),
                  value1: t('subcategories.equipment-sterilization.sections.comparison.rows.3.value1', { ns }),
                  value2: t('subcategories.equipment-sterilization.sections.comparison.rows.3.value2', { ns }),
                },
                {
                  parameter: t('subcategories.equipment-sterilization.sections.comparison.rows.4.parameter', {
                    ns: NS,
                  }),
                  value1: t('subcategories.equipment-sterilization.sections.comparison.rows.4.value1', { ns }),
                  value2: t('subcategories.equipment-sterilization.sections.comparison.rows.4.value2', { ns }),
                },
              ]}
            />
          </ArticleSection>

          <ArticleSection title={t('subcategories.equipment-sterilization.sections.benefits.title', { ns })}>
            <BulletList
              items={[
                t('subcategories.equipment-sterilization.sections.benefits.items.0', { ns }),
                t('subcategories.equipment-sterilization.sections.benefits.items.1', { ns }),
                t('subcategories.equipment-sterilization.sections.benefits.items.2', { ns }),
                t('subcategories.equipment-sterilization.sections.benefits.items.3', { ns }),
                t('subcategories.equipment-sterilization.sections.benefits.items.4', { ns }),
                t('subcategories.equipment-sterilization.sections.benefits.items.5', { ns }),
              ]}
            />

            <HighlightBox variant="warning">
              {t('subcategories.equipment-sterilization.sections.benefits.warning', { ns })}
            </HighlightBox>
          </ArticleSection>
        </div>
      </article>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <h2 className="cta__title">{t('subcategories.equipment-sterilization.cta.title', { ns })}</h2>
          <p className="cta__text">{t('subcategories.equipment-sterilization.cta.text', { ns })}</p>
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
