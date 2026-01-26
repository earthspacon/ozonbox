import type { DocumentContext, DocumentInitialProps } from 'next/document'
import { Head, Html, Main, NextScript } from 'next/document'

import { DEFAULT_LOCALE } from '@/shared/config/tolgee'

export default function Document({ locale }: { locale?: string }) {
  return (
    <Html lang={locale || DEFAULT_LOCALE}>
      <Head>
        <link rel="icon" type="image/x-icon" href="/favicon/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

Document.getInitialProps = async (ctx: DocumentContext): Promise<DocumentInitialProps & { locale?: string }> => {
  const initialProps = await ctx.defaultGetInitialProps(ctx)

  // Extract language from the URL path for [lang] routes
  const pathname = ctx.pathname
  const lang = pathname.includes('[lang]') ? (ctx.query.lang as string) || DEFAULT_LOCALE : DEFAULT_LOCALE

  return {
    ...initialProps,
    locale: lang,
  }
}
