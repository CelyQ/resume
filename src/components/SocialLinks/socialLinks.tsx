import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function SocialLinks() {
  return (
    <div className="flex flex-col gap-y-5 text-xl h-min">
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
