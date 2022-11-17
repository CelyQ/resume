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
      <section className="flex flex-col w-full my-[84px] justify-center items-center">
        <div className="py-20 px-10">
          <h6 className="text-lg text-orange-400">Hi, my name is</h6>
          <h2 className="text-4xl text-slate-200 py-2">Paul Opmann.</h2>
          <p className="text-slate-400">I build things for the web.</p>
          <p className="py-2 text-slate-600">
            I’m a full-stack software engineer specializing in building
            exceptionally performant, scalable, and easy-to-maintain digital
            experiences.
          </p>
          <button className="py-3 px-6 my-10 text-orange-400 border border-orange-400 rounded-md hover:bg-orange-400/10">
            My Resume
          </button>
        </div>
      </section>
      <section className="h-screen"></section>
      <Drawer />
      <Warning message="The website is under construction" />
    </>
  )
}
