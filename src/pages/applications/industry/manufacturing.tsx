import { ManufacturingPage } from '@/@pages/applications/industry/manufacturing'

import { getStaticPropsDefault, withTolgee } from '@/shared/lib'
import { Seo } from '@/shared/ui/seo'

function Page() {
  return (
    <>
      <Seo
        title="Обработка воздуха на производстве"
        description="Промышленное озонирование воздуха на производственных объектах. Дезинфекция, устранение запахов, соответствие нормам охраны труда."
      />
      <ManufacturingPage />
    </>
  )
}

export const getStaticProps = getStaticPropsDefault
export default withTolgee(Page)
