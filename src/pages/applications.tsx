import { useTranslate } from '@tolgee/react'

import { ApplicationsPage } from '@/@pages'

import { NAMESPACES } from '@/shared/config/tolgee'
import { createGetStaticPropsDefault, withTolgee } from '@/shared/lib'
import { Seo } from '@/shared/ui/seo'

function Page() {
  const { t } = useTranslate()

  return (
    <>
      <Seo
        title={t('pageTitle', { ns: NAMESPACES.applications })}
        description={t('pageDescription', { ns: NAMESPACES.applications })}
        titleSuffix={false}
      />
      <ApplicationsPage />
    </>
  )
}

// Load both common and applications namespaces for this page
export const getStaticProps = createGetStaticPropsDefault([NAMESPACES.applications])
export default withTolgee(Page)
