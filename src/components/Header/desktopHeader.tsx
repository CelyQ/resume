import { Logo } from '../Logo'

export function DesktopHeader() {
  return (
    <div className="flex w-full bg-white">
      <div className="px-10 py-6 w-6/12 md:w-1/6 flex items-center justify-start">
        <Logo />
      </div>
      <div className="px-10 py-6 w-6/12 md:w-5/6 flex items-center justify-end">
        <ul className="flex gap-10">
          <li>01. About</li>
          <li>02. Experience</li>
          <li>03. Work</li>
          <li>04. Contact</li>
          <li>
            <button>RESUME</button>
          </li>
        </ul>
      </div>
    </div>
  )
}
