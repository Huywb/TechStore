'use client'
import { Product } from '@/sanity.types'
import { AnimatePresence,motion } from 'motion/react'
import React from 'react'
import ProductCard from './ProductCard'

const ProducGrid = ({products}: {products:Product[]}) => {
  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
        {products.map((product:Product) => (
            <AnimatePresence key={product?.name}>
              <motion.div
                initial={{ opacity: 0.2 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                exit={{ opacity: 0.2 }}
                className='bg-white shadow-lg'
              >
                <ProductCard product={product} />
              </motion.div>
            </AnimatePresence>
          ))}
    </div>
  )
}

export default ProducGrid
