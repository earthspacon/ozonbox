import { useEffect, useState } from 'react'

export const useIsMobile = (params?: { query?: string }) => {
  const { query = '(max-width: 64rem)' } = params || {}
  const [isMobile, setIsMobile] = useState<boolean>(false)

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(matchesMobile(query))
    }

    checkIsMobile()
    window.addEventListener('resize', checkIsMobile)
    return () => window.removeEventListener('resize', checkIsMobile)
  }, [])

  return isMobile
}

export function matchesMobile(query?: string) {
  if (typeof window === 'undefined') return false

  const matchMedia = window.matchMedia(query || '(max-width: 64rem)')
  return matchMedia.matches
}
