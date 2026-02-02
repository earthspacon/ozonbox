import { DrinkingWaterPage } from '@/@pages/applications/water-treatment/drinking-water'

import { getStaticPropsDefault, withTolgee } from '@/shared/lib'
import { Seo } from '@/shared/ui/seo'

function Page() {
  return (
    <>
      <Seo
        title="Озонирование питьевой воды"
        description="Озонирование питьевой воды: обеззараживание на 99,99% без канцерогенных побочных продуктов. Стандарт качества в Европе. Соответствие СанПиН."
      />
      <DrinkingWaterPage />
    </>
  )
}

export const getStaticProps = getStaticPropsDefault
export default withTolgee(Page)
