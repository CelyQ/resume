'use client'

import { useLayout } from '@/src/hooks'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames'
import { useTheme } from 'next-themes'

export default function Menu({ vertical }: { vertical?: boolean }) {
  const { theme, setTheme } = useTheme()
  const { isDesktop } = useLayout()

  const scrollTo = (id: string) => {
    const element = document.getElementById(id)
    if (!element) return

    element.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div
      className={classNames('font-khand', {
        'flex flex-col h-full justify-center': vertical
      })}
    >
      <ul
        className={classNames('flex gap-10 items-center font-semibold', {
          'flex-col': vertical
        })}
      >
        <li
          className="hover:cursor-pointer hover:text-blue-500 dark:hover:text-orange-500 text-slate-400"
          onClick={() => scrollTo('aboutme')}
        >
          <span className="text-blue-500 dark:text-orange-500">01.</span> About
        </li>
        <li
          className="hover:cursor-pointer hover:text-blue-500 dark:hover:text-orange-500 text-slate-400"
          onClick={() => scrollTo('experience')}
        >
          <span className="text-blue-500 dark:text-orange-500">02.</span>{' '}
          Experience
        </li>
        <li
          className="hover:cursor-pointer hover:text-blue-500 dark:hover:text-orange-500 text-slate-400"
          onClick={() => scrollTo('projects')}
        >
          <span className="text-blue-500 dark:text-orange-500">03.</span> Work
        </li>
        <li
          className="hover:cursor-pointer hover:text-blue-500 dark:hover:text-orange-500 text-slate-400"
          onClick={() => scrollTo('contactme')}
        >
          <span className="text-blue-500 dark:text-orange-500">04.</span>{' '}
          Contact
        </li>
        {isDesktop && (
          <li
            className="hover:cursor-pointer hover:text-blue-500 dark:hover:text-orange-500 text-slate-400"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            <FontAwesomeIcon
              icon={theme === 'dark' ? faSun : faMoon}
              width="20px"
              style={{ height: '20px' }}
            />
          </li>
        )}

        <li className="hover:cursor-pointer hover:text-blue-500 dark:hover:text-orange-500 text-slate-400">
          <a
            className="inline-block border border-blue-500 dark:border-orange-500 px-4 py-2 rounded-md text-blue-500 dark:text-orange-500 hover:dark:bg-orange-500/5 hover:bg-blue-500/5 font-bold"
            href="./paul_opmann.pdf"
            download="paul_opmann.pdf"
          >
            Resume
          </a>
        </li>
      </ul>
    </div>
  )
}
