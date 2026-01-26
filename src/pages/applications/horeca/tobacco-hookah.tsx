import Head from 'next/head'

import { TobaccoHookahPage } from '@/@pages/applications/horeca/tobacco-hookah'
import { getStaticPropsDefault, withTolgee } from '@/shared/lib'

function Page() {
  return (
    <>
      <Head>
        <title>Озонирование кальянных и табачных заведений — OzonTech</title>
        <meta
          name="description"
          content="Озонирование кальянных: химическое удаление въевшегося запаха дыма. Не маскировка — полная нейтрализация за 60-120 минут."
        />
      </Head>
      <TobaccoHookahPage />
    </>
  )
}

export const getStaticProps = getStaticPropsDefault
export default withTolgee(Page)
