import Head from 'next/head'

import { DairyPage } from '@/@pages/applications/food-production/dairy'

import { getStaticPropsDefault, withTolgee } from '@/shared/lib'

function Page() {
  return (
    <>
      <Head>
        <title>Озонирование в молочном производстве — OzonTech</title>
        <meta
          name="description"
          content="Дезинфекция молочного оборудования, танков и молокопроводов озоном. Увеличение срока хранения кисломолочной продукции на 30-50%. Соответствие HACCP."
        />
      </Head>
      <DairyPage />
    </>
  )
}

export const getStaticProps = getStaticPropsDefault
export default withTolgee(Page)
