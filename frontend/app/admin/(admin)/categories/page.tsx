'use client'
import { mockCategories } from "@/app/contants/data";
import AddCategoryModal from "@/components/modules/admin/categories/AddCategoryModal";
import CategoryListAdmin from "@/components/modules/admin/categories/CategoryListAdmin";
import { Button } from "@/components/ui/button";
import {  useEffect, useState } from "react";

const page = () => {
  const [categories,setCategories] = useState<any[]>([])
  const [showAddModal,setShowAddModal] = useState(false)
  const [categoryId,setCategoryId] = useState(null)


  useEffect(()=>{
    setCategories(mockCategories)
  },[])

  const handleEdit = (id:string)=>{
    const category = categories.filter(category=>category._id === id)
    setCategoryId(category[0])
    setShowAddModal(true)
  }

  const handleDelete = (id:string)=>{
    const newListCategori = categories.filter(category=>category._id !== id)
    setCategories(newListCategori)
  }
  return (
    <div className="flex flex-col gap-2">
      {
        showAddModal && <AddCategoryModal onClose={()=>setShowAddModal(false)} mode={showAddModal} categoryEdit={categoryId!}/>
      }
      <div className="flex justify-between items-center py-4">
        <Button onClick={()=>setShowAddModal(true)} className=' py-4 px-6 bg-shop_light_green  cursor-pointer hover:translate-x-2 hoverEffect hover:bg-green-600 text-white'>+ Add Category</Button>

      </div>

      <div className="">
        <CategoryListAdmin categories={categories} onEdit={handleEdit} onDelete={handleDelete}/>
      </div>

    </div>
  );
};

export default page;
