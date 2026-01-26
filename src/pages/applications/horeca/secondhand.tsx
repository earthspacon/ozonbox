import Head from 'next/head'

import { SecondhandPage } from '@/@pages/applications/horeca/secondhand'
import { getStaticPropsDefault, withTolgee } from '@/shared/lib'

function Page() {
  return (
    <>
      <Head>
        <title>Озонирование магазинов секонд-хенд — OzonTech</title>
        <meta
          name="description"
          content="Озонирование для секонд-хенд: устранение специфического запаха одежды. Комфорт покупателей и рост продаж. Обработка без выгрузки товара."
        />
      </Head>
      <SecondhandPage />
    </>
  )
}

export const getStaticProps = getStaticPropsDefault
export default withTolgee(Page)
