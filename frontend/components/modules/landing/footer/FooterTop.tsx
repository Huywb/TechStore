import { footerTopData } from '@/app/contants/data'
import React from 'react'

const FooterTop = () => {


  return (
    <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 px-10  border-b border-t border-b-black/20 py-6'>
        {
            footerTopData.map(item=>(
                <div className='flex gap-4 items-center text-sm md:tetx-xl' key={item.description}>
                    <div>{item.icon}</div>
                    <div className='flex flex-col'>
                        <h3 className='font-semibold'>{item.title}</h3>
                        <span className='text-gray-500'>{item.description}</span>
                    </div>
                </div>
            ))
        }
    </section>
  )
}

export default FooterTop
