import Head from 'next/head'

import { MoldPreventionPage } from '@/@pages/applications/warehouses/mold-prevention'
import { getStaticPropsDefault, withTolgee } from '@/shared/lib'

function Page() {
  return (
    <>
      <Head>
        <title>Борьба с плесенью на складе — OzonTech</title>
        <meta
          name="description"
          content="Озонирование складов для уничтожения плесени и грибка. Защита товаров и здоровья персонала. Уничтожение до 99% плесени без химикатов."
        />
      </Head>
      <MoldPreventionPage />
    </>
  )
}

export const getStaticProps = getStaticPropsDefault
export default withTolgee(Page)
