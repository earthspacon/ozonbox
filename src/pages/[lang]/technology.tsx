import { useTranslate } from '@tolgee/react'
import Head from 'next/head'

import { TechnologyPage } from '@/@pages'

import { getStaticPathsLang, getStaticPropsLang, withTolgee } from '@/shared/lib'

function Page() {
  const { t } = useTranslate()

  return (
    <>
      <Head>
        <title>{t('technology.pageTitle')}</title>
        <meta name="description" content={t('technology.pageDescription')} />
      </Head>
      <TechnologyPage />
    </>
  )
}

export const getStaticPaths = getStaticPathsLang
export const getStaticProps = getStaticPropsLang
export default withTolgee(Page)
