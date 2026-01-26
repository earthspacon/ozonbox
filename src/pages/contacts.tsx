import { useTranslate } from '@tolgee/react'
import Head from 'next/head'

import { ContactsPage } from '@/@pages'

import { getStaticPropsDefault, withTolgee } from '@/shared/lib'

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

export const getStaticProps = getStaticPropsDefault
export default withTolgee(Page)
