import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function SocialLinks() {
  return (
    <div className="flex flex-col gap-y-5 text-xl h-min text-blue-500 dark:text-orange-400">
      <a
        href="https://www.upwork.com/freelancers/paulopmann2"
        target="_blank"
        rel="noreferrer"
      >
        <svg
          height={20}
          width={20}
          viewBox="0 0 2500 2500"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m2315.4 0h-2130.7c-102 0-184.7 80.2-184.7 179.1v2141.7c0 99 82.7 179.2 184.7 179.2h2130.7c102 0 184.6-80.3 184.6-179.2v-2141.7c0-98.9-82.6-179.1-184.6-179.1z"
            className="fill-blue-500 dark:fill-orange-400"
          />
          <path
            d="m1834.6 1453.7c-98.4 0-190.5-41.7-274.3-109.6l20.4-95.8.9-3.5c18.2-102 75.8-273.3 253-273.3 132.9 0 241 108.3 241 241.3-.4 132.6-108.5 240.9-241 240.9zm0-726.7c-226.4 0-401.9 147.3-473.2 389.5-109-163.7-191.4-360.2-239.7-525.7h-243.6v634.8c0 125.1-101.9 227.1-226.9 227.1s-226.8-102-226.8-227.1v-634.8h-243.7v634.8c-.9 260 210.5 473.4 470.1 473.4s471-213.4 471-473.4v-106.5c47.4 98.9 105.4 198.7 175.9 287.5l-149.3 702.7h249.5l108.1-509.7c94.8 60.8 203.8 98.9 328.8 98.9 267.2 0 484.7-219.2 484.7-486.7-.2-267-217.7-484.8-484.9-484.8z"
            className="fill-gray-100 dark:fill-slate-800"
          />
        </svg>
      </a>
      <a href="https://github.com/CelyQ" target="_blank" rel="noreferrer">
        <FontAwesomeIcon
          icon={faGithub}
          className="transition-transform duration-200 hover:cursor-pointer hover:-translate-y-1"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/paulopmann"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon
          icon={faLinkedin}
          className="transition-transform duration-200 hover:cursor-pointer hover:-translate-y-1"
        />
      </a>
    </div>
  )
}