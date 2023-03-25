'use client'

import type { ReactNode } from 'react'
import classNames from 'classnames'

export default function SideUI({
  position,
  children
}: {
  position: 'left' | 'right'
  children: ReactNode
}) {
  return (
    <div
      className={classNames(
        'hidden md:flex flex-col fixed h-1/2 bottom-0 justify-end z-30 px-10',
        {
          'left-0': position === 'left',
          'right-0': position === 'right'
        }
      )}
    >
      {children}
      <div
        className={
          'px-1 after:block after:w-[1px] after:h-[90px] after:my-0 after:mx-auto after:bg-blue-500 after:dark:bg-orange-400 after:gap-y-5 after:mt-8'
        }
      />
    </div>
  )
}
