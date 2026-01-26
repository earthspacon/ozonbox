import { useTranslate } from '@tolgee/react'
import Head from 'next/head'

import { ApplicationsPage } from '@/@pages'

import { getStaticPropsDefault, withTolgee } from '@/shared/lib'

function Page() {
  const { t } = useTranslate()

  return (
    <>
      <Head>
        <title>{t('applicationsPage.pageTitle')}</title>
        <meta name="description" content={t('applicationsPage.pageDescription')} />
      </Head>
      <ApplicationsPage />
    </>
  )
}

export const getStaticProps = getStaticPropsDefault
export default withTolgee(Page)
