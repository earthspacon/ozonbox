import { useTolgee } from '@tolgee/react'
import { useRouter } from 'next/router'

import { DEFAULT_LOCALE, TLocale } from '@/shared/config/tolgee'

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
