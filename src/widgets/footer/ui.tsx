import { useTranslate } from '@tolgee/react'

import { AppLink } from '@/shared/ui/app-link'
import { IconLocation, IconPhone, IconTelegram } from '@/shared/ui/icons'
import { Logo } from '@/shared/ui/logo'

export function Footer() {
  const { t } = useTranslate()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <div className="footer__logo">
              <Logo variant="footer" />
            </div>
            <p className="footer__description">{t('footer.description')}</p>
            <div className="footer__social">
              <a
                href="https://t.me/Ozonoxy01"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label="Telegram"
              >
                <IconTelegram />
              </a>
            </div>
          </div>

          <div className="footer__column">
            <h4>{t('footer.navigation')}</h4>
            <ul className="footer__links">
              <li>
                <AppLink href="/" className="footer__link">
                  {t('footer.home')}
                </AppLink>
              </li>
              <li>
                <AppLink href="/technology" className="footer__link">
                  {t('nav.technology')}
                </AppLink>
              </li>
              <li>
                <AppLink href="/applications" className="footer__link">
                  {t('nav.applications')}
                </AppLink>
              </li>
              <li>
                <AppLink href="/articles" className="footer__link">
                  {t('nav.articles')}
                </AppLink>
              </li>
            </ul>
          </div>

          <div className="footer__column">
            <h4>{t('footer.applicationsTitle')}</h4>
            <ul className="footer__links">
              <li>
                <AppLink href="/applications/agriculture" className="footer__link">
                  {t('applications.poultry.title')}
                </AppLink>
              </li>
              <li>
                <AppLink href="/applications/food-production" className="footer__link">
                  {t('applications.food.title')}
                </AppLink>
              </li>
              <li>
                <AppLink href="/applications/horeca" className="footer__link">
                  {t('applications.horeca.title')}
                </AppLink>
              </li>
              <li>
                <AppLink href="/applications/medicine" className="footer__link">
                  {t('applications.medical.title')}
                </AppLink>
              </li>
              <li>
                <AppLink href="/applications/water-treatment" className="footer__link">
                  {t('applications.water.title')}
                </AppLink>
              </li>
            </ul>
          </div>

          <div className="footer__column">
            <h4>{t('footer.contactsTitle')}</h4>
            <a href="tel:+998942909977" className="footer__contact-item" aria-label={t('footer.callUs')}>
              <IconPhone />
              <span>
                {t('header.phone')}
                <br />
                {t('header.freeCall')}
              </span>
            </a>
            <a
              href="https://t.me/Ozonoxy01"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__contact-item"
              aria-label={t('footer.openTelegram')}
            >
              <IconTelegram />
              <span>@Ozonoxy01</span>
            </a>
            <AppLink href="/contacts" className="footer__contact-item" aria-label={t('footer.viewAddress')}>
              <IconLocation />
              <span>
                {t('contactsPage.info.address.country')}, {t('contactsPage.info.address.city')}
              </span>
            </AppLink>
          </div>
        </div>

        <div className="footer__bottom">
          <span>
            &copy; {new Date().getFullYear()} {t('footer.copyright')}
          </span>
        </div>
      </div>
    </footer>
  )
}
