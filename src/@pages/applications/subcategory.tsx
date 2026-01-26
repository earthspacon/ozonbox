import { useTranslate } from '@tolgee/react'
import Image from 'next/image'

import { Layout } from '@/widgets'

import { ApplicationSubcategory, getCategoryById, getSubcategoryById } from '@/shared/config/applications-data'
import { getCategoryNamespace, NAMESPACES } from '@/shared/config/tolgee'
import { AppLink } from '@/shared/ui/app-link'
import { IconCheck } from '@/shared/ui/icons'

interface SubcategoryPageProps {
  categoryId: string
  subcategoryId: string
}

export function SubcategoryPage({ categoryId, subcategoryId }: SubcategoryPageProps) {
  const { t } = useTranslate()
  const category = getCategoryById(categoryId)
  const subcategory = getSubcategoryById(categoryId, subcategoryId)
  const ns = getCategoryNamespace(categoryId)

  if (!category || !subcategory) {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <h1>Page not found</h1>
          </div>
        </section>
      </Layout>
    )
  }

  // Get benefits array from translations
  const benefitsRaw = t(`subcategories.${subcategoryId}.benefits`, { ns, returnObjects: true })
  const benefits = Array.isArray(benefitsRaw) ? benefitsRaw : []

  // Get related subcategories (other subcategories from same category)
  const relatedSubs = category.subcategories.filter((s: ApplicationSubcategory) => s.id !== subcategoryId).slice(0, 3)

  return (
    <Layout>
      {/* Breadcrumb */}
      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="container">
          <nav className="breadcrumb">
            <AppLink href="/" className="breadcrumb__link">
              {t('footer.home', { ns: NAMESPACES.common })}
            </AppLink>
            <span className="breadcrumb__separator">/</span>
            <AppLink href="/applications" className="breadcrumb__link">
              {t('nav.applications', { ns: NAMESPACES.common })}
            </AppLink>
            <span className="breadcrumb__separator">/</span>
            <AppLink href={`/applications/${categoryId}`} className="breadcrumb__link">
              {t('title', { ns })}
            </AppLink>
            <span className="breadcrumb__separator">/</span>
            <span className="breadcrumb__current">{t(`subcategories.${subcategoryId}.title`, { ns })}</span>
          </nav>
        </div>
      </section>

      {/* Article Hero */}
      <section className="article-hero">
        <div className="article-hero__image">
          <Image src={subcategory.image} alt={t(`subcategories.${subcategoryId}.title`, { ns })} fill />
        </div>
        <div className="article-hero__overlay">
          <h1 className="article-hero__title">{t(`subcategories.${subcategoryId}.title`, { ns })}</h1>
        </div>
      </section>

      {/* Article Content */}
      <section className="article-content">
        <p>{t(`subcategories.${subcategoryId}.content`, { ns })}</p>

        {/* Benefits Box */}
        {Array.isArray(benefits) && benefits.length > 0 && (
          <div className="article-benefits">
            <h3 className="article-benefits__title">{t('benefits', { ns: NAMESPACES.applications })}</h3>
            <div className="article-benefits__list">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="article-benefits__item">
                  <IconCheck />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* Related Articles */}
      {relatedSubs.length > 0 && (
        <section className="section" style={{ background: 'var(--color-bg-light)' }}>
          <div className="container">
            <h2 className="section__title">{t('relatedArticles', { ns: NAMESPACES.applications })}</h2>
            <div className="subcategory-grid">
              {relatedSubs.map((sub: ApplicationSubcategory) => (
                <AppLink key={sub.id} href={`/applications/${categoryId}/${sub.id}`} className="subcategory-card">
                  <div className="subcategory-card__image">
                    <Image src={sub.image} alt={t(`subcategories.${sub.id}.title`, { ns })} width={128} height={128} />
                  </div>
                  <div className="subcategory-card__content">
                    <h3 className="subcategory-card__title">{t(`subcategories.${sub.id}.title`, { ns })}</h3>
                    <p className="subcategory-card__description">{t(`subcategories.${sub.id}.shortDesc`, { ns })}</p>
                  </div>
                </AppLink>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="cta">
        <div className="container">
          <h2 className="cta__title">{t('cta.applications.title', { ns: NAMESPACES.common })}</h2>
          <p className="cta__text">{t('cta.applications.text', { ns: NAMESPACES.common })}</p>
          <div className="cta__actions">
            <AppLink href="/contacts" className="btn btn--white btn--large">
              {t('hero.getConsultation', { ns: NAMESPACES.common })}
            </AppLink>
          </div>
        </div>
      </section>
    </Layout>
  )
}
