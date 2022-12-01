import type { ReactNode } from 'react'

import 'tailwindcss/tailwind.css'
import 'react-toastify/dist/ReactToastify.css'

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import './global.scss'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Paul Opmann</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </head>
      <body className="bg-slate-800">
        <div className="flex justify-center items-center">
          <div className="min-h-screen h-full w-fulㅣ">{children}</div>
        </div>
      </body>
    </html>
  )
}
