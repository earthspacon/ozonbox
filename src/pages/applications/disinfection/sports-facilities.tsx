import Head from 'next/head'

import { SportsFacilitiesPage } from '@/@pages/applications/disinfection/sports-facilities'

import { getStaticPropsDefault, withTolgee } from '@/shared/lib'

function Page() {
  return (
    <>
      <Head>
        <title>Озонирование спортивных объектов — OzonTech</title>
        <meta
          name="description"
          content="Дезинфекция фитнес-центров, спортзалов и раздевалок. Устранение запаха пота, профилактика грибковых инфекций. Чистый воздух для тренировок."
        />
      </Head>
      <SportsFacilitiesPage />
    </>
  )
}

export const getStaticProps = getStaticPropsDefault
export default withTolgee(Page)
