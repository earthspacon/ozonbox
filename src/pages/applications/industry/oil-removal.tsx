import { OilRemovalPage } from '@/@pages/applications/industry/oil-removal'

import { getStaticPropsDefault, withTolgee } from '@/shared/lib'
import { Seo } from '@/shared/ui/seo'

function Page() {
  return (
    <>
      <Seo
        title="Очистка нефтесодержащих сточных вод озонированием"
        description="Промышленное озонирование для очистки нефтесодержащих стоков. Эффективность 95-99%, достижение ПДК 0,05 мг/л без вторичных загрязнений."
      />
      <OilRemovalPage />
    </>
  )
}

export const getStaticProps = getStaticPropsDefault
export default withTolgee(Page)
