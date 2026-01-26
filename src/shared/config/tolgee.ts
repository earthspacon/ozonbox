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

// Available namespaces for translations
export const NAMESPACES = {
  common: 'common',
  applications: 'applications',
  // Category-specific namespaces (loaded on demand)
  categoryMedicine: 'category-medicine',
  categoryAgriculture: 'category-agriculture',
  categoryFoodProduction: 'category-food-production',
  categoryHoreca: 'category-horeca',
  categoryWaterTreatment: 'category-water-treatment',
  categoryDisinfection: 'category-disinfection',
  categoryCleaning: 'category-cleaning',
  categoryWarehouses: 'category-warehouses',
  categoryIndustry: 'category-industry',
  categoryTransport: 'category-transport',
} as const

export type TNamespace = (typeof NAMESPACES)[keyof typeof NAMESPACES]

// Helper to get category namespace from category ID
export function getCategoryNamespace(categoryId: string): TNamespace {
  const nsMap: Record<string, TNamespace> = {
    medicine: NAMESPACES.categoryMedicine,
    agriculture: NAMESPACES.categoryAgriculture,
    'food-production': NAMESPACES.categoryFoodProduction,
    horeca: NAMESPACES.categoryHoreca,
    'water-treatment': NAMESPACES.categoryWaterTreatment,
    disinfection: NAMESPACES.categoryDisinfection,
    cleaning: NAMESPACES.categoryCleaning,
    warehouses: NAMESPACES.categoryWarehouses,
    industry: NAMESPACES.categoryIndustry,
    transport: NAMESPACES.categoryTransport,
  }
  return nsMap[categoryId] || NAMESPACES.common
}

export const tolgee = Tolgee().use(DevTools()).use(FormatSimple()).use(FormatIcu()).init({
  availableLanguages: LOCALES_LIST,
  defaultLanguage: DEFAULT_LOCALE,

  // Use empty ns, translations will be loaded per-page via staticData prop
  ns: [],
  defaultNs: '',

  // No static data here - it's loaded per-page via getStaticProps
  staticData: {},
})
