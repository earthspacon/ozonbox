import { useTranslate } from '@tolgee/react'
import Head from 'next/head'

import { AboutPage } from '@/@pages'

import { getStaticPathsLang, getStaticPropsLang, withTolgee } from '@/shared/lib'

function Page() {
  const { t } = useTranslate()

  return (
    <>
      <Head>
        <title>{t('aboutPage.pageTitle')}</title>
        <meta name="description" content={t('aboutPage.pageDescription')} />
      </Head>
      <AboutPage />
    </>
  )
}

export const getStaticPaths = getStaticPathsLang
export const getStaticProps = getStaticPropsLang
export default withTolgee(Page)
