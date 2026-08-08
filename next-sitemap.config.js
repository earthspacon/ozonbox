/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.SITE_URL || 'https://ozonoxy.com.uz',
  outDir: 'out',
  generateRobotsTxt: true,
  generateIndexSitemap: false,

  // ru is the default locale, served unprefixed at the root — /ru/* is a duplicate
  // of the same content and must not be indexed separately.
  exclude: ['/admin', '/private', '/404', '/500', '/ru', '/ru/**'],

  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/private'],
      },
    ],
    additionalSitemaps: [],
  },

  // Homepage highest priority, products page next (main conversion path),
  // application/article content pages default.
  transform: async (config, path) => {
    if (path === '/ru' || path.startsWith('/ru/')) return null

    return {
      loc: path,
      changefreq: path === '/' ? 'daily' : 'weekly',
      priority: getPriorityByPath(path),
      lastmod: new Date().toISOString(),
    }
  },
}

function getPriorityByPath(path) {
  if (path === '/' || path === '/uz' || path === '/en' || path === '/uz-cyr') return 1.0
  if (path.includes('/products')) return 0.8
  return 0.7
}

module.exports = config
