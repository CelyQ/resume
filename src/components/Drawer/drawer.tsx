'use client'

import { useAtom } from 'jotai'
import classNames from 'classnames'
import { drawerStateAtom } from 'src/app/atoms'
import { Menu } from '@components/Menu'
import { useLayout, useScrollLock } from '@hooks'
import { Overlay } from '@components/Overlay'

export default function Drawer() {
  const [isOpen, setIsOpen] = useAtom(drawerStateAtom)
  const { isDesktop } = useLayout()
  useScrollLock(isOpen)

  if (isDesktop) return null

  return (
    <>
      <Overlay isOpen={isOpen} onClick={() => setIsOpen(false)} />
      <div
        className={classNames(
          'w-2/3 h-screen bg-slate-800 fixed top-0 right-0 transition-[margin] duration-300 -mr-[1000px]',
          {
            '!mr-0': isOpen
          }
        )}
      >
        <div className="flex flex-col items-center justify-center h-full">
          <Menu vertical />
        </div>
      </div>
    </>
  )
}
