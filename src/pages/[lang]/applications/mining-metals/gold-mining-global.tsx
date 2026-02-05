import { GetStaticPaths, GetStaticProps } from 'next'

import { GoldMiningGlobalPage } from '@/@pages/applications/mining-metals/gold-mining-global'

import { getCategoryNamespace, LOCALES_LIST, NAMESPACES, TLocale } from '@/shared/config/tolgee'
import { loadNamespaces, withTolgee } from '@/shared/lib'

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = LOCALES_LIST.map((lang) => ({ params: { lang } }))
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const lang = (params?.lang as TLocale) || 'ru'
  const staticData = await loadNamespaces(lang, [
    NAMESPACES.common,
    NAMESPACES.applications,
    getCategoryNamespace('mining-metals'),
  ])
  return { props: { staticData, lang } }
}

export default withTolgee(GoldMiningGlobalPage)
