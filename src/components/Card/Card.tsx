'use client'

import classNames from 'classnames'
import Image from 'next/image'
import { useCallback, useEffect, useReducer, useRef } from 'react'

import classes from './Card.module.scss'

const reducer = (
  state: {
    x: number
    y: number
    width: number
    height: number
    mouseLeaveDelay: NodeJS.Timeout | null
  },
  action: {
    type: string
    payload: any
  }
) => {
  switch (action.type) {
    case 'set_width_and_height':
      return {
        ...state,
        width: action.payload.width,
        height: action.payload.height
      }
    case 'set_mouse_position':
      return {
        ...state,
        x: action.payload.x,
        y: action.payload.y
      }
    default:
      return { ...state }
  }
}

export function Card({
  title,
  titleColor,
  background,
  imageSRC
}: {
  title: string
  titleColor: string
  background: string
  imageSRC: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [state, dispatch] = useReducer(reducer, {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    mouseLeaveDelay: null
  })

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!ref.current) return

      const { current: anchorElement } = ref

      const mouseX =
        e.clientX -
        anchorElement.getBoundingClientRect().left -
        anchorElement.offsetWidth / 2
      const mouseY =
        e.clientY -
        anchorElement.getBoundingClientRect().top -
        anchorElement.offsetHeight / 2

      dispatch({
        type: 'set_mouse_position',
        payload: {
          x: mouseX,
          y: mouseY
        }
      })
    },

    [ref]
  )

  useEffect(() => {
    if (!ref.current) return

    const anchorElement = ref.current
    const { offsetWidth, offsetHeight } = anchorElement

    dispatch({
      type: 'set_width_and_height',
      payload: {
        width: offsetWidth,
        height: offsetHeight
      }
    })

    const handleMouseEnter = () => {
      const timeout = state.mouseLeaveDelay
      if (timeout) clearTimeout(timeout)
    }

    const handleMouseLeave = () => {
      dispatch({
        type: 'set_mouseleave_delay',
        payload: {
          mouseLeaveDelay: setTimeout(() => {
            dispatch({
              type: 'set_mouse_position',
              payload: {
                x: 0,
                y: 0
              }
            })
          }, 1000)
        }
      })
    }

    anchorElement.addEventListener('mousemove', handleMouseMove)
    anchorElement.addEventListener('mouseenter', handleMouseEnter)
    anchorElement.addEventListener('mouseleave', handleMouseLeave)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const mousePX = state.x / state.width
  const mousePY = state.y / state.height

  const getCardStyle = () => {
    const rX = mousePX * 30
    const rY = mousePY * -30

    return {
      transform: `rotateY(${rX}deg) rotateX(${rY}deg)`
    }
  }

  const getCardBgStyle = () => {
    const tX = mousePX * -1
    const tY = mousePY * -1

    return {
      transform: `translateX(${tX}px) translateY(${tY}px)`
    }
  }

  return (
    <div className={classes.root} ref={ref} onClick={() => {}}>
      <div
        className={classNames(classes.card, 'bg-slate-200')}
        style={getCardStyle()}
      >
        <div
          className={classNames(classes.cardBg, 'flex flex-col items-center')}
          style={{ ...getCardBgStyle(), background }}
        >
          <Image
            width="40"
            height="40"
            alt=""
            src={imageSRC}
            className="aspect-video max-h-[110px] w-full object-contain mt-4 py-2"
          />
          <div className="w-full h-full flex justify-center items-center">
            <h3
              className="font-khand"
              style={{
                color: titleColor
              }}
            >
              {title}
            </h3>
          </div>
        </div>
      </div>
    </div>
  )
}
