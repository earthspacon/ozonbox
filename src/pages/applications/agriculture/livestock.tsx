import { LivestockPage } from '@/@pages/applications/agriculture/livestock'

import { getStaticPropsDefault, withTolgee } from '@/shared/lib'
import { Seo } from '@/shared/ui/seo'

function Page() {
  return (
    <>
      <Seo
        title="Озонирование в животноводстве"
        description="Озонирование для животноводческих хозяйств: дезинфекция помещений, обработка воды и кормов. Снижение заболеваемости на 50%, рост продуктивности на 15%."
      />
      <LivestockPage />
    </>
  )
}

export const getStaticProps = getStaticPropsDefault
export default withTolgee(Page)
