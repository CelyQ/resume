'use client'

import { useTheme } from 'next-themes'
import { useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'

export default function Warning({ message }: { message: string }) {
  const { theme } = useTheme()

  useEffect(() => {
    let id: string

    if (process.env.NODE_ENV === 'production') {
      id = toast
        .info(message, {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          theme: theme === 'dark' ? 'dark' : 'colored'
        })
        .toString()
    }

    return () => {
      if (id) {
        toast.dismiss(id)
      }
    }
  }, [message, theme])

  return <ToastContainer newestOnTop style={{ top: '84px' }} />
}
