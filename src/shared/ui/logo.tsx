// import Image from 'next/image'

import LogoIcon from '@/shared/assets/icons/ozonoxy-1.svg'

// import LogoImage from '@/shared/assets/ozonoxy-1.png'

type LogoProps = {
  variant?: 'default' | 'footer'
  className?: string
}

export function Logo({ className }: LogoProps) {
  // return <Image src={LogoImage.src} width={160} height={40} alt="OZONOXY" className={className} />
  return <LogoIcon className={className} />
}
