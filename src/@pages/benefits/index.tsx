import { useTranslate } from '@tolgee/react'

import { Layout } from '@/widgets'

import { IconAuto, IconCheck, IconEco, IconEconomy, IconShield, IconUniversal } from '@/shared/ui/icons'
import { AppLink } from '@/shared/ui/app-link'

export function BenefitsPage() {
  const { t } = useTranslate()

  return (
    <Layout>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1 className="page-header__title">{t('benefitsPage.header.title')}</h1>
          <p className="page-header__subtitle">{t('benefitsPage.header.subtitle')}</p>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="section">
        <div className="container">
          <div className="benefits-grid">
            <div className="benefit-card fade-in visible">
              <div className="benefit-card__icon">
                <IconEco style={{ width: 32, height: 32 }} />
              </div>
              <h3 className="benefit-card__title">{t('benefitsPage.eco.title')}</h3>
              <ul className="benefit-card__list">
                <li>{t('benefitsPage.eco.list.1')}</li>
                <li>{t('benefitsPage.eco.list.2')}</li>
                <li>{t('benefitsPage.eco.list.3')}</li>
                <li>{t('benefitsPage.eco.list.4')}</li>
              </ul>
            </div>

            <div className="benefit-card fade-in visible">
              <div className="benefit-card__icon">
                <IconShield style={{ width: 32, height: 32 }} />
              </div>
              <h3 className="benefit-card__title">{t('benefitsPage.efficiency.title')}</h3>
              <ul className="benefit-card__list">
                <li>{t('benefitsPage.efficiency.list.1')}</li>
                <li>{t('benefitsPage.efficiency.list.2')}</li>
                <li>{t('benefitsPage.efficiency.list.3')}</li>
                <li>{t('benefitsPage.efficiency.list.4')}</li>
              </ul>
            </div>

            <div className="benefit-card fade-in visible">
              <div className="benefit-card__icon">
                <IconCheck style={{ width: 32, height: 32 }} />
              </div>
              <h3 className="benefit-card__title">{t('benefitsPage.safety.title')}</h3>
              <ul className="benefit-card__list">
                <li>{t('benefitsPage.safety.list.1')}</li>
                <li>{t('benefitsPage.safety.list.2')}</li>
                <li>{t('benefitsPage.safety.list.3')}</li>
                <li>{t('benefitsPage.safety.list.4')}</li>
              </ul>
            </div>

            <div className="benefit-card fade-in visible">
              <div className="benefit-card__icon">
                <IconEconomy style={{ width: 32, height: 32 }} />
              </div>
              <h3 className="benefit-card__title">{t('benefitsPage.economy.title')}</h3>
              <ul className="benefit-card__list">
                <li>{t('benefitsPage.economy.list.1')}</li>
                <li>{t('benefitsPage.economy.list.2')}</li>
                <li>{t('benefitsPage.economy.list.3')}</li>
                <li>{t('benefitsPage.economy.list.4')}</li>
              </ul>
            </div>

            <div className="benefit-card fade-in visible">
              <div className="benefit-card__icon">
                <IconUniversal style={{ width: 32, height: 32 }} />
              </div>
              <h3 className="benefit-card__title">{t('benefitsPage.universal.title')}</h3>
              <ul className="benefit-card__list">
                <li>{t('benefitsPage.universal.list.1')}</li>
                <li>{t('benefitsPage.universal.list.2')}</li>
                <li>{t('benefitsPage.universal.list.3')}</li>
                <li>{t('benefitsPage.universal.list.4')}</li>
              </ul>
            </div>

            <div className="benefit-card fade-in visible">
              <div className="benefit-card__icon">
                <IconAuto style={{ width: 32, height: 32 }} />
              </div>
              <h3 className="benefit-card__title">{t('benefitsPage.auto.title')}</h3>
              <ul className="benefit-card__list">
                <li>{t('benefitsPage.auto.list.1')}</li>
                <li>{t('benefitsPage.auto.list.2')}</li>
                <li>{t('benefitsPage.auto.list.3')}</li>
                <li>{t('benefitsPage.auto.list.4')}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section section--gray">
        <div className="container">
          <div className="section__header">
            <h2 className="section__title">
              {t('benefitsPage.stats.title')}{' '}
              <span className="text-gradient">{t('benefitsPage.stats.titleHighlight')}</span>
            </h2>
          </div>
          <div className="features" style={{ marginTop: 0 }}>
            <div className="feature-card fade-in visible">
              <div
                className="feature-card__icon"
                style={{
                  fontSize: '2.5rem',
                  fontWeight: 700,
                  color: 'var(--color-primary)',
                  width: 'auto',
                  height: 'auto',
                }}
              >
                300×
              </div>
              <h3 className="feature-card__title">{t('benefitsPage.stats.power.title')}</h3>
              <p className="feature-card__text">{t('benefitsPage.stats.power.text')}</p>
            </div>
            <div className="feature-card fade-in visible">
              <div
                className="feature-card__icon"
                style={{
                  fontSize: '2.5rem',
                  fontWeight: 700,
                  color: 'var(--color-primary)',
                  width: 'auto',
                  height: 'auto',
                }}
              >
                95%
              </div>
              <h3 className="feature-card__title">{t('benefitsPage.stats.europe.title')}</h3>
              <p className="feature-card__text">{t('benefitsPage.stats.europe.text')}</p>
            </div>
            <div className="feature-card fade-in visible">
              <div
                className="feature-card__icon"
                style={{
                  fontSize: '2.5rem',
                  fontWeight: 700,
                  color: 'var(--color-primary)',
                  width: 'auto',
                  height: 'auto',
                }}
              >
                3-4×
              </div>
              <h3 className="feature-card__title">{t('benefitsPage.stats.cheaper.title')}</h3>
              <p className="feature-card__text">{t('benefitsPage.stats.cheaper.text')}</p>
            </div>
            <div className="feature-card fade-in visible">
              <div
                className="feature-card__icon"
                style={{
                  fontSize: '2.5rem',
                  fontWeight: 700,
                  color: 'var(--color-primary)',
                  width: 'auto',
                  height: 'auto',
                }}
              >
                20 min
              </div>
              <h3 className="feature-card__title">{t('benefitsPage.stats.decay.title')}</h3>
              <p className="feature-card__text">{t('benefitsPage.stats.decay.text')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <h2 className="cta__title">{t('cta.benefits.title')}</h2>
          <p className="cta__text">{t('cta.benefits.text')}</p>
          <div className="cta__actions">
            <AppLink href="/contacts" className="btn btn--white btn--large">
              {t('hero.getConsultation')}
            </AppLink>
            <AppLink
              href="/applications"
              className="btn btn--secondary btn--large"
              style={{ borderColor: 'white', color: 'white' }}
            >
              {t('cta.technology.areas')}
            </AppLink>
          </div>
        </div>
      </section>
    </Layout>
  )
}
