import type { ReactNode } from 'react'

import 'tailwindcss/tailwind.css'
import 'react-toastify/dist/ReactToastify.css'

import './fonts.scss'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Paul Opmann</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <div className="flex justify-center items-center">
          <div className="max-w-[120rem] min-h-screen w-full bg-slate-800">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
