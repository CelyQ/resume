'use client'

import { useRef } from 'react'
import { Autoplay, Mousewheel, Navigation } from 'swiper'
import type SwiperCore from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Card } from '@components/Card/Card'
import { TechnologyCard } from '@/src/types/technologyCard.type'

import classes from './Row.module.scss'

export function Row({ technologies }: { technologies: TechnologyCard[] }) {
  const swiperRef = useRef<SwiperCore>()

  return (
    <Swiper
      className={classes.root}
      autoplay={{
        delay: 6000,
        pauseOnMouseEnter: false,
        disableOnInteraction: true
      }}
      mousewheel={{ forceToAxis: true }}
      modules={[Autoplay, Mousewheel, Navigation]}
      navigation
      spaceBetween={14}
      slidesPerView="auto"
      onInit={(core: SwiperCore) => {
        swiperRef.current = core
      }}
      onSlideChange={(core: SwiperCore) => {
        if (core.isEnd) {
          swiperRef.current?.el.style.setProperty(
            'transform',
            'translateX(-10px)'
          )
        } else {
          swiperRef.current?.el.style.removeProperty('transform')
        }
      }}
    >
      {technologies.map((t) => (
        <SwiperSlide key={t.title} className="max-h-[198px] max-w-[143px]">
          <Card
            title={t.title}
            titleColor={t.titleColor}
            imageSRC={t.imageSRC}
            background={t.background}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
