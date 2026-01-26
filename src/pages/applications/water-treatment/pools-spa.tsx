import Head from 'next/head'

import { PoolsSpaPage } from '@/@pages/applications/water-treatment/pools-spa'
import { getStaticPropsDefault, withTolgee } from '@/shared/lib'

function Page() {
  return (
    <>
      <Head>
        <title>Озонирование бассейнов и SPA — OzonTech</title>
        <meta
          name="description"
          content="Озонирование воды в бассейнах: кристально чистая вода без хлорки, не раздражает глаза и кожу. Снижение расхода химии в 7 раз. Соответствие СанПиН."
        />
      </Head>
      <PoolsSpaPage />
    </>
  )
}

export const getStaticProps = getStaticPropsDefault
export default withTolgee(Page)
