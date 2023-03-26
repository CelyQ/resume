'use client'

import { Section, SectionHeader } from '@components/Section'
import { Backend } from '../Technologies/Backend'
import { Frontend } from '../Technologies/Frontend'
import { Other } from '../Technologies/Other'

export default function Experience() {
  return (
    <Section id="experience" className="py-32 items-center max-w-[1790px]">
      <SectionHeader prefix="02.">Technologies I work with</SectionHeader>

      <div className="flex flex-col py-10 gap-y-4 w-full">
        <Backend />
        <Frontend />
        <Other />
      </div>
    </Section>
  )
}
