import Link from 'next/link'
import { AnchorHTMLAttributes } from 'react'

import { cn } from '../lib/cn'
import { useIsLangInRoute, useLang } from '../lib/lang'

export const AppLink = (props: AnchorHTMLAttributes<HTMLAnchorElement>) => {
  const lang = useLang()
  const hasLangInRoute = useIsLangInRoute()

  const langUrl = hasLangInRoute ? `/${lang}` : ''
  const url = `${langUrl}${props.href}`

  return (
    <Link {...props} href={url} className={cn(props.className)}>
      {props.children}
    </Link>
  )
}
