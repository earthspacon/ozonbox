import { useTranslate } from '@tolgee/react'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import { useScrolled } from '@/shared/hooks'
import { useIsLangInRoute } from '@/shared/lib/lang'
import { AppLink } from '@/shared/ui/app-link'
import { IconClose, IconMenu, IconPhone } from '@/shared/ui/icons'
import { LanguageSwitcher } from '@/shared/ui/language-switcher'
import { Logo } from '@/shared/ui/logo'

export function Header() {
  const { t } = useTranslate()
  const router = useRouter()
  const hasLangInRoute = useIsLangInRoute()
  const scrolled = useScrolled()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const pathWithoutLang = hasLangInRoute
    ? '/' + (router.asPath.split('?')[0].split('/').slice(2).join('/') || '')
    : router.asPath.split('?')[0]

  const navLinks = [
    { href: '/technology', label: t('nav.technology') },
    { href: '/applications', label: t('nav.applications') },
    { href: '/articles', label: t('nav.articles') },
    { href: '/about', label: t('nav.about') },
    { href: '/contacts', label: t('nav.contacts') },
  ]

  useEffect(() => {
    if (mobileMenuOpen) {
      const prevHtml = document.documentElement.style.overflow
      const prevBody = document.body.style.overflow
      document.documentElement.style.overflow = 'hidden'
      document.body.style.overflow = 'hidden'
      return () => {
        document.documentElement.style.overflow = prevHtml
        document.body.style.overflow = prevBody
      }
    }
  }, [mobileMenuOpen])

  const toggleMobileMenu = () => setMobileMenuOpen((open) => !open)

  const closeMobileMenu = () => setMobileMenuOpen(false)

  return (
    <>
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="header__inner gap-2">
          <AppLink href="/">
            <Logo />
          </AppLink>

          <nav className="header__nav">
            <ul className="header__nav-list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <AppLink
                    href={link.href}
                    className={`header__nav-link ${pathWithoutLang === link.href ? 'active' : ''}`}
                  >
                    {link.label}
                  </AppLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="header__actions">
            <LanguageSwitcher />

            <a href="tel:+998942909977" className="header__phone max-lg:!hidden">
              <IconPhone className="size-[18px]" />
              <span className="header__phone-text">{t('header.phone')}</span>
            </a>

            <AppLink href="/contacts" className="btn btn--primary header__cta-btn">
              {t('header.contact')}
            </AppLink>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="tel:+998942909977"
              className="btn--primary flex size-11 items-center justify-center rounded-lg lg:hidden"
            >
              <IconPhone width={18} height={18} fill="#fff" />
            </a>

            <button className="header__menu-toggle" aria-label="Menu" onClick={toggleMobileMenu}>
              {mobileMenuOpen ? (
                <IconClose style={{ width: 24, height: 24 }} />
              ) : (
                <IconMenu style={{ width: 24, height: 24 }} />
              )}
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`}>
        <ul className="mobile-menu__list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <AppLink href={link.href} className="mobile-menu__link" onClick={closeMobileMenu}>
                {link.label}
              </AppLink>
            </li>
          ))}
        </ul>
        <div className="mobile-menu__language">
          <LanguageSwitcher openUp />
        </div>
        <div className="mobile-menu__phone">
          <a href="tel:+998942909977">{t('header.phone')}</a>
          <p>{t('header.freeCall')}</p>
        </div>
      </div>
    </>
  )
}
