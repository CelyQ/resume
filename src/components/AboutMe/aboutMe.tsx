import { Section, SectionHeader } from '@components/Section'
import Image from 'next/image'

export default function AboutMe() {
  return (
    <Section id="aboutme" className="py-32 justify-center">
      <SectionHeader className="py-4 md:py-6" prefix="01.">
        About Me
      </SectionHeader>

      <div className="flex justify-center items-center">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap items-center justify-between">
            <div className="w-full px-4 lg:w-6/12">
              <div className="relative mb-12 lg:mb-0">
                <div className="mx-auto max-w-[430px] rounded-tl-[50px] sm:rounded-tl-[70px]">
                  <Image
                    src="/me.png"
                    alt="about image"
                    className="w-full rounded-tl-[50px] sm:rounded-tl-[70px]"
                    height={412}
                    width={310}
                  />
                </div>
                <div className="bg-blue-500/90 dark:bg-orange-500/90 absolute bottom-0 right-0 z-10 max-w-[320px] overflow-hidden rounded-tr-[42px] py-8 px-6 text-xl font-bold text-gray-100 sm:px-10 sm:text-2xl">
                  Full Stack Web Developer
                  <div>
                    <span className="absolute left-0 top-0 -z-10">
                      <svg
                        width={115}
                        height={117}
                        viewBox="0 0 115 117"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          opacity="0.1"
                          x="-30.1333"
                          y="20.4912"
                          width={76}
                          height="131.304"
                          transform="rotate(-42.8643 -30.1333 20.4912)"
                          fill="url(#paint0_linear_1408_646)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_1408_646"
                            x1="7.8667"
                            y1="20.4912"
                            x2="7.8667"
                            y2="151.795"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="white" />
                            <stop
                              offset={1}
                              stopColor="white"
                              stopOpacity={0}
                            />
                          </linearGradient>
                        </defs>
                      </svg>
                    </span>
                    <span className="absolute top-0 right-0 -z-10">
                      <svg
                        width={239}
                        height={144}
                        viewBox="0 0 239 144"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          opacity="0.1"
                          x="0.872192"
                          y="-5.28418"
                          width="155.563"
                          height="209.511"
                          transform="rotate(-42.8643 0.872192 -5.28418)"
                          fill="url(#paint0_linear_1408_647)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_1408_647"
                            x1="78.6537"
                            y1="-5.28418"
                            x2="78.6537"
                            y2="204.226"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="white" />
                            <stop
                              offset={1}
                              stopColor="white"
                              stopOpacity={0}
                            />
                          </linearGradient>
                        </defs>
                      </svg>
                    </span>
                    <span className="absolute right-5 bottom-0 -z-10">
                      <svg
                        width={185}
                        height={116}
                        viewBox="0 0 185 116"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          opacity="0.1"
                          x="184.849"
                          y="118.71"
                          width="101.246"
                          height="161.199"
                          transform="rotate(137.136 184.849 118.71)"
                          fill="url(#paint0_linear_1408_648)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_1408_648"
                            x1="235.472"
                            y1="118.71"
                            x2="235.472"
                            y2="279.91"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="white" />
                            <stop
                              offset={1}
                              stopColor="white"
                              stopOpacity={0}
                            />
                          </linearGradient>
                        </defs>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2 2xl:w-5/12">
              <div className="mt-10 lg:mt-0">
                <span className="text-blue-500 dark:text-orange-500 mb-2 block text-lg font-bold md:mb-4">
                  Who am I?
                </span>
                <h2 className="mb-11 text-3xl font-bold leading-tight text-gray-700 dark:text-gray-300 sm:text-4xl sm:leading-tight md:text-5xl lg:text-4xl lg:leading-tight xl:text-5xl">
                  Tech loving guy from Estonia
                </h2>
                <div className="mb-8 flex">
                  <span className="text-blue-500 dark:text-orange-500 w-full max-w-[45px] pr-4 text-2xl font-bold">
                    01
                  </span>
                  <div className="w-full">
                    <h3 className="mb-4 text-xl font-bold text-gray-500 dark:text-gray-300 sm:text-2xl lg:text-xl xl:text-2xl">
                      Lorem ipsum
                    </h3>
                    <p className="text-gray-300 dark:text-gray-100 mb-9 text-base">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Hic sapiente consequuntur repellat obcaecati,
                      reprehenderit neque dolorem dolorum harum libero quia.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <span className="text-blue-500 dark:text-orange-500 w-full max-w-[45px] pr-4 text-2xl font-bold">
                    02
                  </span>
                  <div className="w-full">
                    <h3 className="mb-4 text-xl font-bold text-gray-500 dark:text-gray-300 sm:text-2xl lg:text-xl xl:text-2xl">
                      Lorem ipsum
                    </h3>
                    <p className="text-gray-300 dark:text-gray-100 mb-9 text-base">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Obcaecati repudiandae at est quibusdam assumenda
                      exercitationem tempore ad neque itaque autem.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
