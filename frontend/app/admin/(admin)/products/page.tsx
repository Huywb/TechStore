'use client'
import { AdminProductTab, mockProducts } from "@/app/contants/data";
import AddProductModal from "@/components/modules/admin/products/AddProductModal";
import ProductListAdmin from "@/components/modules/admin/products/ProductListAdmin";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";

const page = () => {
  const [mode,setMode] = useState('all')
  const [products,setProducts] = useState<any[]>([])
  const [showAddModal,setShowAddModal] = useState(false)
  const [productId,setProductId] = useState<Product | null>(null)

  useEffect(()=>{
    if(mode === 'all'){
      setProducts(mockProducts)
    }else if(mode === 'active'){
      setProducts(mockProducts.filter(item=>item.isActive))
    }else if(mode === 'inactive'){
      setProducts(mockProducts.filter(item=>!item.isActive ))
    }else if(mode === 'deleted'){
      setProducts(mockProducts.filter(item=>item.isFeatured))
    }
  },[mode])

  const handleEdit = (id:string)=>{
    const product = products.filter(product=>product._id === id)
    setProductId(product[0])
    setShowAddModal(true)
  }

  const handleDelete = (id:string)=>{
    const newListProduct = products.filter(product=>product._id !== id)
    setProducts(newListProduct)
  }
  return (
    <div className="flex flex-col gap-2">
      {
        showAddModal && <AddProductModal onClose={()=>setShowAddModal(false)} mode={showAddModal} productEdit={productId!}/>
      }
      <div className="flex justify-between items-center py-4">
        <Button onClick={()=>setShowAddModal(true)} className=' py-4 px-6 bg-shop_light_green  cursor-pointer hover:translate-x-2 hoverEffect hover:bg-green-600 text-white'>+ Add Product</Button>

        <div className="flex gap-2 mr-4">
          {AdminProductTab.map((item, index) => (
            <div onClick={()=>setMode(item.value)} key={index} className={`${mode === item.value ? ' bg-shop_light_green text-white' : 'bg-white text-black'} cursor-pointer px-5 py-1 rounded-full border border-gray-400 `}>
              <span className="text-sm">{item.title}</span>
            </div>
          ))}
        </div>
      </div>

      <div className=" ">
        <ProductListAdmin products={products} onEdit={handleEdit} onDelete={handleDelete}/>
      </div>

    </div>
  );
};

export default page;
