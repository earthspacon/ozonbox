import { RestaurantsPage } from '@/@pages/applications/horeca/restaurants'

import { getStaticPropsDefault, withTolgee } from '@/shared/lib'
import { Seo } from '@/shared/ui/seo'

function Page() {
  return (
    <>
      <Seo
        title="Озонирование ресторанов и кафе"
        description="Озонирование для ресторанов: устранение запахов кухни, табака и кальяна. Свежий воздух повышает комфорт гостей и стимулирует аппетит."
      />
      <RestaurantsPage />
    </>
  )
}

export const getStaticProps = getStaticPropsDefault
export default withTolgee(Page)
