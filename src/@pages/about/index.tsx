import { useTranslate } from '@tolgee/react'
import Link from 'next/link'

import { Layout } from '@/widgets'

import { IconAuto, IconCheck, IconShield } from '@/shared/ui'

export function AboutPage() {
  const { t } = useTranslate()

  return (
    <Layout>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1 className="page-header__title">{t('aboutPage.header.title')}</h1>
          <p className="page-header__subtitle">{t('aboutPage.header.subtitle')}</p>
        </div>
      </section>

      {/* About Content */}
      <section className="section">
        <div className="container">
          <div className="about-content">
            <div className="about-content__text slide-in-left visible">
              <h2>
                {t('aboutPage.content.title')}{' '}
                <span className="text-gradient">{t('aboutPage.content.titleHighlight')}</span>
              </h2>
              <p>{t('aboutPage.content.p1')}</p>
              <p>{t('aboutPage.content.p2')}</p>

              <div className="about-services">
                <div className="about-service">
                  <IconCheck style={{ width: 24, height: 24 }} />
                  <span>{t('aboutPage.content.services.consulting')}</span>
                </div>
                <div className="about-service">
                  <IconCheck style={{ width: 24, height: 24 }} />
                  <span>{t('aboutPage.content.services.equipment')}</span>
                </div>
                <div className="about-service">
                  <IconCheck style={{ width: 24, height: 24 }} />
                  <span>{t('aboutPage.content.services.support')}</span>
                </div>
                <div className="about-service">
                  <IconCheck style={{ width: 24, height: 24 }} />
                  <span>{t('aboutPage.content.services.warranty')}</span>
                </div>
              </div>
            </div>
            <div className="about-content__image slide-in-right visible">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt=""
                style={{ borderRadius: '1rem', boxShadow: 'var(--shadow-xl)' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="section section--gray">
        <div className="container">
          <div className="section__header">
            <h2 className="section__title">
              {t('aboutPage.whyUs.title')} <span className="text-gradient">{t('aboutPage.whyUs.titleHighlight')}</span>
            </h2>
          </div>
          <div className="benefits-grid">
            <div className="benefit-card fade-in visible">
              <div className="benefit-card__icon">
                <IconShield style={{ width: 32, height: 32 }} />
              </div>
              <h3 className="benefit-card__title">{t('aboutPage.whyUs.experience.title')}</h3>
              <ul className="benefit-card__list">
                <li>{t('aboutPage.whyUs.experience.list.1')}</li>
                <li>{t('aboutPage.whyUs.experience.list.2')}</li>
                <li>{t('aboutPage.whyUs.experience.list.3')}</li>
                <li>{t('aboutPage.whyUs.experience.list.4')}</li>
              </ul>
            </div>

            <div className="benefit-card fade-in visible">
              <div className="benefit-card__icon">
                <IconCheck style={{ width: 32, height: 32 }} />
              </div>
              <h3 className="benefit-card__title">{t('aboutPage.whyUs.standards.title')}</h3>
              <ul className="benefit-card__list">
                <li>{t('aboutPage.whyUs.standards.list.1')}</li>
                <li>{t('aboutPage.whyUs.standards.list.2')}</li>
                <li>{t('aboutPage.whyUs.standards.list.3')}</li>
                <li>{t('aboutPage.whyUs.standards.list.4')}</li>
              </ul>
            </div>

            <div className="benefit-card fade-in visible">
              <div className="benefit-card__icon">
                <IconAuto style={{ width: 32, height: 32 }} />
              </div>
              <h3 className="benefit-card__title">{t('aboutPage.whyUs.service.title')}</h3>
              <ul className="benefit-card__list">
                <li>{t('aboutPage.whyUs.service.list.1')}</li>
                <li>{t('aboutPage.whyUs.service.list.2')}</li>
                <li>{t('aboutPage.whyUs.service.list.3')}</li>
                <li>{t('aboutPage.whyUs.service.list.4')}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <h2 className="cta__title">{t('cta.about.title')}</h2>
          <p className="cta__text">{t('cta.about.text')}</p>
          <div className="cta__actions">
            <Link href="/contacts" className="btn btn--white btn--large">
              {t('cta.about.contact')}
            </Link>
            <a
              href="tel:+78001234567"
              className="btn btn--secondary btn--large"
              style={{ borderColor: 'white', color: 'white' }}
            >
              {t('header.phone')}
            </a>
          </div>
        </div>
      </section>
    </Layout>
  )
}
