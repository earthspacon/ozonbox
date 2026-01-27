import Head from 'next/head'

import { VegetableStoragePage } from '@/@pages/applications/agriculture/vegetable-storage'

import { getStaticPropsDefault, withTolgee } from '@/shared/lib'

function Page() {
  return (
    <>
      <Head>
        <title>Озонирование овощехранилищ — OzonTech</title>
        <meta
          name="description"
          content="Озонирование для овощехранилищ: продление сроков хранения в 2 раза, уничтожение плесени, снижение потерь на 50%. Без химических консервантов."
        />
      </Head>
      <VegetableStoragePage />
    </>
  )
}

export const getStaticProps = getStaticPropsDefault
export default withTolgee(Page)
