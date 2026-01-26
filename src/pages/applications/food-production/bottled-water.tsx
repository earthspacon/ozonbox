import Head from 'next/head'

import { BottledWaterPage } from '@/@pages/applications/food-production/bottled-water'
import { getStaticPropsDefault, withTolgee } from '@/shared/lib'

function Page() {
  return (
    <>
      <Head>
        <title>Озонирование при розливе бутилированной воды — OzonTech</title>
        <meta
          name="description"
          content="Финишное озонирование питьевой воды — стандарт отрасли. Стерилизация воды, тары и оборудования. Соответствие СанПиН 2.1.4.1116-02 без применения хлора."
        />
      </Head>
      <BottledWaterPage />
    </>
  )
}

export const getStaticProps = getStaticPropsDefault
export default withTolgee(Page)
