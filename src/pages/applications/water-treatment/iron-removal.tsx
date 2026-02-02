import { IronRemovalPage } from '@/@pages/applications/water-treatment/iron-removal'

import { getStaticPropsDefault, withTolgee } from '@/shared/lib'
import { Seo } from '@/shared/ui/seo'

function Page() {
  return (
    <>
      <Seo
        title="Обезжелезивание и деманганация воды озоном"
        description="Удаление железа и марганца из воды озонированием: эффективно при органических комплексах металлов. Работает при любом pH. Соответствие СанПиН."
      />
      <IronRemovalPage />
    </>
  )
}

export const getStaticProps = getStaticPropsDefault
export default withTolgee(Page)
