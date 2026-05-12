import { productType } from '@/app/contants/data'
import Link from 'next/link'
import React from 'react'

interface ProductTabProps {
    selectedTab: string,
    setSelectedTab: (selected: string) => void
}

const ProductTab:React.FC<ProductTabProps> = ({selectedTab,setSelectedTab}) => {

   

    const handleChangeSelected =(selected:string)=>{
        setSelectedTab(selected)
    }
  return (
    <section className='flex justify-between flex-wrap items-center mb-5'>
      <div className='flex gap-4'>
        {
            productType.map((item)=>(
                <div onClick={()=>handleChangeSelected(item.value)}  key={item.title} className={`${selectedTab === item.value ? 'bg-shop_light_green text-white' : ''} font-semibold text-sm px-4 py-2  rounded-full cursor-pointer bg-shop_btn_dark_green/20 text-shop_btn_dark_green hover:bg-shop_light_green hover:text-white hoverEffect`}>
                    {item.title}
                </div>
            ))
        }
      </div>
      <Link href={'/shop'} className='border py-2 px-4 rounded-full text-sm text-gray-700 hover:text-gray-950 hoverEffect cursor-pointer'>See more</Link>
    </section>
  )
}

export default ProductTab
