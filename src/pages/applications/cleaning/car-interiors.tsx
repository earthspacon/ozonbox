import Head from 'next/head'

import { CarInteriorsPage } from '@/@pages/applications/cleaning/car-interiors'
import { getStaticPropsDefault, withTolgee } from '@/shared/lib'

function Page() {
  return (
    <>
      <Head>
        <title>Озонирование салона автомобиля — OzonTech</title>
        <meta
          name="description"
          content="Глубокая дезинфекция и дезодорация салона автомобиля за 30-60 минут. Обработка сидений, ковриков и системы кондиционирования. Для автомоек и детейлинга."
        />
      </Head>
      <CarInteriorsPage />
    </>
  )
}

export const getStaticProps = getStaticPropsDefault
export default withTolgee(Page)
