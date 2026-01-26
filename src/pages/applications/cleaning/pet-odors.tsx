import Head from 'next/head'

import { PetOdorsPage } from '@/@pages/applications/cleaning/pet-odors'
import { getStaticPropsDefault, withTolgee } from '@/shared/lib'

function Page() {
  return (
    <>
      <Head>
        <title>Удаление запаха домашних животных — OzonTech</title>
        <meta
          name="description"
          content="Полное устранение запаха кошачьей и собачьей мочи озонированием. Разрушение кристаллов мочевой кислоты на молекулярном уровне. Запах не вернётся."
        />
      </Head>
      <PetOdorsPage />
    </>
  )
}

export const getStaticProps = getStaticPropsDefault
export default withTolgee(Page)
