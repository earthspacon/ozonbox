/**
 * JSON-LD structured data for search engines (Google, Yandex) and AI crawlers.
 *
 * Vocabulary: https://schema.org — property names are camelCase.
 *
 * JSON-LD reserved keywords use an `@` prefix:
 *   - `@context` — declares schema.org as the vocabulary (once per top-level node/graph)
 *   - `@type`     — entity class, e.g. "Organization", "BreadcrumbList" (case-sensitive)
 *   - `@id`       — stable URL fragment so crawlers can link entities across blocks
 *   - `@graph`    — bundles several nodes into one `<script>` (see `buildJsonLdGraph`)
 *
 * Pages Router: injected via `next/head` with a unique `key` per block so Next dedupes
 * head children correctly. The serialized JSON escapes `<` to prevent a `</script>`
 * breakout (https://nextjs.org/docs/app/guides/json-ld — same script pattern applies here).
 */
import Head from 'next/head'
import type {
  BreadcrumbList,
  ContactPoint,
  Graph,
  ImageObject,
  ListItem,
  Organization,
  Thing,
  WithContext,
} from 'schema-dts'

import type { TLocale } from '@/shared/config/tolgee'
import { CONTACT_PHONE_NUMBER, FACEBOOK_URL, SITE_NAME, TELEGRAM_URL, YOUTUBE_URL } from '@/shared/config/constants'

import { buildCanonicalUrl, SITE_URL } from './utils'

export interface BreadcrumbItem {
  name: string
  /** Site-relative path, e.g. `/applications/medicine`. Omit on the last crumb. */
  path?: string
}

const SCHEMA_CONTEXT = 'https://schema.org'
const LOGO_URL = `${SITE_URL}/favicon/android-chrome-512x512.png`
const ORGANIZATION_ID = `${SITE_URL}/#organization`

interface JsonLdProps {
  /** Unique per page+schema — becomes `key` on the script tag for next/head dedup. */
  id: string
  data: Graph | WithContext<Thing>
}

export const JsonLd = ({ id, data }: JsonLdProps) => (
  <Head>
    <script
      key={`json-ld-${id}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(data) }}
    />
  </Head>
)

/**
 * Merges several page-level schemas into one `<script>` block via `@graph`.
 * Prefer this over multiple `<JsonLd>` when a page has 2+ types.
 */
export function buildJsonLdGraph(...schemas: WithContext<Thing>[]): Graph {
  return {
    '@context': SCHEMA_CONTEXT,
    // nodes inside `@graph` must not repeat `@context` (it lives on the graph root)
    '@graph': schemas.map((schema) => {
      const node = { ...(schema as Record<string, unknown>) }
      delete node['@context']

      return node as unknown as Thing
    }),
  }
}

/** Site-wide org markup — homepage and any page that describes OZONOXY as a brand. */
export function buildOrganizationJsonLd(): WithContext<Organization> {
  return {
    '@context': SCHEMA_CONTEXT,
    '@type': 'Organization',
    '@id': ORGANIZATION_ID,
    name: SITE_NAME,
    url: SITE_URL,
    logo: imageObject(LOGO_URL),
    sameAs: [TELEGRAM_URL, YOUTUBE_URL, FACEBOOK_URL],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: CONTACT_PHONE_NUMBER,
      contactType: 'customer service',
    } satisfies ContactPoint,
  }
}

/**
 * Breadcrumb rich results require an absolute `item` URL on every ListItem.
 * Pass `pageUrl` (canonical) so the last crumb gets a URL when `path` is omitted.
 *
 * https://developers.google.com/search/docs/appearance/structured-data/breadcrumb
 */
export function buildBreadcrumbJsonLd(
  items: BreadcrumbItem[],
  pageUrl: string,
  locale: TLocale,
): WithContext<BreadcrumbList> {
  return {
    '@context': SCHEMA_CONTEXT,
    '@type': 'BreadcrumbList',
    '@id': `${pageUrl}#breadcrumbs`,
    itemListElement: items.map((item, index) => {
      const isLast = index === items.length - 1
      const itemUrl = item.path ? buildCanonicalUrl(locale, item.path) : isLast ? pageUrl : undefined

      return {
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        // Google documents `item` as a plain URL string; schema-dts types it as Thing,
        // so this single cast bridges the two while keeping the rest type-checked.
        item: itemUrl as ListItem['item'],
      }
    }),
  }
}

/** Safe for dangerouslySetInnerHTML — prevents `</script>` breakout from content. */
function serializeJsonLd(data: object): string {
  return JSON.stringify(data).replace(/</g, '\\u003c')
}

function imageObject(url: string): ImageObject {
  return { '@type': 'ImageObject', url }
}
