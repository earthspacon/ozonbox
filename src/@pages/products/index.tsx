import { useTranslate } from '@tolgee/react'
import Image from 'next/image'
import { useRouter } from 'next/router'

import { Layout } from '@/widgets/layout'

import { AppLink } from '@/shared/ui/app-link'
import { CTASection } from '@/shared/ui/article-components'
import { IconArrowRight } from '@/shared/ui/icons'

interface Product {
  model: string
  slug: string
  capacity: number
  price: number
  image: string | null
}

const ALL_PRODUCTS: Product[] = [
  { model: 'OZONOXY S 10', slug: 'ozonoxy-10', capacity: 10, price: 6_000_000, image: '/images/boxes/photo_1_2026-03-23_14-49-21.jpg' },
  { model: 'OZONOXY S 20', slug: 'ozonoxy-20', capacity: 20, price: 8_000_000, image: '/images/boxes/photo_2_2026-03-23_14-49-21.jpg' },
  { model: 'OZONOXY S 30', slug: 'ozonoxy-30', capacity: 30, price: 10_600_000, image: '/images/boxes/photo_1_2026-03-30_19-20-17.jpg' },
  { model: 'OZONOXY S 40', slug: 'ozonoxy-40', capacity: 40, price: 13_500_000, image: '/images/boxes/photo_2_2026-03-30_19-20-17.jpg' },
  { model: 'OZONOXY S 50', slug: 'ozonoxy-50', capacity: 50, price: 17_000_000, image: '/images/boxes/photo_2_2026-03-30_19-20-17.jpg' },
  { model: 'OZONOXY S 60', slug: 'ozonoxy-60', capacity: 60, price: 19_500_000, image: '/images/boxes/photo_2_2026-03-30_19-20-17.jpg' },
  { model: 'OZONOXY 100', slug: 'ozonoxy-100', capacity: 100, price: 27_000_000, image: '/images/boxes/photo_5_2026-03-23_14-49-21.jpg' },
  { model: 'OZONOXY 100 Pro', slug: 'ozonoxy-100-pro', capacity: 100, price: 30_000_000, image: '/images/boxes/photo_4_2026-03-23_14-49-21.jpg' },
  { model: 'OZONOXY 100 Max', slug: 'ozonoxy-100-max', capacity: 100, price: 33_000_000, image: '/images/boxes/photo_2026-03-23_14-55-01.jpg' },
  { model: 'OZONOXY 200', slug: 'ozonoxy-200', capacity: 200, price: 198_000_000, image: '/images/boxes/ozonoxy-200.png' },
]

const GALLERY_IMAGES = [
  '/images/boxes/photo_1_2026-03-23_14-49-21.jpg',
  '/images/boxes/photo_2_2026-03-23_14-49-21.jpg',
  '/images/boxes/photo_1_2026-03-30_19-20-17.jpg',
  '/images/boxes/photo_2_2026-03-30_19-20-17.jpg',
  '/images/boxes/photo_4_2026-03-23_14-49-21.jpg',
  '/images/boxes/photo_2026-03-23_14-55-01.jpg',
]

function formatPrice(price: number): string {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
}

export function ProductsPage() {
  const { t } = useTranslate('products')
  const router = useRouter()

  return (
    <Layout>
      <section className="products-hero">
        <div className="container">
          <div className="products-hero__content">
            <div className="products-hero__text">
              <h1 className="products-hero__title">{t('hero.title')}</h1>
              <p className="products-hero__subtitle">{t('hero.subtitle')}</p>
              <AppLink href="/contacts" className="btn btn--primary btn--large">
                {t('cta.order')} <IconArrowRight style={{ width: 20, height: 20, marginLeft: '0.5rem' }} />
              </AppLink>
            </div>
            <div className="products-hero__image">
              <Image
                src="/images/boxes/ozonoxy-box.png"
                alt="OZONOXY"
                width={600}
                height={400}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section__header">
            <h2 className="section__title">{t('catalog.title')}</h2>
            <p className="section__subtitle">{t('catalog.subtitle')}</p>
          </div>
          <div className="products-grid">
            {ALL_PRODUCTS.map((product) => (
              <div
                key={product.model}
                className="product-card"
                role="link"
                tabIndex={0}
                aria-label={`${product.model} ${t('card.details')}`}
                onClick={() => router.push(`/products/${product.slug}`)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault()
                    router.push(`/products/${product.slug}`)
                  }
                }}
              >
                <div className="product-card__image">
                  {product.image ? (
                    <Image src={product.image} alt={product.model} width={400} height={300} />
                  ) : (
                    <div className="product-card__placeholder">
                      <span className="product-card__placeholder-text">{product.model}</span>
                      <span className="product-card__placeholder-subtext">{t('card.photoSoon')}</span>
                    </div>
                  )}
                </div>
                <div className="product-card__body">
                  <h3 className="product-card__name">{product.model}</h3>
                  <span className="product-card__capacity">{product.capacity} {t('card.unit')}</span>
                  <div className="product-card__price">
                    {formatPrice(product.price)} {t('card.currency')}
                  </div>
                  <div className="product-card__actions" onClick={(event) => event.stopPropagation()}>
                    <AppLink href={`/products/${product.slug}`} className="btn btn--outline product-card__btn">
                      {t('card.details')}
                    </AppLink>
                    <AppLink href="/contacts" className="btn btn--primary product-card__btn">
                      {t('card.order')}
                    </AppLink>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--gray">
        <div className="container">
          <div className="section__header">
            <h2 className="section__title">{t('gallery.title')}</h2>
            <p className="section__subtitle">{t('gallery.subtitle')}</p>
          </div>
          <div className="products-gallery">
            {GALLERY_IMAGES.map((src, i) => (
              <div key={src} className="products-gallery__item">
                <Image
                  src={src}
                  alt={`OZONOXY ${i + 1}`}
                  width={600}
                  height={400}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={t('cta.title')}
        description={t('cta.text')}
        primaryButton={{
          label: t('cta.order'),
          href: '/contacts',
        }}
        secondaryButton={{
          label: t('cta.call'),
          href: 'tel:+998942909977',
        }}
      />
    </Layout>
  )
}
