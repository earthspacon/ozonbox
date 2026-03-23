import { useTranslate } from '@tolgee/react'
import Image from 'next/image'

import { Layout } from '@/widgets/layout'

import { AppLink } from '@/shared/ui/app-link'
import { CTASection } from '@/shared/ui/article-components'
import { IconArrowRight } from '@/shared/ui/icons'

interface Product {
  model: string
  capacity: number
  price: number
  image: string
}

const STANDARD_PRODUCTS: Product[] = [
  { model: 'OZONOXY 10', capacity: 10, price: 6_000_000, image: '/images/boxes/ozonoxy-box.png' },
  { model: 'OZONOXY 20', capacity: 20, price: 8_000_000, image: '/images/boxes/ozonoxy-box.png' },
  { model: 'OZONOXY 30', capacity: 30, price: 10_600_000, image: '/images/boxes/ozonoxy-box.png' },
  { model: 'OZONOXY 40', capacity: 40, price: 13_500_000, image: '/images/boxes/ozonoxy-box.png' },
  { model: 'OZONOXY 50', capacity: 50, price: 17_000_000, image: '/images/boxes/ozonoxy-box.png' },
  { model: 'OZONOXY 60', capacity: 60, price: 19_500_000, image: '/images/boxes/ozonoxy-box.png' },
  { model: 'OZONOXY 100', capacity: 100, price: 27_000_000, image: '/images/boxes/ozonoxy-box.png' },
]

const PRO_PRODUCTS: Product[] = [
  {
    model: 'OZONOXY 100 Pro',
    capacity: 100,
    price: 30_000_000,
    image: '/images/boxes/photo_4_2026-03-23_14-49-21.jpg',
  },
  {
    model: 'OZONOXY 100 Max',
    capacity: 100,
    price: 33_000_000,
    image: '/images/boxes/photo_5_2026-03-23_14-49-21.jpg',
  },
  {
    model: 'OZONOXY 200',
    capacity: 200,
    price: 198_000_000,
    image: '/images/boxes/photo_2026-03-23_14-55-01.jpg',
  },
]

const GALLERY_IMAGES = [
  '/images/boxes/photo_1_2026-03-23_14-49-21.jpg',
  '/images/boxes/photo_2_2026-03-23_14-49-21.jpg',
  '/images/boxes/photo_3_2026-03-23_14-49-21.jpg',
  '/images/boxes/photo_4_2026-03-23_14-49-21.jpg',
  '/images/boxes/photo_5_2026-03-23_14-49-21.jpg',
  '/images/boxes/photo_2026-03-23_14-55-01.jpg',
]

function formatPrice(price: number): string {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
}

export function ProductsPage() {
  const { t } = useTranslate('products')

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
            <h2 className="section__title">{t('standardLine.title')}</h2>
            <p className="section__subtitle">{t('standardLine.subtitle')}</p>
          </div>
          <div className="products-grid">
            {STANDARD_PRODUCTS.map((product) => (
              <div key={product.model} className="product-card">
                <div className="product-card__image">
                  <Image src={product.image} alt={product.model} width={400} height={300} />
                </div>
                <div className="product-card__body">
                  <h3 className="product-card__name">{product.model}</h3>
                  <span className="product-card__capacity">{product.capacity} g/h</span>
                  <div className="product-card__price">
                    {formatPrice(product.price)} {t('card.currency')}
                  </div>
                  <AppLink href="/contacts" className="btn btn--primary product-card__btn">
                    {t('card.order')}
                  </AppLink>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--gray">
        <div className="container">
          <div className="section__header">
            <h2 className="section__title">{t('proLine.title')}</h2>
            <p className="section__subtitle">{t('proLine.subtitle')}</p>
          </div>
          <div className="products-grid products-grid--pro">
            {PRO_PRODUCTS.map((product) => (
              <div key={product.model} className="product-card product-card--pro">
                <div className="product-card__image">
                  <Image src={product.image} alt={product.model} width={400} height={300} />
                </div>
                <div className="product-card__body">
                  <h3 className="product-card__name">{product.model}</h3>
                  <span className="product-card__capacity">{product.capacity} g/h</span>
                  <div className="product-card__price">
                    {formatPrice(product.price)} {t('card.currency')}
                  </div>
                  <AppLink href="/contacts" className="btn btn--primary product-card__btn">
                    {t('card.order')}
                  </AppLink>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
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
