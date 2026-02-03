import { useTranslate } from '@tolgee/react'
import Image from 'next/image'

import { Layout } from '@/widgets/layout'

import { ARTICLES } from '@/shared/config/articles-data'
import { NAMESPACES } from '@/shared/config/tolgee'
import { AppLink } from '@/shared/ui/app-link'
import { CTASection } from '@/shared/ui/article-components'
import { IconArrowRight } from '@/shared/ui/icons'

export function ArticlesPage() {
  const { t } = useTranslate()
  return (
    <Layout>
      <section className="page-header">
        <div className="container">
          <h1 className="page-header__title">{t('list.pageTitle', { ns: NAMESPACES.articles })}</h1>
          <p className="page-header__subtitle">{t('list.pageDescription', { ns: NAMESPACES.articles })}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="article-grid">
            {ARTICLES.map((article) => (
              <AppLink key={article.id} href={`/articles/${article.slug}`} className="article-card">
                <div className="article-card__image">
                  <Image
                    src={article.image}
                    alt={t(`articles.${article.id}.title`, { ns: NAMESPACES.articles })}
                    width={800}
                    height={500}
                  />
                </div>
                <div className="article-card__content">
                  <h3 className="article-card__title">
                    {t(`articles.${article.id}.title`, { ns: NAMESPACES.articles })}
                  </h3>
                  <p className="article-card__excerpt">
                    {t(`articles.${article.id}.excerpt`, { ns: NAMESPACES.articles })}
                  </p>
                  <span className="article-card__meta">
                    {new Date(article.date).toLocaleDateString('ru-RU', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                    {' · '}
                    {article.sourceName}
                  </span>
                  <span className="article-card__link">
                    {t('list.more', { ns: NAMESPACES.articles })}
                    <IconArrowRight style={{ width: 16, height: 16 }} />
                  </span>
                </div>
              </AppLink>
            ))}
          </div>
        </div>
      </section>

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
