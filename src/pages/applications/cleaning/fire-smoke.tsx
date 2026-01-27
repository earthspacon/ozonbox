import Head from 'next/head'

import { FireSmokePage } from '@/@pages/applications/cleaning/fire-smoke'

import { getStaticPropsDefault, withTolgee } from '@/shared/lib'

function Page() {
  return (
    <>
      <Head>
        <title>Удаление запаха гари после пожара — OzonTech</title>
        <meta
          name="description"
          content="Устранение последствий задымления без капитального ремонта. Озон проникает в стены, перекрытия и мебель, разрушая частицы сажи. Обработка за 24-72 часа."
        />
      </Head>
      <FireSmokePage />
    </>
  )
}

export const getStaticProps = getStaticPropsDefault
export default withTolgee(Page)
