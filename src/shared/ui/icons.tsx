import { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

export const IconCheck = (props: IconProps) => (
  <svg viewBox="0 0 64 64" fill="none" {...props}>
    <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="2" />
    <path d="M20 32l8 8 16-16" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const IconShield = (props: IconProps) => (
  <svg viewBox="0 0 64 64" fill="none" {...props}>
    <path d="M32 6L8 16v16c0 14 10 24 24 28 14-4 24-14 24-28V16L32 6z" stroke="currentColor" strokeWidth="2" />
    <path d="M24 32l6 6 12-12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const IconMolecule = (props: IconProps) => (
  <svg viewBox="0 0 64 64" fill="none" {...props}>
    <circle cx="20" cy="32" r="12" stroke="currentColor" strokeWidth="2" />
    <circle cx="44" cy="20" r="10" stroke="currentColor" strokeWidth="2" />
    <circle cx="44" cy="44" r="10" stroke="currentColor" strokeWidth="2" />
    <line x1="30" y1="26" x2="36" y2="22" stroke="currentColor" strokeWidth="2" />
    <line x1="30" y1="38" x2="36" y2="42" stroke="currentColor" strokeWidth="2" />
  </svg>
)

export const IconEco = (props: IconProps) => (
  <svg viewBox="0 0 64 64" fill="none" {...props}>
    <path d="M32 56c0-24 20-40 24-44-8 4-32 8-32 32" stroke="currentColor" strokeWidth="2" />
    <path d="M32 56c0-24-20-40-24-44 8 4 32 8 32 32" stroke="currentColor" strokeWidth="2" />
    <path d="M32 28v28" stroke="currentColor" strokeWidth="2" />
  </svg>
)

export const IconTimer = (props: IconProps) => (
  <svg viewBox="0 0 64 64" fill="none" {...props}>
    <circle cx="32" cy="36" r="24" stroke="currentColor" strokeWidth="2" />
    <path d="M32 20v16l12 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M28 6h8M32 6v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

export const IconPoultry = (props: IconProps) => (
  <svg viewBox="0 0 64 64" fill="none" {...props}>
    <ellipse cx="32" cy="36" rx="20" ry="14" stroke="currentColor" strokeWidth="2" />
    <circle cx="16" cy="32" r="8" stroke="currentColor" strokeWidth="2" />
    <circle cx="14" cy="30" r="2" fill="currentColor" />
    <path
      d="M8 32c-4 0-4-8 0-8M10 22c-2-4 0-8 4-8M16 24c0-4 4-8 8-6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path d="M26 52v6M38 52v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

export const IconFood = (props: IconProps) => (
  <svg viewBox="0 0 64 64" fill="none" {...props}>
    <path d="M32 14c-12 0-20 10-20 24s8 20 20 20 20-6 20-20-8-24-20-24z" stroke="currentColor" strokeWidth="2" />
    <path d="M32 14c0-6-4-8-4-8s4-2 8 2c2 2 1 6 1 6" stroke="currentColor" strokeWidth="2" />
    <path d="M38 8c4-2 6 0 6 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

export const IconHotel = (props: IconProps) => (
  <svg viewBox="0 0 64 64" fill="none" {...props}>
    <rect x="12" y="16" width="40" height="42" stroke="currentColor" strokeWidth="2" />
    <rect x="20" y="24" width="8" height="8" stroke="currentColor" strokeWidth="2" />
    <rect x="36" y="24" width="8" height="8" stroke="currentColor" strokeWidth="2" />
    <rect x="20" y="38" width="8" height="8" stroke="currentColor" strokeWidth="2" />
    <rect x="36" y="38" width="8" height="8" stroke="currentColor" strokeWidth="2" />
    <rect x="26" y="50" width="12" height="8" stroke="currentColor" strokeWidth="2" />
  </svg>
)

export const IconMedical = (props: IconProps) => (
  <svg viewBox="0 0 64 64" fill="none" {...props}>
    <rect x="8" y="8" width="48" height="48" rx="8" stroke="currentColor" strokeWidth="2" />
    <path d="M32 18v28M18 32h28" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
  </svg>
)

export const IconWater = (props: IconProps) => (
  <svg viewBox="0 0 64 64" fill="none" {...props}>
    <path
      d="M32 8c0 0-20 20-20 36 0 12 9 16 20 16s20-4 20-16c0-16-20-36-20-36z"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path d="M24 40c0-8 8-16 8-16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

export const IconFactory = (props: IconProps) => (
  <svg viewBox="0 0 64 64" fill="none" {...props}>
    <path d="M4 56h56M8 56V32l12 8V28l12 8V24l12 8V20h12v36" stroke="currentColor" strokeWidth="2" />
    <rect x="48" y="28" width="4" height="8" stroke="currentColor" strokeWidth="2" />
  </svg>
)

export const IconPhone = (props: IconProps) => (
  <svg viewBox="0 0 64 64" fill="none" {...props}>
    <path
      d="M14 10c-2 0-4 2-4 4v4c0 22 18 40 40 40h4c2 0 4-2 4-4v-8l-12-6-4 4c-2 2-6 0-12-6s-8-10-6-12l4-4-6-12h-8z"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
)

export const IconEmail = (props: IconProps) => (
  <svg viewBox="0 0 64 64" fill="none" {...props}>
    <rect x="6" y="14" width="52" height="36" rx="4" stroke="currentColor" strokeWidth="2" />
    <path d="M6 18l26 16 26-16" stroke="currentColor" strokeWidth="2" />
  </svg>
)

export const IconLocation = (props: IconProps) => (
  <svg viewBox="0 0 64 64" fill="none" {...props}>
    <path
      d="M32 4C20 4 12 14 12 26c0 16 20 34 20 34s20-18 20-34c0-12-8-22-20-22z"
      stroke="currentColor"
      strokeWidth="2"
    />
    <circle cx="32" cy="24" r="8" stroke="currentColor" strokeWidth="2" />
  </svg>
)

export const IconMenu = (props: IconProps) => (
  <svg viewBox="0 0 64 64" fill="none" {...props}>
    <path d="M8 16h48M8 32h48M8 48h48" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
  </svg>
)

export const IconClose = (props: IconProps) => (
  <svg viewBox="0 0 64 64" fill="none" {...props}>
    <path d="M16 16l32 32M48 16L16 48" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
  </svg>
)

export const IconArrowRight = (props: IconProps) => (
  <svg viewBox="0 0 64 64" fill="none" {...props}>
    <path
      d="M12 32h40M36 16l16 16-16 16"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export const IconArrowLeft = (props: IconProps) => (
  <svg viewBox="0 0 64 64" fill="none" {...props}>
    <path
      d="M52 32H12M28 16L12 32l16 16"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export const IconWhatsapp = (props: IconProps) => (
  <svg viewBox="0 0 64 64" fill="none" {...props}>
    <path
      d="M32 6C17.6 6 6 17.6 6 32c0 5.2 1.5 10 4.2 14L6 58l12.5-4c4 2.5 8.5 3.8 13.5 3.8C46.4 57.8 58 46.4 58 32S46.4 6 32 6z"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M44 38c-1 3-4 5-7 5-2 0-5-1-10-5-4-4-6-7-7-10 0-3 1-5 2-6 1-1 2-1 3-1h2c1 0 2 1 3 3l2 4c0 1 0 2-1 3l-1 2c0 0 1 2 3 4s3 3 4 3l2-2c1-1 2-1 3 0l4 2c1 1 2 2 2 3v2z"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
)

export const IconTelegram = (props: IconProps) => (
  <svg viewBox="0 0 64 64" fill="none" {...props}>
    <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="2" />
    <path
      d="M18 31l26-10c1-.4 2.5.3 2 2l-4 20c-.3 1.3-1.2 1.6-2.4 1l-6-4.5-3 3c-.3.3-.6.5-1 .5l.5-6 12-11c.5-.5 0-.7-.8-.3l-15 9.5-6.5-2c-1.4-.4-1.4-1.4.3-2.1z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export const IconDisinfection = (props: IconProps) => (
  <svg viewBox="0 0 64 64" fill="none" {...props}>
    <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="2" />
    <path d="M32 16v32M16 32h32M22 22l20 20M42 22L22 42" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

export const IconSpray = (props: IconProps) => (
  <svg viewBox="0 0 64 64" fill="none" {...props}>
    <rect x="20" y="24" width="16" height="32" rx="2" stroke="currentColor" strokeWidth="2" />
    <path
      d="M24 24v-8c0-2 2-4 4-4h8M36 24l8-8M44 16l4-4M44 16l4 4M48 20l4 0M40 12l4-4M40 12l4 4"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
)

export const IconOdor = (props: IconProps) => (
  <svg viewBox="0 0 64 64" fill="none" {...props}>
    <path
      d="M12 24c8-8 16 0 24-8M12 32c8-8 16 0 24-8M12 40c8-8 16 0 24-8M44 20c4 0 8 4 8 8s-4 8-8 8M48 36c4 0 8 4 8 8s-4 8-8 8"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
)

export const IconRat = (props: IconProps) => (
  <svg viewBox="0 0 64 64" fill="none" {...props}>
    <ellipse cx="32" cy="36" rx="22" ry="14" stroke="currentColor" strokeWidth="2" />
    <circle cx="16" cy="32" r="8" stroke="currentColor" strokeWidth="2" />
    <circle cx="14" cy="30" r="2" fill="currentColor" />
    <path d="M8 32c-4 0-4-8 0-8M54 36h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="4" y1="4" x2="60" y2="60" stroke="currentColor" strokeWidth="3" />
  </svg>
)

export const IconMercury = (props: IconProps) => (
  <svg viewBox="0 0 64 64" fill="none" {...props}>
    <path d="M28 12v32a8 8 0 1 0 8 0V12a4 4 0 0 0-8 0z" stroke="currentColor" strokeWidth="2" />
    <circle cx="32" cy="48" r="6" fill="currentColor" />
    <rect x="30" y="28" width="4" height="16" fill="currentColor" />
    <path d="M40 16h8M40 24h6M40 32h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

export const IconMold = (props: IconProps) => (
  <svg viewBox="0 0 64 64" fill="none" {...props}>
    <circle cx="32" cy="44" r="14" stroke="currentColor" strokeWidth="2" />
    <circle cx="20" cy="28" r="10" stroke="currentColor" strokeWidth="2" />
    <circle cx="44" cy="28" r="10" stroke="currentColor" strokeWidth="2" />
    <circle cx="32" cy="16" r="8" stroke="currentColor" strokeWidth="2" />
    <line x1="4" y1="4" x2="60" y2="60" stroke="currentColor" strokeWidth="3" />
  </svg>
)

export const IconSterilize = (props: IconProps) => (
  <svg viewBox="0 0 64 64" fill="none" {...props}>
    <rect x="12" y="20" width="40" height="32" rx="4" stroke="currentColor" strokeWidth="2" />
    <path d="M20 20v-8h24v8M24 36h16M32 28v16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <circle cx="32" cy="36" r="12" stroke="currentColor" strokeWidth="2" />
  </svg>
)

export const IconEconomy = (props: IconProps) => (
  <svg viewBox="0 0 64 64" fill="none" {...props}>
    <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="2" />
    <path
      d="M32 16v32M24 24c0-4 4-6 8-6s8 2 8 6-4 6-8 8-8 4-8 8 4 6 8 6 8-2 8-6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
)

export const IconUniversal = (props: IconProps) => (
  <svg viewBox="0 0 64 64" fill="none" {...props}>
    <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="2" />
    <ellipse cx="32" cy="32" rx="12" ry="28" stroke="currentColor" strokeWidth="2" />
    <path d="M4 32h56M8 20h48M8 44h48" stroke="currentColor" strokeWidth="2" />
  </svg>
)

export const IconAuto = (props: IconProps) => (
  <svg viewBox="0 0 64 64" fill="none" {...props}>
    <circle cx="32" cy="32" r="12" stroke="currentColor" strokeWidth="2" />
    <path
      d="M32 4v8M32 52v8M4 32h8M52 32h8M12 12l6 6M46 46l6 6M12 52l6-6M46 18l6-6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
)
