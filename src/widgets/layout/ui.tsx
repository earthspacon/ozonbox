import { ReactNode } from 'react'

import { FloatingContact } from '@/widgets/floating-contact'
import { Footer } from '@/widgets/footer'
import { Header } from '@/widgets/header'

type LayoutProps = {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <FloatingContact />
    </div>
  )
}
