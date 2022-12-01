import { Section, SectionHeader } from '@components/Section'

export default function Experience() {
  return (
    <Section id="experience" className="py-32 items-center">
      <div>
        <SectionHeader prefix="02.">
          {/* eslint-disable-next-line quotes */}
          {"Where I've worked"}
        </SectionHeader>
      </div>
    </Section>
  )
}
