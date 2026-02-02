import { WastewaterPage } from '@/@pages/applications/water-treatment/wastewater'

import { getStaticPropsDefault, withTolgee } from '@/shared/lib'
import { Seo } from '@/shared/ui/seo'

function Page() {
  return (
    <>
      <Seo
        title="Озонирование сточных вод"
        description="Озонирование сточных вод: глубокая очистка от органики, обеззараживание, удаление цветности и запахов. Без токсичных побочных продуктов. Соответствие нормам сброса."
      />
      <WastewaterPage />
    </>
  )
}

export const getStaticProps = getStaticPropsDefault
export default withTolgee(Page)
