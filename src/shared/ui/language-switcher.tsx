'use client'

import { useTolgee } from '@tolgee/react'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'

import { LANG_LS_KEY, LOCALES, TLocale } from '@/shared/config/tolgee'

import { useIsLangInRoute, useLang } from '../lib'

const FLAGS: Record<TLocale, string> = {
  ru: '🇷🇺',
  en: '🇬🇧',
  uz: '🇺🇿',
  'uz-cyr': '🇺🇿',
}

export function LanguageSwitcher() {
  const tolgee = useTolgee(['language'])
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const hasLangInRoute = useIsLangInRoute()
  const currentLang = useLang()
  const currentLocale = LOCALES[currentLang]

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleLanguageChange = async (newLang: TLocale) => {
    tolgee.changeLanguage(newLang)
    localStorage.setItem(LANG_LS_KEY, newLang)

    if (hasLangInRoute) {
      const segments = router.asPath.split('/')
      segments[1] = newLang
      router.replace(segments.join('/'))
    } else {
      router.replace(`/${newLang}${router.asPath}`)
    }

    setIsOpen(false)
  }

  return (
    <div className="lang-switcher" ref={dropdownRef}>
      <button
        className="lang-switcher__trigger"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <span className="lang-switcher__flag">{FLAGS[currentLang]}</span>
        <span className="lang-switcher__label">{currentLocale?.fullLabel || currentLang}</span>
        <svg
          className={`lang-switcher__arrow ${isOpen ? 'lang-switcher__arrow--open' : ''}`}
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
        >
          <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>

      {isOpen && (
        <ul className="lang-switcher__dropdown" role="listbox">
          {Object.values(LOCALES).map((locale) => (
            <li key={locale.id}>
              <button
                className={`lang-switcher__option ${currentLang === locale.id ? 'lang-switcher__option--active' : ''}`}
                onClick={() => handleLanguageChange(locale.id)}
                role="option"
                aria-selected={currentLang === locale.id}
              >
                <span className="lang-switcher__flag">{FLAGS[locale.id]}</span>
                <span>{locale.fullLabel}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
