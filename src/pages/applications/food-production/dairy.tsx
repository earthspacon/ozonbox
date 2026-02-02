import { DairyPage } from '@/@pages/applications/food-production/dairy'

import { getStaticPropsDefault, withTolgee } from '@/shared/lib'
import { Seo } from '@/shared/ui/seo'

function Page() {
  return (
    <>
      <Seo
        title="Озонирование в молочном производстве"
        description="Дезинфекция молочного оборудования, танков и молокопроводов озоном. Увеличение срока хранения кисломолочной продукции на 30-50%. Соответствие HACCP."
      />
      <DairyPage />
    </>
  )
}

export const getStaticProps = getStaticPropsDefault
export default withTolgee(Page)
