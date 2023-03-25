import { Section, SectionHeader } from '@components/Section'
import Image from 'next/image'

export default function AboutMe() {
  return (
    <Section
      id="aboutme"
      className="justify-center font-khand relative md:px-0 mx-0 px-0 w-full max-w-full"
    >
      {/* <div className="hidden md:block absolute left-0 w-full h-full top-[292px] bg-gray-100/50 dark:bg-slate-900/20" /> */}

      <div className="py-16 lg:py-24 relative max-w-7xl mx-auto z-10">
        <SectionHeader className="py-4 md:py-6 max-w-7xl" prefix="01.">
          About Me
        </SectionHeader>
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap items-center justify-between">
            <div className="w-full px-4 lg:w-6/12">
              <div className="aspect-[3/4] w-full relative">
                <Image alt="" src="/me.png" fill className="rounded-lg " />
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2 2xl:w-5/12 relative z-10">
              <div className="sm:mt-10 lg:mt-0">
                <span className="text-blue-500 dark:text-orange-400 block text-lg font-semibold mt-4 md:mt-0">
                  WHO AM I?
                </span>
                <h2 className="mb-11 text-3xl font-bold leading-tight text-gray-800 dark:text-slate-300 sm:text-4xl sm:leading-tight md:text-[40px] lg:text-4xl lg:leading-tight xl:text-[40px] font-rubik">
                  Full-Stack Software Engineer from Estonia
                </h2>
                <h3 className="mb-4 text-lg font-bold text-blue-500 dark:text-orange-400">
                  Lorem, ipsum.
                </h3>
                <p className="text-body-color mb-9 text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                  corrupti quaerat quo. Vitae quis deleniti ipsa magnam sed
                  beatae tenetur maxime officiis. Rerum minima esse harum
                  quaerat facilis a expedita.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
