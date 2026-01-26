import Head from 'next/head'

import { HospitalsPage } from '@/@pages/applications/medicine/hospitals'
import { getStaticPropsDefault, withTolgee } from '@/shared/lib'

function Page() {
  return (
    <>
      <Head>
        <title>Озонирование больниц и операционных — OzonTech</title>
        <meta
          name="description"
          content="Озонирование для медицинских учреждений: операционные, палаты, реанимации. Эффективность 99,99% против патогенов, включая MRSA. Соответствие СанПиН."
        />
      </Head>
      <HospitalsPage />
    </>
  )
}

export const getStaticProps = getStaticPropsDefault
export default withTolgee(Page)
