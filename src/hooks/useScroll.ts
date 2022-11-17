import { useEffect, useState, useCallback } from 'react'

export default function useScroll() {
  const [scrollDir, setScrollDir] = useState<'up' | 'down'>('up')
  const [lastScrollTop, setLastScrollTop] = useState(0)

  const handleScroll = useCallback(() => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    const startsWith = 32

    if (scrollTop > lastScrollTop && scrollTop > startsWith) {
      setScrollDir('down')
    } else {
      setScrollDir('up')
    }

    setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop)
  }, [lastScrollTop])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll, lastScrollTop, scrollDir])

  return {
    topOffset: lastScrollTop,
    dirrection: scrollDir
  }
}
