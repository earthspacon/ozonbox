import { ShippingContainersPage } from '@/@pages/applications/transport/shipping-containers'

import { getStaticPropsDefault, withTolgee } from '@/shared/lib'
import { Seo } from '@/shared/ui/seo'

function Page() {
  return (
    <>
      <Seo
        title="Озонирование морских контейнеров"
        description="Экологичная фумигация контейнеров без токсичных остатков. Уничтожение насекомых-вредителей, плесени и карантинных организмов озоном."
      />
      <ShippingContainersPage />
    </>
  )
}

export const getStaticProps = getStaticPropsDefault
export default withTolgee(Page)
