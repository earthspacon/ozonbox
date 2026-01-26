import Head from 'next/head'

import { OilRemovalPage } from '@/@pages/applications/industry/oil-removal'
import { getStaticPropsDefault, withTolgee } from '@/shared/lib'

function Page() {
  return (
    <>
      <Head>
        <title>Очистка нефтесодержащих сточных вод озонированием — OzonTech</title>
        <meta
          name="description"
          content="Промышленное озонирование для очистки нефтесодержащих стоков. Эффективность 95-99%, достижение ПДК 0,05 мг/л без вторичных загрязнений."
        />
      </Head>
      <OilRemovalPage />
    </>
  )
}

export const getStaticProps = getStaticPropsDefault
export default withTolgee(Page)
