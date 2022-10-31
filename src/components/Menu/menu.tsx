export default function Menu() {
  return (
    <ul className="flex gap-10 items-center">
      <li className="hover:cursor-pointer hover:text-orange-500">
        <span className="text-orange-500">01.</span> About
      </li>
      <li className="hover:cursor-pointer hover:text-orange-500">
        <span className="text-orange-500">02.</span> Experience
      </li>
      <li className="hover:cursor-pointer hover:text-orange-500">
        <span className="text-orange-500">03.</span> Work
      </li>
      <li className="hover:cursor-pointer hover:text-orange-500">
        <span className="text-orange-500">04.</span> Contact
      </li>
      <li className="hover:cursor-pointer hover:text-orange-500">
        <button className="border border-orange-500 px-3 py-2 rounded-md text-orange-500 hover:bg-orange-500/5">
          Resume
        </button>
      </li>
    </ul>
  )
}
