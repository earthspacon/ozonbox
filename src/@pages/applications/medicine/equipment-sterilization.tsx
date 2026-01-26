import Image from 'next/image'
import { useTranslate } from '@tolgee/react'
import { Layout } from '@/widgets'
import { AppLink } from '@/shared/ui/app-link'
import { IconArrowLeft, IconCheck } from '@/shared/ui/icons'
import {
  StatCard,
  StatGrid,
  HighlightBox,
  DataTable,
  ArticleSection,
  Paragraph,
  BulletList,
  FeatureCard,
  FeatureGrid,
  ComparisonTable,
  ProcessList,
} from '@/shared/ui/article-components'

const NS = 'category-medicine'

export function EquipmentSterilizationPage() {
  const { t } = useTranslate()

  return (
    <Layout>
      {/* Breadcrumbs */}
      <div className="bg-bg-light border-b border-border">
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
            <span className="text-text-primary font-medium">
              {t('subcategories.equipment-sterilization.title', { ns: NS })}
            </span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1581093458791-9d42e3c7e117?w=1920&q=80"
            alt={t('subcategories.equipment-sterilization.title', { ns: NS })}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        </div>
        <div className="container relative z-10">
          <AppLink
            href="/applications/medicine"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
          >
            <IconArrowLeft style={{ width: 20, height: 20 }} />
            <span>{t('title', { ns: NS })}</span>
          </AppLink>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            {t('subcategories.equipment-sterilization.title', { ns: NS })}
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl">
            {t('subcategories.equipment-sterilization.heroText', { ns: NS })}
          </p>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-12 bg-bg-light">
        <div className="container">
          <StatGrid columns={4}>
            <StatCard
              value={t('subcategories.equipment-sterilization.stats.stat1.value', { ns: NS })}
              label={t('subcategories.equipment-sterilization.stats.stat1.label', { ns: NS })}
              description={t('subcategories.equipment-sterilization.stats.stat1.description', { ns: NS })}
              variant="primary"
            />
            <StatCard
              value={t('subcategories.equipment-sterilization.stats.stat2.value', { ns: NS })}
              label={t('subcategories.equipment-sterilization.stats.stat2.label', { ns: NS })}
              description={t('subcategories.equipment-sterilization.stats.stat2.description', { ns: NS })}
              variant="accent"
            />
            <StatCard
              value={t('subcategories.equipment-sterilization.stats.stat3.value', { ns: NS })}
              label={t('subcategories.equipment-sterilization.stats.stat3.label', { ns: NS })}
              description={t('subcategories.equipment-sterilization.stats.stat3.description', { ns: NS })}
              variant="primary"
            />
            <StatCard
              value={t('subcategories.equipment-sterilization.stats.stat4.value', { ns: NS })}
              label={t('subcategories.equipment-sterilization.stats.stat4.label', { ns: NS })}
              description={t('subcategories.equipment-sterilization.stats.stat4.description', { ns: NS })}
              variant="accent"
            />
          </StatGrid>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-12 md:py-20">
        <div className="container max-w-4xl">
          <ArticleSection>
            <Paragraph>{t('subcategories.equipment-sterilization.sections.intro.text', { ns: NS })}</Paragraph>
            <Paragraph>{t('subcategories.equipment-sterilization.sections.intro.text2', { ns: NS })}</Paragraph>
          </ArticleSection>

          <HighlightBox variant="info">
            <strong>{t('subcategories.equipment-sterilization.sections.highlight1.title', { ns: NS })}</strong>{' '}
            {t('subcategories.equipment-sterilization.sections.highlight1.text', { ns: NS })}
          </HighlightBox>

          <ArticleSection title={t('subcategories.equipment-sterilization.sections.problem.title', { ns: NS })}>
            <Paragraph>{t('subcategories.equipment-sterilization.sections.problem.text', { ns: NS })}</Paragraph>
            <BulletList
              items={[
                t('subcategories.equipment-sterilization.sections.problem.items.0', { ns: NS }),
                t('subcategories.equipment-sterilization.sections.problem.items.1', { ns: NS }),
                t('subcategories.equipment-sterilization.sections.problem.items.2', { ns: NS }),
                t('subcategories.equipment-sterilization.sections.problem.items.3', { ns: NS }),
                t('subcategories.equipment-sterilization.sections.problem.items.4', { ns: NS }),
              ]}
            />
          </ArticleSection>

          <ArticleSection title={t('subcategories.equipment-sterilization.sections.endoscopes.title', { ns: NS })}>
            <Paragraph>{t('subcategories.equipment-sterilization.sections.endoscopes.text', { ns: NS })}</Paragraph>

            <DataTable
              caption={t('subcategories.equipment-sterilization.sections.endoscopes.table.caption', { ns: NS })}
              headers={[
                t('subcategories.equipment-sterilization.sections.endoscopes.table.headers.0', { ns: NS }),
                t('subcategories.equipment-sterilization.sections.endoscopes.table.headers.1', { ns: NS }),
                t('subcategories.equipment-sterilization.sections.endoscopes.table.headers.2', { ns: NS }),
                t('subcategories.equipment-sterilization.sections.endoscopes.table.headers.3', { ns: NS }),
              ]}
              rows={[
                [
                  t('subcategories.equipment-sterilization.sections.endoscopes.table.rows.0.0', { ns: NS }),
                  t('subcategories.equipment-sterilization.sections.endoscopes.table.rows.0.1', { ns: NS }),
                  t('subcategories.equipment-sterilization.sections.endoscopes.table.rows.0.2', { ns: NS }),
                  t('subcategories.equipment-sterilization.sections.endoscopes.table.rows.0.3', { ns: NS }),
                ],
                [
                  t('subcategories.equipment-sterilization.sections.endoscopes.table.rows.1.0', { ns: NS }),
                  t('subcategories.equipment-sterilization.sections.endoscopes.table.rows.1.1', { ns: NS }),
                  t('subcategories.equipment-sterilization.sections.endoscopes.table.rows.1.2', { ns: NS }),
                  t('subcategories.equipment-sterilization.sections.endoscopes.table.rows.1.3', { ns: NS }),
                ],
                [
                  t('subcategories.equipment-sterilization.sections.endoscopes.table.rows.2.0', { ns: NS }),
                  t('subcategories.equipment-sterilization.sections.endoscopes.table.rows.2.1', { ns: NS }),
                  t('subcategories.equipment-sterilization.sections.endoscopes.table.rows.2.2', { ns: NS }),
                  t('subcategories.equipment-sterilization.sections.endoscopes.table.rows.2.3', { ns: NS }),
                ],
                [
                  t('subcategories.equipment-sterilization.sections.endoscopes.table.rows.3.0', { ns: NS }),
                  t('subcategories.equipment-sterilization.sections.endoscopes.table.rows.3.1', { ns: NS }),
                  t('subcategories.equipment-sterilization.sections.endoscopes.table.rows.3.2', { ns: NS }),
                  t('subcategories.equipment-sterilization.sections.endoscopes.table.rows.3.3', { ns: NS }),
                ],
              ]}
            />

            <HighlightBox variant="success">
              {t('subcategories.equipment-sterilization.sections.endoscopes.highlight', { ns: NS })}
            </HighlightBox>
          </ArticleSection>

          <ArticleSection title={t('subcategories.equipment-sterilization.sections.lowtemp.title', { ns: NS })}>
            <Paragraph>{t('subcategories.equipment-sterilization.sections.lowtemp.text', { ns: NS })}</Paragraph>

            <ProcessList
              steps={[
                {
                  title: t('subcategories.equipment-sterilization.sections.lowtemp.steps.0.title', { ns: NS }),
                  description: t('subcategories.equipment-sterilization.sections.lowtemp.steps.0.description', {
                    ns: NS,
                  }),
                },
                {
                  title: t('subcategories.equipment-sterilization.sections.lowtemp.steps.1.title', { ns: NS }),
                  description: t('subcategories.equipment-sterilization.sections.lowtemp.steps.1.description', {
                    ns: NS,
                  }),
                },
                {
                  title: t('subcategories.equipment-sterilization.sections.lowtemp.steps.2.title', { ns: NS }),
                  description: t('subcategories.equipment-sterilization.sections.lowtemp.steps.2.description', {
                    ns: NS,
                  }),
                },
                {
                  title: t('subcategories.equipment-sterilization.sections.lowtemp.steps.3.title', { ns: NS }),
                  description: t('subcategories.equipment-sterilization.sections.lowtemp.steps.3.description', {
                    ns: NS,
                  }),
                },
              ]}
            />
          </ArticleSection>

          <ArticleSection title={t('subcategories.equipment-sterilization.sections.materials.title', { ns: NS })}>
            <Paragraph>{t('subcategories.equipment-sterilization.sections.materials.text', { ns: NS })}</Paragraph>

            <FeatureGrid columns={2}>
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title={t('subcategories.equipment-sterilization.sections.materials.features.0.title', { ns: NS })}
                description={t('subcategories.equipment-sterilization.sections.materials.features.0.description', {
                  ns: NS,
                })}
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title={t('subcategories.equipment-sterilization.sections.materials.features.1.title', { ns: NS })}
                description={t('subcategories.equipment-sterilization.sections.materials.features.1.description', {
                  ns: NS,
                })}
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title={t('subcategories.equipment-sterilization.sections.materials.features.2.title', { ns: NS })}
                description={t('subcategories.equipment-sterilization.sections.materials.features.2.description', {
                  ns: NS,
                })}
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title={t('subcategories.equipment-sterilization.sections.materials.features.3.title', { ns: NS })}
                description={t('subcategories.equipment-sterilization.sections.materials.features.3.description', {
                  ns: NS,
                })}
              />
            </FeatureGrid>
          </ArticleSection>

          <ArticleSection title={t('subcategories.equipment-sterilization.sections.comparison.title', { ns: NS })}>
            <ComparisonTable
              title={t('subcategories.equipment-sterilization.sections.comparison.tableTitle', { ns: NS })}
              headers={[
                t('subcategories.equipment-sterilization.sections.comparison.headers.0', { ns: NS }),
                t('subcategories.equipment-sterilization.sections.comparison.headers.1', { ns: NS }),
                t('subcategories.equipment-sterilization.sections.comparison.headers.2', { ns: NS }),
              ]}
              rows={[
                {
                  parameter: t('subcategories.equipment-sterilization.sections.comparison.rows.0.parameter', { ns: NS }),
                  value1: t('subcategories.equipment-sterilization.sections.comparison.rows.0.value1', { ns: NS }),
                  value2: t('subcategories.equipment-sterilization.sections.comparison.rows.0.value2', { ns: NS }),
                },
                {
                  parameter: t('subcategories.equipment-sterilization.sections.comparison.rows.1.parameter', { ns: NS }),
                  value1: t('subcategories.equipment-sterilization.sections.comparison.rows.1.value1', { ns: NS }),
                  value2: t('subcategories.equipment-sterilization.sections.comparison.rows.1.value2', { ns: NS }),
                },
                {
                  parameter: t('subcategories.equipment-sterilization.sections.comparison.rows.2.parameter', { ns: NS }),
                  value1: t('subcategories.equipment-sterilization.sections.comparison.rows.2.value1', { ns: NS }),
                  value2: t('subcategories.equipment-sterilization.sections.comparison.rows.2.value2', { ns: NS }),
                },
                {
                  parameter: t('subcategories.equipment-sterilization.sections.comparison.rows.3.parameter', { ns: NS }),
                  value1: t('subcategories.equipment-sterilization.sections.comparison.rows.3.value1', { ns: NS }),
                  value2: t('subcategories.equipment-sterilization.sections.comparison.rows.3.value2', { ns: NS }),
                },
                {
                  parameter: t('subcategories.equipment-sterilization.sections.comparison.rows.4.parameter', { ns: NS }),
                  value1: t('subcategories.equipment-sterilization.sections.comparison.rows.4.value1', { ns: NS }),
                  value2: t('subcategories.equipment-sterilization.sections.comparison.rows.4.value2', { ns: NS }),
                },
              ]}
            />
          </ArticleSection>

          <ArticleSection title={t('subcategories.equipment-sterilization.sections.benefits.title', { ns: NS })}>
            <BulletList
              items={[
                t('subcategories.equipment-sterilization.sections.benefits.items.0', { ns: NS }),
                t('subcategories.equipment-sterilization.sections.benefits.items.1', { ns: NS }),
                t('subcategories.equipment-sterilization.sections.benefits.items.2', { ns: NS }),
                t('subcategories.equipment-sterilization.sections.benefits.items.3', { ns: NS }),
                t('subcategories.equipment-sterilization.sections.benefits.items.4', { ns: NS }),
                t('subcategories.equipment-sterilization.sections.benefits.items.5', { ns: NS }),
              ]}
            />

            <HighlightBox variant="warning">
              {t('subcategories.equipment-sterilization.sections.benefits.warning', { ns: NS })}
            </HighlightBox>
          </ArticleSection>
        </div>
      </article>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <h2 className="cta__title">{t('subcategories.equipment-sterilization.cta.title', { ns: NS })}</h2>
          <p className="cta__text">{t('subcategories.equipment-sterilization.cta.text', { ns: NS })}</p>
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
