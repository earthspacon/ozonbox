import { GetStaticProps } from 'next'

import { OzoneFoodWarehouseMeatPage } from '@/@pages/articles/ozone-food-warehouse-meat'

import { DEFAULT_LOCALE, getArticleNamespace, NAMESPACES, TLocale } from '@/shared/config/tolgee'
import { loadNamespaces, withTolgee } from '@/shared/lib'

export const getStaticProps: GetStaticProps = async () => {
  const articleNs = getArticleNamespace('ozone-food-warehouse-meat')
  const staticData = await loadNamespaces(DEFAULT_LOCALE as TLocale, [
    NAMESPACES.common,
    NAMESPACES.articles,
    articleNs,
  ])
  return {
    props: { staticData, lang: DEFAULT_LOCALE },
  }
}

export default withTolgee(OzoneFoodWarehouseMeatPage)
