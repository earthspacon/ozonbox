import { useTranslate } from '@tolgee/react'

import { Layout } from '@/widgets'

import { IconCheck } from '@/shared/ui'
import { AppLink } from '@/shared/ui/app-link'

export function ApplicationsPage() {
  const { t } = useTranslate()

  return (
    <Layout>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1 className="page-header__title">{t('applicationsPage.header.title')}</h1>
          <p className="page-header__subtitle">{t('applicationsPage.header.subtitle')}</p>
        </div>
      </section>

      {/* Poultry Section */}
      <section id="poultry" className="application-detail">
        <div className="container">
          <div className="application-detail__inner">
            <div className="application-detail__image slide-in-left visible">
              <img src="https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=800&q=80" alt="" />
            </div>
            <div className="application-detail__content slide-in-right visible">
              <h2>
                <span className="text-gradient">{t('applicationsPage.poultry.title')}</span>
              </h2>
              <p>{t('applicationsPage.poultry.description')}</p>
              <ul className="application-detail__list">
                <li>
                  <IconCheck style={{ width: 24, height: 24 }} />
                  <div>
                    <strong>{t('applicationsPage.poultry.eggs.title')}</strong>
                    <span>{t('applicationsPage.poultry.eggs.text')}</span>
                  </div>
                </li>
                <li>
                  <IconCheck style={{ width: 24, height: 24 }} />
                  <div>
                    <strong>{t('applicationsPage.poultry.feed.title')}</strong>
                    <span>{t('applicationsPage.poultry.feed.text')}</span>
                  </div>
                </li>
                <li>
                  <IconCheck style={{ width: 24, height: 24 }} />
                  <div>
                    <strong>{t('applicationsPage.poultry.water.title')}</strong>
                    <span>{t('applicationsPage.poultry.water.text')}</span>
                  </div>
                </li>
                <li>
                  <IconCheck style={{ width: 24, height: 24 }} />
                  <div>
                    <strong>{t('applicationsPage.poultry.storage.title')}</strong>
                    <span>{t('applicationsPage.poultry.storage.text')}</span>
                  </div>
                </li>
              </ul>
              <AppLink href="/contacts" className="btn btn--primary" style={{ marginTop: '1rem' }}>
                {t('hero.getConsultation')}
              </AppLink>
            </div>
          </div>
        </div>
      </section>

      {/* Food Industry Section */}
      <section id="food" className="application-detail">
        <div className="container">
          <div className="application-detail__inner">
            <div className="application-detail__image slide-in-right visible">
              <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80" alt="" />
            </div>
            <div className="application-detail__content slide-in-left visible">
              <h2>
                <span className="text-gradient">{t('applicationsPage.food.title')}</span>
              </h2>
              <p>{t('applicationsPage.food.description')}</p>
              <ul className="application-detail__list">
                <li>
                  <IconCheck style={{ width: 24, height: 24 }} />
                  <div>
                    <strong>{t('applicationsPage.food.vegetables.title')}</strong>
                    <span>{t('applicationsPage.food.vegetables.text')}</span>
                  </div>
                </li>
                <li>
                  <IconCheck style={{ width: 24, height: 24 }} />
                  <div>
                    <strong>{t('applicationsPage.food.detox.title')}</strong>
                    <span>{t('applicationsPage.food.detox.text')}</span>
                  </div>
                </li>
                <li>
                  <IconCheck style={{ width: 24, height: 24 }} />
                  <div>
                    <strong>{t('applicationsPage.food.packaging.title')}</strong>
                    <span>{t('applicationsPage.food.packaging.text')}</span>
                  </div>
                </li>
                <li>
                  <IconCheck style={{ width: 24, height: 24 }} />
                  <div>
                    <strong>{t('applicationsPage.food.cold.title')}</strong>
                    <span>{t('applicationsPage.food.cold.text')}</span>
                  </div>
                </li>
              </ul>
              <AppLink href="/contacts" className="btn btn--primary" style={{ marginTop: '1rem' }}>
                {t('hero.getConsultation')}
              </AppLink>
            </div>
          </div>
        </div>
      </section>

      {/* HoReCa Section */}
      <section id="horeca" className="application-detail">
        <div className="container">
          <div className="application-detail__inner">
            <div className="application-detail__image slide-in-left visible">
              <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80" alt="" />
            </div>
            <div className="application-detail__content slide-in-right visible">
              <h2>
                <span className="text-gradient">{t('applicationsPage.horeca.title')}</span>
              </h2>
              <p>{t('applicationsPage.horeca.description')}</p>
              <ul className="application-detail__list">
                <li>
                  <IconCheck style={{ width: 24, height: 24 }} />
                  <div>
                    <strong>{t('applicationsPage.horeca.rooms.title')}</strong>
                    <span>{t('applicationsPage.horeca.rooms.text')}</span>
                  </div>
                </li>
                <li>
                  <IconCheck style={{ width: 24, height: 24 }} />
                  <div>
                    <strong>{t('applicationsPage.horeca.kitchen.title')}</strong>
                    <span>{t('applicationsPage.horeca.kitchen.text')}</span>
                  </div>
                </li>
                <li>
                  <IconCheck style={{ width: 24, height: 24 }} />
                  <div>
                    <strong>{t('applicationsPage.horeca.ventilation.title')}</strong>
                    <span>{t('applicationsPage.horeca.ventilation.text')}</span>
                  </div>
                </li>
                <li>
                  <IconCheck style={{ width: 24, height: 24 }} />
                  <div>
                    <strong>{t('applicationsPage.horeca.conference.title')}</strong>
                    <span>{t('applicationsPage.horeca.conference.text')}</span>
                  </div>
                </li>
              </ul>
              <AppLink href="/contacts" className="btn btn--primary" style={{ marginTop: '1rem' }}>
                {t('hero.getConsultation')}
              </AppLink>
            </div>
          </div>
        </div>
      </section>

      {/* Medical Section */}
      <section id="medical" className="application-detail">
        <div className="container">
          <div className="application-detail__inner">
            <div className="application-detail__image slide-in-right visible">
              <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80" alt="" />
            </div>
            <div className="application-detail__content slide-in-left visible">
              <h2>
                <span className="text-gradient">{t('applicationsPage.medical.title')}</span>
              </h2>
              <p>{t('applicationsPage.medical.description')}</p>
              <ul className="application-detail__list">
                <li>
                  <IconCheck style={{ width: 24, height: 24 }} />
                  <div>
                    <strong>{t('applicationsPage.medical.wards.title')}</strong>
                    <span>{t('applicationsPage.medical.wards.text')}</span>
                  </div>
                </li>
                <li>
                  <IconCheck style={{ width: 24, height: 24 }} />
                  <div>
                    <strong>{t('applicationsPage.medical.prevention.title')}</strong>
                    <span>{t('applicationsPage.medical.prevention.text')}</span>
                  </div>
                </li>
                <li>
                  <IconCheck style={{ width: 24, height: 24 }} />
                  <div>
                    <strong>{t('applicationsPage.medical.equipment.title')}</strong>
                    <span>{t('applicationsPage.medical.equipment.text')}</span>
                  </div>
                </li>
                <li>
                  <IconCheck style={{ width: 24, height: 24 }} />
                  <div>
                    <strong>{t('applicationsPage.medical.time.title')}</strong>
                    <span>{t('applicationsPage.medical.time.text')}</span>
                  </div>
                </li>
              </ul>
              <AppLink href="/contacts" className="btn btn--primary" style={{ marginTop: '1rem' }}>
                {t('hero.getConsultation')}
              </AppLink>
            </div>
          </div>
        </div>
      </section>

      {/* Water Section */}
      <section id="water" className="application-detail">
        <div className="container">
          <div className="application-detail__inner">
            <div className="application-detail__image slide-in-left visible">
              <img src="https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=800&q=80" alt="" />
            </div>
            <div className="application-detail__content slide-in-right visible">
              <h2>
                <span className="text-gradient">{t('applicationsPage.waterSection.title')}</span>
              </h2>
              <p>{t('applicationsPage.waterSection.description')}</p>
              <ul className="application-detail__list">
                <li>
                  <IconCheck style={{ width: 24, height: 24 }} />
                  <div>
                    <strong>{t('applicationsPage.waterSection.drinking.title')}</strong>
                    <span>{t('applicationsPage.waterSection.drinking.text')}</span>
                  </div>
                </li>
                <li>
                  <IconCheck style={{ width: 24, height: 24 }} />
                  <div>
                    <strong>{t('applicationsPage.waterSection.quality.title')}</strong>
                    <span>{t('applicationsPage.waterSection.quality.text')}</span>
                  </div>
                </li>
                <li>
                  <IconCheck style={{ width: 24, height: 24 }} />
                  <div>
                    <strong>{t('applicationsPage.waterSection.pools.title')}</strong>
                    <span>{t('applicationsPage.waterSection.pools.text')}</span>
                  </div>
                </li>
                <li>
                  <IconCheck style={{ width: 24, height: 24 }} />
                  <div>
                    <strong>{t('applicationsPage.waterSection.safety.title')}</strong>
                    <span>{t('applicationsPage.waterSection.safety.text')}</span>
                  </div>
                </li>
              </ul>
              <AppLink href="/contacts" className="btn btn--primary" style={{ marginTop: '1rem' }}>
                {t('hero.getConsultation')}
              </AppLink>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <h2 className="cta__title">{t('cta.applications.title')}</h2>
          <p className="cta__text">{t('cta.applications.text')}</p>
          <div className="cta__actions">
            <AppLink href="/contacts" className="btn btn--white btn--large">
              {t('hero.getConsultation')}
            </AppLink>
            <a
              href="tel:+78001234567"
              className="btn btn--secondary btn--large"
              style={{ borderColor: 'white', color: 'white' }}
            >
              {t('cta.home.call')}
            </a>
          </div>
        </div>
      </section>
    </Layout>
  )
}
