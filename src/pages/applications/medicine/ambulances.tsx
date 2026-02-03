import { AmbulancesPage } from '@/@pages/applications/medicine/ambulances'

import { getStaticPropsDefault, withTolgee } from '@/shared/lib'
import { Seo } from '@/shared/ui/seo'

function Page() {
  return (
    <>
      <Seo
        title="Дезинфекция машин скорой помощи озоном"
        description="Экспресс-дезинфекция салона скорой помощи за 20-30 минут. Мобильные озонаторы от 220В/230В. Полная обработка между вызовами."
      />
      <AmbulancesPage />
    </>
  )
}

export const getStaticProps = getStaticPropsDefault
export default withTolgee(Page)
