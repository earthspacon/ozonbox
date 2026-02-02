import { GreenhousesPage } from '@/@pages/applications/agriculture/greenhouses'

import { getStaticPropsDefault, withTolgee } from '@/shared/lib'
import { Seo } from '@/shared/ui/seo'

function Page() {
  return (
    <>
      <Seo
        title="Озонирование в теплицах и растениеводстве"
        description="Озонирование для теплиц: повышение урожайности на 13-35%, уничтожение нематоды на 90-98%. Полив озонированной водой и обеззараживание грунтов."
      />
      <GreenhousesPage />
    </>
  )
}

export const getStaticProps = getStaticPropsDefault
export default withTolgee(Page)
