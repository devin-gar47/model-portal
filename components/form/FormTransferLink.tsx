import Link from 'next/link'
import React from 'react'

interface FormTransferLink {
  link: string
  text: string
}

export default function FormTransferLink({link, text}: FormTransferLink) {
  return (
    <div className="mt-3 text-black text-center">
      <Link href={link}>{text}</Link>
    </div>
  )
}
