'use client'
import { mockBrands} from "@/app/contants/data";
import { userBrandV2 } from "@/app/hooks/useBrand";
import {BrandRequest, BrandType } from "@/app/types/brand.type";
import { CategoryType } from "@/app/types/category.type";
import AddBrandModal from "@/components/modules/admin/brands/AddBrandModal";
import BrandListAdmin from "@/components/modules/admin/brands/BrandListAdmin";
import { Button } from "@/components/ui/button";
import {  useState } from "react";
import toast from "react-hot-toast";

const page = () => {
  const [showAddModal,setShowAddModal] = useState(false)
  const [brandId,setBrandId] = useState<BrandType | null>(null)

  const {brands,deleteBrandMutation,} = userBrandV2()

  console.log(brands)
  const handleEdit = (id:string)=>{
    const brand = brands.filter((brand:BrandType)=>brand.id === id)
    setBrandId(brand[0])
    setShowAddModal(true)
  }

  const handleCloseModal = (boolean : boolean)=>{
    setBrandId(null)
    setShowAddModal(boolean)
  }

  const handleDelete = async(id:string)=>{
    const deleteBr = await deleteBrandMutation(id)
    if(deleteBr){
      toast.success("Delete brand success")
    } else {
      toast.error("Something wrong went delete brand")
    }

    //const newListBrand = brands.filter(brand=>brand.id !== id)
    //setListBrands(newListBrand)
  }
  return (
    <div className="flex flex-col gap-2">
      {
        showAddModal && <AddBrandModal onClose={()=>handleCloseModal(false)} mode={showAddModal} brandEdit={brandId!}/>
      }
      <div className="flex justify-between items-center py-4">
        <Button onClick={()=>setShowAddModal(true)} className=' py-4 px-6 bg-shop_light_green  cursor-pointer hover:translate-x-2 hoverEffect hover:bg-green-600 text-white'>+ Add Brand</Button>

      </div>

      <div className="">
        <BrandListAdmin brands={brands ?? []} onEdit={handleEdit} onDelete={handleDelete}/>
      </div>

    </div>
  );
};

export default page;
