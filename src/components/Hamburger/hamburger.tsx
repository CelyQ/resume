'use client'

import { useAtom } from 'jotai'
import { drawerStateAtom } from 'src/app/atoms'

import styled from 'styled-components'

const Input = styled.input`
  display: none;

  &:checked ~ span:nth-of-type(1) {
    transform-origin: bottom;
    transform: rotatez(45deg) translate(-8px, 14px);
  }

  &:checked ~ span:nth-of-type(2) {
    transform-origin: top;
    transform: rotatez(-45deg);
  }

  &:checked ~ span:nth-of-type(3) {
    transform-origin: bottom;
    width: 50%;
    transform: translate(-2px, -6px) rotatez(45deg);
  }
`

const Span = styled.span`
  transition: 0.4s cubic-bezier(0.68, -0.6, 0.32, 1.6);
`

export default function Hamburger() {
  const [isOpen, setIsOpen] = useAtom(drawerStateAtom)

  const toggleDrawer = () => setIsOpen(!isOpen)

  return (
    <label
      htmlFor="check"
      className="flex flex-col w-10 items-end hover:cursor-pointer"
    >
      <Input
        type="checkbox"
        id="check"
        checked={isOpen}
        onChange={toggleDrawer}
        className="hidden"
      />
      <Span className="bg-orange-400 rounded-lg h-1 my-1 w-6/12"></Span>
      <Span className="bg-orange-400 rounded-lg h-1 my-1 w-full"></Span>
      <Span className="bg-orange-400 rounded-lg h-1 my-1 w-3/4"></Span>
    </label>
  )
}
