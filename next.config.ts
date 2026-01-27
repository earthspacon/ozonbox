import type { NextConfig } from 'next'

const isGithubPages = process.env.GITHUB_PAGES === 'true'
const basePath = isGithubPages ? process.env.BASE_PATH || '' : ''
const assetPrefix = isGithubPages ? basePath : ''

const nextConfig: NextConfig = {
  reactStrictMode: true,

  output: 'export',
  basePath: basePath,
  assetPrefix: assetPrefix,
  trailingSlash: true,
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
