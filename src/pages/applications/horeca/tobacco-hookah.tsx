import { TobaccoHookahPage } from '@/@pages/applications/horeca/tobacco-hookah'

import { getStaticPropsDefault, withTolgee } from '@/shared/lib'
import { Seo } from '@/shared/ui/seo'

function Page() {
  return (
    <>
      <Seo
        title="Озонирование кальянных и табачных заведений"
        description="Озонирование кальянных: химическое удаление въевшегося запаха дыма. Не маскировка — полная нейтрализация за 60-120 минут."
      />
      <TobaccoHookahPage />
    </>
  )
}

export const getStaticProps = getStaticPropsDefault
export default withTolgee(Page)
