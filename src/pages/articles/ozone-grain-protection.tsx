import { GetStaticProps } from 'next'

import { OzoneGrainProtectionPage } from '@/@pages/articles/ozone-grain-protection'

import { DEFAULT_LOCALE, getArticleNamespace, NAMESPACES, TLocale } from '@/shared/config/tolgee'
import { loadNamespaces, withTolgee } from '@/shared/lib'

export const getStaticProps: GetStaticProps = async () => {
  const articleNs = getArticleNamespace('ozone-grain-protection')
  const staticData = await loadNamespaces(DEFAULT_LOCALE as TLocale, [
    NAMESPACES.common,
    NAMESPACES.articles,
    articleNs,
  ])
  return {
    props: { staticData, lang: DEFAULT_LOCALE },
  }
}

export default withTolgee(OzoneGrainProtectionPage)
