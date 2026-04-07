import { GetStaticProps } from 'next'

import { MeatSausagesPage } from '@/@pages/applications/food-production/meat-sausages'

import { DEFAULT_LOCALE, getSubcategoryNamespace, NAMESPACES, TLocale } from '@/shared/config/tolgee'
import { loadNamespaces } from '@/shared/lib/load-namespaces'
import { withTolgee } from '@/shared/lib/page-static-functions'

export const getStaticProps: GetStaticProps = async () => {
  const staticData = await loadNamespaces(DEFAULT_LOCALE as TLocale, [
    NAMESPACES.common,
    NAMESPACES.applications,
    getSubcategoryNamespace('food-production', 'meat-sausages'),
  ])
  return { props: { staticData, lang: DEFAULT_LOCALE } }
}

export default withTolgee(MeatSausagesPage)
