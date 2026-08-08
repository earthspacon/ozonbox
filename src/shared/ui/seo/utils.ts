import { DEFAULT_LOCALE, LOCALES_LIST, TLocale } from '@/shared/config/tolgee'

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://ozonoxy.com.uz').replace(/\/$/, '')

const LOCALE_PREFIX_PATTERN = new RegExp(`^/(${LOCALES_LIST.join('|')})(?=/|$)`)
const SEO_LOCALES = LOCALES_LIST as TLocale[]

export function buildCanonicalUrl(locale: TLocale, asPath: string): string {
  return buildAbsoluteUrl(buildLocalePath(locale, asPath))
}

export function buildHreflangAlternates(asPath: string): { hrefLang: string; href: string }[] {
  return SEO_LOCALES.map((locale) => ({
    hrefLang: locale,
    href: buildCanonicalUrl(locale, asPath),
  }))
}

export function formatSeoTitle(title: string, appendSiteName = true): string {
  const trimmed = title.trim()

  if (!trimmed) {
    return 'OZONOXY'
  }

  return appendSiteName ? `${trimmed} — OZONOXY` : trimmed
}

export function buildAbsoluteUrl(path: string): string {
  const withoutTrailingSlash = path.replace(/\/+$/, '') || '/'
  const normalized = withoutTrailingSlash.startsWith('/') ? withoutTrailingSlash : `/${withoutTrailingSlash}`

  if (normalized === '/') {
    return SITE_URL
  }

  return `${SITE_URL}${normalized}`
}

function buildLocalePath(locale: TLocale, path: string): string {
  const basePath = stripLocalePrefix(path)

  if (locale === DEFAULT_LOCALE) {
    return basePath
  }

  if (basePath === '/') {
    return `/${locale}`
  }

  return `/${locale}${basePath}`
}

function stripLocalePrefix(path: string): string {
  const normalized = stripQueryAndHash(path)
  const withoutLocale = normalized.replace(LOCALE_PREFIX_PATTERN, '')

  return withoutLocale || '/'
}

function stripQueryAndHash(path: string): string {
  return path.split('?')[0]?.split('#')[0] || '/'
}
