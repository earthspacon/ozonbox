import Head from 'next/head'

import { MeatSausagesPage } from '@/@pages/applications/food-production/meat-sausages'

import { getStaticPropsDefault, withTolgee } from '@/shared/lib'

function Page() {
  return (
    <>
      <Head>
        <title>Озонирование в мясном производстве — OzonTech</title>
        <meta
          name="description"
          content="Озонирование камер созревания колбас и хранения мяса. Увеличение срока хранения в 2-5 раз, подавление плесени на 96-99%. Сохранение вкуса и качества."
        />
      </Head>
      <MeatSausagesPage />
    </>
  )
}

export const getStaticProps = getStaticPropsDefault
export default withTolgee(Page)
