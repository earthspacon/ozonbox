import { FormatIcu } from '@tolgee/format-icu'
import { DevTools, FormatSimple, Tolgee } from '@tolgee/react'

export type TLocale = 'ru' | 'en' | 'uz' | 'uz-cyr'

export const LANG_LS_KEY = 'preferred-lang'

export const LOCALES: Record<
  TLocale,
  {
    id: TLocale
    fullLabel: string
  }
> = {
  ru: {
    id: 'ru',
    fullLabel: 'Русский',
  },
  en: {
    id: 'en',
    fullLabel: 'English',
  },
  uz: {
    id: 'uz',
    fullLabel: "O'zbekcha",
  },
  'uz-cyr': {
    id: 'uz-cyr',
    fullLabel: 'Ўзбекча',
  },
}

export const LOCALES_LIST = Object.keys(LOCALES)
export const DEFAULT_LOCALE = LOCALES.ru.id

export const tolgee = Tolgee()
  .use(DevTools())
  .use(FormatSimple())
  .use(FormatIcu())
  .init({
    availableLanguages: LOCALES_LIST,
    defaultLanguage: DEFAULT_LOCALE,

    ns: [],
    defaultNs: '',

    staticData: {
      ru: () => import('./i18n/ru.json'),
      en: () => import('./i18n/en.json'),
      uz: () => import('./i18n/uz.json'),
      'uz-cyr': () => import('./i18n/uz-cyr.json'),
    },
  })
