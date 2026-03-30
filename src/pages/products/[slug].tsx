import { GetStaticPaths, GetStaticProps } from 'next'

import { ProductDetailPage } from '@/@pages/products/product-detail'

import {
  DEFAULT_LOCALE,
  getProductNamespace,
  NAMESPACES,
  PRODUCT_SLUGS,
  TLocale,
} from '@/shared/config/tolgee'
import { loadNamespaces, withTolgee } from '@/shared/lib'

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = PRODUCT_SLUGS.map((slug) => ({ params: { slug } }))
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string
  const staticData = await loadNamespaces(DEFAULT_LOCALE as TLocale, [
    NAMESPACES.common,
    NAMESPACES.products,
    getProductNamespace(slug),
  ])
  return { props: { staticData, lang: DEFAULT_LOCALE, slug } }
}

export default withTolgee(ProductDetailPage)
