'use client'

import type { ReactNode } from 'react'
import classNames from 'classnames'

import classes from './sideUI.module.scss'

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
      <div className={classNames(classes.line, 'px-1')} />
    </div>
  )
}
