import { GetStaticPaths, GetStaticProps } from 'next'

import { OzoneCovid19TreatmentPage } from '@/@pages/articles/ozone-covid-19-treatment'

import { getArticleNamespace, LOCALES_LIST, NAMESPACES, TLocale } from '@/shared/config/tolgee'
import { loadNamespaces, withTolgee } from '@/shared/lib'

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = LOCALES_LIST.map((lang) => ({ params: { lang } }))
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const lang = (params?.lang as TLocale) || 'ru'
  const articleNs = getArticleNamespace('ozone-covid-19-treatment')
  const staticData = await loadNamespaces(lang, [NAMESPACES.common, NAMESPACES.articles, articleNs])
  return {
    props: { staticData, lang },
  }
}

export default withTolgee(OzoneCovid19TreatmentPage)
