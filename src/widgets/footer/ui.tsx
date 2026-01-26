import { useTranslate } from '@tolgee/react'
import Link from 'next/link'

import { IconEmail, IconLocation, IconPhone, IconTelegram, IconWhatsapp, Logo } from '@/shared/ui'

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
              <a href="https://wa.me/78001234567" className="footer__social-link" aria-label="WhatsApp">
                <IconWhatsapp />
              </a>
              <a href="https://t.me/ozontech" className="footer__social-link" aria-label="Telegram">
                <IconTelegram />
              </a>
            </div>
          </div>

          <div className="footer__column">
            <h4>{t('footer.navigation')}</h4>
            <ul className="footer__links">
              <li>
                <Link href="/" className="footer__link">
                  {t('footer.home')}
                </Link>
              </li>
              <li>
                <Link href="/technology" className="footer__link">
                  {t('nav.technology')}
                </Link>
              </li>
              <li>
                <Link href="/applications" className="footer__link">
                  {t('nav.applications')}
                </Link>
              </li>
              <li>
                <Link href="/benefits" className="footer__link">
                  {t('nav.benefits')}
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer__column">
            <h4>{t('footer.applicationsTitle')}</h4>
            <ul className="footer__links">
              <li>
                <Link href="/applications#poultry" className="footer__link">
                  {t('applications.poultry.title')}
                </Link>
              </li>
              <li>
                <Link href="/applications#food" className="footer__link">
                  {t('applications.food.title')}
                </Link>
              </li>
              <li>
                <Link href="/applications#horeca" className="footer__link">
                  {t('applications.horeca.title')}
                </Link>
              </li>
              <li>
                <Link href="/applications#medical" className="footer__link">
                  {t('applications.medical.title')}
                </Link>
              </li>
              <li>
                <Link href="/applications#water" className="footer__link">
                  {t('applications.water.title')}
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer__column">
            <h4>{t('footer.contactsTitle')}</h4>
            <div className="footer__contact-item">
              <IconPhone />
              <span>
                {t('header.phone')}
                <br />
                {t('header.freeCall')}
              </span>
            </div>
            <div className="footer__contact-item">
              <IconEmail />
              <span>info@ozontech.ru</span>
            </div>
            <div className="footer__contact-item">
              <IconLocation />
              <span>{t('contactsPage.info.address.value')}</span>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <span>
            &copy; {new Date().getFullYear()} {t('footer.copyright')}
          </span>
          <span>{t('footer.dev')}</span>
        </div>
      </div>
    </footer>
  )
}
