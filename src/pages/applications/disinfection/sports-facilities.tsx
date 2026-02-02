import { SportsFacilitiesPage } from '@/@pages/applications/disinfection/sports-facilities'

import { getStaticPropsDefault, withTolgee } from '@/shared/lib'
import { Seo } from '@/shared/ui/seo'

function Page() {
  return (
    <>
      <Seo
        title="Озонирование спортивных объектов"
        description="Дезинфекция фитнес-центров, спортзалов и раздевалок. Устранение запаха пота, профилактика грибковых инфекций. Чистый воздух для тренировок."
      />
      <SportsFacilitiesPage />
    </>
  )
}

export const getStaticProps = getStaticPropsDefault
export default withTolgee(Page)
