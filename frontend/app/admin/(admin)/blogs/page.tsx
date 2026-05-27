'use client'
import { mockBlogs, mockBrands} from "@/app/contants/data";
import { BlogType } from "@/app/types/blog.type";
import AddBlogModal from "@/components/modules/admin/blogs/AddBlogModal";
import BlogListAdmin from "@/components/modules/admin/blogs/BlogListAdmin";
import AddBrandModal from "@/components/modules/admin/brands/AddBrandModal";
import BrandListAdmin from "@/components/modules/admin/brands/BrandListAdmin";
import { Button } from "@/components/ui/button";
import {  useEffect, useState } from "react";

const page = () => {
  const [blogs,setBlogs] = useState<BlogType[]>([])
  const [showAddModal,setShowAddModal] = useState(false)
  const [blogId,setBLogId] = useState<BlogType | null>(null)


  useEffect(()=>{
    setBlogs(mockBlogs)
  },[])

  const handleEdit = (id:string)=>{
    const blog = blogs.filter(blog=>blog._id === id)
    setBLogId(blog[0])
    setShowAddModal(true)
  }

  const handleDelete = (id:string)=>{
    const newListBlog = blogs.filter(blog=>blog._id !== id)
    setBlogs(newListBlog)
  }
  return (
    <div className="flex flex-col gap-2">
      {
        showAddModal && <AddBlogModal onClose={()=>setShowAddModal(false)} mode={showAddModal} blogEdit={blogId!}/>
      }
      <div className="flex justify-between items-center py-4">
        <Button onClick={()=>setShowAddModal(true)} className=' py-4 px-6 bg-shop_light_green  cursor-pointer hover:translate-x-2 hoverEffect hover:bg-green-600 text-white'>+ Add Blog</Button>

      </div>

      <div className="">
        <BlogListAdmin blogs={blogs} onEdit={handleEdit} onDelete={handleDelete}/>
      </div>

    </div>
  );
};

export default page;
