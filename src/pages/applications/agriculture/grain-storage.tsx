import { GrainStoragePage } from '@/@pages/applications/agriculture/grain-storage'

import { getStaticPropsDefault, withTolgee } from '@/shared/lib'
import { Seo } from '@/shared/ui/seo'

function Page() {
  return (
    <>
      <Seo
        title="Озонирование при хранении зерна"
        description="Озонирование зерна: уничтожение вредителей на 95-99%, снижение потерь на 40-60%. Экологичная альтернатива химической фумигации зернохранилищ."
      />
      <GrainStoragePage />
    </>
  )
}

export const getStaticProps = getStaticPropsDefault
export default withTolgee(Page)
