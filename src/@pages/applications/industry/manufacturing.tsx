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

interface ManufacturingPageProps {
  staticData: TolgeeStaticDataProp
  lang: TLocale
}

export function ManufacturingPage({ staticData, lang }: ManufacturingPageProps) {
  const { t } = useTranslate()
  const ns = getCategoryNamespace('industry')

  // get category data from staticData
  const categoryData = (staticData as Record<string, { subcategories?: { manufacturing?: any } }>)[`${lang}:${ns}`]
  const data = categoryData?.subcategories?.manufacturing

  const breadcrumbs = [
    { label: t('nav.applications', { ns: NAMESPACES.common }), href: '/applications' },
    { label: t('title', { ns }), href: '/applications/industry' },
    { label: t('subcategories.manufacturing.title', { ns }) },
  ]

  return (
    <Layout>
      <Seo
        title={t('subcategories.manufacturing.title', { ns })}
        description={t('subcategories.manufacturing.shortDesc', { ns })}
      />

      <ArticleHero
        title={t('subcategories.manufacturing.title', { ns })}
        description={t('subcategories.manufacturing.shortDesc', { ns })}
        image="https://images.pexels.com/photos/221012/pexels-photo-221012.jpeg"
        imageAlt={t('subcategories.manufacturing.title', { ns })}
        breadcrumbs={breadcrumbs}
        backLink={{
          href: '/applications/industry',
          label: t('title', { ns }),
        }}
      />

      {/* Key Stats */}
      <section className="bg-bg-light py-12">
        <div className="container">
          <StatGrid columns={4}>
            <StatCard
              value={data?.stats?.stat1?.value}
              label={data?.stats?.stat1?.label}
              description={data?.stats?.stat1?.description}
              variant="primary"
            />
            <StatCard
              value={data?.stats?.stat2?.value}
              label={data?.stats?.stat2?.label}
              description={data?.stats?.stat2?.description}
              variant="accent"
            />
            <StatCard
              value={data?.stats?.stat3?.value}
              label={data?.stats?.stat3?.label}
              description={data?.stats?.stat3?.description}
              variant="primary"
            />
            <StatCard
              value={data?.stats?.stat4?.value}
              label={data?.stats?.stat4?.label}
              description={data?.stats?.stat4?.description}
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
            <strong>{data?.sections?.safety?.highlight?.title}</strong> {data?.sections?.safety?.highlight?.text}
          </HighlightBox>

          <ArticleSection title={data?.sections?.mechanism?.title}>
            <Paragraph>{data?.sections?.mechanism?.paragraph}</Paragraph>
            <BulletList items={data?.sections?.mechanism?.items} />

            <DataTable
              caption={data?.sections?.mechanism?.table?.caption}
              headers={data?.sections?.mechanism?.table?.headers}
              rows={data?.sections?.mechanism?.table?.rows}
            />

            <HighlightBox variant="info">
              <strong>{data?.sections?.mechanism?.highlight?.title}</strong>{' '}
              {data?.sections?.mechanism?.highlight?.text}
            </HighlightBox>
          </ArticleSection>

          <ArticleSection title={data?.sections?.applications?.title}>
            <Paragraph>{data?.sections?.applications?.paragraph}</Paragraph>

            <DataTable
              caption={data?.sections?.applications?.table?.caption}
              headers={data?.sections?.applications?.table?.headers}
              rows={data?.sections?.applications?.table?.rows}
            />
          </ArticleSection>

          <ArticleSection title={data?.sections?.modes?.title}>
            <ProcessList steps={data?.sections?.modes?.steps} />

            <DataTable
              caption={data?.sections?.modes?.table?.caption}
              headers={data?.sections?.modes?.table?.headers}
              rows={data?.sections?.modes?.table?.rows}
            />
          </ArticleSection>

          <ArticleSection title={data?.sections?.ventilation?.title}>
            <Paragraph>{data?.sections?.ventilation?.paragraph}</Paragraph>
            <BulletList items={data?.sections?.ventilation?.items} />

            <DataTable
              caption={data?.sections?.ventilation?.table?.caption}
              headers={data?.sections?.ventilation?.table?.headers}
              rows={data?.sections?.ventilation?.table?.rows}
            />

            <HighlightBox variant="success">
              <strong>{data?.sections?.ventilation?.highlight?.title}</strong>{' '}
              {data?.sections?.ventilation?.highlight?.text}
            </HighlightBox>
          </ArticleSection>

          <ArticleSection title={data?.sections?.voc?.title}>
            <Paragraph>{data?.sections?.voc?.paragraph}</Paragraph>

            <DataTable
              caption={data?.sections?.voc?.table?.caption}
              headers={data?.sections?.voc?.table?.headers}
              rows={data?.sections?.voc?.table?.rows}
            />

            <HighlightBox variant="info">
              <strong>{data?.sections?.voc?.highlight?.title}</strong> {data?.sections?.voc?.highlight?.text}
            </HighlightBox>
          </ArticleSection>

          <ArticleSection title={data?.sections?.regulatory?.title}>
            <Paragraph>{data?.sections?.regulatory?.paragraph}</Paragraph>
            <BulletList items={data?.sections?.regulatory?.items} />

            <DataTable
              caption={data?.sections?.regulatory?.table?.caption}
              headers={data?.sections?.regulatory?.table?.headers}
              rows={data?.sections?.regulatory?.table?.rows}
            />
          </ArticleSection>

          <ArticleSection title={data?.sections?.safety?.title}>
            <Paragraph>{data?.sections?.safety?.paragraph}</Paragraph>
            <BulletList items={data?.sections?.safety?.items} />

            <HighlightBox variant="warning">
              <strong>{data?.sections?.safety?.highlight?.title}</strong> {data?.sections?.safety?.highlight?.text}
            </HighlightBox>
          </ArticleSection>

          <ArticleSection title={data?.sections?.economics?.title}>
            <ComparisonTable
              title={data?.sections?.economics?.comparisonTable?.title}
              headers={
                data?.sections?.economics?.comparisonTable?.headers as
                  | [string, string, string]
                  | [string, string, string, string]
              }
              rows={data?.sections?.economics?.comparisonTable?.rows}
            />

            <DataTable
              caption={data?.sections?.economics?.table?.caption}
              headers={data?.sections?.economics?.table?.headers}
              rows={data?.sections?.economics?.table?.rows}
            />
          </ArticleSection>

          <ArticleSection title={data?.sections?.benefits?.title}>
            <FeatureGrid columns={2}>
              {data?.sections?.benefits?.items?.map((item: { title: string; description: string }, index: number) => (
                <FeatureCard
                  key={index}
                  icon={<IconCheck style={{ width: 24, height: 24 }} />}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </FeatureGrid>
          </ArticleSection>

          <ArticleSection title={data?.sections?.case?.title}>
            <Paragraph>{data?.sections?.case?.paragraph}</Paragraph>
            <DataTable
              caption={data?.sections?.case?.table?.caption}
              headers={data?.sections?.case?.table?.headers}
              rows={data?.sections?.case?.table?.rows}
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
