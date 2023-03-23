'use client'

import { Providers } from './providers'

import '@styles/global.scss'

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import { Rubik_Bubbles } from 'next/font/google'

const rubik_bubbles = Rubik_Bubbles({
  display: 'swap',
  weight: '400',
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-rubik-bubbles'
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
          --font-rubik-bubbles: ${rubik_bubbles.style.fontFamily};
        }
      `}</style>
      <html suppressHydrationWarning>
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/logo.svg" />
        </head>
        <body className="bg-gray-50 dark:bg-slate-800 font-rubik">
          <Providers>
            <div className="flex justify-center items-center">
              <div className="h-full">{children}</div>
            </div>
          </Providers>
        </body>
      </html>
    </>
  )
}
