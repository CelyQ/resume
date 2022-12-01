import type { ReactNode } from 'react'

import classNames from 'classnames'
import classes from './sectionHeader.module.scss'

export default function SectionHeader({
  children,
  prefix,
  className
}: {
  children: ReactNode
  prefix: string
  className?: string
}) {
  return (
    <h2
      className={classNames('text-white text-2xl', classes.header, className)}
    >
      <span className="text-orange-500 pr-2">{prefix}</span>
      {children}
    </h2>
  )
}
