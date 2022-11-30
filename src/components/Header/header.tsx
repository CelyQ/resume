'use client'

import type { ReactNode } from 'react'
import { useLayout, useScroll } from '@hooks'
import classNames from 'classnames'

import { MobileHeader, DesktopHeader } from './'

export default function Header({ children }: { children: ReactNode }) {
  const { isMobile } = useLayout()
  const { topOffset, dirrection } = useScroll()

  return (
    <div
      className={classNames(
        'fixed top-0 w-full transition-[top] ease-out duration-500 z-10',
        {
          '-top-28': dirrection === 'down',
          'bg-slate-800': topOffset > 32
        }
      )}
    >
      {isMobile ? (
        <MobileHeader>{children}</MobileHeader>
      ) : (
        <DesktopHeader>{children}</DesktopHeader>
      )}
    </div>
  )
}
