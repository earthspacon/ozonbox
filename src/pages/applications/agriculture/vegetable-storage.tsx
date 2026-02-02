import { VegetableStoragePage } from '@/@pages/applications/agriculture/vegetable-storage'

import { getStaticPropsDefault, withTolgee } from '@/shared/lib'
import { Seo } from '@/shared/ui/seo'

function Page() {
  return (
    <>
      <Seo
        title="Озонирование овощехранилищ"
        description="Озонирование для овощехранилищ: продление сроков хранения в 2 раза, уничтожение плесени, снижение потерь на 50%. Без химических консервантов."
      />
      <VegetableStoragePage />
    </>
  )
}

export const getStaticProps = getStaticPropsDefault
export default withTolgee(Page)
