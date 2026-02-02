type LogoProps = {
  variant?: 'default' | 'footer'
  className?: string
}

const TEXT_BASE_X = 50
const TEXT_Y = 33
const FONT_SIZE = 24

export function Logo({ variant = 'default', className }: LogoProps) {
  const gradientId = variant === 'footer' ? 'logoGradFooter' : 'logoGrad'
  const textGradientId = variant === 'footer' ? 'logoTextGradFooter' : 'logoTextGrad'
  const textColor = variant === 'footer' ? '#FFFFFF' : '#0f172a'

  return (
    <svg width="160" height="40" viewBox="0 0 200 50" className={className}>
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#22C55E' }} />
          <stop offset="100%" style={{ stopColor: '#0EA5E9' }} />
        </linearGradient>
        <linearGradient id={textGradientId} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: '#22C55E' }} />
          <stop offset="100%" style={{ stopColor: '#0EA5E9' }} />
        </linearGradient>
      </defs>
      <circle cx="18" cy="25" r="10" fill={`url(#${gradientId})`} />
      <circle cx="38" cy="18" r="8" fill={`url(#${gradientId})`} opacity="0.8" />
      <circle cx="38" cy="32" r="8" fill={`url(#${gradientId})`} opacity="0.8" />
      <line x1="25" y1="21" x2="32" y2="18" stroke={`url(#${gradientId})`} strokeWidth="2" />
      <line x1="25" y1="29" x2="32" y2="32" stroke={`url(#${gradientId})`} strokeWidth="2" />
      <text
        x={TEXT_BASE_X}
        y={TEXT_Y}
        fontFamily="Inter, sans-serif"
        fontSize={FONT_SIZE}
        fontWeight="700"
        style={{ letterSpacing: '-0.02em' }}
      >
        <tspan fill={textColor}>Ozon</tspan>
        <tspan fill={`url(#${textGradientId})`}>Oxy</tspan>
      </text>
    </svg>
  )
}
