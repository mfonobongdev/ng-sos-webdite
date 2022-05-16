import React from 'react'
import cx from 'clsx'

type headlineProps = {
  children: React.ReactNode
  small?: boolean
  medium?: boolean
  thin?: boolean
  semi?: boolean
  footer?: boolean
}

export default function HeadLineComponent({ children, small, medium, thin, semi, footer }: headlineProps) {
  return (
    <h1
      className={cx('font-Montserrat', {
        'md:text-sm text-xs font-semibold tracking-wide leading-[60px]': small,
        'md:max-w-[30ch] text-[26px] font-light tracking-wide leading-[43px]': thin,
        'md:max-w-[30ch] text-[32px] font-semibold tracking-wide leading-[43px]': medium,
        'md:max-w-[30ch] text-[62px] font-semibold tracking-wide leading-[43px]': semi,
        'md:max-w-[10ch] lg:text-[104px] md:text-[60px] text-[40px] font-normal tracking-wide lg:leading-[104px] md:leading-[60px] leading-[40px]':
          !small && !medium && !footer && !thin && !semi,
        'text-white md:max-w-[10ch] lg:text-[104px] md:text-[60px] text-[40px] font-normal tracking-wide lg:leading-[104px] md:leading-[60px] leading-[40px]':
          footer
      })}>
      {children}
    </h1>
  )
}
