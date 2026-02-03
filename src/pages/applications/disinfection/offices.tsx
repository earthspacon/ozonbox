import { GetStaticProps } from 'next'

import { OfficesPage } from '@/@pages/applications/disinfection/offices'

import { DEFAULT_LOCALE, getCategoryNamespace, NAMESPACES, TLocale } from '@/shared/config/tolgee'
import { loadNamespaces, withTolgee } from '@/shared/lib'

export const getStaticProps: GetStaticProps = async () => {
  const staticData = await loadNamespaces(DEFAULT_LOCALE as TLocale, [
    NAMESPACES.common,
    NAMESPACES.applications,
    getCategoryNamespace('disinfection'),
  ])
  return { props: { staticData, lang: DEFAULT_LOCALE } }
}

export default withTolgee(OfficesPage)
