import Head from 'next/head'

import { ManufacturingPage } from '@/@pages/applications/industry/manufacturing'
import { getStaticPropsDefault, withTolgee } from '@/shared/lib'

function Page() {
  return (
    <>
      <Head>
        <title>Обработка воздуха на производстве — OzonTech</title>
        <meta
          name="description"
          content="Промышленное озонирование воздуха на производственных объектах. Дезинфекция, устранение запахов, соответствие нормам охраны труда."
        />
      </Head>
      <ManufacturingPage />
    </>
  )
}

export const getStaticProps = getStaticPropsDefault
export default withTolgee(Page)
