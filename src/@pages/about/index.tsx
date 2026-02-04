import { useTranslate } from '@tolgee/react'
import Image from 'next/image'

import { Layout } from '@/widgets/layout'

import { CTASection } from '@/shared/ui/article-components'
import { IconAuto, IconCheck, IconFacebook, IconShield, IconTelegram, IconYouTube } from '@/shared/ui/icons'

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
              <Image
                src="https://images.pexels.com/photos/9242833/pexels-photo-9242833.jpeg"
                alt={t('aboutPage.content.title')}
                width={800}
                height={600}
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

      {/* Follow us */}
      <section className="section">
        <div className="container">
          <h2 className="section__title" style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
            {t('aboutPage.followUs.title')}
          </h2>
          <div className="about-follow">
            <a
              href="https://t.me/Ozonoxy01"
              target="_blank"
              rel="noopener noreferrer"
              className="about-follow__link"
              style={{ background: 'rgba(0, 136, 204, 0.1)', color: '#0088cc' }}
              aria-label={t('footer.openTelegram')}
            >
              <IconTelegram />
              Telegram
            </a>
            <a
              href="https://youtube.com/@ozonoxy_ss"
              target="_blank"
              rel="noopener noreferrer"
              className="about-follow__link"
              style={{ background: 'rgba(255, 0, 0, 0.1)', color: '#ff0000' }}
              aria-label={t('footer.openYouTube')}
            >
              <IconYouTube />
              YouTube
            </a>
            <a
              href="https://www.facebook.com/ozonoxy.ozonoxy"
              target="_blank"
              rel="noopener noreferrer"
              className="about-follow__link"
              style={{ background: 'rgba(24, 119, 242, 0.1)', color: '#1877f2' }}
              aria-label={t('footer.openFacebook')}
            >
              <IconFacebook />
              Facebook
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title={t('cta.about.title')}
        description={t('cta.about.text')}
        primaryButton={{
          label: t('cta.about.contact'),
          href: '/contacts',
        }}
        secondaryButton={{
          label: t('header.phone'),
          href: 'tel:+998942909977',
        }}
      />
    </Layout>
  )
}
