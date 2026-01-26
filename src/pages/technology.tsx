import { useTranslate } from '@tolgee/react'
import Head from 'next/head'

import { TechnologyPage } from '@/@pages'

import { getStaticPropsDefault, withTolgee } from '@/shared/lib'

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

export const getStaticProps = getStaticPropsDefault
export default withTolgee(Page)
