import { BottledWaterPage } from '@/@pages/applications/food-production/bottled-water'

import { getStaticPropsDefault, withTolgee } from '@/shared/lib'
import { Seo } from '@/shared/ui/seo'

function Page() {
  return (
    <>
      <Seo
        title="Озонирование при розливе бутилированной воды"
        description="Финишное озонирование питьевой воды — стандарт отрасли. Стерилизация воды, тары и оборудования. Соответствие СанПиН 2.1.4.1116-02 без применения хлора."
      />
      <BottledWaterPage />
    </>
  )
}

export const getStaticProps = getStaticPropsDefault
export default withTolgee(Page)
