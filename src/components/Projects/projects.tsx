'use client'

import Image from 'next/image'
import { useTheme } from 'next-themes'

import { Section, SectionHeader } from '@components/Section'
import { useEffect, useState } from 'react'

export function Projects() {
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const portfolioImageSRC =
    theme === 'dark'
      ? '/projects/paulopmann.png'
      : '/projects/paulopmann_dark.png'

  return (
    <Section id="projects" className="py-32">
      <SectionHeader prefix="03.">
        {/* eslint-disable-next-line quotes */}
        {"Some things I've built"}
      </SectionHeader>
      <div className="pt-20 pb-5 lg:pt-[120px] lg:pb-[60px]">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-1/2">
              <div className="mb-[60px] max-w-[510px]">
                <a
                  href="https://paulopmann.com/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-primary mb-2 block text-lg font-semibold"
                >
                  paulopmann.com
                </a>
                <h2 className="text-dark mb-4 text-3xl font-bold sm:text-4xl md:text-[40px]">
                  Personal Website
                </h2>
                <p className="text-body-color text-base">
                  This website is built with Next.js and Tailwind CSS. It is
                  hosted on Vercel and the source code is available on GitHub.
                </p>
              </div>

              <div className="mb-[60px] mr-0 lg:mr-4">
                <a
                  href="https://paulopmann.com/"
                  rel="noreferrer"
                  target="_blank"
                  className="block overflow-hidden mb-9 rounded-xl hover:scale-110 transition-transform duration-500 ease-in-out cursor-pointer"
                >
                  <Image
                    src={portfolioImageSRC}
                    width={350}
                    height={202}
                    alt="image"
                    className="w-full"
                  />
                </a>
                <div className="content">
                  <div className="mb-3 flex items-center">
                    <span className="bg-primary mr-3 inline-block h-[1px] w-6" />
                    <span className="text-primary text-sm font-semibold uppercase">
                      INVITATION
                    </span>
                  </div>
                  <h3>
                    <a
                      href="#"
                      className="text-dark hover:text-primary inline-block text-xl font-bold sm:text-2xl"
                    >
                      Mollis Ipsum Mattis
                    </a>
                  </h3>
                </div>
              </div>

              <div className="mb-[60px] mr-0 lg:mr-4">
                <a
                  href="https://paulopmann.com/"
                  rel="noreferrer"
                  target="_blank"
                  className="block overflow-hidden mb-9 rounded-xl hover:scale-110 transition-transform duration-500 ease-in-out cursor-pointer"
                >
                  <Image
                    src={portfolioImageSRC}
                    width={350}
                    height={202}
                    alt="image"
                    className="w-full"
                  />
                </a>
                <div className="content">
                  <div className="mb-3 flex items-center">
                    <span className="bg-primary mr-3 inline-block h-[1px] w-6" />
                    <span className="text-primary text-sm font-semibold uppercase">
                      INVITATION
                    </span>
                  </div>
                  <h3>
                    <a
                      href="#"
                      className="text-dark hover:text-primary inline-block text-xl font-bold sm:text-2xl"
                    >
                      Mollis Ipsum Mattis
                    </a>
                  </h3>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <div className="mb-[60px] ml-0 lg:ml-4">
                <a
                  href="https://paulopmann.com/"
                  rel="noreferrer"
                  target="_blank"
                  className="block overflow-hidden mb-9 rounded-xl hover:scale-110 transition-transform duration-500 ease-in-out cursor-pointer"
                >
                  <Image
                    src={portfolioImageSRC}
                    width={350}
                    height={202}
                    alt="image"
                    className="w-full"
                  />
                </a>
                <div className="content">
                  <div className="mb-3 flex items-center">
                    <span className="bg-primary mr-3 inline-block h-[1px] w-6" />
                    <span className="text-primary text-sm font-semibold uppercase">
                      STATIONARY
                    </span>
                  </div>
                  <h3>
                    <a
                      href="#"
                      className="text-dark hover:text-primary inline-block text-xl font-bold sm:text-2xl"
                    >
                      Ipsum Ultricies Cursus
                    </a>
                  </h3>
                </div>
              </div>

              <div className="mb-[60px] ml-0 lg:ml-4">
                <a
                  href="https://paulopmann.com/"
                  rel="noreferrer"
                  target="_blank"
                  className="block overflow-hidden mb-9 rounded-xl hover:scale-110 transition-transform duration-500 ease-in-out cursor-pointer"
                >
                  <Image
                    src={portfolioImageSRC}
                    width={350}
                    height={202}
                    alt="image"
                    className="w-full"
                  />
                </a>
                <div className="content">
                  <div className="mb-3 flex items-center">
                    <span className="bg-primary mr-3 inline-block h-[1px] w-6" />
                    <span className="text-primary text-sm font-semibold uppercase">
                      PRODUCT
                    </span>
                  </div>
                  <h3>
                    <a
                      href="#"
                      className="text-dark hover:text-primary inline-block text-xl font-bold sm:text-2xl"
                    >
                      Inceptos Euismod Egestas
                    </a>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
