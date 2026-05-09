import Link from 'next/link'
import React from 'react'

interface ItemMenu {
  title: string,
  url: string,
}

interface SubMenuFooterProps{
  title: string,
  items : ItemMenu[]
}

const SubMenuFooter:React.FC<SubMenuFooterProps>= ({title,items}) => {
  return (
    <div className='flex flex-col gap-4'>
      <h1 className='font-bold mb-1'>{title}</h1>
      {
        items.map((item)=>(
          <Link key={item.title} href={item.url} className='text-sm text-gray-500 hover:text-gray-900 hoverEffect'>{item.title}</Link>
        ))
      }
    </div>
  )
}

export default SubMenuFooter
