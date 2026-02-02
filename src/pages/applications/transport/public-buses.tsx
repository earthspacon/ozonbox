import { PublicBusesPage } from '@/@pages/applications/transport/public-buses'

import { getStaticPropsDefault, withTolgee } from '@/shared/lib'
import { Seo } from '@/shared/ui/seo'

function Page() {
  return (
    <>
      <Seo
        title="Озонирование городских автобусов"
        description="Экспресс-дезинфекция пассажирских автобусов между рейсами. Работа от бортовой сети 12/24В. Устранение запахов и вирусов за 20-40 минут."
      />
      <PublicBusesPage />
    </>
  )
}

export const getStaticProps = getStaticPropsDefault
export default withTolgee(Page)
