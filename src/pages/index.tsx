import { useTranslate } from '@tolgee/react'

import { HomePage } from '@/@pages'

import { getStaticPropsDefault, withTolgee } from '@/shared/lib/page-static-functions'
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

export const getStaticProps = getStaticPropsDefault
export default withTolgee(Page)
