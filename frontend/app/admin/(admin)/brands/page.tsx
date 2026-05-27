'use client'
import { mockBrands} from "@/app/contants/data";
import {BrandType } from "@/app/types/brand.type";
import { CategoryType } from "@/app/types/category.type";
import AddBrandModal from "@/components/modules/admin/brands/AddBrandModal";
import BrandListAdmin from "@/components/modules/admin/brands/BrandListAdmin";
import AddCategoryModal from "@/components/modules/admin/categories/AddCategoryModal";
import CategoryListAdmin from "@/components/modules/admin/categories/CategoryListAdmin";
import { Button } from "@/components/ui/button";
import {  useEffect, useState } from "react";

const page = () => {
  const [brands,setBrands] = useState<BrandType[]>([])
  const [showAddModal,setShowAddModal] = useState(false)
  const [brandId,setBrandId] = useState<BrandType | null>(null)


  useEffect(()=>{
    setBrands(mockBrands)
  },[])

  const handleEdit = (id:string)=>{
    const brand = brands.filter(brand=>brand._id === id)
    setBrandId(brand[0])
    setShowAddModal(true)
  }

  const handleDelete = (id:string)=>{
    const newListBrand = brands.filter(brand=>brand._id !== id)
    setBrands(newListBrand)
  }
  return (
    <div className="flex flex-col gap-2">
      {
        showAddModal && <AddBrandModal onClose={()=>setShowAddModal(false)} mode={showAddModal} brandEdit={brandId!}/>
      }
      <div className="flex justify-between items-center py-4">
        <Button onClick={()=>setShowAddModal(true)} className=' py-4 px-6 bg-shop_light_green  cursor-pointer hover:translate-x-2 hoverEffect hover:bg-green-600 text-white'>+ Add Brand</Button>

      </div>

      <div className="">
        <BrandListAdmin brands={brands} onEdit={handleEdit} onDelete={handleDelete}/>
      </div>

    </div>
  );
};

export default page;
