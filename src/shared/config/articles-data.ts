/**
 * Articles configuration: metadata for ozone-related articles.
 * Full content is loaded per-article via i18n namespace article-{slug}.
 */

export interface ArticleMeta {
  id: string
  slug: string
  image: string
  date: string
  sourceName: string
  sourceUrl: string
}

export const ARTICLES: ArticleMeta[] = [
  {
    id: 'ozoneGrainProtection',
    slug: 'ozone-grain-protection',
    image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800&q=80',
    date: '2003-01-30',
    sourceName: 'Purdue University News',
    sourceUrl: 'https://www.purdue.edu/uns/html4ever/030130.Mason.ozone.html',
  },
]

export function getArticleBySlug(slug: string): ArticleMeta | undefined {
  return ARTICLES.find((a) => a.slug === slug)
}

export function getAllArticleSlugs(): string[] {
  return ARTICLES.map((a) => a.slug)
}
