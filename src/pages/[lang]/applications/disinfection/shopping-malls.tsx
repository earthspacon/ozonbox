import { GetStaticPaths, GetStaticProps } from 'next'

import { ShoppingMallsPage } from '@/@pages/applications/disinfection/shopping-malls'

import { getSubcategoryNamespace, LOCALES_LIST, NAMESPACES, TLocale } from '@/shared/config/tolgee'
import { loadNamespaces, withTolgee } from '@/shared/lib'

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = LOCALES_LIST.map((lang) => ({ params: { lang } }))
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const lang = (params?.lang as TLocale) || 'ru'
  const staticData = await loadNamespaces(lang, [
    NAMESPACES.common,
    NAMESPACES.applications,
    getSubcategoryNamespace('disinfection', 'shopping-malls'),
  ])
  return { props: { staticData, lang } }
}

export default withTolgee(ShoppingMallsPage)
