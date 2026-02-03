import Head from 'next/head'

const TITLE_SUFFIX = ' — OzonOxy'

function toMetaString(value: unknown): string {
  if (typeof value === 'string') return value
  if (value == null || typeof value === 'object') return ''
  return String(value)
}

interface SeoProps {
  title: unknown
  description?: unknown
  /** when false, title is rendered as-is (e.g. full title from i18n). default true */
  titleSuffix?: boolean
}

export function Seo({ title, description, titleSuffix = true }: SeoProps) {
  const titleStr = toMetaString(title)
  const descriptionStr = toMetaString(description)
  const fullTitle = titleSuffix && titleStr ? `${titleStr}${TITLE_SUFFIX}` : titleStr

  return (
    <Head>
      <title>{fullTitle}</title>
      {descriptionStr ? <meta name="description" content={descriptionStr} /> : null}
    </Head>
  )
}
