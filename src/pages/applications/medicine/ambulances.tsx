import Head from 'next/head'

import { AmbulancesPage } from '@/@pages/applications/medicine/ambulances'

import { getStaticPropsDefault, withTolgee } from '@/shared/lib'

function Page() {
  return (
    <>
      <Head>
        <title>Дезинфекция машин скорой помощи озоном — OzonTech</title>
        <meta
          name="description"
          content="Экспресс-дезинфекция салона скорой помощи за 20-30 минут. Мобильные озонаторы от 12В/24В. Полная обработка между вызовами."
        />
      </Head>
      <AmbulancesPage />
    </>
  )
}

export const getStaticProps = getStaticPropsDefault
export default withTolgee(Page)
