/* eslint-disable @typescript-eslint/no-explicit-any */
import { TolgeeStaticDataProp, useTranslate } from '@tolgee/react'
import Image from 'next/image'

import { Layout } from '@/widgets/layout'

import { getCategoryNamespace, NAMESPACES, TLocale } from '@/shared/config/tolgee'
import { AppLink } from '@/shared/ui/app-link'
import {
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
import { IconArrowLeft, IconCheck } from '@/shared/ui/icons'
import { Seo } from '@/shared/ui/seo'

interface MoldPreventionPageProps {
  staticData: TolgeeStaticDataProp
  lang: TLocale
}

export function MoldPreventionPage({ staticData, lang }: MoldPreventionPageProps) {
  const { t } = useTranslate()
  const ns = getCategoryNamespace('warehouses')

  const data = (staticData as any)[`${lang}:${ns}`]?.subcategories?.['mold-prevention']

  return (
    <Layout>
      <Seo
        title={t('subcategories.mold-prevention.title', { ns })}
        description={t('subcategories.mold-prevention.shortDesc', { ns })}
      />
      {/* Breadcrumbs */}
      <div className="bg-bg-light border-border border-b">
        <div className="container py-4">
          <nav className="flex items-center gap-2 text-sm">
            <AppLink href="/applications" className="text-text-secondary hover:text-primary transition-colors">
              {t('nav.applications', { ns: NAMESPACES.common })}
            </AppLink>
            <span className="text-text-light">/</span>
            <AppLink
              href="/applications/warehouses"
              className="text-text-secondary hover:text-primary transition-colors"
            >
              {t('title', { ns })}
            </AppLink>
            <span className="text-text-light">/</span>
            <span className="text-text-primary font-medium">{t('subcategories.mold-prevention.title', { ns })}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1920&q=80"
            alt={t('subcategories.mold-prevention.title', { ns })}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        </div>
        <div className="relative z-10 container">
          <AppLink
            href="/applications/warehouses"
            className="mb-6 inline-flex items-center gap-2 text-white/80 transition-colors hover:text-white"
          >
            <IconArrowLeft style={{ width: 20, height: 20 }} />
            <span>{t('title', { ns })}</span>
          </AppLink>
          <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            {t('subcategories.mold-prevention.title', { ns })}
          </h1>
          <p className="max-w-3xl text-xl text-white/80 md:text-2xl">
            {t('subcategories.mold-prevention.shortDesc', { ns })}
          </p>
        </div>
      </section>

      {/* Key Stats */}
      <section className="bg-bg-light py-12">
        <div className="container">
          <StatGrid columns={4}>
            <StatCard
              value={t('subcategories.mold-prevention.stats.destruction.value', { ns })}
              label={t('subcategories.mold-prevention.stats.destruction.label', { ns })}
              description={t('subcategories.mold-prevention.stats.destruction.description', { ns })}
              variant="primary"
            />
            <StatCard
              value={t('subcategories.mold-prevention.stats.treatmentTime.value', { ns })}
              label={t('subcategories.mold-prevention.stats.treatmentTime.label', { ns })}
              description={t('subcategories.mold-prevention.stats.treatmentTime.description', { ns })}
              variant="accent"
            />
            <StatCard
              value={t('subcategories.mold-prevention.stats.lossReduction.value', { ns })}
              label={t('subcategories.mold-prevention.stats.lossReduction.label', { ns })}
              description={t('subcategories.mold-prevention.stats.lossReduction.description', { ns })}
              variant="primary"
            />
            <StatCard
              value={t('subcategories.mold-prevention.stats.chemicals.value', { ns })}
              label={t('subcategories.mold-prevention.stats.chemicals.label', { ns })}
              description={t('subcategories.mold-prevention.stats.chemicals.description', { ns })}
              variant="accent"
            />
          </StatGrid>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-12 md:py-16">
        <div className="container max-w-4xl">
          <ArticleSection>
            <Paragraph>{t('subcategories.mold-prevention.sections.intro.paragraph1', { ns })}</Paragraph>
            <Paragraph>{t('subcategories.mold-prevention.sections.intro.paragraph2', { ns })}</Paragraph>
          </ArticleSection>

          <HighlightBox variant="warning">
            <strong>{t('subcategories.mold-prevention.sections.intro.warningLabel', { ns })}</strong>{' '}
            {t('subcategories.mold-prevention.sections.intro.warningText', { ns })}
          </HighlightBox>

          <ArticleSection title={data.sections.mechanism.title}>
            <Paragraph>{data.sections.mechanism.intro}</Paragraph>
            <BulletList items={data.sections.mechanism.items} />
          </ArticleSection>

          <ArticleSection title={data.sections.equipment.title}>
            <Paragraph>{data.sections.equipment.intro}</Paragraph>

            <DataTable
              caption={data.sections.equipment.tableCaption}
              headers={data.sections.equipment.tableHeaders}
              rows={data.sections.equipment.tableRows}
            />

            <HighlightBox variant="info">
              <strong>{data.sections.equipment.hvacLabel}</strong> {data.sections.equipment.hvacText}
            </HighlightBox>
          </ArticleSection>

          <ArticleSection title={data.sections.processModes.title}>
            <Paragraph>{data.sections.processModes.intro}</Paragraph>

            <NumberedList items={data.sections.processModes.steps.map((step: any) => step.description)} />

            <DataTable
              caption={data.sections.processModes.treatmentTable}
              headers={data.sections.processModes.treatmentHeaders}
              rows={data.sections.processModes.treatmentRows}
            />
          </ArticleSection>

          <ArticleSection title={data.sections.humidity.title}>
            <Paragraph>{data.sections.humidity.intro}</Paragraph>
            <BulletList items={data.sections.humidity.items} />
          </ArticleSection>

          <ArticleSection title={data.sections.economics.title}>
            <Paragraph>{data.sections.economics.intro}</Paragraph>

            <DataTable
              caption={data.sections.economics.tableCaption}
              headers={data.sections.economics.tableHeaders}
              rows={data.sections.economics.tableRows}
            />

            <HighlightBox variant="success">
              <strong>ROI:</strong> {data.sections.economics.highlightBox}
            </HighlightBox>
          </ArticleSection>

          <ArticleSection title={data.sections.standards.title}>
            <Paragraph>{data.sections.standards.intro}</Paragraph>
            <BulletList items={data.sections.standards.items} />
          </ArticleSection>

          <ArticleSection title="Преимущества озонирования для складов">
            <FeatureGrid columns={2}>
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Без выгрузки продукции"
                description="Обработка проводится без необходимости освобождать склад — озон безопасен для большинства товаров"
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Проникновение везде"
                description="Газ достигает труднодоступных мест: щелей, швов, вентиляции, куда не проникают жидкие средства"
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Автоматическая работа"
                description="Современные озонаторы оснащены таймерами для автономной работы в нерабочие часы"
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Безопасный распад"
                description="Остаточный озон разлагается на кислород без образования токсичных продуктов"
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Без расходных материалов"
                description="Для работы нужны только воздух и электричество — никаких реагентов"
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Комплексное действие"
                description="Одновременно дезинфекция, дезодорация и профилактика появления вредителей"
              />
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
