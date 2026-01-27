import { useTranslate } from '@tolgee/react'
import Image from 'next/image'

import { Layout } from '@/widgets'

import { getCategoryById } from '@/shared/config/applications-data'
import { getCategoryNamespace, NAMESPACES } from '@/shared/config/tolgee'
import { AppLink } from '@/shared/ui/app-link'

interface CategoryPageProps {
  categoryId: string
}

export function CategoryPage({ categoryId }: CategoryPageProps) {
  const { t } = useTranslate()
  const category = getCategoryById(categoryId)
  const ns = getCategoryNamespace(categoryId)

  if (!category) {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <h1>Category not found</h1>
          </div>
        </section>
      </Layout>
    )
  }

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
            <span className="breadcrumb__current">{t('title', { ns })}</span>
          </nav>
        </div>
      </section>

      {/* Category Hero */}
      <section className="article-hero">
        <div className="article-hero__image">
          <Image src={category.image} alt={t('title', { ns })} fill />
        </div>
        <div className="article-hero__overlay">
          <h1 className="article-hero__title">{t('title', { ns })}</h1>
        </div>
      </section>

      {/* Category Content */}
      <section className="section">
        <div className="container">
          <div className="article-content" style={{ maxWidth: 'none', padding: 0 }}>
            <p style={{ fontSize: 'var(--font-size-lg)', marginBottom: 'var(--spacing-8)' }}>
              {t('description', { ns })}
            </p>

            {/* Subcategories Grid */}
            <h2>{t('backToCategories', { ns: NAMESPACES.applications })}</h2>
            <div className="subcategory-grid">
              {category.subcategories.map((sub) => (
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
        </div>
      </section>

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
