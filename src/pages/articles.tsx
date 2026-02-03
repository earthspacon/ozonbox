import { useTranslate } from '@tolgee/react'

import { ArticlesPage } from '@/@pages'

import { NAMESPACES } from '@/shared/config/tolgee'
import { createGetStaticPropsDefault, withTolgee } from '@/shared/lib'
import { Seo } from '@/shared/ui/seo'

function Page() {
  const { t } = useTranslate()

  return (
    <>
      <Seo
        title={t('list.pageTitle', { ns: NAMESPACES.articles })}
        description={t('list.pageDescription', { ns: NAMESPACES.articles })}
        titleSuffix={false}
      />
      <ArticlesPage />
    </>
  )
}

export const getStaticProps = createGetStaticPropsDefault([NAMESPACES.articles])
export default withTolgee(Page)
