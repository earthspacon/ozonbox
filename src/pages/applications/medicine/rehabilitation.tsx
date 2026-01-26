import Head from 'next/head'

import { RehabilitationPage } from '@/@pages/applications/medicine/rehabilitation'
import { getStaticPropsDefault, withTolgee } from '@/shared/lib'

function Page() {
  return (
    <>
      <Head>
        <title>Озонотерапия в реабилитационных центрах — OzonTech</title>
        <meta
          name="description"
          content="Озонотерапия для реабилитации: озоновые ванны, SPA-процедуры, озонирование бассейнов. Комплексное решение для санаториев и реабилитационных центров."
        />
      </Head>
      <RehabilitationPage />
    </>
  )
}

export const getStaticProps = getStaticPropsDefault
export default withTolgee(Page)
