'use client'

import type { ReactNode } from 'react'
import { useLayout } from '@hooks'

import { MobileHeader, DesktopHeader } from './'

export default function Header({ children }: { children: ReactNode }) {
  const { isMobile } = useLayout()

  return isMobile ? (
    <MobileHeader>{children}</MobileHeader>
  ) : (
    <DesktopHeader>{children}</DesktopHeader>
  )
}
