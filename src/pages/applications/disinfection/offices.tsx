import Head from 'next/head'

import { OfficesPage } from '@/@pages/applications/disinfection/offices'
import { getStaticPropsDefault, withTolgee } from '@/shared/lib'

function Page() {
  return (
    <>
      <Head>
        <title>Озонирование офисных помещений — OzonTech</title>
        <meta
          name="description"
          content="Дезинфекция офисов и коворкингов озоном. Здоровая рабочая среда без вирусов и запахов. Снижение заболеваемости персонала на 40%."
        />
      </Head>
      <OfficesPage />
    </>
  )
}

export const getStaticProps = getStaticPropsDefault
export default withTolgee(Page)
