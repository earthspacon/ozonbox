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

export const IconWarehouse = (props: IconProps) => (
  <svg viewBox="0 0 64 64" fill="none" {...props}>
    <path d="M8 56V24l24-16 24 16v32" stroke="currentColor" strokeWidth="2" />
    <path d="M8 56h48M8 40h48M8 32h48" stroke="currentColor" strokeWidth="2" />
    <rect x="14" y="36" width="10" height="12" stroke="currentColor" strokeWidth="2" />
    <rect x="40" y="36" width="10" height="12" stroke="currentColor" strokeWidth="2" />
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
  <svg viewBox="0 0 30 30" fill="currentColor" {...props}>
    <path d="M 25.154297 3.984375 C 24.829241 3.998716 24.526384 4.0933979 24.259766 4.2011719 C 24.010014 4.3016357 23.055766 4.7109106 21.552734 5.3554688 C 20.048394 6.0005882 18.056479 6.855779 15.931641 7.7695312 C 11.681964 9.5970359 6.9042108 11.654169 4.4570312 12.707031 C 4.3650097 12.746607 4.0439208 12.849183 3.703125 13.115234 C 3.3623292 13.381286 3 13.932585 3 14.546875 C 3 15.042215 3.2360676 15.534319 3.5332031 15.828125 C 3.8303386 16.121931 4.144747 16.267067 4.4140625 16.376953 C 5.3912284 16.775666 8.4218473 18.015862 8.9941406 18.25 C 9.195546 18.866983 10.29249 22.222526 10.546875 23.044922 C 10.714568 23.587626 10.874198 23.927519 11.082031 24.197266 C 11.185948 24.332139 11.306743 24.45034 11.453125 24.542969 C 11.511635 24.579989 11.575789 24.608506 11.640625 24.634766 L 11.644531 24.636719 C 11.659471 24.642719 11.67235 24.652903 11.6875 24.658203 C 11.716082 24.668202 11.735202 24.669403 11.773438 24.677734 C 11.925762 24.726927 12.079549 24.757812 12.216797 24.757812 C 12.80196 24.757814 13.160156 24.435547 13.160156 24.435547 L 13.181641 24.419922 L 16.191406 21.816406 L 19.841797 25.269531 C 19.893193 25.342209 20.372542 26 21.429688 26 C 22.057386 26 22.555319 25.685026 22.875 25.349609 C 23.194681 25.014192 23.393848 24.661807 23.478516 24.21875 L 23.478516 24.216797 C 23.557706 23.798129 26.921875 6.5273437 26.921875 6.5273438 L 26.916016 6.5507812 C 27.014496 6.1012683 27.040303 5.6826405 26.931641 5.2695312 C 26.822973 4.8564222 26.536648 4.4608905 26.181641 4.2480469 C 25.826669 4.0352506 25.479353 3.9700339 25.154297 3.984375 z M 24.966797 6.0742188 C 24.961997 6.1034038 24.970391 6.0887279 24.962891 6.1230469 L 24.960938 6.1347656 L 24.958984 6.1464844 C 24.958984 6.1464844 21.636486 23.196371 21.513672 23.845703 C 21.522658 23.796665 21.481573 23.894167 21.439453 23.953125 C 21.379901 23.91208 21.257812 23.859375 21.257812 23.859375 L 21.238281 23.837891 L 16.251953 19.121094 L 12.726562 22.167969 L 13.775391 17.96875 C 13.775391 17.96875 20.331562 11.182109 20.726562 10.787109 C 21.044563 10.471109 21.111328 10.360953 21.111328 10.251953 C 21.111328 10.105953 21.035234 10 20.865234 10 C 20.712234 10 20.506484 10.14875 20.396484 10.21875 C 18.963383 11.132295 12.671823 14.799141 9.8515625 16.439453 C 9.4033769 16.256034 6.2896636 14.981472 5.234375 14.550781 C 5.242365 14.547281 5.2397349 14.548522 5.2480469 14.544922 C 7.6958673 13.491784 12.47163 11.434667 16.720703 9.6074219 C 18.84524 8.6937992 20.838669 7.8379587 22.341797 7.1933594 C 23.821781 6.5586849 24.850125 6.1218894 24.966797 6.0742188 z" />
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
