import { ColdStoragePage } from '@/@pages/applications/food-production/cold-storage'

import { getStaticPropsDefault, withTolgee } from '@/shared/lib'
import { Seo } from '@/shared/ui/seo'

function Page() {
  return (
    <>
      <Seo
        title="Озонирование холодильных камер"
        description="Дезинфекция и дезодорация холодильных складов озоном. Обработка загруженных камер без отепления. Сокращение простоя в 5 раз. Устранение затхлых запахов."
      />
      <ColdStoragePage />
    </>
  )
}

export const getStaticProps = getStaticPropsDefault
export default withTolgee(Page)
