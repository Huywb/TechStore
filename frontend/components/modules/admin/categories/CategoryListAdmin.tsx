import { DateFormat } from '@/app/common/helper'
import { Edit, Trash } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import DefaultImage from '@/public/assets/empty-cart.png'
import toast from 'react-hot-toast'
import { CategoryType } from '@/app/types/category.type'

interface CategoryListAdminProps {
    categories: CategoryType[],
    onEdit: (id:string)=>void,
    onDelete: (id:string)=>void
}

const CategoryListAdmin:React.FC<CategoryListAdminProps> = ({ categories,onEdit,onDelete }) => {

    const handleEdit = (id:string)=>{
        onEdit(id)
    }

    const handleRemove = (id:string)=>{
        onDelete(id)
        if(window.confirm("Delete this product")){
            toast.success("Delete product success")
        }
    }
  return (
    <div className='flex flex-col gap-2 w-full '>
        <div className='flex gap-2 justify-between p-2 px-4 rounded-md bg-white text-black'>
            <h1 className='flex-1'>Category Name</h1>    
            <h1 className='flex-1'>Slug</h1>    
            <h1 className='flex-2'>Description</h1>      
            <h1 className='flex-1'>Action</h1>    
        </div>
        {
            categories.map((category,index)=>(
                <div key={index} className='rounded-md flex gap-2 px-4 py-2 bg-white text-black items-center justify-center'>
                    <div className='flex flex-1 gap-2 items-center '>
                    <Image src={ DefaultImage} alt='category Image Admin' width={50} height={50} className='rounded-md'/>
                    <span className='line-clamp-1'>{category.title}</span>
                    </div>
                    
                    <span className='flex-1'>{category.slug}</span>
                    <span className='flex-2  line-clamp-2'>{category.description}</span>
                    <div className='flex flex-1 gap-2'>
                        <Edit className='text-green-500 cursor-pointer' onClick={()=>handleEdit(category.id)}/>
                        <Trash className='text-red-500 cursor-pointer' onClick={()=>handleRemove(category.id)}/>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default CategoryListAdmin


