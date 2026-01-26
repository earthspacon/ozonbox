import Head from 'next/head'

import { DentalPage } from '@/@pages/applications/medicine/dental'
import { getStaticPropsDefault, withTolgee } from '@/shared/lib'

function Page() {
  return (
    <>
      <Head>
        <title>Озонирование в стоматологии — OzonTech</title>
        <meta
          name="description"
          content="Озонирование для стоматологических клиник: дезинфекция кабинетов за 15 минут, озонотерапия, обработка каналов. Профилактика инфекций."
        />
      </Head>
      <DentalPage />
    </>
  )
}

export const getStaticProps = getStaticPropsDefault
export default withTolgee(Page)
