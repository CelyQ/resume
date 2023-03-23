import { Logo } from '../Logo'

export function DesktopHeader({ children }: { children: React.ReactNode }) {
  return (
    <div className="hidden md:flex text-slate-500">
      <div className="px-10 py-6 flex items-center justify-start">
        <Logo />
      </div>
      <div className="px-10 py-6 flex items-center justify-end text-sm md:ml-auto">
        {children}
      </div>
    </div>
  )
}
