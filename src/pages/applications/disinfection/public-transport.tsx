import Head from 'next/head'

import { PublicTransportPage } from '@/@pages/applications/disinfection/public-transport'
import { getStaticPropsDefault, withTolgee } from '@/shared/lib'

function Page() {
  return (
    <>
      <Head>
        <title>Дезинфекция общественного транспорта — OzonTech</title>
        <meta
          name="description"
          content="Озонирование автобусов, трамваев и троллейбусов. Быстрая обработка за 20-40 минут. Защита пассажиров от вирусных инфекций без химических остатков."
        />
      </Head>
      <PublicTransportPage />
    </>
  )
}

export const getStaticProps = getStaticPropsDefault
export default withTolgee(Page)
