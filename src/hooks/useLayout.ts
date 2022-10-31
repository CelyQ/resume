import { useState, useEffect } from 'react'
import { useWindowSize } from './'

enum ScreenLayout {
  Mobile = 'mobile',
  Desktop = 'desktop'
}

export class Layout {
  private layout: ScreenLayout

  constructor(layout: ScreenLayout) {
    this.layout = layout
  }

  get isMobile() {
    return this.layout === ScreenLayout.Mobile
  }
  get isDesktop() {
    return this.layout === ScreenLayout.Desktop
  }
}

export default function useLayout() {
  const [layout, setLayout] = useState<Layout>(new Layout(ScreenLayout.Mobile))

  const windowSize = useWindowSize()
  const { width } = windowSize

  useEffect(() => {
    if (width <= 768) {
      setLayout(new Layout(ScreenLayout.Mobile))
    } else {
      setLayout(new Layout(ScreenLayout.Desktop))
    }
  }, [width])

  return layout
}
