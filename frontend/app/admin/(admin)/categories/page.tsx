'use client'
import { useCategoryV2 } from "@/app/hooks/useCategory";
import { CategoryType } from "@/app/types/category.type";
import AddCategoryModal from "@/components/modules/admin/categories/AddCategoryModal";
import CategoryListAdmin from "@/components/modules/admin/categories/CategoryListAdmin";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const page = () => {
  const [showAddModal,setShowAddModal] = useState(false)
  const [categoryId,setCategoryId] = useState<CategoryType | null>(null)

  const {categories,deleteCategoryMutation} = useCategoryV2()


  const handleEdit = (id:string)=>{
    const category = categories.filter((category : CategoryType)=>category.id === id)
    console.log(category)
    setCategoryId(category[0])
    setShowAddModal(true)
  }

  const handleCloseModal = (boolean : boolean)=>{
    setCategoryId(null)
    setShowAddModal(boolean)
  }

  const handleDelete = (id:string)=>{
    deleteCategoryMutation(id)
  }
  return (
    <div className="flex flex-col gap-2">
      {
        showAddModal && <AddCategoryModal onClose={()=>handleCloseModal(false)} mode={showAddModal} categoryEdit={categoryId!}/>
      }
      <div className="flex justify-between items-center py-4">
        <Button onClick={()=>setShowAddModal(true)} className=' py-4 px-6 bg-shop_light_green  cursor-pointer hover:translate-x-2 hoverEffect hover:bg-green-600 text-white'>+ Add Category</Button>

      </div>

      <div className="">
        <CategoryListAdmin categories={categories ?? []} onEdit={handleEdit} onDelete={handleDelete}/>
      </div>

    </div>
  );
};

export default page;
