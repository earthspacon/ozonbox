import { useTranslate } from '@tolgee/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'

import { useScrolled } from '@/shared/hooks'
import { IconClose, IconMenu, IconPhone, Logo } from '@/shared/ui'

export function Header() {
  const { t } = useTranslate()
  const router = useRouter()
  const scrolled = useScrolled()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { href: '/technology', label: t('nav.technology') },
    { href: '/applications', label: t('nav.applications') },
    { href: '/benefits', label: t('nav.benefits') },
    { href: '/about', label: t('nav.about') },
    { href: '/contacts', label: t('nav.contacts') },
  ]

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
    document.body.style.overflow = !mobileMenuOpen ? 'hidden' : ''
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
    document.body.style.overflow = ''
  }

  return (
    <>
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="header__inner container">
          <Link href="/" className="header__logo">
            <Logo />
          </Link>

          <nav className="header__nav">
            <ul className="header__nav-list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`header__nav-link ${router.pathname === link.href ? 'active' : ''}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="header__actions">
            <a href="tel:+78001234567" className="header__phone">
              <IconPhone className="header__phone-icon" />
              <span>{t('header.phone')}</span>
            </a>
            <Link href="/contacts" className="btn btn--primary">
              {t('header.orderCall')}
            </Link>
          </div>

          <button className="header__menu-toggle" aria-label="Menu" onClick={toggleMobileMenu}>
            {mobileMenuOpen ? (
              <IconClose style={{ width: 24, height: 24 }} />
            ) : (
              <IconMenu style={{ width: 24, height: 24 }} />
            )}
          </button>
        </div>
      </header>

      <div className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`}>
        <ul className="mobile-menu__list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="mobile-menu__link" onClick={closeMobileMenu}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mobile-menu__phone">
          <a href="tel:+78001234567">{t('header.phone')}</a>
          <p>{t('header.freeCall')}</p>
        </div>
      </div>
    </>
  )
}
