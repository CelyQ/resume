import type { ReactNode } from 'react'

import classNames from 'classnames'

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
      className={classNames(
        'dark:text-white text-gray-700 text-2xl font-khand font-bold',
        'after:top-[6px] after:-right-[20px] after:relative after:block after:w-[300px] after:h-[1px] after:dark:bg-orange-500 after:bg-blue-500',
        className
      )}
    >
      <span className="text-blue-500 dark:text-orange-500 pr-2">{prefix}</span>
      {children}
    </h2>
  )
}
