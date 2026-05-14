import { Category } from '@/sanity.types'
import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface CategoryCardProps{
    category: Category
}

const CategoryCard:React.FC<CategoryCardProps> = ({category}) => {
  return (
            <Link href={`/categories/${category.slug?.current}`}className='flex gap-2 p-4 bg-gray-100 hover:-translate-y-1 hoverEffect min-h-30 items-center rounded-md' >
              <Image
                src={urlFor(category?.image!).url()}
                alt="Categories image"
                loading="lazy"
                width={70}
                height={70}
                className=' object-contain bg-white border-gray-300 p-2 border'
              />
            <div className='flex flex-col '>
                <h2 className='font-bold line-clamp-1'>{category.title}</h2>
                <span className='text-gray-500 text-sm'>({category.productCount}) items Available</span>
            </div>
            </Link>

  )
}

export default CategoryCard
