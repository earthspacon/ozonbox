import Head from 'next/head'

import { WastewaterPage } from '@/@pages/applications/water-treatment/wastewater'
import { getStaticPropsDefault, withTolgee } from '@/shared/lib'

function Page() {
  return (
    <>
      <Head>
        <title>Озонирование сточных вод — OzonTech</title>
        <meta
          name="description"
          content="Озонирование сточных вод: глубокая очистка от органики, обеззараживание, удаление цветности и запахов. Без токсичных побочных продуктов. Соответствие нормам сброса."
        />
      </Head>
      <WastewaterPage />
    </>
  )
}

export const getStaticProps = getStaticPropsDefault
export default withTolgee(Page)
