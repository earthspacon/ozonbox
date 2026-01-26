import { useTranslate } from '@tolgee/react'
import Head from 'next/head'

import { HomePage } from '@/@pages'

import { getStaticPathsLang, getStaticPropsLang, withTolgee } from '@/shared/lib'

function Page() {
  const { t } = useTranslate()

  return (
    <>
      <Head>
        <title>{t('meta.title')}</title>
        <meta name="description" content={t('meta.description')} />
      </Head>
      <HomePage />
    </>
  )
}

export const getStaticPaths = getStaticPathsLang
export const getStaticProps = getStaticPropsLang
export default withTolgee(Page)
