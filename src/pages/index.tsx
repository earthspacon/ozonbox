import { useTranslate } from '@tolgee/react'
import Head from 'next/head'

import { HomePage } from '@/@pages'

import { getStaticPropsDefault, withTolgee } from '@/shared/lib'

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

export const getStaticProps = getStaticPropsDefault
export default withTolgee(Page)
