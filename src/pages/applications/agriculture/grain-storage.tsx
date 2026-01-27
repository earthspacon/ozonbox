import Head from 'next/head'

import { GrainStoragePage } from '@/@pages/applications/agriculture/grain-storage'

import { getStaticPropsDefault, withTolgee } from '@/shared/lib'

function Page() {
  return (
    <>
      <Head>
        <title>Озонирование при хранении зерна — OzonTech</title>
        <meta
          name="description"
          content="Озонирование зерна: уничтожение вредителей на 95-99%, снижение потерь на 40-60%. Экологичная альтернатива химической фумигации зернохранилищ."
        />
      </Head>
      <GrainStoragePage />
    </>
  )
}

export const getStaticProps = getStaticPropsDefault
export default withTolgee(Page)
