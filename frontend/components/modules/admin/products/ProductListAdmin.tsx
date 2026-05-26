import { DateFormat } from '@/app/common/helper'
import { Edit, Trash } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import DefaultImage from '@/public/assets/empty-cart.png'
import toast from 'react-hot-toast'

interface ProductListAdminProps {
    products: Product[],
    onEdit: (id:string)=>void,
    onDelete: (id:string)=>void
}

const ProductListAdmin:React.FC<ProductListAdminProps> = ({ products,onEdit,onDelete }) => {

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
            <h1 className='flex-3'>Product Name</h1>    
            <h1 className='flex-1'>Active</h1>    
            <h1 className='flex-1'>Brand</h1>    
            <h1 className='flex-1'>Category</h1>    
            <h1 className='flex-1'>Price</h1>    
            <h1 className='flex-1'>Discount</h1>    
            <h1 className='flex-1'>Status</h1>    
            <h1 className='flex-1'>Action</h1>    
        </div>
        {
            products.map((product,index)=>(
                <div key={index} className='rounded-md flex gap-2 px-4 py-2 bg-white text-black items-center justify-center'>
                    <div className='flex flex-3 gap-2 items-center '>
                    <Image src={ DefaultImage} alt='Product Image Admin' width={50} height={50} className='rounded-md'/>
                    <span className='line-clamp-1'>{product.name}</span>
                    </div>
                    <span className={` flex-1`}>{
                    product.isActive ? <span className={`border-green-500 text-green-500 text-sm w-auto p-2 border rounded-md`}>Active</span>: <span className={`border-red-500 text-red-500 text-sm w-auto p-2 border rounded-md`}>In Active</span>}

                    </span>
                    <span className='flex-1'>{product.brand}</span>
                    <span className='flex-1'>{product.category}</span>
                    <span className='flex-1'>{product.price}</span>
                    <span className='flex-1'>{product.discount}</span>
                    <span className='flex-1'>{product.status}</span>
                    <div className='flex flex-1 gap-2'>
                        <Edit className='text-green-500 cursor-pointer' onClick={()=>handleEdit(product._id)}/>
                        <Trash className='text-red-500 cursor-pointer' onClick={()=>handleRemove(product._id)}/>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default ProductListAdmin


