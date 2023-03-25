'use client'

import { Providers } from './providers'

import '@styles/global.scss'

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import { Rubik_Bubbles, Khand } from 'next/font/google'

const rubik_bubbles = Rubik_Bubbles({
  display: 'swap',
  weight: '400',
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-rubik-bubbles'
})

const khand = Khand({
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-khand'
})

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <style jsx global>{`
        :root {
          --font-khand: ${khand.style.fontFamily};
          --font-rubik-bubbles: ${rubik_bubbles.style.fontFamily};
        }
      `}</style>
      <html suppressHydrationWarning>
        <head>
          <title>Paul Opmann</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/logo_light.svg" />
        </head>
        <body className="bg-gray-50 dark:bg-slate-800 overflow-x-hidden">
          <Providers>
            <div className="flex flex-col justify-center items-center w-full">
              {children}
            </div>
          </Providers>
        </body>
      </html>
    </>
  )
}
