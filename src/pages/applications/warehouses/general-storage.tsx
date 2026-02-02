import { GeneralStoragePage } from '@/@pages/applications/warehouses/general-storage'

import { getStaticPropsDefault, withTolgee } from '@/shared/lib'
import { Seo } from '@/shared/ui/seo'

function Page() {
  return (
    <>
      <Seo
        title="Озонирование складов"
        description="Комплексное озонирование для складской логистики: защита товаров, продление сроков хранения, борьба с вредителями, улучшение условий труда персонала."
      />
      <GeneralStoragePage />
    </>
  )
}

export const getStaticProps = getStaticPropsDefault
export default withTolgee(Page)
