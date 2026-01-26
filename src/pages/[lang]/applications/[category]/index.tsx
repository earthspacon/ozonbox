import { TolgeeStaticDataProp, useTranslate } from '@tolgee/react'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'

import { CategoryPage } from '@/@pages/applications/category'

import { getAllCategoryIds } from '@/shared/config/applications-data'
import { getCategoryNamespace, LOCALES_LIST, NAMESPACES, TLocale } from '@/shared/config/tolgee'
import { withTolgee } from '@/shared/lib/page-static-functions'

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
  const paths: { params: { lang: string; category: string } }[] = []

  for (const lang of LOCALES_LIST) {
    for (const category of categories) {
      paths.push({ params: { lang, category } })
    }
  }

  return {
    paths,
    fallback: false,
  }
}

// Helper function to load namespaces
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
  const lang = params?.lang as TLocale
  const category = params?.category as string
  const categoryNs = getCategoryNamespace(category)

  const staticData = await loadNamespaces(lang, [NAMESPACES.common, NAMESPACES.applications, categoryNs])

  return {
    props: {
      staticData,
      lang,
      category,
    },
  }
}

export default withTolgee(Page)
