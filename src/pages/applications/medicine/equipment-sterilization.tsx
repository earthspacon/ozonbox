import { EquipmentSterilizationPage } from '@/@pages/applications/medicine/equipment-sterilization'

import { getStaticPropsDefault, withTolgee } from '@/shared/lib'
import { Seo } from '@/shared/ui/seo'

function Page() {
  return (
    <>
      <Seo
        title="Стерилизация медицинского оборудования озоном"
        description="Низкотемпературная озоновая стерилизация эндоскопов, пластиковых изделий и электроники. Безопасная обработка термочувствительного медицинского оборудования."
      />
      <EquipmentSterilizationPage />
    </>
  )
}

export const getStaticProps = getStaticPropsDefault
export default withTolgee(Page)
