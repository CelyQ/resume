import type { ReactNode } from 'react'
import { Logo } from '../Logo'

export function DesktopHeader({ children }: { children: ReactNode }) {
  return (
    <div className="flex w-full text-slate-500 bg-slate-800">
      <div className="px-10 py-6 w-6/12 md:w-1/6 flex items-center justify-start">
        <Logo />
      </div>
      <div className="px-10 py-6 w-6/12 md:w-5/6 flex items-center justify-end text-sm">
        {children}
      </div>
    </div>
  )
}
