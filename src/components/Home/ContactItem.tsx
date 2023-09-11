import React from 'react'
import Link from 'next/link'

interface IPropsContactItem {
  icon: JSX.Element
  ariaLabel: string
  href: string
}

export function ContactItem({ icon, ariaLabel, href }: IPropsContactItem) {
  return (
    <Link aria-label={ariaLabel} href={href} target="_blank">
      <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-blue-500">
        {icon}
      </div>
    </Link>
  )
}
