import Head from 'next/head'
import { ReactNode } from 'react'

const TITLE_SUFFIX = ' — OzonOxy'

interface SeoProps {
  title: ReactNode
  description?: string
  /** when false, title is rendered as-is (e.g. full title from i18n). default true */
  titleSuffix?: boolean
}

export function Seo({ title, description, titleSuffix = true }: SeoProps) {
  const fullTitle = titleSuffix ? (
    <>
      {title}
      {TITLE_SUFFIX}
    </>
  ) : (
    title
  )

  return (
    <Head>
      <title>{fullTitle}</title>
      {description != null && <meta name="description" content={description} />}
    </Head>
  )
}
