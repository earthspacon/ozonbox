import { GetStaticProps } from 'next'

import { TextileProcessingPage } from '@/@pages/applications/textile/textile-processing'

import { DEFAULT_LOCALE, getSubcategoryNamespace, NAMESPACES, TLocale } from '@/shared/config/tolgee'
import { loadNamespaces } from '@/shared/lib/load-namespaces'
import { withTolgee } from '@/shared/lib/page-static-functions'

export const getStaticProps: GetStaticProps = async () => {
  const staticData = await loadNamespaces(DEFAULT_LOCALE as TLocale, [
    NAMESPACES.common,
    NAMESPACES.applications,
    getSubcategoryNamespace('textile', 'textile-processing'),
  ])

  return { props: { staticData, lang: DEFAULT_LOCALE } }
}

export default withTolgee(TextileProcessingPage)
