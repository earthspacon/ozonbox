import Head from 'next/head'

import { IronRemovalPage } from '@/@pages/applications/water-treatment/iron-removal'
import { getStaticPropsDefault, withTolgee } from '@/shared/lib'

function Page() {
  return (
    <>
      <Head>
        <title>Обезжелезивание и деманганация воды озоном — OzonTech</title>
        <meta
          name="description"
          content="Удаление железа и марганца из воды озонированием: эффективно при органических комплексах металлов. Работает при любом pH. Соответствие СанПиН."
        />
      </Head>
      <IronRemovalPage />
    </>
  )
}

export const getStaticProps = getStaticPropsDefault
export default withTolgee(Page)
