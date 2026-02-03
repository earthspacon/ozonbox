/* eslint-disable @typescript-eslint/no-explicit-any */
import { TolgeeStaticDataProp, useTranslate } from '@tolgee/react'

import { Layout } from '@/widgets/layout'

import { getCategoryNamespace, NAMESPACES, TLocale } from '@/shared/config/tolgee'
import {
  ArticleHero,
  ArticleSection,
  BulletList,
  CTASection,
  DataTable,
  FeatureCard,
  FeatureGrid,
  HighlightBox,
  Paragraph,
  StatCard,
  StatGrid,
} from '@/shared/ui/article-components'
import { IconCheck } from '@/shared/ui/icons'
import { Seo } from '@/shared/ui/seo'

interface DentalPageProps {
  staticData: TolgeeStaticDataProp
  lang: TLocale
}

export function DentalPage({ staticData, lang }: DentalPageProps) {
  const { t } = useTranslate()
  const ns = getCategoryNamespace('medicine')

  // get category data from staticData
  const categoryData = (staticData as Record<string, { subcategories?: { dental?: any } }>)[
    `${lang}:${ns}`
  ]
  const data = categoryData?.subcategories?.dental

  const breadcrumbs = [
    { label: t('nav.applications', { ns: NAMESPACES.common }), href: '/applications' },
    { label: t('title', { ns }), href: '/applications/medicine' },
    { label: t('subcategories.dental.title', { ns }) },
  ]

  return (
    <Layout>
      <Seo
        title={t('subcategories.dental.title', { ns })}
        description={t('subcategories.dental.shortDesc', { ns })}
      />

      <ArticleHero
        title={t('subcategories.dental.title', { ns })}
        description={t('subcategories.dental.shortDesc', { ns })}
        image="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1920&q=80"
        imageAlt={t('subcategories.dental.title', { ns })}
        breadcrumbs={breadcrumbs}
        backLink={{
          href: '/applications/medicine',
          label: t('title', { ns }),
        }}
      />

      {/* Key Stats */}
      <section className="bg-bg-light py-12">
        <div className="container">
          <StatGrid columns={4}>
            <StatCard
              value={data?.stats?.stat1?.value ?? ''}
              label={data?.stats?.stat1?.label ?? ''}
              description={data?.stats?.stat1?.description ?? ''}
              variant="primary"
            />
            <StatCard
              value={data?.stats?.stat2?.value ?? ''}
              label={data?.stats?.stat2?.label ?? ''}
              description={data?.stats?.stat2?.description ?? ''}
              variant="accent"
            />
            <StatCard
              value={data?.stats?.stat3?.value ?? ''}
              label={data?.stats?.stat3?.label ?? ''}
              description={data?.stats?.stat3?.description ?? ''}
              variant="primary"
            />
            <StatCard
              value={data?.stats?.stat4?.value ?? ''}
              label={data?.stats?.stat4?.label ?? ''}
              description={data?.stats?.stat4?.description ?? ''}
              variant="accent"
            />
          </StatGrid>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-12 md:py-20">
        <div className="container max-w-4xl">
          <ArticleSection>
            <Paragraph>{data?.sections?.intro?.paragraph1 ?? ''}</Paragraph>
            <Paragraph>{data?.sections?.intro?.paragraph2 ?? ''}</Paragraph>
          </ArticleSection>

          <HighlightBox variant="info">
            <strong>{data?.sections?.highlight1?.title ?? ''}</strong> {data?.sections?.highlight1?.text ?? ''}
          </HighlightBox>

          <ArticleSection title={data?.sections?.applications?.title}>
            <BulletList items={(data?.sections?.applications?.items as string[]) ?? []} />
          </ArticleSection>

          <ArticleSection title={data?.sections?.disinfection?.title}>
            <Paragraph>{data?.sections?.disinfection?.text ?? ''}</Paragraph>

            <DataTable
              caption={data?.sections?.disinfection?.table?.caption}
              headers={data?.sections?.disinfection?.table?.headers ?? []}
              rows={data?.sections?.disinfection?.table?.rows ?? []}
            />

            <HighlightBox variant="success">{data?.sections?.disinfection?.highlight ?? ''}</HighlightBox>
          </ArticleSection>

          <ArticleSection title={data?.sections?.ozonotherapy?.title}>
            <Paragraph>{data?.sections?.ozonotherapy?.text ?? ''}</Paragraph>

            <FeatureGrid columns={2}>
              {((data?.sections?.ozonotherapy?.features as Array<{ title: string; description: string }>) ?? []).map(
                (item, idx) => (
                  <FeatureCard
                    key={idx}
                    icon={<IconCheck style={{ width: 24, height: 24 }} />}
                    title={item.title}
                    description={item.description}
                  />
                ),
              )}
            </FeatureGrid>

            <DataTable
              caption={data?.sections?.ozonotherapy?.table?.caption}
              headers={data?.sections?.ozonotherapy?.table?.headers ?? []}
              rows={data?.sections?.ozonotherapy?.table?.rows ?? []}
            />
          </ArticleSection>

          <ArticleSection title={data?.sections?.waterSystems?.title}>
            <Paragraph>{data?.sections?.waterSystems?.text ?? ''}</Paragraph>
            <BulletList items={(data?.sections?.waterSystems?.items as string[]) ?? []} />
          </ArticleSection>

          <ArticleSection title={data?.sections?.benefits?.title}>
            <BulletList items={(data?.sections?.benefits?.items as string[]) ?? []} />

            <HighlightBox variant="success">{data?.sections?.benefits?.highlight ?? ''}</HighlightBox>
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
