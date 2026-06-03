'use client'
import { mockBlogs, mockBrands} from "@/app/contants/data";
import { useBlogV2 } from "@/app/hooks/useBlog";
import { BlogRequest, BlogType } from "@/app/types/blog.type";
import AddBlogModal from "@/components/modules/admin/blogs/AddBlogModal";
import BlogListAdmin from "@/components/modules/admin/blogs/BlogListAdmin";
import AddBrandModal from "@/components/modules/admin/brands/AddBrandModal";
import BrandListAdmin from "@/components/modules/admin/brands/BrandListAdmin";
import { Button } from "@/components/ui/button";
import {  useEffect, useState } from "react";

const page = () => {
  const [showAddModal,setShowAddModal] = useState(false)
  const [blogId,setBLogId] = useState<BlogType | null>(null)

  const {blogs,deleteBlogMutation} = useBlogV2()

  const handleEdit = (id:string)=>{
    const blog = blogs.filter((blog : BlogType)=>blog.id === id)
    setBLogId(blog[0])
    setShowAddModal(true)
  }

  const handleCloseModal = (boolean : boolean)=>{
    setBLogId(null)
    setShowAddModal(boolean)
  }

  const handleDelete = (id:string)=>{
    deleteBlogMutation(id)
  }
  return (
    <div className="flex flex-col gap-2">
      {
        showAddModal && <AddBlogModal onClose={()=>handleCloseModal(false)} mode={showAddModal} blogEdit={blogId!}/>
      }
      <div className="flex justify-between items-center py-4">
        <Button onClick={()=>setShowAddModal(true)} className=' py-4 px-6 bg-shop_light_green  cursor-pointer hover:translate-x-2 hoverEffect hover:bg-green-600 text-white'>+ Add Blog</Button>

      </div>

      <div className="">
        <BlogListAdmin blogs={blogs ?? []} onEdit={handleEdit} onDelete={handleDelete}/>
      </div>

    </div>
  );
};

export default page;
