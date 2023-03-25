'use client'

import { useRef } from 'react'
import type SwiperCore from 'swiper'
import { Autoplay, Mousewheel } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Section, SectionHeader } from '@components/Section'

import { Card } from '../Card/Card'

export default function Experience() {
  const swiperRef = useRef<SwiperCore>()

  return (
    <Section
      id="experience"
      className="py-32 items-center mx-0 max-w-[100%!important] px-[0!important] md:px-[100px!important] w-full"
    >
      <SectionHeader prefix="02.">Technologies I work with</SectionHeader>

      <div className="flex w-full">
        <Swiper
          style={{
            padding: '2.5rem 0'
          }}
          // autoplay={{ delay: 5000, disableOnInteraction: false }}
          mousewheel={{ forceToAxis: true }}
          modules={[Autoplay, Mousewheel]}
          spaceBetween={14.6}
          slidesPerView="auto"
          onInit={(core: SwiperCore) => {
            swiperRef.current = core
          }}
        >
          <SwiperSlide className="max-h-[198px] max-w-[143px] p-2">
            <Card
              title="TypeScript"
              titleColor="white"
              imageSRC="/technologies/typescript.svg"
              background="#007acc"
            />
          </SwiperSlide>
          <SwiperSlide className="max-h-[198px] max-w-[143px] p-2">
            <Card
              title="Node JS"
              titleColor="white"
              imageSRC="/technologies/nodejs.svg"
              background="green"
            />
          </SwiperSlide>
          <SwiperSlide className="max-h-[198px] max-w-[143px] p-2">
            <Card
              title="Next.js"
              titleColor="black"
              imageSRC="/technologies/nextjs.svg"
              background="white"
            />
          </SwiperSlide>
          <SwiperSlide className="max-h-[198px] max-w-[143px] p-2">
            <Card
              title="Nest.js"
              titleColor="white"
              imageSRC="/technologies/nestjs.svg"
              background="#111827"
            />
          </SwiperSlide>
          <SwiperSlide className="max-h-[198px] max-w-[143px] p-2">
            <Card
              title="Deno"
              titleColor="black"
              imageSRC="/technologies/deno.svg"
              background="white"
            />
          </SwiperSlide>
          <SwiperSlide className="max-h-[198px] max-w-[143px] p-2">
            <Card
              title="Go"
              titleColor="white"
              imageSRC="/technologies/go.svg"
              background="#70d8e6"
            />
          </SwiperSlide>
          <SwiperSlide className="max-h-[198px] max-w-[143px] p-2">
            <Card
              title="Gin"
              titleColor="white"
              imageSRC="/technologies/gin.svg"
              background="#0c8fcf"
            />
          </SwiperSlide>
          <SwiperSlide className="max-h-[198px] max-w-[143px] p-2">
            <Card
              title="Python"
              titleColor="white"
              imageSRC="/technologies/python.svg"
              background="#6298c9"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </Section>
  )
}
