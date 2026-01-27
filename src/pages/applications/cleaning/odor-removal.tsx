import Head from 'next/head'

import { OdorRemovalPage } from '@/@pages/applications/cleaning/odor-removal'

import { getStaticPropsDefault, withTolgee } from '@/shared/lib'

function Page() {
  return (
    <>
      <Head>
        <title>Устранение въевшихся запахов озоном — OzonTech</title>
        <meta
          name="description"
          content="Профессиональное озонирование для удаления стойких запахов. Полное разрушение молекул запаха, не маскировка. Результат за 4-10 часов без химических остатков."
        />
      </Head>
      <OdorRemovalPage />
    </>
  )
}

export const getStaticProps = getStaticPropsDefault
export default withTolgee(Page)
