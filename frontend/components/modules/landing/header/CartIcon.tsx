import { ShoppingBag } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const CartIcon = () => {
  return (
    <Link href={'/cart'} className='relative'>
      <ShoppingBag className='w-5 h-5 hover:text-shop_light_green hoverEffect'/>
      <span className='hover:text-shop_light_green absolute -right-1 -top-1 w-3.5 h-3.5 text-xs bg-shop_dark_green text-white rounded-full flex items-center justify-center'>0</span>
    </Link>
  )
}

export default CartIcon
