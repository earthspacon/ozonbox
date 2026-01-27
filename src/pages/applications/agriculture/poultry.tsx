import Head from 'next/head'

import { PoultryPage } from '@/@pages/applications/agriculture/poultry'

import { getStaticPropsDefault, withTolgee } from '@/shared/lib'

function Page() {
  return (
    <>
      <Head>
        <title>Озонирование в птицеводстве — OzonTech</title>
        <meta
          name="description"
          content="Озонирование для птицефабрик: инкубация яиц, дезинфекция помещений, обработка кормов и воды. Повышение вывода молодняка на 2%, продление хранения мяса в 4 раза."
        />
      </Head>
      <PoultryPage />
    </>
  )
}

export const getStaticProps = getStaticPropsDefault
export default withTolgee(Page)
