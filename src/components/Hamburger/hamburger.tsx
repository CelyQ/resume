import { useAtom } from 'jotai'
import classNames from 'classnames'

import { drawerStateAtom } from 'src/app/atoms'

import styles from './hamburger.module.scss'

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
        className={styles.input}
        checked={isOpen}
        onChange={toggleDrawer}
      />
      <span className={classNames(styles.span, 'w-6/12')}></span>
      <span className={classNames(styles.span, 'w-full')}></span>
      <span className={classNames(styles.span, 'w-3/4')}></span>
    </label>
  )
}
