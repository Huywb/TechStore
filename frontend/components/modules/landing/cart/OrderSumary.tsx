'use client'
import { useStore } from '@/app/store/cart.store'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import OrderButton from '../OrderButton'

const OrderSumary = () => {

    const {total,subTotal,items} = useStore()

  return (
    <div className='bg-white p-4 flex flex-col gap-2 w-full h-fit'>
        <h1 className='text-xl font-bold'>Order Summary</h1>
        <div className='flex flex-col gap-2 text-sm'>
            <div className='flex justify-between text-gray-500'>
                <span>SubTotal</span>
                <span className='font-bold text-black'>${subTotal.toFixed(2)}</span>
            </div>
            <div className='flex justify-between text-gray-500'>
                <span>Discount</span>
                <span className='font-bold text-black'>${(subTotal-total).toFixed(2)}</span>
            </div>
        </div>
        <span className='h-[0.5] bg-gray-300'></span>
        <div className='flex justify-between font-bold'>
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
        </div>
        <OrderButton items={items}/>
    </div>
  )
}

export default OrderSumary
