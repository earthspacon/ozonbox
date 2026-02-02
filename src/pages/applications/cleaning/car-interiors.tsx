import { CarInteriorsPage } from '@/@pages/applications/cleaning/car-interiors'

import { getStaticPropsDefault, withTolgee } from '@/shared/lib'
import { Seo } from '@/shared/ui/seo'

function Page() {
  return (
    <>
      <Seo
        title="Озонирование салона автомобиля"
        description="Глубокая дезинфекция и дезодорация салона автомобиля за 30-60 минут. Обработка сидений, ковриков и системы кондиционирования. Для автомоек и детейлинга."
      />
      <CarInteriorsPage />
    </>
  )
}

export const getStaticProps = getStaticPropsDefault
export default withTolgee(Page)
