import { useTranslate } from '@tolgee/react'
import Head from 'next/head'

import { ApplicationsPage } from '@/@pages'

import { NAMESPACES } from '@/shared/config/tolgee'
import { createGetStaticPropsDefault, withTolgee } from '@/shared/lib'

function Page() {
  const { t } = useTranslate()

  return (
    <>
      <Head>
        <title>{t('pageTitle', { ns: NAMESPACES.applications })}</title>
        <meta name="description" content={t('pageDescription', { ns: NAMESPACES.applications })} />
      </Head>
      <ApplicationsPage />
    </>
  )
}

// Load both common and applications namespaces for this page
export const getStaticProps = createGetStaticPropsDefault([NAMESPACES.applications])
export default withTolgee(Page)
