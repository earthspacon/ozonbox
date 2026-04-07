import { GetStaticPaths, GetStaticProps } from 'next'

import { SportsFacilitiesPage } from '@/@pages/applications/disinfection/sports-facilities'

import { getSubcategoryNamespace, LOCALES_LIST, NAMESPACES, TLocale } from '@/shared/config/tolgee'
import { loadNamespaces } from '@/shared/lib/load-namespaces'
import { withTolgee } from '@/shared/lib/page-static-functions'

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = LOCALES_LIST.map((lang) => ({ params: { lang } }))
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const lang = (params?.lang as TLocale) || 'ru'
  const staticData = await loadNamespaces(lang, [
    NAMESPACES.common,
    NAMESPACES.applications,
    getSubcategoryNamespace('disinfection', 'sports-facilities'),
  ])
  return { props: { staticData, lang } }
}

export default withTolgee(SportsFacilitiesPage)
