import { useTranslate } from '@tolgee/react'
import Image from 'next/image'

import { Layout } from '@/widgets/layout'

import { APPLICATION_CATEGORIES, getCategoryById } from '@/shared/config/applications-data'
import { NAMESPACES } from '@/shared/config/tolgee'
import { AppLink } from '@/shared/ui/app-link'
import { CTASection } from '@/shared/ui/article-components'
import {
  IconArrowRight,
  IconAuto,
  IconDisinfection,
  IconFactory,
  IconFood,
  IconHotel,
  IconMedical,
  IconPoultry,
  IconSpray,
  IconWater,
} from '@/shared/ui/icons'

// Icon mapping for categories
const CATEGORY_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  IconMedical,
  IconPoultry,
  IconFood,
  IconHotel,
  IconWater,
  IconDisinfection,
  IconSpray,
  IconFactory,
  IconAuto,
}

function getCategoryIcon(iconName: string) {
  return CATEGORY_ICONS[iconName] || IconFactory
}

export function ApplicationsPage() {
  const { t } = useTranslate()

  return (
    <Layout>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1 className="page-header__title">{t('pageTitle', { ns: NAMESPACES.applications }).split('—')[0]}</h1>
          <p className="page-header__subtitle">{t('pageDescription', { ns: NAMESPACES.applications })}</p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="section">
        <div className="container">
          <div className="category-grid">
            {APPLICATION_CATEGORIES.map((category) => {
              const Icon = getCategoryIcon(category.icon)
              const categoryData = getCategoryById(category.id)
              const subcategoryCount = categoryData?.subcategories.length || 0

              return (
                <AppLink key={category.id} href={`/applications/${category.id}`} className="category-card">
                  <div className="category-card__image">
                    <Image
                      src={category.image}
                      alt={t(`categories.${category.id}.title`, { ns: NAMESPACES.applications })}
                      width={800}
                      height={500}
                    />
                  </div>
                  <div className="category-card__content">
                    <Icon className="category-card__icon" />
                    <h3 className="category-card__title">
                      {t(`categories.${category.id}.title`, { ns: NAMESPACES.applications })}
                    </h3>
                    <p className="category-card__description">
                      {t(`categories.${category.id}.description`, { ns: NAMESPACES.applications })}
                    </p>
                    <div className="category-card__subcategories">
                      <span className="category-card__tag">
                        {t('subcategoriesCount', { ns: NAMESPACES.applications, count: subcategoryCount })}
                      </span>
                    </div>
                    <span className="category-card__link">
                      {t('applications.more', { ns: NAMESPACES.common })}
                      <IconArrowRight style={{ width: 16, height: 16 }} />
                    </span>
                  </div>
                </AppLink>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title={t('cta.applications.title', { ns: NAMESPACES.common })}
        description={t('cta.applications.text', { ns: NAMESPACES.common })}
        primaryButton={{
          label: t('hero.getConsultation', { ns: NAMESPACES.common }),
          href: '/contacts',
        }}
        secondaryButton={{
          label: t('cta.home.call', { ns: NAMESPACES.common }),
          href: 'tel:+998942909977',
        }}
      />
    </Layout>
  )
}
