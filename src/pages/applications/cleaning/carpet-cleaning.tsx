import { CarpetCleaningPage } from '@/@pages/applications/cleaning/carpet-cleaning'

import { getStaticPropsDefault, withTolgee } from '@/shared/lib'
import { Seo } from '@/shared/ui/seo'

function Page() {
  return (
    <>
      <Seo
        title="Озонирование ковров и мягкой мебели"
        description="Глубокая дезодорация и дезинфекция текстиля озоном. Устранение запаха затхлости, уничтожение пылевых клещей. Идеальное дополнение к профессиональной химчистке."
      />
      <CarpetCleaningPage />
    </>
  )
}

export const getStaticProps = getStaticPropsDefault
export default withTolgee(Page)
