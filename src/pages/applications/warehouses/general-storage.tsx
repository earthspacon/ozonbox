import Head from 'next/head'

import { GeneralStoragePage } from '@/@pages/applications/warehouses/general-storage'

import { getStaticPropsDefault, withTolgee } from '@/shared/lib'

function Page() {
  return (
    <>
      <Head>
        <title>Озонирование складов — OzonTech</title>
        <meta
          name="description"
          content="Комплексное озонирование для складской логистики: защита товаров, продление сроков хранения, борьба с вредителями, улучшение условий труда персонала."
        />
      </Head>
      <GeneralStoragePage />
    </>
  )
}

export const getStaticProps = getStaticPropsDefault
export default withTolgee(Page)
