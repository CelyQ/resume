'use client'

import classNames from 'classnames'
import { useAtom } from 'jotai'
import { drawerStateAtom } from 'src/app/atoms'

import classes from './hamburger.module.scss'

export default function Hamburger() {
  const [isOpen, setIsOpen] = useAtom(drawerStateAtom)

  const toggleDrawer = () => setIsOpen(!isOpen)

  return (
    <label
      htmlFor="check"
      className="flex flex-col w-10 items-end hover:cursor-pointer"
    >
      <input
        type="checkbox"
        id="check"
        checked={isOpen}
        onChange={toggleDrawer}
        className={classes.input}
      />
      <span
        className={classNames(
          classes.span,
          'bg-orange-400 rounded-lg h-1 my-1 w-6/12'
        )}
      ></span>
      <span
        className={classNames(
          classes.span,
          'bg-orange-400 rounded-lg h-1 my-1 w-full'
        )}
      ></span>
      <span
        className={classNames(
          classes.span,
          'bg-orange-400 rounded-lg h-1 my-1 w-3/4'
        )}
      ></span>
    </label>
  )
}
