import { GetStaticProps } from 'next'

import { RetailSupermarketsPage } from '@/@pages/applications/food-production/retail-supermarkets'

import { DEFAULT_LOCALE, getSubcategoryNamespace, NAMESPACES, TLocale } from '@/shared/config/tolgee'
import { loadNamespaces, withTolgee } from '@/shared/lib'

export const getStaticProps: GetStaticProps = async () => {
  const staticData = await loadNamespaces(DEFAULT_LOCALE as TLocale, [
    NAMESPACES.common,
    NAMESPACES.applications,
    getSubcategoryNamespace('food-production', 'retail-supermarkets'),
  ])
  return { props: { staticData, lang: DEFAULT_LOCALE } }
}

export default withTolgee(RetailSupermarketsPage)
