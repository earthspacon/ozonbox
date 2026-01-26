import Head from 'next/head'

import { GreenhousesPage } from '@/@pages/applications/agriculture/greenhouses'
import { getStaticPropsDefault, withTolgee } from '@/shared/lib'

function Page() {
  return (
    <>
      <Head>
        <title>Озонирование в теплицах и растениеводстве — OzonTech</title>
        <meta
          name="description"
          content="Озонирование для теплиц: повышение урожайности на 13-35%, уничтожение нематоды на 90-98%. Полив озонированной водой и обеззараживание грунтов."
        />
      </Head>
      <GreenhousesPage />
    </>
  )
}

export const getStaticProps = getStaticPropsDefault
export default withTolgee(Page)
