import { Drawer } from '@components/Drawer'
import { Header } from '@components/Header'
import { Menu } from '@components/Menu'
import { Warning } from '@components/Warning'
import { SideUI } from '@components/SideUI'
import { SocialLinks } from '@components/SocialLinks'
import { Hero } from '@components/Hero'
import { AboutMe } from '@components/AboutMe'
import { Experience } from '@components/Experience'
import { Projects } from '@components/Projects'
import { ContactMe } from '../components/ContactMe'

export default function App() {
  return (
    <>
      <Header>
        <Menu />
      </Header>
      <Hero />
      <AboutMe />
      <Experience />
      <Projects />
      <ContactMe />
      <Drawer />
      <SideUI position="left">
        <SocialLinks />
      </SideUI>
      <SideUI position="right">
        <a href="mailto:paul.opmann@gmail.com" className="text-sm">
          paul.opmann@gmail.com
        </a>
      </SideUI>
      <Warning message="The website is under construction" />
    </>
  )
}
