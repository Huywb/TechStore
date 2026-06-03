import { zodResolver } from "@hookform/resolvers/zod";
import { Plus, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Image from "next/image";
import { getImageSrc } from "@/app/common/helper";
import { BlogType } from "@/app/types/blog.type";
import { useBlogBySlug, useBlogV2 } from "@/app/hooks/useBlog";
import { uploadSingleImages } from "@/app/services/cloudinary/cloudinary.service";
import toast from "react-hot-toast";

interface AddBlogModalProps {
  onClose: () => void;
  mode: boolean;
  blogEdit?: BlogType;
}

const formSchema = z.object({
  title: z.string().min(1, "Blog title is required"),
  slug: z.string().min(1, "Slug is required"),
  url: z.string().min(1, "URL is required"),
  description: z.string().min(1, "Description is required"),
});

type FormValues = z.infer<typeof formSchema>;

const AddBlogModal: React.FC<AddBlogModalProps> = ({
  onClose,
  mode,
  blogEdit,
}) => {
  const [images, setImages] = useState<ImageType | null>(null);
  const [isLoading,setIsLoading] = useState(false)

  const {createBlogMutation,updateBlogMutation} = useBlogV2()

  useEffect(() => {
    if (blogEdit) {
      setImages(blogEdit?.images[0]);
    }
  }, [blogEdit]);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),

    defaultValues: {
      title: blogEdit?.title ? blogEdit?.title : "",
      slug: blogEdit?.slug ? blogEdit.slug : "",
      url: blogEdit?.url ? blogEdit.url : '',
      description: blogEdit?.description ? blogEdit.description : "",
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = form;

  const handleCreateProduct =async (data: FormValues) => {
    setIsLoading(true)
    try {
          console.log({
      ...data,
      images,
    });

    let uploadImage 
    if(images instanceof File){
      uploadImage = await uploadSingleImages(images)
    }
    const mergeData = {...data, images : uploadImage ? uploadImage : images}

    if(blogEdit){
      const response = await updateBlogMutation({id: blogEdit.id,data: mergeData})
      if(response){
        toast.success("Update blog success")
        reset()
        setImages(null)
      } 
    } else {
        const response = await createBlogMutation(mergeData)
        if(response){
          toast.success("Create new blog success")
          reset()
          setImages(null)
        }
      }
    } catch (error) {
      console.log("Something wrong on Add blog Modal",error)
    }finally {
      setIsLoading(false)
    }
  };

  return (
    <div
      onClick={onClose}
      className="fixed top-0 left-0 z-20 flex h-screen w-screen items-center justify-center bg-black/50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`
            fixed top-0 right-0
            h-screen w-[30%]
            overflow-y-scroll
            bg-white p-4
            z-50
            transition-transform duration-300 ease-in-out
            ${mode ? "translate-x-0" : "translate-x-full"}
            `}
      >
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Add Blog</h2>

          <X onClick={onClose} className="cursor-pointer" />
        </div>

        <form
          onSubmit={handleSubmit(handleCreateProduct)}
          className="flex flex-col gap-6"
        >
          {/* Blog title */}
          <div className="flex flex-col gap-2">
            <label>Blog Title: </label>

            <input
              {...register("title")}
              type="text"
              placeholder="Blog title"
              className="rounded-md bg-gray-200 p-2"
            />

            {errors.title && (
              <span className="text-sm text-red-500">
                {errors.title.message}
              </span>
            )}
          </div>

          {/* Slug */}
          <div className="flex flex-col gap-2">
            <label>Slug:</label>

            <input
              {...register("slug")}
              type="text"
              placeholder="slug"
              className="rounded-md bg-gray-200 p-2"
            />
          </div>

          {/* URL */}
          <div className="flex flex-col gap-2">
            <label>URL:</label>

            <input
              {...register("url")}
              type="text"
              placeholder="http://"
              className="rounded-md bg-gray-200 p-2"
            />
          </div>

          {/* Description */}
          <div className="flex flex-col gap-2">
            <label>Description:</label>

            <textarea
              {...register("description")}
              rows={3}
              placeholder="description"
              className="rounded-md bg-gray-200 p-2"
            />
          </div>

          {/* Images */}
          <div className="flex gap-2">
            <label>Images:</label>
            <label
              htmlFor="modalImage"
              className="hover:rotate-90 cursor-pointer hoverEffect"
            >
              <Plus />
            </label>
            <input
              id="modalImage"
              type="file"
              className="hidden"
              onChange={(e) => {
                if (e.target.files?.[0]) {
                  setImages(e.target.files[0]);
                }
              }}
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            <div className="relative">
              {images && (
                <div className="relative">
                  <Image
                    src={getImageSrc(images)}
                    alt="Product Image"
                    width={100}
                    height={100}
                  />

                  <X
                    onClick={() => setImages(null)}
                    className="absolute top-0 right-0 cursor-pointer text-red-500"
                  />
                </div>
              )}
            </div>
          </div>

          <button type="submit" className="rounded-md bg-blue-500 p-2">
            {
              isLoading ? (
                <>
                  Processing…
                </>
              ) : (
                <span>{blogEdit ? 'Edit Blog' : 'Create Blog'}</span>
              )  

            }
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBlogModal;
