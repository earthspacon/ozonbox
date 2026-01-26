import Head from 'next/head'

import { EquipmentSterilizationPage } from '@/@pages/applications/medicine/equipment-sterilization'
import { getStaticPropsDefault, withTolgee } from '@/shared/lib'

function Page() {
  return (
    <>
      <Head>
        <title>Стерилизация медицинского оборудования озоном — OzonTech</title>
        <meta
          name="description"
          content="Низкотемпературная озоновая стерилизация эндоскопов, пластиковых изделий и электроники. Безопасная обработка термочувствительного медицинского оборудования."
        />
      </Head>
      <EquipmentSterilizationPage />
    </>
  )
}

export const getStaticProps = getStaticPropsDefault
export default withTolgee(Page)
