import Head from 'next/head'

import { PublicBusesPage } from '@/@pages/applications/transport/public-buses'

import { getStaticPropsDefault, withTolgee } from '@/shared/lib'

function Page() {
  return (
    <>
      <Head>
        <title>Озонирование городских автобусов — OzonTech</title>
        <meta
          name="description"
          content="Экспресс-дезинфекция пассажирских автобусов между рейсами. Работа от бортовой сети 12/24В. Устранение запахов и вирусов за 20-40 минут."
        />
      </Head>
      <PublicBusesPage />
    </>
  )
}

export const getStaticProps = getStaticPropsDefault
export default withTolgee(Page)
