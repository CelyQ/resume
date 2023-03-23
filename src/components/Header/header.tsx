'use client'

import type { ReactNode } from 'react'
import { useScroll } from '@hooks'
import classNames from 'classnames'

import { MobileHeader, DesktopHeader } from './'

export default function Header({ children }: { children: ReactNode }) {
  const { topOffset, dirrection } = useScroll()

  return (
    <div
      className={classNames(
        'fixed top-0 w-full transition-[top] ease-out duration-500 z-40 left-0',
        {
          '-top-28': dirrection === 'down',
          'bg-gray-50 dark:bg-slate-800': topOffset > 32
        }
      )}
    >
      <MobileHeader />
      <DesktopHeader>{children}</DesktopHeader>
    </div>
  )
}
