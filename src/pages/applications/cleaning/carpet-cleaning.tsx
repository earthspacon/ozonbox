import Head from 'next/head'

import { CarpetCleaningPage } from '@/@pages/applications/cleaning/carpet-cleaning'
import { getStaticPropsDefault, withTolgee } from '@/shared/lib'

function Page() {
  return (
    <>
      <Head>
        <title>Озонирование ковров и мягкой мебели — OzonTech</title>
        <meta
          name="description"
          content="Глубокая дезодорация и дезинфекция текстиля озоном. Устранение запаха затхлости, уничтожение пылевых клещей. Идеальное дополнение к профессиональной химчистке."
        />
      </Head>
      <CarpetCleaningPage />
    </>
  )
}

export const getStaticProps = getStaticPropsDefault
export default withTolgee(Page)
