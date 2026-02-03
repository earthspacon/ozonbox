import { TolgeeStaticDataProp } from '@tolgee/react'

import { TLocale } from '@/shared/config/tolgee'

export async function loadNamespaces(lang: TLocale, namespaces: string[]): Promise<TolgeeStaticDataProp> {
  const data: TolgeeStaticDataProp = {}
  for (const ns of namespaces) {
    try {
      const nsData = await import(`@/shared/config/i18n/${lang}/${ns}.json`)
      data[`${lang}:${ns}`] = nsData.default || nsData
    } catch {
      console.warn(`Failed to load namespace ${ns} for language ${lang}`)
    }
  }
  return data
}
