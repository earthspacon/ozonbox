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

interface AutoTransportPageProps {
  staticData: TolgeeStaticDataProp
  lang: TLocale
}

export function AutoTransportPage({ staticData, lang }: AutoTransportPageProps) {
  const { t } = useTranslate()
  const ns = getCategoryNamespace('transport')

  const categoryData = (staticData as any)[`${lang}:${ns}`]
  const data = categoryData?.subcategories?.['auto-transport']

  const breadcrumbs = [
    { label: t('nav.applications', { ns: NAMESPACES.common }), href: '/applications' },
    { label: t('title', { ns }), href: '/applications/transport' },
    { label: t('subcategories.auto-transport.title', { ns }) },
  ]

  return (
    <Layout>
      <Seo
        title={t('subcategories.auto-transport.title', { ns })}
        description={t('subcategories.auto-transport.shortDesc', { ns })}
      />

      <ArticleHero
        title={t('subcategories.auto-transport.title', { ns })}
        description={t('subcategories.auto-transport.shortDesc', { ns })}
        image="https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=1920&q=80"
        imageAlt={t('subcategories.auto-transport.title', { ns })}
        breadcrumbs={breadcrumbs}
        backLink={{
          href: '/applications/transport',
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
      <article className="py-12 md:py-20">
        <div className="container max-w-4xl">
          <ArticleSection>
            <Paragraph>{data?.sections?.intro?.paragraph1}</Paragraph>
            <Paragraph>{data?.sections?.intro?.paragraph2}</Paragraph>
          </ArticleSection>

          <HighlightBox variant="info">
            <strong>{data?.sections?.highlight1?.title}</strong> {data?.sections?.highlight1?.text}
          </HighlightBox>

          <ArticleSection title={data?.sections?.types?.title}>
            <Paragraph>{data?.sections?.types?.text}</Paragraph>
            <BulletList items={data?.sections?.types?.items} />
          </ArticleSection>

          <ArticleSection title={data?.sections?.problems?.title}>
            <Paragraph>{data?.sections?.problems?.text}</Paragraph>
            <BulletList items={data?.sections?.problems?.items} />

            <Paragraph>{data?.sections?.problems?.paragraph2}</Paragraph>
          </ArticleSection>

          <ArticleSection title={data?.sections?.technology?.title}>
            <ProcessList steps={data?.sections?.technology?.steps} />

            <HighlightBox variant="success">
              {typeof data?.sections?.technology?.highlight === 'string' ? (
                data.sections.technology.highlight
              ) : (
                <>
                  <strong>{data?.sections?.technology?.highlight?.title}</strong>
                  {' '}
                  {data?.sections?.technology?.highlight?.text}
                </>
              )}
            </HighlightBox>
          </ArticleSection>

          <ArticleSection title={data?.sections?.modes?.title}>
            <DataTable
              caption={data?.sections?.modes?.tableCaption}
              headers={data?.sections?.modes?.tableHeaders}
              rows={data?.sections?.modes?.tableData}
            />
          </ArticleSection>

          <ArticleSection title={data?.sections?.refrigerators?.title}>
            <Paragraph>{data?.sections?.refrigerators?.text}</Paragraph>
            <BulletList items={data?.sections?.refrigerators?.items} />

            <HighlightBox variant="info">
              <strong>{data?.sections?.refrigerators?.highlight?.title}</strong>
              {' '}
              {data?.sections?.refrigerators?.highlight?.text}
            </HighlightBox>
          </ArticleSection>

          <ArticleSection title={data?.sections?.odorRemoval?.title}>
            <Paragraph>{data?.sections?.odorRemoval?.intro}</Paragraph>
            <BulletList items={data?.sections?.odorRemoval?.items} />

            <Paragraph>{data?.sections?.odorRemoval?.paragraph2}</Paragraph>

            <DataTable
              caption={data?.sections?.odorRemoval?.tableCaption}
              headers={data?.sections?.odorRemoval?.tableHeaders}
              rows={data?.sections?.odorRemoval?.tableData}
            />
          </ArticleSection>

          <ArticleSection title={data?.sections?.integration?.title}>
            <FeatureGrid columns={2}>
              {data?.sections?.integration?.items?.map((item: { title: string; description: string }, idx: number) => (
                <FeatureCard
                  key={idx}
                  icon={<IconCheck style={{ width: 24, height: 24 }} />}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </FeatureGrid>
          </ArticleSection>

          <ArticleSection title={data?.sections?.economics?.title}>
            <ComparisonTable
              title={data?.sections?.economics?.comparisonTitle}
              headers={data?.sections?.economics?.tableHeaders as [string, string, string] | [string, string, string, string]}
              rows={data?.sections?.economics?.tableData}
            />

            <Paragraph>{data?.sections?.economics?.text}</Paragraph>
          </ArticleSection>

          <ArticleSection title={data?.sections?.compliance?.title}>
            <Paragraph>{data?.sections?.compliance?.intro}</Paragraph>
            <BulletList items={data?.sections?.compliance?.items} />

            <HighlightBox variant="warning">{data?.sections?.compliance?.warning?.text}</HighlightBox>
          </ArticleSection>

          <ArticleSection title={data?.sections?.equipment?.title}>
            <Paragraph>{data?.sections?.equipment?.intro}</Paragraph>
            <BulletList items={data?.sections?.equipment?.items} />

            <DataTable
              caption={data?.sections?.equipment?.tableCaption}
              headers={data?.sections?.equipment?.tableHeaders}
              rows={data?.sections?.equipment?.tableData}
            />
          </ArticleSection>

          <ArticleSection title={data?.sections?.roi?.title}>
            <Paragraph>{data?.sections?.roi?.text}</Paragraph>
            <BulletList items={data?.sections?.roi?.items} />

            <HighlightBox variant="success">
              <strong>{data?.sections?.roi?.highlight?.title}</strong>
              {' '}
              {data?.sections?.roi?.highlight?.text}
            </HighlightBox>
          </ArticleSection>

          <ArticleSection title={data?.sections?.safety?.title}>
            <BulletList items={data?.sections?.safety?.items} />
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
