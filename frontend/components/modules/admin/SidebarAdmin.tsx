'use client'
import { AdminSidebarMenu } from '@/app/contants/data'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const SidebarAdmin = () => {
  const pathname = usePathname()
  return (
    <div className='flex flex-col gap-4 w- h-screen'>
        {
          AdminSidebarMenu.map((item,index) => (
            <Link key={index} href={item.href} className={`rounded-md ${pathname.split('/')[2] === item.href.split('/')[2] ? 'translate-x-4 text-shop_light_green' : ''} flex items-center gap-3 p-3 hover:bg-gray-200 hover:translate-x-4 hoverEffect cursor-pointer`}>
              {item.icon}
              <span>{item.title}</span>
            </Link>
          ))
        }
    </div>
  )
}

export default SidebarAdmin
