import Head from 'next/head'

import { LivestockPage } from '@/@pages/applications/agriculture/livestock'
import { getStaticPropsDefault, withTolgee } from '@/shared/lib'

function Page() {
  return (
    <>
      <Head>
        <title>Озонирование в животноводстве — OzonTech</title>
        <meta
          name="description"
          content="Озонирование для животноводческих хозяйств: дезинфекция помещений, обработка воды и кормов. Снижение заболеваемости на 50%, рост продуктивности на 15%."
        />
      </Head>
      <LivestockPage />
    </>
  )
}

export const getStaticProps = getStaticPropsDefault
export default withTolgee(Page)
