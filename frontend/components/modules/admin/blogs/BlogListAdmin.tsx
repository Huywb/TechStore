import { DateFormat } from '@/app/common/helper'
import { Edit, Trash } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import DefaultImage from '@/public/assets/empty-cart.png'
import toast from 'react-hot-toast'
import { BlogType } from '@/app/types/blog.type'

interface BlogListAdminProps {
    blogs: BlogType[],
    onEdit: (id:string)=>void,
    onDelete: (id:string)=>void
}

const BlogListAdmin:React.FC<BlogListAdminProps> = ({ blogs,onEdit,onDelete }) => {

    const handleEdit = (id:string)=>{
        onEdit(id)
    }

    const handleRemove = (id:string)=>{
        onDelete(id)
        if(window.confirm("Delete this blog")){
            toast.success("Delete blog success")
        }
    }
  return (
    <div className='flex flex-col gap-2 w-full '>
        <div className='flex gap-10 justify-between p-2 px-4 rounded-md bg-white text-black'>
            <h1 className='flex-1'>Blog Name</h1>    
            <h1 className='flex-1'>Slug</h1>    
            <h1 className='flex-1'>URL</h1>    
            <h1 className='flex-2'>Description</h1>      
            <h1 className='flex-1'>Action</h1>    
        </div>
        {
            blogs.map((blog,index)=>(
                <div key={index} className='rounded-md flex gap-10 px-4 py-2 bg-white text-black items-center justify-center'>
                    <div className='flex flex-1 gap-2 items-center '>
                    <Image src={blog.images? blog.images[0].secure_url : DefaultImage} alt='blog Image Admin' width={50} height={50} className='rounded-md'/>
                    <span className='line-clamp-2'>{blog.title}</span>
                    </div>
                    
                    <span className='flex-1 line-clamp-2'>{blog.slug}</span>
                    <span className='flex-1 line-clamp-2'>{blog.url}</span>
                    <span className='flex-2  line-clamp-2'>{blog.description}</span>
                    <div className='flex flex-1 gap-2'>
                        <Edit className='text-green-500 cursor-pointer' onClick={()=>handleEdit(blog.id)}/>
                        <Trash className='text-red-500 cursor-pointer' onClick={()=>handleRemove(blog.id)}/>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default BlogListAdmin


