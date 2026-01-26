import Head from 'next/head'

import { AutoTransportPage } from '@/@pages/applications/transport/auto-transport'
import { getStaticPropsDefault, withTolgee } from '@/shared/lib'

function Page() {
  return (
    <>
      <Head>
        <title>Озонирование коммерческого автотранспорта — OzonTech</title>
        <meta
          name="description"
          content="Дезинфекция грузовых автомобилей, фургонов и рефрижераторов. Соответствие ХАССП для пищевых перевозок. Устранение запахов между рейсами."
        />
      </Head>
      <AutoTransportPage />
    </>
  )
}

export const getStaticProps = getStaticPropsDefault
export default withTolgee(Page)
