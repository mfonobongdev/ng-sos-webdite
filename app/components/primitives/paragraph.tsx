import React from 'react'

type paragraphProps = {
  children: React.ReactNode
}

export default function ParagraphComponent({ children }: paragraphProps) {
  return <p className='font-Montserrat text-paragraphLight max-w-[30ch] font-medium lg:text-[18px] text-[10px] tracking-wide '>{children}</p>
}
