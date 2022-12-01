import { Section, SectionHeader } from '@components/Section'

export default function Projects() {
  return (
    <Section id="projects" className="py-32">
      <div>
        <SectionHeader prefix="03.">
          {/* eslint-disable-next-line quotes */}
          {"Some things I've built"}
        </SectionHeader>
      </div>
    </Section>
  )
}
