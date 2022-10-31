import { useLayout } from '../../hooks'
import { MobileHeader, DesktopHeader } from './'

export default function Header() {
  const { isMobile } = useLayout()

  return isMobile ? <MobileHeader /> : <DesktopHeader />
}
