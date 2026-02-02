import { HospitalsPage } from '@/@pages/applications/medicine/hospitals'

import { getStaticPropsDefault, withTolgee } from '@/shared/lib'
import { Seo } from '@/shared/ui/seo'

function Page() {
  return (
    <>
      <Seo
        title="Озонирование больниц и операционных"
        description="Озонирование для медицинских учреждений: операционные, палаты, реанимации. Эффективность 99,99% против патогенов, включая MRSA. Соответствие СанПиН."
      />
      <HospitalsPage />
    </>
  )
}

export const getStaticProps = getStaticPropsDefault
export default withTolgee(Page)
