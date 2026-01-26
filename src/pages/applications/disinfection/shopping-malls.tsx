import Head from 'next/head'

import { ShoppingMallsPage } from '@/@pages/applications/disinfection/shopping-malls'
import { getStaticPropsDefault, withTolgee } from '@/shared/lib'

function Page() {
  return (
    <>
      <Head>
        <title>Озонирование торговых центров — OzonTech</title>
        <meta
          name="description"
          content="Дезинфекция торговых центров и магазинов. Чистый воздух для посетителей, устранение запахов фудкортов. Интеграция в систему вентиляции."
        />
      </Head>
      <ShoppingMallsPage />
    </>
  )
}

export const getStaticProps = getStaticPropsDefault
export default withTolgee(Page)
