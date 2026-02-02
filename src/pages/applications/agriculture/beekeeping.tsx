import { BeekeepingPage } from '@/@pages/applications/agriculture/beekeeping'

import { getStaticPropsDefault, withTolgee } from '@/shared/lib'
import { Seo } from '@/shared/ui/seo'

function Page() {
  return (
    <>
      <Seo
        title="Озонирование в пчеловодстве"
        description="Озонирование ульев и сот: увеличение медосбора на 25 кг/сезон, борьба с аскосферозом. Экологичный метод дезинфекции для здоровых пчёл."
      />
      <BeekeepingPage />
    </>
  )
}

export const getStaticProps = getStaticPropsDefault
export default withTolgee(Page)
