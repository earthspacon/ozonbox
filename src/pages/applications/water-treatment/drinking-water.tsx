import Head from 'next/head'

import { DrinkingWaterPage } from '@/@pages/applications/water-treatment/drinking-water'
import { getStaticPropsDefault, withTolgee } from '@/shared/lib'

function Page() {
  return (
    <>
      <Head>
        <title>Озонирование питьевой воды — OzonTech</title>
        <meta
          name="description"
          content="Озонирование питьевой воды: обеззараживание на 99,99% без канцерогенных побочных продуктов. Стандарт качества в Европе. Соответствие СанПиН."
        />
      </Head>
      <DrinkingWaterPage />
    </>
  )
}

export const getStaticProps = getStaticPropsDefault
export default withTolgee(Page)
