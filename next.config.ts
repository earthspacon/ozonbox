import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,

  output: 'export',
  // No server to redirect duplicate /foo vs /foo/ URLs (see corp-website's nginx
  // trailing-slash strip). Pin one canonical URL shape at build time instead: GitHub
  // Pages always emits foo.html, so keep asPath/canonical/sitemap consistently
  // slash-less.
  trailingSlash: false,
  images: {
    unoptimized: true,
  },

  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.tsx',
      },
    },
  },

  webpack(config) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const fileLoaderRule = config.module.rules.find((rule: any) => rule.test?.test?.('.svg'))

    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/,
      },
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] },
        use: ['@svgr/webpack'],
      },
    )

    fileLoaderRule.exclude = /\.svg$/i

    return config
  },
}

export default nextConfig
