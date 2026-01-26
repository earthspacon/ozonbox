import { TolgeeProvider, TolgeeStaticDataProp } from '@tolgee/react'
import { GetStaticPaths, GetStaticProps } from 'next'

import { DEFAULT_LOCALE, LOCALES_LIST, TLocale, tolgee } from '@/shared/config/tolgee'

import { LangSync } from './lang'

interface PageProps {
  staticData: TolgeeStaticDataProp
  lang: string
}

export function withTolgee(PageComponent: React.ComponentType<Record<string, unknown>>) {
  return function Page(props: PageProps) {
    const lang = (props.lang || DEFAULT_LOCALE) as TLocale

    return (
      <TolgeeProvider tolgee={tolgee} ssr={{ language: lang, staticData: props.staticData }}>
        <LangSync lang={lang} />
        <PageComponent {...props} />
      </TolgeeProvider>
    )
  }
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

export const getStaticPropsLang: GetStaticProps<PageProps> = async ({ params }) => {
  const lang = params?.lang as TLocale

  const currentLangData = await tolgee.loadRecord({ language: lang })

  return {
    props: {
      staticData: {
        [lang]: currentLangData,
      },
      lang,
    },
  }
}
// #endregion

// #region default page
export const getStaticPropsDefault: GetStaticProps<PageProps> = async () => {
  const loadedData = await tolgee.loadRecord({
    language: DEFAULT_LOCALE,
  })

  return {
    props: {
      staticData: {
        [DEFAULT_LOCALE]: loadedData,
      },
      lang: DEFAULT_LOCALE,
    },
  }
}
// #endregion
