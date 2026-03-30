import { GetStaticPaths, GetStaticProps } from 'next'

import { ProductDetailPage } from '@/@pages/products/product-detail'

import {
  getProductNamespace,
  LOCALES_LIST,
  NAMESPACES,
  PRODUCT_SLUGS,
  TLocale,
} from '@/shared/config/tolgee'
import { loadNamespaces, withTolgee } from '@/shared/lib'

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = LOCALES_LIST.flatMap((lang) =>
    PRODUCT_SLUGS.map((slug) => ({ params: { lang, slug } })),
  )
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const lang = (params?.lang as TLocale) || 'ru'
  const slug = params?.slug as string
  const staticData = await loadNamespaces(lang, [
    NAMESPACES.common,
    NAMESPACES.products,
    getProductNamespace(slug),
  ])
  return { props: { staticData, lang, slug } }
}

export default withTolgee(ProductDetailPage)
