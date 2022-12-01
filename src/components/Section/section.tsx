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
    'h-screen flex flex-col w-full max-w-7xl px-10 md:px-28',
    className
  )

  return (
    <section id={id} className={classes}>
      {children}
    </section>
  )
}
