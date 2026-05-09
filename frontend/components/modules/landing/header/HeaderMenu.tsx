'use client'
import { menuData } from '@/app/contants/data'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const HeaderMenu = () => {
    const pathname = usePathname()
  return (
    <div className='hidden md:inline-flex gap-7 items-center text-sm text-lightColor capitalize font-medium'>
        {
            menuData.map((menu)=>(
                <Link href={menu.href} key={menu.href} className={`${pathname === menu?.href && 'text-shop_light_green'} hover:text-shop_light_green hoverEffect relative group`}>
                    {menu.title}
                    <span className={`${pathname === menu?.href && 'w-1/2'} h-0.5 absolute w-0 -bottom-0.5 right-1/2  bg-shop_light_green group-hover:w-1/2 group-hover:right-0 hoverEffect`}></span>
                    <span className={`${pathname === menu?.href && 'w-1/2'} h-0.5 absolute w-0 -bottom-0.5 left-1/2  bg-shop_light_green group-hover:w-1/2 group-hover:left-0 hoverEffect`}></span>
                </Link>
            ))
        }
    </div>
  )
}

export default HeaderMenu
