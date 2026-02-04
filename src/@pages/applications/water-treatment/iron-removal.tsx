/* eslint-disable @typescript-eslint/no-explicit-any */
import { TolgeeStaticDataProp, useTranslate } from '@tolgee/react'

import { Layout } from '@/widgets/layout'

import { getCategoryNamespace, NAMESPACES, TLocale } from '@/shared/config/tolgee'
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

interface IronRemovalPageProps {
  staticData: TolgeeStaticDataProp
  lang: TLocale
}

export function IronRemovalPage({ staticData, lang }: IronRemovalPageProps) {
  const { t } = useTranslate()
  const ns = getCategoryNamespace('water-treatment')

  const categoryData = (staticData as any)[`${lang}:${ns}`]
  const data = categoryData?.subcategories?.['iron-removal']

  return (
    <Layout>
      <Seo
        title={t('subcategories.iron-removal.title', { ns })}
        description={t('subcategories.iron-removal.shortDesc', { ns })}
      />
      <ArticleHero
        title={t('subcategories.iron-removal.title', { ns })}
        description={t('subcategories.iron-removal.shortDesc', { ns })}
        image="https://images.pexels.com/photos/17882785/pexels-photo-17882785.jpeg"
        imageAlt={t('subcategories.iron-removal.title', { ns })}
        backLink={{
          href: '/applications/water-treatment',
          label: t('title', { ns }),
        }}
        breadcrumbs={[
          { href: '/applications', label: t('nav.applications', { ns: NAMESPACES.common }) },
          { href: '/applications/water-treatment', label: t('title', { ns }) },
          { label: t('subcategories.iron-removal.title', { ns }) },
        ]}
      />

      {/* Key Stats */}
      <section className="bg-bg-light py-12">
        <div className="container">
          <StatGrid columns={4}>
            <StatCard
              value={data?.stats?.ozoneForIron?.value}
              label={data?.stats?.ozoneForIron?.label}
              description={data?.stats?.ozoneForIron?.description}
              variant="primary"
            />
            <StatCard
              value={data?.stats?.ozoneForManganese?.value}
              label={data?.stats?.ozoneForManganese?.label}
              description={data?.stats?.ozoneForManganese?.description}
              variant="accent"
            />
            <StatCard
              value={data?.stats?.residualIron?.value}
              label={data?.stats?.residualIron?.label}
              description={data?.stats?.residualIron?.description}
              variant="primary"
            />
            <StatCard
              value={data?.stats?.residualManganese?.value}
              label={data?.stats?.residualManganese?.label}
              description={data?.stats?.residualManganese?.description}
              variant="accent"
            />
          </StatGrid>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-12 md:py-16">
        <div className="container max-w-4xl">
          <ArticleSection>
            <Paragraph>{data?.sections?.intro?.paragraph1}</Paragraph>
            <Paragraph>{data?.sections?.intro?.paragraph2}</Paragraph>
          </ArticleSection>

          <HighlightBox variant="warning">
            <strong>{data?.sections?.intro?.regulationLabel}</strong> {data?.sections?.intro?.regulationText}
          </HighlightBox>

          <ArticleSection title={data?.sections?.comparison?.title}>
            <ComparisonTable headers={data?.sections?.comparison?.headers} rows={data?.sections?.comparison?.rows} />
          </ArticleSection>

          <ArticleSection title={data?.sections?.ironChemistry?.title}>
            <HighlightBox variant="info">
              <strong>{data?.sections?.ironChemistry?.reactionLabel}</strong>
              <br />
              {data?.sections?.ironChemistry?.reaction1}
              <br />
              {data?.sections?.ironChemistry?.reaction2}
              <br />
              <br />
              {data?.sections?.ironChemistry?.description}
            </HighlightBox>

            <DataTable
              caption={data?.sections?.ironChemistry?.table?.caption}
              headers={data?.sections?.ironChemistry?.table?.headers}
              rows={data?.sections?.ironChemistry?.table?.rows}
            />
          </ArticleSection>

          <ArticleSection title={data?.sections?.manganeseChemistry?.title}>
            <HighlightBox variant="info">
              <strong>{data?.sections?.manganeseChemistry?.reactionLabel}</strong>
              <br />
              {data?.sections?.manganeseChemistry?.reaction}
              <br />
              <br />
              {data?.sections?.manganeseChemistry?.description}
            </HighlightBox>

            <Paragraph>
              <strong>{data?.sections?.manganeseChemistry?.importantLabel}</strong>{' '}
              {data?.sections?.manganeseChemistry?.importantText}
            </Paragraph>
          </ArticleSection>

          <ArticleSection title={data?.sections?.process?.title}>
            <ProcessList steps={data?.sections?.process?.steps} />
          </ArticleSection>

          <ArticleSection title={data?.sections?.doubleOzonation?.title}>
            <Paragraph>{data?.sections?.doubleOzonation?.paragraph}</Paragraph>

            <DataTable
              caption={data?.sections?.doubleOzonation?.table?.caption}
              headers={data?.sections?.doubleOzonation?.table?.headers}
              rows={data?.sections?.doubleOzonation?.table?.rows}
            />
          </ArticleSection>

          <ArticleSection title={data?.sections?.organicComplexes?.title}>
            <Paragraph>{data?.sections?.organicComplexes?.paragraph}</Paragraph>

            <BulletList items={data?.sections?.organicComplexes?.items} />

            <HighlightBox variant="success">
              <strong>{data?.sections?.organicComplexes?.advantageLabel}</strong>{' '}
              {data?.sections?.organicComplexes?.advantageText}
            </HighlightBox>
          </ArticleSection>

          <ArticleSection title={data?.sections?.systemParams?.title}>
            <DataTable
              caption={data?.sections?.systemParams?.table?.caption}
              headers={data?.sections?.systemParams?.table?.headers}
              rows={data?.sections?.systemParams?.table?.rows}
            />

            <Paragraph>
              <strong>{data?.sections?.systemParams?.noteLabel}</strong> {data?.sections?.systemParams?.noteText}
            </Paragraph>
          </ArticleSection>

          <ArticleSection title={data?.sections?.benefits?.title}>
            <FeatureGrid columns={2}>
              {data?.sections?.benefits?.items?.map((item: { title: string; description: string }, idx: number) => (
                <FeatureCard
                  key={idx}
                  icon={<IconCheck style={{ width: 24, height: 24 }} />}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </FeatureGrid>
          </ArticleSection>

          <ArticleSection title={data?.sections?.regulations?.title}>
            <DataTable
              caption={data?.sections?.regulations?.table?.caption}
              headers={data?.sections?.regulations?.table?.headers}
              rows={data?.sections?.regulations?.table?.rows}
            />

            <BulletList items={data?.sections?.regulations?.items} />
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
