'use client'
import { Capitalize } from '@/app/common/helper'
import { usePathname } from 'next/navigation'
import React from 'react'

const AdminHeader = () => {
    const pathname = usePathname()
  return (
    <div className='flex justify-between  bg-white text-black p-2 px-4 rounded-md'>
        <h2 className='text-2xl font-bold'>{Capitalize(pathname.split('/')[2])}</h2>
            <div className='flex items-center gap-2'>
                <span>Admin</span>
                <img src="https://i.pravatar.cc/300" alt="Avatar" className='w-8 h-8 rounded-full' />
            </div>
    </div>
  )
}

export default AdminHeader
