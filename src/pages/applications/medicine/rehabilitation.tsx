import { RehabilitationPage } from '@/@pages/applications/medicine/rehabilitation'

import { getStaticPropsDefault, withTolgee } from '@/shared/lib'
import { Seo } from '@/shared/ui/seo'

function Page() {
  return (
    <>
      <Seo
        title="Озонотерапия в реабилитационных центрах"
        description="Озонотерапия для реабилитации: озоновые ванны, SPA-процедуры, озонирование бассейнов. Комплексное решение для санаториев и реабилитационных центров."
      />
      <RehabilitationPage />
    </>
  )
}

export const getStaticProps = getStaticPropsDefault
export default withTolgee(Page)
