import { Capitalize, DateFormat } from '@/app/common/helper'
import { BlogProps } from '@/app/types/blog.type'
import { urlFor } from '@/sanity/lib/image'
import { Calendar } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const BlogCard = ({blog} :BlogProps) => {
    console.log(blog.slug?.current)
  return (
    <Link href={`/blog/${blog.slug?.current}`} className='hover:-translate-y-1 hoverEffect flex flex-col w-full rounded-md shadow-lg border border-gray-400 '>
        <Image src={urlFor(blog.mainImage!).url()} alt='Blog Image' width={300} height={300} className='rounded-md object-contain'/>
        <div className='flex flex-col gap-5 p-5'>

        <div className='flex gap-8 text-sm'>
            <span className='font-bold   border-b-gray-400 border-b-2 text-shop_dark_green '>{Capitalize(blog.blogcategories?.[0]?.slug?.current)}</span>
            <div className='flex gap-1 border-b-gray-400 border-b-2 text-gray-400'>
                <Calendar size={18}/>
                <span>{DateFormat(blog._createdAt)}</span>
            </div>
        </div>

        <h2 className='line-clamp-2 font-bold text-sm'>{blog.title}</h2>
        </div>

    </Link>
  )
}

export default BlogCard
