import Head from 'next/head'

import { RestaurantsPage } from '@/@pages/applications/horeca/restaurants'
import { getStaticPropsDefault, withTolgee } from '@/shared/lib'

function Page() {
  return (
    <>
      <Head>
        <title>Озонирование ресторанов и кафе — OzonTech</title>
        <meta
          name="description"
          content="Озонирование для ресторанов: устранение запахов кухни, табака и кальяна. Свежий воздух повышает комфорт гостей и стимулирует аппетит."
        />
      </Head>
      <RestaurantsPage />
    </>
  )
}

export const getStaticProps = getStaticPropsDefault
export default withTolgee(Page)
