import { useTranslate } from '@tolgee/react'
import Image from 'next/image'

import { Layout } from '@/widgets'

import { AppLink } from '@/shared/ui/app-link'
import {
  IconArrowRight,
  IconCheck,
  IconEco,
  IconFood,
  IconHotel,
  IconMedical,
  IconPoultry,
  IconShield,
  IconTimer,
} from '@/shared/ui/icons'

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
            <h1 className="hero__title">{t('hero.title')}</h1>
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
            <AppLink href="/applications/medicine" className="application-card fade-in visible">
              <div className="application-card__image">
                <Image
                  src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80"
                  alt={t('applications.categories.medicine.title')}
                  width={800}
                  height={600}
                />
              </div>
              <div className="application-card__overlay">
                <IconMedical className="application-card__icon" />
                <h3 className="application-card__title">{t('applications.categories.medicine.title')}</h3>
                <p className="application-card__text">{t('applications.categories.medicine.text')}</p>
                <span className="application-card__link">
                  {t('applications.more')} <IconArrowRight style={{ width: 16, height: 16 }} />
                </span>
              </div>
            </AppLink>
            <AppLink href="/applications/agriculture" className="application-card fade-in visible">
              <div className="application-card__image">
                <Image
                  src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=800&q=80"
                  alt={t('applications.categories.agriculture.title')}
                  width={800}
                  height={600}
                />
              </div>
              <div className="application-card__overlay">
                <IconPoultry className="application-card__icon" />
                <h3 className="application-card__title">{t('applications.categories.agriculture.title')}</h3>
                <p className="application-card__text">{t('applications.categories.agriculture.text')}</p>
                <span className="application-card__link">
                  {t('applications.more')} <IconArrowRight style={{ width: 16, height: 16 }} />
                </span>
              </div>
            </AppLink>
            <AppLink href="/applications/food-production" className="application-card fade-in visible">
              <div className="application-card__image">
                <Image
                  src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80"
                  alt={t('applications.categories.food-production.title')}
                  width={800}
                  height={600}
                />
              </div>
              <div className="application-card__overlay">
                <IconFood className="application-card__icon" />
                <h3 className="application-card__title">{t('applications.categories.food-production.title')}</h3>
                <p className="application-card__text">{t('applications.categories.food-production.text')}</p>
                <span className="application-card__link">
                  {t('applications.more')} <IconArrowRight style={{ width: 16, height: 16 }} />
                </span>
              </div>
            </AppLink>
            <AppLink href="/applications/horeca" className="application-card fade-in visible">
              <div className="application-card__image">
                <Image
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80"
                  alt={t('applications.categories.horeca.title')}
                  width={800}
                  height={600}
                />
              </div>
              <div className="application-card__overlay">
                <IconHotel className="application-card__icon" />
                <h3 className="application-card__title">{t('applications.categories.horeca.title')}</h3>
                <p className="application-card__text">{t('applications.categories.horeca.text')}</p>
                <span className="application-card__link">
                  {t('applications.more')} <IconArrowRight style={{ width: 16, height: 16 }} />
                </span>
              </div>
            </AppLink>
          </div>
          <div className="mt-8 flex justify-center">
            <AppLink href="/applications" className="btn btn--primary btn--large">
              {t('applications.viewAll')} <IconArrowRight style={{ width: 20, height: 20, marginLeft: '0.5rem' }} />
            </AppLink>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section className="section section--gray">
        <div className="container">
          <div className="section__header">
            <h2 className="section__title">
              {t('research.title')} <span className="text-gradient">{t('research.titleHighlight')}</span>
            </h2>
            <p className="section__subtitle">{t('research.subtitle')}</p>
          </div>
          <div className="research-cards">
            <div className="research-card fade-in visible">
              <div className="research-card__icon">
                <IconShield style={{ width: 32, height: 32 }} />
              </div>
              <div className="research-card__content">
                <h4 className="research-card__title">{t('research.telaviv.title')}</h4>
                <p className="research-card__text">{t('research.telaviv.text')}</p>
                <span className="research-card__stat">{t('research.telaviv.stat')}</span>
              </div>
            </div>
            <div className="research-card fade-in visible">
              <div className="research-card__icon">
                <IconTimer style={{ width: 32, height: 32 }} />
              </div>
              <div className="research-card__content">
                <h4 className="research-card__title">{t('research.fujita.title')}</h4>
                <p className="research-card__text">{t('research.fujita.text')}</p>
                <span className="research-card__stat">{t('research.fujita.stat')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <h2 className="cta__title">{t('cta.home.title')}</h2>
          <p className="cta__text">{t('cta.home.text')}</p>
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
