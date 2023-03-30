'use client'

import { Section, SectionHeader } from '@components/Section'
import { Card } from '../Card/Card'
import { Backend } from '../Technologies/Backend'
import { Frontend } from '../Technologies/Frontend'
import { Other } from '../Technologies/Other'

export function Skills() {
  return (
    <Section id="experience" className="pt-32 items-center max-w-[1790px]">
      <SectionHeader prefix="02.">Technologies I work with</SectionHeader>

      <div className="flex flex-col py-10 gap-y-4 w-full">
        <Backend />
        <Frontend />
        <Other />
      </div>

      <h3 className="text-2xl font-khand dark:text-gray-300 text-slate-800">
        I am currently learning
      </h3>
      <div className="flex justify-center items-center py-8 gap-x-4">
        <Card
          title="Rust"
          titleColor="black"
          imageSRC="/technologies/rust.svg"
          background="white"
        />
        <Card
          title="Vim"
          titleColor="white"
          imageSRC="/technologies/vim.svg"
          background="#005D04"
        />
      </div>
    </Section>
  )
}
