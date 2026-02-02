import { LaundriesPage } from '@/@pages/applications/horeca/laundries'

import { getStaticPropsDefault, withTolgee } from '@/shared/lib'
import { Seo } from '@/shared/ui/seo'

function Page() {
  return (
    <>
      <Seo
        title="Озонирование для прачечных"
        description="Озонирование для прачечных: стирка в холодной воде с полной дезинфекцией. Снижение затрат на энергию и химию до 70%. Продление срока службы белья на 30%."
      />
      <LaundriesPage />
    </>
  )
}

export const getStaticProps = getStaticPropsDefault
export default withTolgee(Page)
