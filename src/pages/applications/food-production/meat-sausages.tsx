import { MeatSausagesPage } from '@/@pages/applications/food-production/meat-sausages'

import { getStaticPropsDefault, withTolgee } from '@/shared/lib'
import { Seo } from '@/shared/ui/seo'

function Page() {
  return (
    <>
      <Seo
        title="Озонирование в мясном производстве"
        description="Озонирование камер созревания колбас и хранения мяса. Увеличение срока хранения в 2-5 раз, подавление плесени на 96-99%. Сохранение вкуса и качества."
      />
      <MeatSausagesPage />
    </>
  )
}

export const getStaticProps = getStaticPropsDefault
export default withTolgee(Page)
