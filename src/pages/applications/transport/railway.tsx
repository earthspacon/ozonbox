import { RailwayPage } from '@/@pages/applications/transport/railway'

import { getStaticPropsDefault, withTolgee } from '@/shared/lib'
import { Seo } from '@/shared/ui/seo'

function Page() {
  return (
    <>
      <Seo
        title="Озонирование железнодорожных вагонов"
        description="Дезинфекция пассажирских купе, плацкартов и санузлов в депо. Обработка грузовых вагонов. Устранение запахов и плесени в поездах."
      />
      <RailwayPage />
    </>
  )
}

export const getStaticProps = getStaticPropsDefault
export default withTolgee(Page)
