import { PoultryPage } from '@/@pages/applications/agriculture/poultry'

import { getStaticPropsDefault, withTolgee } from '@/shared/lib'
import { Seo } from '@/shared/ui/seo'

function Page() {
  return (
    <>
      <Seo
        title="Озонирование в птицеводстве"
        description="Озонирование для птицефабрик: инкубация яиц, дезинфекция помещений, обработка кормов и воды. Повышение вывода молодняка на 2%, продление хранения мяса в 4 раза."
      />
      <PoultryPage />
    </>
  )
}

export const getStaticProps = getStaticPropsDefault
export default withTolgee(Page)
