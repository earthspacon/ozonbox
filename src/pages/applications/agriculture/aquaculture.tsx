import Head from 'next/head'

import { AquaculturePage } from '@/@pages/applications/agriculture/aquaculture'

import { getStaticPropsDefault, withTolgee } from '@/shared/lib'

function Page() {
  return (
    <>
      <Head>
        <title>Озонирование в аквакультуре и УЗВ — OzonTech</title>
        <meta
          name="description"
          content="Озонирование воды в УЗВ: обеззараживание до 99%, сокращение производственного цикла на 20-30%. Борьба с болезнями рыб и улучшение качества воды."
        />
      </Head>
      <AquaculturePage />
    </>
  )
}

export const getStaticProps = getStaticPropsDefault
export default withTolgee(Page)
