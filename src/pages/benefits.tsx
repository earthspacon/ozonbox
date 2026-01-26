import { useTranslate } from '@tolgee/react'
import Head from 'next/head'

import { BenefitsPage } from '@/@pages'

import { getStaticPropsDefault, withTolgee } from '@/shared/lib'

function Page() {
  const { t } = useTranslate()

  return (
    <>
      <Head>
        <title>{t('benefitsPage.pageTitle')}</title>
        <meta name="description" content={t('benefitsPage.pageDescription')} />
      </Head>
      <BenefitsPage />
    </>
  )
}

export const getStaticProps = getStaticPropsDefault
export default withTolgee(Page)
