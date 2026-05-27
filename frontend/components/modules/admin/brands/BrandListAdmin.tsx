import { DateFormat } from '@/app/common/helper'
import { Edit, Trash } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import DefaultImage from '@/public/assets/empty-cart.png'
import toast from 'react-hot-toast'
import { BrandType } from '@/app/types/brand.type'

interface BrandListAdminProps {
    brands: BrandType[],
    onEdit: (id:string)=>void,
    onDelete: (id:string)=>void
}

const BrandListAdmin:React.FC<BrandListAdminProps> = ({ brands,onEdit,onDelete }) => {

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
            <h1 className='flex-1'>Brand Name</h1>    
            <h1 className='flex-1'>Slug</h1>    
            <h1 className='flex-2'>Description</h1>      
            <h1 className='flex-1'>Action</h1>    
        </div>
        {
            brands.map((brand,index)=>(
                <div key={index} className='rounded-md flex gap-2 px-4 py-2 bg-white text-black items-center justify-center'>
                    <div className='flex flex-1 gap-2 items-center '>
                    <Image src={ DefaultImage} alt='brand Image Admin' width={50} height={50} className='rounded-md'/>
                    <span className='line-clamp-1'>{brand.title}</span>
                    </div>
                    
                    <span className='flex-1'>{brand.slug}</span>
                    <span className='flex-2  line-clamp-2'>{brand.description}</span>
                    <div className='flex flex-1 gap-2'>
                        <Edit className='text-green-500 cursor-pointer' onClick={()=>handleEdit(brand._id)}/>
                        <Trash className='text-red-500 cursor-pointer' onClick={()=>handleRemove(brand._id)}/>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default BrandListAdmin


