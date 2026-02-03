import { GetStaticProps } from 'next'

import { OzoneSeedTreatmentResearchPage } from '@/@pages/articles/ozone-seed-treatment-research'

import { DEFAULT_LOCALE, getArticleNamespace, NAMESPACES, TLocale } from '@/shared/config/tolgee'
import { loadNamespaces, withTolgee } from '@/shared/lib'

export const getStaticProps: GetStaticProps = async () => {
  const articleNs = getArticleNamespace('ozone-seed-treatment-research')
  const staticData = await loadNamespaces(DEFAULT_LOCALE as TLocale, [
    NAMESPACES.common,
    NAMESPACES.articles,
    articleNs,
  ])
  return {
    props: { staticData, lang: DEFAULT_LOCALE },
  }
}

export default withTolgee(OzoneSeedTreatmentResearchPage)
