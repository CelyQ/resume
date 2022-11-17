'use client'

import type { ReactNode } from 'react'
import { useLayout, useScrollDirection } from '@hooks'
import classNames from 'classnames'

import { MobileHeader, DesktopHeader } from './'

export default function Header({ children }: { children: ReactNode }) {
  const { isMobile } = useLayout()

  const scrollDirection = useScrollDirection()

  return (
    <div
      className={classNames(
        'fixed top-0 w-full transition-[top] ease-out duration-500',
        {
          '-top-28 bg-slate-900/10': scrollDirection === 'down'
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
