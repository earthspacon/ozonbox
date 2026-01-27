import Head from 'next/head'

import { BeekeepingPage } from '@/@pages/applications/agriculture/beekeeping'

import { getStaticPropsDefault, withTolgee } from '@/shared/lib'

function Page() {
  return (
    <>
      <Head>
        <title>Озонирование в пчеловодстве — OzonTech</title>
        <meta
          name="description"
          content="Озонирование ульев и сот: увеличение медосбора на 25 кг/сезон, борьба с аскосферозом. Экологичный метод дезинфекции для здоровых пчёл."
        />
      </Head>
      <BeekeepingPage />
    </>
  )
}

export const getStaticProps = getStaticPropsDefault
export default withTolgee(Page)
