import classNames from 'classnames'
import styles from './hamburger.module.css'

export default function Hamburger() {
  return (
    <label htmlFor="check" className="flex flex-col w-28">
      {/* <input type="checkbox" className={styles.inputSSS} /> */}
      <span className={classNames(styles.span, 'w-6/12')}></span>
      <span className={classNames(styles.span, 'w-full')}></span>
      <span className={classNames(styles.span, 'w-3/4')}></span>
    </label>
  )
}
