import { useTranslate } from '@tolgee/react'
import Image from 'next/image'

import { Layout } from '@/widgets/layout'

import { getCategoryById } from '@/shared/config/applications-data'
import { getCategoryNamespace, NAMESPACES } from '@/shared/config/tolgee'
import { AppLink } from '@/shared/ui/app-link'
import { ArticleHero, CTASection } from '@/shared/ui/article-components'

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
      <ArticleHero
        title={t('title', { ns })}
        description={t('description', { ns })}
        image={category.image}
        imageAlt={t('title', { ns })}
        breadcrumbs={[
          { label: t('footer.home', { ns: NAMESPACES.common }), href: '/' },
          { label: t('nav.applications', { ns: NAMESPACES.common }), href: '/applications' },
          { label: t('title', { ns }) },
        ]}
      />

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
                    <Image
                      src={sub.image}
                      alt={t(`subcategories.${sub.id}.title`, { ns })}
                      width={400}
                      height={250}
                      className="object-cover"
                    />
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
      <CTASection
        title={t('cta.applications.title', { ns: NAMESPACES.common })}
        description={t('cta.applications.text', { ns: NAMESPACES.common })}
        primaryButton={{
          label: t('hero.getConsultation', { ns: NAMESPACES.common }),
          href: '/contacts',
        }}
      />
    </Layout>
  )
}
