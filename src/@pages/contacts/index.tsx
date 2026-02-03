import { useTranslate } from '@tolgee/react'
import { FormEvent, useState } from 'react'

import { Layout } from '@/widgets/layout'

import { IconEmail, IconLocation, IconPhone, IconTelegram, IconTimer, IconWhatsapp } from '@/shared/ui/icons'

export function ContactsPage() {
  const { t } = useTranslate()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    await new Promise((resolve) => setTimeout(resolve, 1500))

    alert(t('contactsPage.form.success'))
    ;(e.target as HTMLFormElement).reset()
    setIsSubmitting(false)
  }

  return (
    <Layout>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1 className="page-header__title">{t('contactsPage.header.title')}</h1>
          <p className="page-header__subtitle">{t('contactsPage.header.subtitle')}</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '4rem',
              alignItems: 'start',
            }}
          >
            {/* Contact Form */}
            <div className="contact-form fade-in visible">
              <h3 className="contact-form__title">{t('contactsPage.form.title')}</h3>
              <p style={{ color: 'var(--color-text-secondary)', marginBottom: '1.5rem' }}>
                {t('contactsPage.form.subtitle')}
              </p>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">{t('contactsPage.form.name')} *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder={t('contactsPage.form.namePlaceholder')}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">{t('contactsPage.form.phone')} *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    placeholder={t('contactsPage.form.phonePlaceholder')}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">{t('contactsPage.form.email')}</label>
                  <input type="email" id="email" name="email" placeholder={t('contactsPage.form.emailPlaceholder')} />
                </div>
                <div className="form-group">
                  <label htmlFor="industry">{t('contactsPage.form.industry')}</label>
                  <select id="industry" name="industry">
                    <option value="">{t('contactsPage.form.industryPlaceholder')}</option>
                    <option value="poultry">{t('contactsPage.form.industryOptions.poultry')}</option>
                    <option value="food">{t('contactsPage.form.industryOptions.food')}</option>
                    <option value="horeca">{t('contactsPage.form.industryOptions.horeca')}</option>
                    <option value="medical">{t('contactsPage.form.industryOptions.medical')}</option>
                    <option value="water">{t('contactsPage.form.industryOptions.water')}</option>
                    <option value="other">{t('contactsPage.form.industryOptions.other')}</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">{t('contactsPage.form.message')}</label>
                  <textarea id="message" name="message" placeholder={t('contactsPage.form.messagePlaceholder')} />
                </div>
                <button
                  type="submit"
                  className="btn btn--primary btn--large"
                  style={{ width: '100%' }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? t('contactsPage.form.submitting') : t('contactsPage.form.submit')}
                </button>
                <p
                  style={{
                    fontSize: '0.875rem',
                    color: 'var(--color-text-secondary)',
                    marginTop: '1rem',
                    textAlign: 'center',
                  }}
                >
                  {t('contactsPage.form.privacy')}
                </p>
              </form>
            </div>

            {/* Contact Info */}
            <div className="contact-info slide-in-right visible">
              <div className="contact-info__item">
                <div className="contact-info__icon">
                  <IconPhone style={{ width: 24, height: 24 }} />
                </div>
                <div className="contact-info__content">
                  <h4>{t('contactsPage.info.phone.title')}</h4>
                  <a href="tel:+78001234567">{t('header.phone')}</a>
                  <p>{t('contactsPage.info.phone.subtitle')}</p>
                </div>
              </div>

              <div className="contact-info__item">
                <div className="contact-info__icon">
                  <IconEmail style={{ width: 24, height: 24 }} />
                </div>
                <div className="contact-info__content">
                  <h4>{t('contactsPage.info.email.title')}</h4>
                  <a href="mailto:info@ozontech.ru">info@ozontech.ru</a>
                  <p>{t('contactsPage.info.email.subtitle')}</p>
                </div>
              </div>

              <div className="contact-info__item">
                <div className="contact-info__icon">
                  <IconWhatsapp style={{ width: 24, height: 24 }} />
                </div>
                <div className="contact-info__content">
                  <h4>{t('contactsPage.info.whatsapp.title')}</h4>
                  <a href="https://wa.me/78001234567">+7 (800) 123-45-67</a>
                  <p>{t('contactsPage.info.whatsapp.subtitle')}</p>
                </div>
              </div>

              <div className="contact-info__item">
                <div className="contact-info__icon">
                  <IconTelegram style={{ width: 24, height: 24 }} />
                </div>
                <div className="contact-info__content">
                  <h4>{t('contactsPage.info.telegram.title')}</h4>
                  <a href="https://t.me/ozontech">@ozontech</a>
                  <p>{t('contactsPage.info.telegram.subtitle')}</p>
                </div>
              </div>

              <div className="contact-info__item">
                <div className="contact-info__icon">
                  <IconLocation style={{ width: 24, height: 24 }} />
                </div>
                <div className="contact-info__content">
                  <h4>{t('contactsPage.info.address.title')}</h4>
                  <p style={{ fontSize: '1rem', color: 'var(--color-text-primary)' }}>
                    {t('contactsPage.info.address.value')}
                    <br />
                    {t('contactsPage.info.address.office')}
                  </p>
                  <p>{t('contactsPage.info.address.hours')}</p>
                </div>
              </div>

              <div className="contact-info__item">
                <div className="contact-info__icon">
                  <IconTimer style={{ width: 24, height: 24 }} />
                </div>
                <div className="contact-info__content">
                  <h4>{t('contactsPage.info.workingHours.title')}</h4>
                  <p style={{ fontSize: '1rem', color: 'var(--color-text-primary)' }}>
                    {t('contactsPage.info.workingHours.weekdays')}
                  </p>
                  <p>{t('contactsPage.info.workingHours.weekend')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <h2 className="cta__title">{t('cta.contacts.title')}</h2>
          <p className="cta__text">{t('cta.contacts.text')}</p>
          <div className="cta__actions">
            <a href="tel:+78001234567" className="btn btn--white btn--large">
              <IconPhone style={{ width: 20, height: 20 }} />
              {t('header.phone')}
            </a>
          </div>
        </div>
      </section>
    </Layout>
  )
}
