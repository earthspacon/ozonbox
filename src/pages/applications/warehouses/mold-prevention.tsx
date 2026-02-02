import { MoldPreventionPage } from '@/@pages/applications/warehouses/mold-prevention'

import { getStaticPropsDefault, withTolgee } from '@/shared/lib'
import { Seo } from '@/shared/ui/seo'

function Page() {
  return (
    <>
      <Seo
        title="Борьба с плесенью на складе"
        description="Озонирование складов для уничтожения плесени и грибка. Защита товаров и здоровья персонала. Уничтожение до 99% плесени без химикатов."
      />
      <MoldPreventionPage />
    </>
  )
}

export const getStaticProps = getStaticPropsDefault
export default withTolgee(Page)
