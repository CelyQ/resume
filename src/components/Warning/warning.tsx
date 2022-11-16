'use client'

import { useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'

export default function Warning({ message }: { message: string }) {
  useEffect(() => {
    let id: string

    if (process.env.NODE_ENV === 'production') {
      id = toast
        .warn(message, {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          theme: 'dark'
        })
        .toString()
    }

    return () => {
      if (id) {
        toast.dismiss(id)
      }
    }
  }, [message])

  return <ToastContainer newestOnTop />
}
