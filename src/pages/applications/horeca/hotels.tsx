import { HotelsPage } from '@/@pages/applications/horeca/hotels'

import { getStaticPropsDefault, withTolgee } from '@/shared/lib'
import { Seo } from '@/shared/ui/seo'

function Page() {
  return (
    <>
      <Seo
        title="Озонирование гостиниц и отелей"
        description="Озонирование для гостиниц: полное устранение запахов табака, дезинфекция номеров за 30-60 минут. Повышение рейтингов на Booking и TripAdvisor."
      />
      <HotelsPage />
    </>
  )
}

export const getStaticProps = getStaticPropsDefault
export default withTolgee(Page)
