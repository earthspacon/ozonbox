import { PoolsSpaPage } from '@/@pages/applications/water-treatment/pools-spa'

import { getStaticPropsDefault, withTolgee } from '@/shared/lib'
import { Seo } from '@/shared/ui/seo'

function Page() {
  return (
    <>
      <Seo
        title="Озонирование бассейнов и SPA"
        description="Озонирование воды в бассейнах: кристально чистая вода без хлорки, не раздражает глаза и кожу. Снижение расхода химии в 7 раз. Соответствие СанПиН."
      />
      <PoolsSpaPage />
    </>
  )
}

export const getStaticProps = getStaticPropsDefault
export default withTolgee(Page)
