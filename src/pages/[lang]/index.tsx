import { useTranslate } from '@tolgee/react'

import { HomePage } from '@/@pages'

import { getStaticPathsLang, getStaticPropsLang, withTolgee } from '@/shared/lib/page-static-functions'
import { buildOrganizationJsonLd, JsonLd, Seo } from '@/shared/ui/seo'

function Page() {
  const { t } = useTranslate()

  return (
    <>
      <Seo title={t('meta.title')} description={t('meta.description')} titleSuffix={false} />
      <JsonLd id="organization" data={buildOrganizationJsonLd()} />
      <HomePage />
    </>
  )
}

export const getStaticPaths = getStaticPathsLang
export const getStaticProps = getStaticPropsLang
export default withTolgee(Page)
