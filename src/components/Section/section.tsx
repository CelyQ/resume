import type { ReactNode } from 'react'
import classNames from 'classnames'

export default function Section({
  children,
  id,
  className
}: {
  children: ReactNode
  id?: string
  className?: string
}) {
  const classes = classNames(
    'flex flex-col w-full min-h-screen max-w-7xl px-10 md:px-28 overflow-hidden',
    className
  )

  return (
    <section id={id} className={classes}>
      {children}
    </section>
  )
}
