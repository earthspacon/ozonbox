import { GetStaticProps } from 'next'

import { VegetableStoragePage } from '@/@pages/applications/agriculture/vegetable-storage'

import { DEFAULT_LOCALE, getCategoryNamespace, NAMESPACES, TLocale } from '@/shared/config/tolgee'
import { loadNamespaces, withTolgee } from '@/shared/lib'

export const getStaticProps: GetStaticProps = async () => {
  const staticData = await loadNamespaces(DEFAULT_LOCALE as TLocale, [
    NAMESPACES.common,
    NAMESPACES.applications,
    getCategoryNamespace('agriculture'),
  ])
  return { props: { staticData, lang: DEFAULT_LOCALE } }
}

export default withTolgee(VegetableStoragePage)
