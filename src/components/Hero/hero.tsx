import { Section } from '@components/Section'

export default function Hero() {
  return (
    <Section className="justify-center items-center">
      <div className="py-20">
        <h6 className="text-md md:text-2xl text-orange-400">Hi, my name is</h6>
        <h2 className="text-4xl md:text-7xl tracking-wide text-slate-200 py-2">
          Paul Opmann.
        </h2>
        <p className="text-lg md:text-5xl tracking-wider text-slate-400 py-2">
          I build things for the web.
        </p>
        <p className="text-sm md:text-lg text-slate-600 text-left max-w-[640px] leading-normal py-6 md:py-10">
          I’m a full-stack software engineer specializing in building
          exceptionally performant, scalable, and easy-to-maintain digital
          experiences.
        </p>
        <a
          className="inline-block py-3 px-6 my-2 text-orange-400 border border-orange-400 rounded-md hover:bg-orange-400/10"
          href="./paul_opmann.pdf"
          download="paul_opmann.pdf"
        >
          My Resume
        </a>
      </div>
    </Section>
  )
}
