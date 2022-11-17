import { Drawer } from '@components/Drawer'
import { Header } from '@components/Header'
import { Menu } from '@components/Menu'
import { Warning } from '@components/Warning'

export default function App() {
  return (
    <>
      <Header>
        <Menu />
      </Header>
      <section className="h-screen flex flex-col w-full justify-center items-center">
        <div className="py-20 px-10">
          <h6 className="text-md md:text-2xl text-orange-400">
            Hi, my name is
          </h6>
          <h2 className="text-4xl md:text-6xl text-slate-200 py-2">
            Paul Opmann.
          </h2>
          <p className="text-lg md:text-2xl text-slate-400">
            I build things for the web.
          </p>
          <p className="text-sm md:text-lg py-2 text-slate-600 text-left max-w-[540px] leading-normal">
            I’m a full-stack software engineer specializing in building
            exceptionally performant, scalable, and easy-to-maintain digital
            experiences.
          </p>
          <a
            className="inline-block py-3 px-6 my-10 text-orange-400 border border-orange-400 rounded-md hover:bg-orange-400/10"
            href="./PaulOpmann.pdf"
            download="PaulOpmann.pdf"
          >
            My Resume
          </a>
        </div>
      </section>
      <section className="h-screen"></section>
      <Drawer />
      <Warning message="The website is under construction" />
    </>
  )
}
