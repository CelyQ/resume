import type { ReactNode } from 'react'

import { Logo } from '@components/Logo'
import { Hamburger } from '@components/Hamburger'

export function MobileHeader({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="flex w-full justify-between items-center top-0 z-10">
        <div className="px-10 py-6">
          <Logo />
        </div>
        <div className="px-10 py-6 relative z-10">
          <Hamburger />
        </div>
      </div>
    </>
  )
}
