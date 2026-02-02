import { PublicTransportPage } from '@/@pages/applications/disinfection/public-transport'

import { getStaticPropsDefault, withTolgee } from '@/shared/lib'
import { Seo } from '@/shared/ui/seo'

function Page() {
  return (
    <>
      <Seo
        title="Дезинфекция общественного транспорта"
        description="Озонирование автобусов, трамваев и троллейбусов. Быстрая обработка за 20-40 минут. Защита пассажиров от вирусных инфекций без химических остатков."
      />
      <PublicTransportPage />
    </>
  )
}

export const getStaticProps = getStaticPropsDefault
export default withTolgee(Page)
