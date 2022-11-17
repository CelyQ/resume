import classNames from 'classnames'

export default function Menu({ vertical }: { vertical?: boolean }) {
  return (
    <div
      className={classNames({
        'flex flex-col h-full justify-center': vertical
      })}
    >
      <ul
        className={classNames('flex gap-10 items-center', {
          'flex-col': vertical
        })}
      >
        <li className="hover:cursor-pointer hover:text-orange-500 text-slate-400">
          <span className="text-orange-500">01.</span> About
        </li>
        <li className="hover:cursor-pointer hover:text-orange-500 text-slate-400">
          <span className="text-orange-500">02.</span> Experience
        </li>
        <li className="hover:cursor-pointer hover:text-orange-500 text-slate-400">
          <span className="text-orange-500">03.</span> Work
        </li>
        <li className="hover:cursor-pointer hover:text-orange-500 text-slate-400">
          <span className="text-orange-500">04.</span> Contact
        </li>
        <li className="hover:cursor-pointer hover:text-orange-500 text-slate-400">
          <a
            className="inline-block border border-orange-500 px-3 py-2 rounded-md text-orange-500 hover:bg-orange-500/5"
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
