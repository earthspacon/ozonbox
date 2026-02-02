import { AutoTransportPage } from '@/@pages/applications/transport/auto-transport'

import { getStaticPropsDefault, withTolgee } from '@/shared/lib'
import { Seo } from '@/shared/ui/seo'

function Page() {
  return (
    <>
      <Seo
        title="Озонирование коммерческого автотранспорта"
        description="Дезинфекция грузовых автомобилей, фургонов и рефрижераторов. Соответствие ХАССП для пищевых перевозок. Устранение запахов между рейсами."
      />
      <AutoTransportPage />
    </>
  )
}

export const getStaticProps = getStaticPropsDefault
export default withTolgee(Page)
