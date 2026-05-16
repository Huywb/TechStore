import { ArrowBigLeftIcon, TruckIcon } from 'lucide-react'
import React from 'react'

const Benefit = () => {
  return (
    <div className='flex w-full flex-col text-sm'>
        <div className='border p-4 flex gap-2 items-center'>
            <TruckIcon  className='text-shop_orange'/>
            <div className='flex flex-col'>
                <h3 className='font-bold '>Free Delivery</h3>
                <span className='text-sm text-gray-500 underline'>Enter your Postal code for Delivery Availability</span>
            </div>
        </div>
        
        <div className='border p-4  flex gap-2 items-center'>
            <ArrowBigLeftIcon  className='text-shop_orange'/>
            <div className='flex flex-col'>
                <h3 className='font-bold '>Return Delivery</h3>
                <span className='text-sm text-gray-500 underline'>Free 30 days Delivery Return</span>
            </div>
        </div>
    </div>
  )
}

export default Benefit
