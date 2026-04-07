import { GetStaticProps } from 'next'

import { CarInteriorsPage } from '@/@pages/applications/cleaning/car-interiors'

import { DEFAULT_LOCALE, getSubcategoryNamespace, NAMESPACES, TLocale } from '@/shared/config/tolgee'
import { loadNamespaces } from '@/shared/lib/load-namespaces'
import { withTolgee } from '@/shared/lib/page-static-functions'

export const getStaticProps: GetStaticProps = async () => {
  const staticData = await loadNamespaces(DEFAULT_LOCALE as TLocale, [
    NAMESPACES.common,
    NAMESPACES.applications,
    getSubcategoryNamespace('cleaning', 'car-interiors'),
  ])
  return { props: { staticData, lang: DEFAULT_LOCALE } }
}

export default withTolgee(CarInteriorsPage)
