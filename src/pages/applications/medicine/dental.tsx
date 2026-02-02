import { DentalPage } from '@/@pages/applications/medicine/dental'

import { getStaticPropsDefault, withTolgee } from '@/shared/lib'
import { Seo } from '@/shared/ui/seo'

function Page() {
  return (
    <>
      <Seo
        title="Озонирование в стоматологии"
        description="Озонирование для стоматологических клиник: дезинфекция кабинетов за 15 минут, озонотерапия, обработка каналов. Профилактика инфекций."
      />
      <DentalPage />
    </>
  )
}

export const getStaticProps = getStaticPropsDefault
export default withTolgee(Page)
