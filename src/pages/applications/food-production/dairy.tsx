import { GetStaticProps } from 'next'

import { DairyPage } from '@/@pages/applications/food-production/dairy'

import { DEFAULT_LOCALE, getCategoryNamespace, NAMESPACES, TLocale } from '@/shared/config/tolgee'
import { loadNamespaces, withTolgee } from '@/shared/lib'

export const getStaticProps: GetStaticProps = async () => {
  const staticData = await loadNamespaces(DEFAULT_LOCALE as TLocale, [
    NAMESPACES.common,
    NAMESPACES.applications,
    getCategoryNamespace('food-production'),
  ])
  return { props: { staticData, lang: DEFAULT_LOCALE } }
}

export default withTolgee(DairyPage)
