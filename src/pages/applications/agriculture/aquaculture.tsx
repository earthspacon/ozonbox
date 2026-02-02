import { AquaculturePage } from '@/@pages/applications/agriculture/aquaculture'

import { getStaticPropsDefault, withTolgee } from '@/shared/lib'
import { Seo } from '@/shared/ui/seo'

function Page() {
  return (
    <>
      <Seo
        title="Озонирование в аквакультуре и УЗВ"
        description="Озонирование воды в УЗВ: обеззараживание до 99%, сокращение производственного цикла на 20-30%. Борьба с болезнями рыб и улучшение качества воды."
      />
      <AquaculturePage />
    </>
  )
}

export const getStaticProps = getStaticPropsDefault
export default withTolgee(Page)
