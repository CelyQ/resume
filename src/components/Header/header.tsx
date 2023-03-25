'use client'

import type { ReactNode } from 'react'
import { useScroll, useScrollLock } from '@hooks'
import classNames from 'classnames'

import { MobileHeader, DesktopHeader } from './'

import { useAtom } from 'jotai'
import { drawerStateAtom } from '@/src/app/atoms'

export default function Header({ children }: { children: ReactNode }) {
  const { topOffset, dirrection } = useScroll()
  const [isDrawerOpen] = useAtom(drawerStateAtom)

  useScrollLock(isDrawerOpen)

  return (
    <div
      className={classNames(
        'fixed top-0 w-full transition-[top] ease-out duration-500 z-40 left-0',
        {
          '-top-28': dirrection === 'down',
          'bg-gray-50 dark:bg-slate-800': topOffset > 32,
          'bg-transparent dark:bg-transparent': isDrawerOpen
        }
      )}
    >
      <MobileHeader />
      <DesktopHeader>{children}</DesktopHeader>
    </div>
  )
}
