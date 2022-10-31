'use client'

import { useEffect } from 'react'

import { Header } from '../components/Header'

export default function App() {
  useEffect(() => {
    globalThis.window.addEventListener('scroll', () => {
      console.log('scroll')
    })
  }, [])

  return (
    <>
      <Header />
    </>
  )
}
