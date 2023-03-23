'use client'

import { Logo } from '@components/Logo'
import { Hamburger } from '@components/Hamburger'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTheme } from 'next-themes'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

export function MobileHeader() {
  const { theme, setTheme } = useTheme()
  return (
    <>
      <div className="flex md:hidden w-full justify-between items-center top-0 z-30">
        <div className="px-10 py-6">
          <Logo />
        </div>
        <div className="px-10 py-6 relative flex gap-x-8 items-center">
          <button
            type="button"
            className="hover:cursor-pointer hover:text-blue-500 dark:hover:text-orange-500 dark:text-orange-500 text-blue-500 flex"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            <FontAwesomeIcon
              icon={theme === 'dark' ? faSun : faMoon}
              style={{ height: '25px', width: '25px' }}
            />
          </button>
          <Hamburger />
        </div>
      </div>
    </>
  )
}
