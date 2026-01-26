import { useTolgee } from '@tolgee/react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { DEFAULT_LOCALE, LANG_LS_KEY, LOCALES_LIST, TLocale, tolgee } from '@/shared/config/tolgee'

export const useLang = (): TLocale => {
  const router = useRouter()
  const tolgeeInstance = useTolgee(['language'])

  const tolgeeLang = tolgeeInstance.getLanguage() as TLocale | undefined
  const routeLang = router.query.lang as TLocale | undefined

  return tolgeeLang || routeLang || DEFAULT_LOCALE
}

export const useIsLangInRoute = () => {
  const router = useRouter()
  const hasLangInRoute = router.pathname.includes('[lang]')
  return hasLangInRoute
}

export function LangSync({ lang }: { lang: TLocale }) {
  const router = useRouter()
  const hasLangInRoute = useIsLangInRoute()

  useEffect(() => {
    const savedLang = localStorage.getItem(LANG_LS_KEY)
    if (savedLang) return

    if (LOCALES_LIST.includes(lang)) {
      localStorage.setItem(LANG_LS_KEY, lang)
    }
  }, [])

  useEffect(() => {
    const savedLang = localStorage.getItem(LANG_LS_KEY) as TLocale | null
    if (!savedLang || !LOCALES_LIST.includes(savedLang)) return

    if (lang !== savedLang) {
      const pathSegments = router.asPath.split('/')

      if (hasLangInRoute) {
        pathSegments[1] = savedLang
      } else {
        pathSegments.splice(1, 0, savedLang)
      }

      const newPath = pathSegments.join('/')
      tolgee.changeLanguage(savedLang)
      router.replace(newPath)
    }
  }, [lang, router, hasLangInRoute])

  return null
}
