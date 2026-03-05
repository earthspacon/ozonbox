import { GetStaticProps } from 'next'

import { PharmaceuticalsPage } from '@/@pages/applications/medicine/pharmaceuticals'

import { DEFAULT_LOCALE, getSubcategoryNamespace, NAMESPACES, TLocale } from '@/shared/config/tolgee'
import { loadNamespaces, withTolgee } from '@/shared/lib'

export const getStaticProps: GetStaticProps = async () => {
  const staticData = await loadNamespaces(DEFAULT_LOCALE as TLocale, [
    NAMESPACES.common,
    NAMESPACES.applications,
    getSubcategoryNamespace('medicine', 'pharmaceuticals'),
  ])
  return { props: { staticData, lang: DEFAULT_LOCALE } }
}

export default withTolgee(PharmaceuticalsPage)
