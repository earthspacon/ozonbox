import Head from 'next/head'

import { CheesePage } from '@/@pages/applications/food-production/cheese'

import { getStaticPropsDefault, withTolgee } from '@/shared/lib'

function Page() {
  return (
    <>
      <Head>
        <title>Озонирование в производстве сыров — OzonTech</title>
        <meta
          name="description"
          content="Озонирование камер созревания сыров. Предотвращение нежелательной плесени на 95-99% без влияния на вкус и процесс созревания. ГОСТ Р 54607-2011."
        />
      </Head>
      <CheesePage />
    </>
  )
}

export const getStaticProps = getStaticPropsDefault
export default withTolgee(Page)
