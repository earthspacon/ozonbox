import { TolgeeProvider, TolgeeStaticDataProp } from '@tolgee/react'
import { GetStaticPaths, GetStaticProps } from 'next'

import { DEFAULT_LOCALE, LOCALES_LIST, NAMESPACES, TLocale, TNamespace, tolgee } from '@/shared/config/tolgee'

import { LangSync } from './lang'

interface BasePageProps {
  staticData: TolgeeStaticDataProp
  lang: string
}

// Using explicit any to allow pages with additional props beyond staticData and lang
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function withTolgee(PageComponent: React.ComponentType<any>) {
  return function Page(props: BasePageProps & Record<string, unknown>) {
    const lang = (props.lang || DEFAULT_LOCALE) as TLocale

    return (
      <TolgeeProvider tolgee={tolgee} ssr={{ language: lang, staticData: props.staticData }}>
        <LangSync lang={lang} />
        <PageComponent {...props} />
      </TolgeeProvider>
    )
  }
}

// Helper function to load translations for specific namespaces
async function loadNamespaces(lang: TLocale, namespaces: TNamespace[]): Promise<TolgeeStaticDataProp> {
  const data: TolgeeStaticDataProp = {}

  for (const ns of namespaces) {
    try {
      const nsData = await import(`@/shared/config/i18n/${lang}/${ns}.json`)
      data[`${lang}:${ns}`] = nsData.default || nsData
    } catch {
      console.warn(`Failed to load namespace ${ns} for language ${lang}`)
    }
  }

  return data
}

// #region lang pages
export const getStaticPathsLang: GetStaticPaths = async () => {
  const paths = LOCALES_LIST.map((lang) => ({
    params: { lang },
  }))

  return {
    paths,
    fallback: false,
  }
}

// Standard page props with common namespace
export const getStaticPropsLang: GetStaticProps<BasePageProps> = async ({ params }) => {
  const lang = params?.lang as TLocale
  const staticData = await loadNamespaces(lang, [NAMESPACES.common])

  return {
    props: {
      staticData,
      lang,
    },
  }
}

// Factory function to create getStaticProps with additional namespaces
export function createGetStaticPropsLang(namespaces: TNamespace[]) {
  const fn: GetStaticProps<BasePageProps> = async ({ params }) => {
    const lang = params?.lang as TLocale
    const allNamespaces = [NAMESPACES.common, ...namespaces]
    const staticData = await loadNamespaces(lang, allNamespaces)

    return {
      props: {
        staticData,
        lang,
      },
    }
  }
  return fn
}
// #endregion

// #region default page
export const getStaticPropsDefault: GetStaticProps<BasePageProps> = async () => {
  const staticData = await loadNamespaces(DEFAULT_LOCALE, [NAMESPACES.common])

  return {
    props: {
      staticData,
      lang: DEFAULT_LOCALE,
    },
  }
}

// Factory function to create getStaticProps for default locale with additional namespaces
export function createGetStaticPropsDefault(namespaces: TNamespace[]) {
  const fn: GetStaticProps<BasePageProps> = async () => {
    const allNamespaces = [NAMESPACES.common, ...namespaces]
    const staticData = await loadNamespaces(DEFAULT_LOCALE, allNamespaces)

    return {
      props: {
        staticData,
        lang: DEFAULT_LOCALE,
      },
    }
  }
  return fn
}
// #endregion
