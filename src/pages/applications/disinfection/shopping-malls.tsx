import { ShoppingMallsPage } from '@/@pages/applications/disinfection/shopping-malls'

import { getStaticPropsDefault, withTolgee } from '@/shared/lib'
import { Seo } from '@/shared/ui/seo'

function Page() {
  return (
    <>
      <Seo
        title="Озонирование торговых центров"
        description="Дезинфекция торговых центров и магазинов. Чистый воздух для посетителей, устранение запахов фудкортов. Интеграция в систему вентиляции."
      />
      <ShoppingMallsPage />
    </>
  )
}

export const getStaticProps = getStaticPropsDefault
export default withTolgee(Page)
