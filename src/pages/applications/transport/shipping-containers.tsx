import Head from 'next/head'

import { ShippingContainersPage } from '@/@pages/applications/transport/shipping-containers'

import { getStaticPropsDefault, withTolgee } from '@/shared/lib'

function Page() {
  return (
    <>
      <Head>
        <title>Озонирование морских контейнеров — OzonTech</title>
        <meta
          name="description"
          content="Экологичная фумигация контейнеров без токсичных остатков. Уничтожение насекомых-вредителей, плесени и карантинных организмов озоном."
        />
      </Head>
      <ShippingContainersPage />
    </>
  )
}

export const getStaticProps = getStaticPropsDefault
export default withTolgee(Page)
