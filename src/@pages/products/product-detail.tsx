/* eslint-disable @typescript-eslint/no-explicit-any */
import { TolgeeStaticDataProp, useTranslate } from '@tolgee/react'
import Image from 'next/image'

import { Layout } from '@/widgets/layout'

import { getProductNamespace, NAMESPACES, TLocale } from '@/shared/config/tolgee'
import { AppLink } from '@/shared/ui/app-link'
import {
  ArticleHero,
  ArticleSection,
  Breadcrumb,
  BulletList,
  CTASection,
  DataTable,
  HighlightBox,
  Paragraph,
} from '@/shared/ui/article-components'
import { Seo } from '@/shared/ui/seo'

interface ProductDetailPageProps {
  staticData: TolgeeStaticDataProp
  lang: TLocale
  slug: string
}

export function ProductDetailPage({ staticData, lang, slug }: ProductDetailPageProps) {
  const { t } = useTranslate()
  const ns = getProductNamespace(slug)
  const productsNs = NAMESPACES.products

  const productData = (staticData as Record<string, any>)[`${lang}:${ns}`]
  if (!productData) return null

  const hasImages = productData.images && productData.images.length > 0

  const breadcrumbs = [
    { label: t('nav.products', { ns: NAMESPACES.common }), href: '/products' },
    { label: productData.title },
  ]

  const specsRows = productData.specs
    ? productData.specs.map((spec: { label: string; value: string }) => [spec.label, spec.value])
    : []

  return (
    <Layout>
      <Seo title={productData.pageTitle} description={productData.pageDescription} />

      {hasImages ? (
        <ArticleHero
          title={productData.title}
          description={productData.shortDesc}
          image={productData.images[0]}
          imageAlt={productData.title}
          breadcrumbs={breadcrumbs}
          backLink={{
            href: '/products',
            label: t('nav.products', { ns: NAMESPACES.common }),
          }}
        />
      ) : (
        <section className="products-hero">
          <div className="container">
            <div className="py-4! md:py-6!">
              <Breadcrumb items={breadcrumbs} />
            </div>
            <div className="py-8 text-center">
              <AppLink href="/products" className="text-primary-light mb-4 inline-block hover:underline">
                &larr; {t('nav.products', { ns: NAMESPACES.common })}
              </AppLink>
              <h1 className="products-hero__title">{productData.title}</h1>
              <p className="products-hero__subtitle">{productData.shortDesc}</p>
            </div>
          </div>
        </section>
      )}

      {hasImages && (
        <section className="bg-bg-light py-12">
          <div className="container">
            <div className="product-detail-gallery">
              {productData.images.map((src: string, i: number) => (
                <div key={i} className="product-detail-gallery__item">
                  <Image src={src} alt={`${productData.title} — ${i + 1}`} width={600} height={400} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <article className="py-12 md:py-20">
        <div className="container max-w-4xl">
          {productData.description && (
            <ArticleSection>
              <Paragraph>{productData.description}</Paragraph>
            </ArticleSection>
          )}

          {specsRows.length > 0 && (
            <ArticleSection title={productData.specsTitle}>
              <DataTable headers={[productData.specsHeaderParam, productData.specsHeaderValue]} rows={specsRows} />
            </ArticleSection>
          )}

          {productData.tasks && (
            <HighlightBox variant="info">
              <strong>{productData.tasksTitle}</strong> {productData.tasks}
            </HighlightBox>
          )}

          {productData.volume && (
            <ArticleSection title={productData.volumeTitle}>
              <DataTable
                headers={[productData.volumeHeaderType, productData.volumeHeaderValue]}
                rows={productData.volume.map((v: { type: string; value: string }) => [v.type, v.value])}
              />
            </ArticleSection>
          )}

          {productData.eliminates && productData.eliminates.length > 0 && (
            <ArticleSection title={productData.eliminatesTitle}>
              <BulletList items={productData.eliminates} />
            </ArticleSection>
          )}

          <ArticleSection title={t('universalDescription.title', { ns: productsNs })}>
            <Paragraph>{t('universalDescription.intro', { ns: productsNs })}</Paragraph>

            <Paragraph>
              <strong>{t('universalDescription.eliminatesTitle', { ns: productsNs })}</strong>
            </Paragraph>
            <BulletList
              items={[
                t('universalDescription.eliminates.0', { ns: productsNs }),
                t('universalDescription.eliminates.1', { ns: productsNs }),
                t('universalDescription.eliminates.2', { ns: productsNs }),
                t('universalDescription.eliminates.3', { ns: productsNs }),
              ]}
            />

            <Paragraph>
              <strong>{t('universalDescription.applicationsTitle', { ns: productsNs })}</strong>
            </Paragraph>
            <Paragraph>{t('universalDescription.applicationsIntro', { ns: productsNs })}</Paragraph>
            <BulletList
              items={[
                t('universalDescription.applications.0', { ns: productsNs }),
                t('universalDescription.applications.1', { ns: productsNs }),
                t('universalDescription.applications.2', { ns: productsNs }),
                t('universalDescription.applications.3', { ns: productsNs }),
                t('universalDescription.applications.4', { ns: productsNs }),
                t('universalDescription.applications.5', { ns: productsNs }),
              ]}
            />

            <Paragraph>
              <strong>{t('universalDescription.advantagesTitle', { ns: productsNs })}</strong>
            </Paragraph>
            <Paragraph>{t('universalDescription.advantagesIntro', { ns: productsNs })}</Paragraph>
            <BulletList
              items={[
                t('universalDescription.advantages.0', { ns: productsNs }),
                t('universalDescription.advantages.1', { ns: productsNs }),
                t('universalDescription.advantages.2', { ns: productsNs }),
                t('universalDescription.advantages.3', { ns: productsNs }),
                t('universalDescription.advantages.4', { ns: productsNs }),
                t('universalDescription.advantages.5', { ns: productsNs }),
                t('universalDescription.advantages.6', { ns: productsNs }),
              ]}
            />

            <Paragraph>
              <strong>{t('universalDescription.safetyTitle', { ns: productsNs })}</strong>
            </Paragraph>
            <Paragraph>{t('universalDescription.safetyText', { ns: productsNs })}</Paragraph>
          </ArticleSection>
        </div>
      </article>

      <CTASection
        title={productData.ctaTitle}
        description={productData.ctaText}
        primaryButton={{
          label: productData.ctaOrder,
          href: '/contacts',
        }}
        secondaryButton={{
          label: productData.ctaCall,
          href: 'tel:+998942909977',
        }}
      />
    </Layout>
  )
}
