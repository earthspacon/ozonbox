import { useTranslate } from '@tolgee/react'

import { Layout } from '@/widgets/layout'

import { IconLocation, IconPhone, IconTelegram } from '@/shared/ui/icons'

export function ContactsPage() {
  const { t } = useTranslate()

  return (
    <Layout>
      {/* Page Header */}
      <section className="from-primary/10 to-accent/10 relative mt-16 overflow-hidden bg-gradient-to-br via-white py-16 md:py-24">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(34, 197, 94, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 80% 50%, rgba(14, 165, 233, 0.15) 0%, transparent 50%)`,
          }}
          aria-hidden
        />
        <div className="bg-primary/10 absolute top-1/4 right-0 h-64 w-64 rounded-full blur-3xl" aria-hidden />
        <div className="bg-accent/10 absolute bottom-1/4 left-0 h-48 w-48 rounded-full blur-3xl" aria-hidden />

        <div className="relative container mx-auto flex flex-col items-center justify-center px-4">
          <h1 className="mb-4 text-center text-4xl font-bold md:text-5xl">{t('contactsPage.header.title')}</h1>
          <p className="mx-auto max-w-2xl text-center text-lg text-gray-600 md:text-xl">
            {t('contactsPage.header.subtitle')}
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
            {/* Phone Card */}
            <a
              href="tel:+998942909977"
              className="group hover:border-primary/20 rounded-2xl border border-gray-100 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="bg-primary/10 group-hover:bg-primary/20 mb-6 flex h-16 w-16 items-center justify-center rounded-2xl transition-colors">
                <IconPhone className="text-primary h-8 w-8" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">{t('contactsPage.info.phone.title')}</h3>
              <p className="text-primary mb-2 text-2xl font-bold">+998 94 290 99 77</p>
              <p className="text-sm text-gray-500">{t('contactsPage.info.phone.subtitle')}</p>
            </a>

            {/* Telegram Card */}
            <a
              href="https://t.me/Ozonoxy01"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-gray-100 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-[#0088cc]/20 hover:shadow-xl"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0088cc]/10 transition-colors group-hover:bg-[#0088cc]/20">
                <IconTelegram className="h-8 w-8 text-[#0088cc]" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">{t('contactsPage.info.telegram.title')}</h3>
              <p className="mb-2 text-2xl font-bold text-[#0088cc]">@Ozonoxy01</p>
              <p className="text-sm text-gray-500">{t('contactsPage.info.telegram.subtitle')}</p>
            </a>

            {/* Address Card */}
            <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-lg">
              <div className="bg-accent/10 mb-6 flex h-16 w-16 items-center justify-center rounded-2xl">
                <IconLocation className="text-accent h-8 w-8" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">{t('contactsPage.info.address.title')}</h3>
              <p className="leading-relaxed text-gray-700">
                {t('contactsPage.info.address.country')}
                <br />
                {t('contactsPage.info.address.city')}
                <br />
                {t('contactsPage.info.address.street')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
