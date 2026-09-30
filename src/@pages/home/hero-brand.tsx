import { useTranslate } from '@tolgee/react'

import { useLang } from '@/shared/lib/lang'
import { IconBrandMark } from '@/shared/ui/icons'

export function HeroTagline() {
  const { t } = useTranslate()

  return (
    <div className="mt-4 mb-2 inline-flex max-w-full items-center gap-3 rounded-2xl border border-white/30 bg-white/15 py-2 pr-4 pl-2 text-sm font-medium text-white backdrop-blur-md md:mb-6 md:rounded-full lg:mt-0">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white">
        <IconBrandMark className="h-4 w-5 text-[#16a34a]" />
      </span>
      <span className="leading-snug">{t('hero.tagline')}</span>
    </div>
  )
}

export function HeroSlogan() {
  const { t } = useTranslate()
  const [open, close] = useLang() === 'en' ? ['“', '”'] : ['«', '»']

  return (
    <figure className="relative z-[1] mt-10 mb-0 overflow-hidden rounded-2xl border border-white/30 bg-white/15 p-6 text-white backdrop-blur-md lg:row-span-2 lg:mt-0 lg:self-center lg:p-8">
      <WaveLines className="pointer-events-none absolute -top-2 -right-16 h-24 w-[110%] text-white/35" />
      <IconBrandMark className="relative mb-5 h-8 w-12 text-white" />
      <blockquote className="relative text-2xl leading-snug font-bold text-balance lg:text-[1.75rem]">
        {open}
        {t('hero.slogan')}
        {close}
      </blockquote>
      <figcaption className="relative mt-5 flex items-center gap-3 text-sm font-bold tracking-[0.14em] text-white/90">
        <span className="h-px w-8 bg-white/60" />
        OZONOXY
      </figcaption>
    </figure>
  )
}

function WaveLines({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 600 120" preserveAspectRatio="none" fill="none" className={className} aria-hidden>
      {[0, 6, 12, 18, 24].map((shift) => (
        <path
          key={shift}
          d={`M0 ${90 - shift} C 120 ${20 + shift}, 220 ${120 - shift}, 330 ${60 + shift / 2} S 520 ${10 + shift}, 600 ${70 - shift}`}
          stroke="currentColor"
          strokeWidth="1"
          opacity={1 - shift / 40}
        />
      ))}
    </svg>
  )
}
