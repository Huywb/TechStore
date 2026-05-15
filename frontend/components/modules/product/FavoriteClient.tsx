'use client'
import { Heart } from 'lucide-react'
import React, { useState } from 'react'

const FavoriteClient = () => {
    const [favorite,setFavorite] = useState(false)
    const handleAddFavorite = ()=>{
        setFavorite((prev)=>!prev)
    }
  return (
    <div onClick={handleAddFavorite} className={`cursor-pointer ${favorite ? 'bg-gray-500 text-white' : ''} p-1 border  w-full hover:bg-gray-500 hover:text-white hoverEffect  border-gray-500 font-medium rounded-full `}>
        <Heart size={20} />
    </div>
  )
}

export default FavoriteClient
