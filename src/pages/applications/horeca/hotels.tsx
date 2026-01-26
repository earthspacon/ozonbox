import Head from 'next/head'

import { HotelsPage } from '@/@pages/applications/horeca/hotels'
import { getStaticPropsDefault, withTolgee } from '@/shared/lib'

function Page() {
  return (
    <>
      <Head>
        <title>Озонирование гостиниц и отелей — OzonTech</title>
        <meta
          name="description"
          content="Озонирование для гостиниц: полное устранение запахов табака, дезинфекция номеров за 30-60 минут. Повышение рейтингов на Booking и TripAdvisor."
        />
      </Head>
      <HotelsPage />
    </>
  )
}

export const getStaticProps = getStaticPropsDefault
export default withTolgee(Page)
