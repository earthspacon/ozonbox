import Head from 'next/head'

import { LaundriesPage } from '@/@pages/applications/horeca/laundries'

import { getStaticPropsDefault, withTolgee } from '@/shared/lib'

function Page() {
  return (
    <>
      <Head>
        <title>Озонирование для прачечных — OzonTech</title>
        <meta
          name="description"
          content="Озонирование для прачечных: стирка в холодной воде с полной дезинфекцией. Снижение затрат на энергию и химию до 70%. Продление срока службы белья на 30%."
        />
      </Head>
      <LaundriesPage />
    </>
  )
}

export const getStaticProps = getStaticPropsDefault
export default withTolgee(Page)
