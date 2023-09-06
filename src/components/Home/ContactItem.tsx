import React from "react";
import Link from "next/link";

interface IPropsContactItem {
    icon: JSX.Element;
    ariaLabel: string;
    href: string;
}

export function ContactItem({icon, ariaLabel, href}: IPropsContactItem) {
  return (
    <Link aria-label={ariaLabel} href={href} target="_blank">
      <div className='bg-blue-500 w-[40px] h-[40px] flex items-center justify-center rounded-full'>
          {icon}
      </div>
    </Link>
  )
}
