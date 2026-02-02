import { FireSmokePage } from '@/@pages/applications/cleaning/fire-smoke'

import { getStaticPropsDefault, withTolgee } from '@/shared/lib'
import { Seo } from '@/shared/ui/seo'

function Page() {
  return (
    <>
      <Seo
        title="Удаление запаха гари после пожара"
        description="Устранение последствий задымления без капитального ремонта. Озон проникает в стены, перекрытия и мебель, разрушая частицы сажи. Обработка за 24-72 часа."
      />
      <FireSmokePage />
    </>
  )
}

export const getStaticProps = getStaticPropsDefault
export default withTolgee(Page)
