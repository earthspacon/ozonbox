import { TolgeeStaticDataProp, useTranslate } from '@tolgee/react'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'

import { CategoryPage } from '@/@pages/applications/category'

import { getAllCategoryIds } from '@/shared/config/applications-data'
import { DEFAULT_LOCALE, getCategoryNamespace, NAMESPACES, TLocale } from '@/shared/config/tolgee'
import { withTolgee } from '@/shared/lib'

interface PageProps {
  category: string
  staticData: TolgeeStaticDataProp
  lang: string
}

function Page({ category }: PageProps) {
  const { t } = useTranslate()
  const ns = getCategoryNamespace(category)

  return (
    <>
      <Head>
        <title>{t('title', { ns })} — OzonTech</title>
        <meta name="description" content={t('description', { ns })} />
      </Head>
      <CategoryPage categoryId={category} />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const categories = getAllCategoryIds()
  const paths = categories.map((category) => ({
    params: { category },
  }))

  return {
    paths,
    fallback: false,
  }
}

async function loadNamespaces(lang: TLocale, namespaces: string[]): Promise<TolgeeStaticDataProp> {
  const data: TolgeeStaticDataProp = {}
  for (const ns of namespaces) {
    try {
      const nsData = await import(`@/shared/config/i18n/${lang}/${ns}.json`)
      data[`${lang}:${ns}`] = nsData.default || nsData
    } catch {
      console.warn(`Failed to load namespace ${ns} for language ${lang}`)
    }
  }
  return data
}

export const getStaticProps: GetStaticProps<PageProps> = async ({ params }) => {
  const category = params?.category as string
  const categoryNs = getCategoryNamespace(category)

  const staticData = await loadNamespaces(DEFAULT_LOCALE, [NAMESPACES.common, NAMESPACES.applications, categoryNs])

  return {
    props: {
      staticData,
      lang: DEFAULT_LOCALE,
      category,
    },
  }
}

export default withTolgee(Page)
