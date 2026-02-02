import { OdorRemovalPage } from '@/@pages/applications/cleaning/odor-removal'

import { getStaticPropsDefault, withTolgee } from '@/shared/lib'
import { Seo } from '@/shared/ui/seo'

function Page() {
  return (
    <>
      <Seo
        title="Устранение въевшихся запахов озоном"
        description="Профессиональное озонирование для удаления стойких запахов. Полное разрушение молекул запаха, не маскировка. Результат за 4-10 часов без химических остатков."
      />
      <OdorRemovalPage />
    </>
  )
}

export const getStaticProps = getStaticPropsDefault
export default withTolgee(Page)
