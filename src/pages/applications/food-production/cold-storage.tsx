import Head from 'next/head'

import { ColdStoragePage } from '@/@pages/applications/food-production/cold-storage'
import { getStaticPropsDefault, withTolgee } from '@/shared/lib'

function Page() {
  return (
    <>
      <Head>
        <title>Озонирование холодильных камер — OzonTech</title>
        <meta
          name="description"
          content="Дезинфекция и дезодорация холодильных складов озоном. Обработка загруженных камер без отепления. Сокращение простоя в 5 раз. Устранение затхлых запахов."
        />
      </Head>
      <ColdStoragePage />
    </>
  )
}

export const getStaticProps = getStaticPropsDefault
export default withTolgee(Page)
