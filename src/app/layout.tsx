import type { ReactNode } from 'react'

import 'tailwindcss/tailwind.css'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Paul Opmann</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <div className="flex justify-center items-center">
          <div className="max-w-[120rem] h-screen w-full bg-gray-800">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
