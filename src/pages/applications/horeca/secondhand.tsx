import { SecondhandPage } from '@/@pages/applications/horeca/secondhand'

import { getStaticPropsDefault, withTolgee } from '@/shared/lib'
import { Seo } from '@/shared/ui/seo'

function Page() {
  return (
    <>
      <Seo
        title="Озонирование магазинов секонд-хенд"
        description="Озонирование для секонд-хенд: устранение специфического запаха одежды. Комфорт покупателей и рост продаж. Обработка без выгрузки товара."
      />
      <SecondhandPage />
    </>
  )
}

export const getStaticProps = getStaticPropsDefault
export default withTolgee(Page)
