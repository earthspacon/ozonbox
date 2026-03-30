/* eslint-disable @typescript-eslint/no-explicit-any */
import { useTranslate } from '@tolgee/react'
import Image from 'next/image'

import { Layout } from '@/widgets/layout'

import { getProductNamespace, NAMESPACES, TLocale } from '@/shared/config/tolgee'
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
import { AppLink } from '@/shared/ui/app-link'
import { Seo } from '@/shared/ui/seo'
import { TolgeeStaticDataProp } from '@tolgee/react'

interface ProductDetailPageProps {
  staticData: TolgeeStaticDataProp
  lang: TLocale
  slug: string
}

export function ProductDetailPage({ staticData, lang, slug }: ProductDetailPageProps) {
  const { t } = useTranslate()
  const ns = getProductNamespace(slug)

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
                  <Image
                    src={src}
                    alt={`${productData.title} — ${i + 1}`}
                    width={600}
                    height={400}
                  />
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
              <DataTable
                headers={[productData.specsHeaderParam, productData.specsHeaderValue]}
                rows={specsRows}
              />
            </ArticleSection>
          )}

          {productData.features && productData.features.length > 0 && (
            <ArticleSection title={productData.featuresTitle}>
              <BulletList items={productData.features} />
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
