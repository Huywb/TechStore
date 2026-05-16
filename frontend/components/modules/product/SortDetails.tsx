'use client'
import { ArrowDown, ArrowUp } from 'lucide-react'
import React, { useState } from 'react'
import {motion} from 'motion/react'
import { Product } from '@/sanity.types'

interface SortDetailsProps {
    product: Product,
    showMore: boolean
}

const SortDetails:React.FC<SortDetailsProps> = ({product,showMore}) => {

    return (
    <div className='w-full'>
        <div>
            {
                showMore && (
                    <motion.div initial={{opacity:0, y:-20}} animate={{opacity:1,y:0}} transition={{duration:.3}} >
                        <div className='flex justify-between text-sm'>
                            <h4>Brand</h4>
                            <p className='font-bold'>{product.brand.title}</p>
                        </div>
                        <div className='flex justify-between text-sm'>
                            <h4>Collection</h4>
                            <p className='font-bold'>{product._createdAt.split('-')[0]}</p>
                        </div>
                        <div className='flex justify-between text-sm'>
                            <h4>Type</h4>
                            <p className='font-bold'>{product.variant}</p>
                        </div>
                        <div className='flex justify-between text-sm'>
                            <h4>stock</h4>
                            <p className='font-bold'>{product.stock! > 0 ? 'Available' : 'Out of Stock'}</p>
                        </div>
                    </motion.div>
                )
            }
        </div>
    </div>
  )
}

export default SortDetails
