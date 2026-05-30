import { zodResolver } from "@hookform/resolvers/zod";
import { Plus, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Image from "next/image";
import { CategoryType } from "@/app/types/category.type";
import { getImageSrc } from "@/app/common/helper";
import { useCategoryV2 } from "@/app/hooks/useCategory";
import { uploadSingleImages } from "@/app/services/cloudinary/cloudinary.service";
import toast from "react-hot-toast";

interface AddCategoryModalProps {
  onClose: () => void;
  mode: boolean;
  categoryEdit?: CategoryType;
}

const formSchema = z.object({
  title: z.string().min(1, "Category title is required"),
  slug: z.string().min(1, "Slug is required"),
  description: z.string().min(1, "Description is required"),
});

type FormValues = z.infer<typeof formSchema>;

const AddCategoryModal: React.FC<AddCategoryModalProps> = ({
  onClose,
  mode,
  categoryEdit,
}) => {
  const [images, setImages] = useState<ImageType | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const { updateCategoryMutation, createCategoryMutation } = useCategoryV2();

  useEffect(() => {
    if (categoryEdit) {
      setImages(categoryEdit?.images[0]);
    }
  }, [categoryEdit]);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),

    defaultValues: {
      title: categoryEdit?.title ? categoryEdit?.title : "",
      slug: categoryEdit?.slug ? categoryEdit.slug : "",
      description: categoryEdit?.description ? categoryEdit.description : "",
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
      const mergeData = {...data,images: uploadImage ? uploadImage : images}
      if(categoryEdit){
      const response = updateCategoryMutation({id : categoryEdit.id, data : mergeData})
      if(!response){
        toast.error("Something wrong went update category")
      }
      toast.success("Update Category success")
      onClose()
      setImages(null)
    } else {
      const response = createCategoryMutation(mergeData)
      if(!response){
        toast.error("Something wrong went create new Category")
      }
      toast.success("Create new Category success")
      reset()
      setImages(null)
    }
    } catch (error) {
      console.log("Something wrong on CategoryModal",error)
    } finally {
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
          <h2 className="text-2xl font-bold">Add Category</h2>

          <X onClick={onClose} className="cursor-pointer" />
        </div>

        <form
          onSubmit={handleSubmit(handleCreateProduct)}
          className="flex flex-col gap-6"
        >
          {/* Category title */}
          <div className="flex flex-col gap-2">
            <label>Category Title: </label>

            <input
              {...register("title")}
              type="text"
              placeholder="Category title"
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
            {isLoading ? (
              <>
                Processing…
              </>
            ) : (
              <span>{categoryEdit ? "Edit Category" : "Create Category"}</span>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCategoryModal;
