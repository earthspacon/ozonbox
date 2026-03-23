import { useTranslate } from '@tolgee/react'
import Head from 'next/head'

import { ProductsPage } from '@/@pages'

import { NAMESPACES } from '@/shared/config/tolgee'
import { createGetStaticPropsLang, getStaticPathsLang, withTolgee } from '@/shared/lib'

function Page() {
  const { t } = useTranslate('products')

  return (
    <>
      <Head>
        <title>{t('pageTitle')}</title>
        <meta name="description" content={t('pageDescription')} />
      </Head>
      <ProductsPage />
    </>
  )
}

export const getStaticPaths = getStaticPathsLang
export const getStaticProps = createGetStaticPropsLang([NAMESPACES.products])
export default withTolgee(Page)
