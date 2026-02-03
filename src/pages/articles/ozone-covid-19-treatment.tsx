import { GetStaticProps } from 'next'

import { OzoneCovid19TreatmentPage } from '@/@pages/articles/ozone-covid-19-treatment'

import { DEFAULT_LOCALE, getArticleNamespace, NAMESPACES, TLocale } from '@/shared/config/tolgee'
import { loadNamespaces, withTolgee } from '@/shared/lib'

export const getStaticProps: GetStaticProps = async () => {
  const articleNs = getArticleNamespace('ozone-covid-19-treatment')
  const staticData = await loadNamespaces(DEFAULT_LOCALE as TLocale, [
    NAMESPACES.common,
    NAMESPACES.articles,
    articleNs,
  ])
  return {
    props: { staticData, lang: DEFAULT_LOCALE },
  }
}

export default withTolgee(OzoneCovid19TreatmentPage)
