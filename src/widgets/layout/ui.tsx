import { ReactNode } from 'react'

import { FloatingContact } from '@/widgets/floating-contact'
import { Footer } from '@/widgets/footer'
import { Header } from '@/widgets/header'

type LayoutProps = {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <FloatingContact />
    </>
  )
}
