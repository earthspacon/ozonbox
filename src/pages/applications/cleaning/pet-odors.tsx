import { PetOdorsPage } from '@/@pages/applications/cleaning/pet-odors'

import { getStaticPropsDefault, withTolgee } from '@/shared/lib'
import { Seo } from '@/shared/ui/seo'

function Page() {
  return (
    <>
      <Seo
        title="Удаление запаха домашних животных"
        description="Полное устранение запаха кошачьей и собачьей мочи озонированием. Разрушение кристаллов мочевой кислоты на молекулярном уровне. Запах не вернётся."
      />
      <PetOdorsPage />
    </>
  )
}

export const getStaticProps = getStaticPropsDefault
export default withTolgee(Page)
