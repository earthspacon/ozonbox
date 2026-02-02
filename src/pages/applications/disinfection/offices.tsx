import { OfficesPage } from '@/@pages/applications/disinfection/offices'

import { getStaticPropsDefault, withTolgee } from '@/shared/lib'
import { Seo } from '@/shared/ui/seo'

function Page() {
  return (
    <>
      <Seo
        title="Озонирование офисных помещений"
        description="Дезинфекция офисов и коворкингов озоном. Здоровая рабочая среда без вирусов и запахов. Снижение заболеваемости персонала на 40%."
      />
      <OfficesPage />
    </>
  )
}

export const getStaticProps = getStaticPropsDefault
export default withTolgee(Page)
