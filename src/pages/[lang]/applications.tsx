import { useTranslate } from '@tolgee/react'
import Head from 'next/head'

import { ApplicationsPage } from '@/@pages'

import { getStaticPathsLang, getStaticPropsLang, withTolgee } from '@/shared/lib'

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

export const getStaticPaths = getStaticPathsLang
export const getStaticProps = getStaticPropsLang
export default withTolgee(Page)
