import Head from 'next/head'

import { RailwayPage } from '@/@pages/applications/transport/railway'

import { getStaticPropsDefault, withTolgee } from '@/shared/lib'

function Page() {
  return (
    <>
      <Head>
        <title>Озонирование железнодорожных вагонов — OzonTech</title>
        <meta
          name="description"
          content="Дезинфекция пассажирских купе, плацкартов и санузлов в депо. Обработка грузовых вагонов. Устранение запахов и плесени в поездах."
        />
      </Head>
      <RailwayPage />
    </>
  )
}

export const getStaticProps = getStaticPropsDefault
export default withTolgee(Page)
