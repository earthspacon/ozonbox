import Head from 'next/head'
import { useRouter } from 'next/router'

import { DEFAULT_LOCALE, type TLocale } from '@/shared/config/tolgee'
import { useLang } from '@/shared/lib/lang'

import { buildCanonicalUrl, buildHreflangAlternates, formatSeoTitle, SITE_URL } from './utils'

const OG_LOCALES: Record<TLocale, string> = {
  ru: 'ru_RU',
  uz: 'uz_UZ',
  'uz-cyr': 'uz_UZ',
  en: 'en_US',
}

const OG_IMAGE_URL = `${SITE_URL}/favicon/android-chrome-512x512.png`

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
  /** site-relative path used for canonical/hreflang; defaults to the current route */
  canonicalPath?: string
  imageUrl?: string
  noindex?: boolean
}

export function Seo({ title, description, titleSuffix = true, canonicalPath, imageUrl, noindex = false }: SeoProps) {
  const router = useRouter()
  const locale = useLang()

  const titleStr = toMetaString(title)
  const descriptionStr = toMetaString(description)
  const fullTitle = formatSeoTitle(titleStr, titleSuffix)

  const pathForCanonical = canonicalPath ?? router.asPath
  const canonicalUrl = buildCanonicalUrl(locale, pathForCanonical)
  const hreflangAlternates = buildHreflangAlternates(pathForCanonical)
  const ogImageUrl = imageUrl || OG_IMAGE_URL

  return (
    <Head>
      <title>{fullTitle}</title>
      {descriptionStr ? <meta name="description" content={descriptionStr} /> : null}
      <link rel="canonical" href={canonicalUrl} />
      {hreflangAlternates.map(({ hrefLang, href }) => (
        <link key={hrefLang} rel="alternate" hrefLang={hrefLang} href={href} />
      ))}
      <link rel="alternate" hrefLang="x-default" href={buildCanonicalUrl(DEFAULT_LOCALE, pathForCanonical)} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      <meta property="og:title" content={fullTitle} />
      {descriptionStr ? <meta property="og:description" content={descriptionStr} /> : null}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:image:width" content="512" />
      <meta property="og:image:height" content="512" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:alt" content={fullTitle} />
      <meta property="og:site_name" content="OZONOXY" />
      <meta property="og:locale" content={OG_LOCALES[locale] ?? OG_LOCALES[DEFAULT_LOCALE]} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={fullTitle} />
      {descriptionStr ? <meta name="twitter:description" content={descriptionStr} /> : null}
      <meta name="twitter:image" content={ogImageUrl} />
      <meta name="twitter:image:alt" content={fullTitle} />
    </Head>
  )
}
