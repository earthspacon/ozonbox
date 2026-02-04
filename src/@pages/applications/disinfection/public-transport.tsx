/* eslint-disable @typescript-eslint/no-explicit-any */
import { TolgeeStaticDataProp, useTranslate } from '@tolgee/react'

import { Layout } from '@/widgets/layout'

import { getCategoryNamespace, NAMESPACES, TLocale } from '@/shared/config/tolgee'
import { useLang } from '@/shared/lib'
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

interface PublicTransportPageProps {
  staticData: TolgeeStaticDataProp
  lang: TLocale
}

export function PublicTransportPage({ staticData }: PublicTransportPageProps) {
  const { t } = useTranslate()
  const lang = useLang()
  const ns = getCategoryNamespace('disinfection')

  // get category data from staticData
  const categoryData = (staticData as Record<string, { subcategories?: { 'public-transport'?: any } }>)[`${lang}:${ns}`]
  const data = categoryData?.subcategories?.['public-transport']

  const breadcrumbs = [
    { label: t('nav.applications', { ns: NAMESPACES.common }), href: '/applications' },
    { label: t('title', { ns }), href: '/applications/disinfection' },
    { label: t('subcategories.public-transport.title', { ns }) },
  ]

  return (
    <Layout>
      <Seo
        title={t('subcategories.public-transport.title', { ns })}
        description={t('subcategories.public-transport.shortDesc', { ns })}
      />

      <ArticleHero
        title={t('subcategories.public-transport.title', { ns })}
        description={t('subcategories.public-transport.shortDesc', { ns })}
        image="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1920&q=80"
        imageAlt={t('subcategories.public-transport.title', { ns })}
        breadcrumbs={breadcrumbs}
        backLink={{
          href: '/applications/disinfection',
          label: t('title', { ns }),
        }}
      />

      {/* Key Stats */}
      <section className="bg-bg-light py-12">
        <div className="container">
          <StatGrid columns={4}>
            <StatCard
              value={data?.stats?.time?.value}
              label={data?.stats?.time?.label}
              description={data?.stats?.time?.description}
              variant="primary"
            />
            <StatCard
              value={data?.stats?.power?.value}
              label={data?.stats?.power?.label}
              description={data?.stats?.power?.description}
              variant="accent"
            />
            <StatCard
              value={data?.stats?.coverage?.value}
              label={data?.stats?.coverage?.label}
              description={data?.stats?.coverage?.description}
              variant="primary"
            />
            <StatCard
              value={data?.stats?.consumables?.value}
              label={data?.stats?.consumables?.label}
              description={data?.stats?.consumables?.description}
              variant="accent"
            />
          </StatGrid>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-12 md:py-16">
        <div className="container max-w-4xl">
          <ArticleSection>
            <Paragraph>{data?.sections?.intro?.text}</Paragraph>
            <Paragraph>{data?.sections?.intro?.text2}</Paragraph>
          </ArticleSection>

          <HighlightBox variant="info">
            <strong>{data?.sections?.highlight1?.title}</strong> {data?.sections?.highlight1?.text}
          </HighlightBox>

          <ArticleSection title={data?.sections?.whatDisinfects?.title}>
            <BulletList items={data?.sections?.whatDisinfects?.items} />
          </ArticleSection>

          <ArticleSection title={data?.sections?.treatmentMode?.title}>
            <ProcessList steps={data?.sections?.treatmentMode?.steps} />

            <DataTable
              caption={data?.sections?.treatmentMode?.tableCaption}
              headers={data?.sections?.treatmentMode?.tableHeaders}
              rows={data?.sections?.treatmentMode?.tableData}
            />
          </ArticleSection>

          <ArticleSection title={data?.sections?.organizationOptions?.title}>
            <Paragraph>{data?.sections?.organizationOptions?.text}</Paragraph>

            <FeatureGrid columns={2}>
              {(
                (data?.sections?.organizationOptions?.items as Array<{ title: string; description: string }>) || []
              ).map((item: { title: string; description: string }, idx: number) => (
                <FeatureCard
                  key={idx}
                  icon={<IconCheck style={{ width: 24, height: 24 }} />}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </FeatureGrid>
          </ArticleSection>

          <ArticleSection title={data?.sections?.powerSupply?.title}>
            <Paragraph>{data?.sections?.powerSupply?.text}</Paragraph>

            <DataTable
              caption={data?.sections?.powerSupply?.tableCaption}
              headers={data?.sections?.powerSupply?.tableHeaders}
              rows={data?.sections?.powerSupply?.tableData}
            />

            <HighlightBox variant="success">{data?.sections?.powerSupply?.highlight}</HighlightBox>
          </ArticleSection>

          <ArticleSection title={data?.sections?.pathogenEfficiency?.title}>
            <DataTable
              caption={data?.sections?.pathogenEfficiency?.tableCaption}
              headers={data?.sections?.pathogenEfficiency?.tableHeaders}
              rows={data?.sections?.pathogenEfficiency?.tableData}
            />
          </ArticleSection>

          <ArticleSection title={data?.sections?.comparison?.title}>
            <ComparisonTable
              title={data?.sections?.comparison?.tableTitle}
              headers={(data?.sections?.comparison?.headers || []).slice(0, 3) as [string, string, string]}
              rows={data?.sections?.comparison?.rows}
            />
          </ArticleSection>

          <ArticleSection title={data?.sections?.benefits?.title}>
            <FeatureGrid columns={2}>
              {((data?.sections?.benefits?.items as Array<{ title: string; description: string }>) || []).map(
                (item: { title: string; description: string }, idx: number) => (
                  <FeatureCard
                    key={idx}
                    icon={<IconCheck style={{ width: 24, height: 24 }} />}
                    title={item.title}
                    description={item.description}
                  />
                ),
              )}
            </FeatureGrid>
          </ArticleSection>

          <ArticleSection title={data?.sections?.safety?.title}>
            <BulletList items={data?.sections?.safety?.items} />

            <HighlightBox variant="warning">
              {typeof data?.sections?.safety?.warning === 'string' ? data.sections.safety.warning : ''}
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
