import { CheesePage } from '@/@pages/applications/food-production/cheese'

import { getStaticPropsDefault, withTolgee } from '@/shared/lib'
import { Seo } from '@/shared/ui/seo'

function Page() {
  return (
    <>
      <Seo
        title="Озонирование в производстве сыров"
        description="Озонирование камер созревания сыров. Предотвращение нежелательной плесени на 95-99% без влияния на вкус и процесс созревания. ГОСТ Р 54607-2011."
      />
      <CheesePage />
    </>
  )
}

export const getStaticProps = getStaticPropsDefault
export default withTolgee(Page)
