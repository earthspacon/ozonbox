import { useTranslate } from '@tolgee/react'
import Image from 'next/image'

import { Layout } from '@/widgets/layout'

import { getCategoryById, HOME_APPLICATION_IDS } from '@/shared/config/applications-data'
import { getArticleById, HOME_ARTICLE_IDS } from '@/shared/config/articles-data'
import { AppLink } from '@/shared/ui/app-link'
import { CTASection } from '@/shared/ui/article-components'
import {
  IconArrowRight,
  IconCheck,
  IconDisinfection,
  IconEco,
  IconFood,
  IconMedical,
  IconPoultry,
  IconShield,
  IconTimer,
  IconWarehouse,
  IconWater,
} from '@/shared/ui/icons'

const APPLICATION_ICONS: Record<string, typeof IconMedical> = {
  IconMedical,
  IconPoultry,
  IconFood,
  IconWater,
  IconWarehouse,
  IconDisinfection,
}

export function HomePage() {
  const { t } = useTranslate()

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero__bg">
          <Image
            src="https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=1920&q=80"
            alt={t('hero.title')}
            width={1920}
            height={1080}
          />
        </div>
        <div className="hero__shapes">
          <div className="hero__shape hero__shape--1"></div>
          <div className="hero__shape hero__shape--2"></div>
          <div className="hero__shape hero__shape--3"></div>
        </div>
        <div className="container">
          <div className="hero__content fade-in visible">
            <h1 className="hero__title mt-5 md:mt-0">{t('hero.title')}</h1>
            <p className="hero__subtitle">{t('hero.subtitle')}</p>
            <div className="hero__actions">
              <AppLink href="/technology" className="btn btn--white btn--large">
                {t('hero.learnMore')}
              </AppLink>
              <AppLink href="/contacts" className="btn btn--primary btn--large">
                {t('hero.getConsultation')}
              </AppLink>
            </div>
            <div className="hero__stats">
              <div className="hero__stat">
                <div className="hero__stat-value">300×</div>
                <div className="hero__stat-label">{t('hero.stats.power')}</div>
              </div>
              <div className="hero__stat">
                <div className="hero__stat-value">99.9%</div>
                <div className="hero__stat-label">{t('hero.stats.pathogens')}</div>
              </div>
              <div className="hero__stat">
                <div className="hero__stat-value">0</div>
                <div className="hero__stat-label">{t('hero.stats.residue')}</div>
              </div>
              <div className="hero__stat">
                <div className="hero__stat-value">7</div>
                <div className="hero__stat-label">{t('hero.stats.functions')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section">
        <div className="container">
          <div className="features">
            <div className="feature-card fade-in visible">
              <div className="feature-card__icon">
                <IconShield style={{ width: 64, height: 64 }} />
              </div>
              <h3 className="feature-card__title">{t('features.power.title')}</h3>
              <p className="feature-card__text">{t('features.power.text')}</p>
            </div>
            <div className="feature-card fade-in visible">
              <div className="feature-card__icon">
                <IconCheck style={{ width: 64, height: 64 }} />
              </div>
              <h3 className="feature-card__title">{t('features.pathogens.title')}</h3>
              <p className="feature-card__text">{t('features.pathogens.text')}</p>
            </div>
            <div className="feature-card fade-in visible">
              <div className="feature-card__icon">
                <IconEco style={{ width: 64, height: 64 }} />
              </div>
              <h3 className="feature-card__title">{t('features.residue.title')}</h3>
              <p className="feature-card__text">{t('features.residue.text')}</p>
            </div>
            <div className="feature-card fade-in visible">
              <div className="feature-card__icon">
                <IconTimer style={{ width: 64, height: 64 }} />
              </div>
              <h3 className="feature-card__title">{t('features.functions.title')}</h3>
              <p className="feature-card__text">{t('features.functions.text')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Ozone Section */}
      <section className="section section--gray">
        <div className="container">
          <div className="about-ozone">
            <div className="about-ozone__image slide-in-left visible">
              <Image
                src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80"
                alt={t('aboutOzone.title')}
                width={800}
                height={600}
              />
            </div>
            <div className="about-ozone__content slide-in-right visible">
              <h2>
                {t('aboutOzone.title')} <span className="text-gradient">{t('aboutOzone.titleHighlight')}</span>?
              </h2>
              <p>{t('aboutOzone.p1')}</p>
              <p>{t('aboutOzone.p2')}</p>
              <ul className="about-ozone__list">
                <li className="about-ozone__list-item">
                  <IconCheck style={{ width: 24, height: 24 }} />
                  <span>{t('aboutOzone.list.eco')}</span>
                </li>
                <li className="about-ozone__list-item">
                  <IconCheck style={{ width: 24, height: 24 }} />
                  <span>{t('aboutOzone.list.onsite')}</span>
                </li>
                <li className="about-ozone__list-item">
                  <IconCheck style={{ width: 24, height: 24 }} />
                  <span>{t('aboutOzone.list.safe')}</span>
                </li>
              </ul>
              <AppLink href="/technology" className="btn btn--primary" style={{ marginTop: '1.5rem' }}>
                {t('aboutOzone.moreAbout')}
              </AppLink>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="section">
        <div className="container">
          <div className="section__header">
            <h2 className="section__title">
              {t('applications.title')} <span className="text-gradient">{t('applications.titleHighlight')}</span>
            </h2>
            <p className="section__subtitle">{t('applications.subtitle')}</p>
          </div>
          <div className="applications-grid">
            {HOME_APPLICATION_IDS.map((id) => {
              const category = getCategoryById(id)
              if (!category) return null
              const IconComponent = APPLICATION_ICONS[category.icon]
              return (
                <AppLink key={id} href={`/applications/${id}`} className="application-card fade-in visible">
                  <div className="application-card__image">
                    <Image
                      src={category.image}
                      alt={t(`applications.categories.${id}.title`)}
                      width={800}
                      height={600}
                    />
                  </div>
                  <div className="application-card__overlay">
                    <div className="application-card__body">
                      {IconComponent && <IconComponent className="application-card__icon" />}
                      <h3 className="application-card__title">{t(`applications.categories.${id}.title`)}</h3>
                      <p className="application-card__text">{t(`applications.categories.${id}.text`)}</p>
                    </div>
                    <span className="application-card__link">
                      {t('applications.more')} <IconArrowRight style={{ width: 16, height: 16 }} />
                    </span>
                  </div>
                </AppLink>
              )
            })}
          </div>
          <div className="mt-8 flex justify-center">
            <AppLink href="/applications" className="btn btn--primary btn--large">
              {t('applications.viewAll')} <IconArrowRight style={{ width: 20, height: 20, marginLeft: '0.5rem' }} />
            </AppLink>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="section section--gray">
        <div className="container">
          <div className="section__header">
            <h2 className="section__title">
              {t('homeArticles.title')} <span className="text-gradient">{t('homeArticles.titleHighlight')}</span>
            </h2>
            <p className="section__subtitle">{t('homeArticles.subtitle')}</p>
          </div>
          <div className="applications-grid">
            {HOME_ARTICLE_IDS.map((id) => {
              const article = getArticleById(id)
              if (!article) return null
              return (
                <AppLink
                  key={article.id}
                  href={`/articles/${article.slug}`}
                  className="application-card fade-in visible"
                >
                  <div className="application-card__image">
                    <Image
                      src={article.image}
                      alt={t(`homeArticles.items.${article.id}.title`)}
                      width={800}
                      height={600}
                    />
                  </div>
                  <div className="application-card__overlay">
                    <div className="application-card__body">
                      <h3 className="application-card__title">{t(`homeArticles.items.${article.id}.title`)}</h3>
                      <p className="application-card__text">{t(`homeArticles.items.${article.id}.excerpt`)}</p>
                    </div>
                    <span className="application-card__link">
                      {t('homeArticles.more')} <IconArrowRight style={{ width: 16, height: 16 }} />
                    </span>
                  </div>
                </AppLink>
              )
            })}
          </div>
          <div className="mt-8 flex justify-center">
            <AppLink href="/articles" className="btn btn--primary btn--large">
              {t('homeArticles.viewAll')} <IconArrowRight style={{ width: 20, height: 20, marginLeft: '0.5rem' }} />
            </AppLink>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title={t('cta.home.title')}
        description={t('cta.home.text')}
        primaryButton={{
          label: t('hero.getConsultation'),
          href: '/contacts',
        }}
        secondaryButton={{
          label: t('cta.home.call'),
          href: 'tel:+998942909977',
        }}
      />
    </Layout>
  )
}
