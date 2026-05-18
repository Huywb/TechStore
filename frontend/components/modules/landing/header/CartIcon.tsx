'use client'
import { useStore } from '@/app/store/cart.store'
import { ShoppingBag } from 'lucide-react'
import Link from 'next/link'

const CartIcon = () => {
  const totalItem = useStore(state =>
      state.items.reduce(
        (sum, item) => sum + item.quantity,
        0
      ))
  return (
    <Link href={'/cart'} className='relative'>
      <ShoppingBag className='w-5 h-5 hover:text-shop_light_green hoverEffect'/>
      <span className='hover:text-shop_light_green absolute -right-1 -top-1 w-3.5 h-3.5 text-xs bg-shop_dark_green text-white rounded-full flex items-center justify-center'>{totalItem || 0}</span>
    </Link>
  )
}

export default CartIcon
