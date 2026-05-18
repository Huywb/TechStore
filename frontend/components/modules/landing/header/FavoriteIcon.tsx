'use client'
import { useStore } from '@/app/store/cart.store'
import { Heart } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const FavoriteIcon = () => {
  const favorite = useStore(state=>state.favoriteProduct)
  return (
    <Link href={'/favorite'} className='relative'>
      <Heart className='w-5 h-5 hover:text-shop_light_green hoverEffect'/>
      <span className='hover:text-shop_light_green absolute -right-1 -top-1 w-3.5 h-3.5 text-xs bg-shop_dark_green text-white rounded-full flex items-center justify-center'>{favorite.length || 0}</span>
    </Link>
  )
}

export default FavoriteIcon
