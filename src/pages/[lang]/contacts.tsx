import { useTranslate } from '@tolgee/react'
import Head from 'next/head'

import { ContactsPage } from '@/@pages'

import { getStaticPathsLang, getStaticPropsLang, withTolgee } from '@/shared/lib'

function Page() {
  const { t } = useTranslate()

  return (
    <>
      <Head>
        <title>{t('contactsPage.pageTitle')}</title>
        <meta name="description" content={t('contactsPage.pageDescription')} />
      </Head>
      <ContactsPage />
    </>
  )
}

export const getStaticPaths = getStaticPathsLang
export const getStaticProps = getStaticPropsLang
export default withTolgee(Page)
