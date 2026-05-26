import { zodResolver } from "@hookform/resolvers/zod";
import { Plus, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Image from "next/image";

interface AddCategoryModalProps {
  onClose: () => void;
  mode: boolean;
  categoryEdit?: Product;
}

const formSchema = z.object({
  name: z.string().min(1, "Product name is required"),
  slug: z.string().min(1, "Slug is required"),
  description: z.string().min(1, "Description is required"),
});

type FormValues = z.infer<typeof formSchema>;

const AddCategoryModal: React.FC<AddCategoryModalProps> = ({
  onClose,
  mode,
  categoryEdit,
}) => {
  const [images, setImages] = useState<File | null>(null);

  useEffect(() => {
    if (categoryEdit) {
      setImages(categoryEdit?.images);
    }
  }, [categoryEdit]);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),

    defaultValues: {
      name: categoryEdit?.name ? categoryEdit?.name : "",
      slug: categoryEdit?.slug ? categoryEdit.slug : "",
      description: categoryEdit?.description ? categoryEdit.description : "",
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  const handleCreateProduct = (data: FormValues) => {
    console.log({
      ...data,
      images,
    });
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
            h-screen max-w-[30%]
            overflow-y-scroll
            bg-white p-4
            z-50
            transition-transform duration-300 ease-in-out
            ${mode ? "translate-x-0" : "translate-x-full"}
            `}
      >
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Add Product</h2>

          <X onClick={onClose} className="cursor-pointer" />
        </div>

        <form
          onSubmit={handleSubmit(handleCreateProduct)}
          className="flex flex-col gap-6"
        >
          {/* Product Name */}
          <div className="flex flex-col gap-2">
            <label>Product Name: </label>

            <input
              {...register("name")}
              type="text"
              placeholder="Product name"
              className="rounded-md bg-gray-200 p-2"
            />

            {errors.name && (
              <span className="text-sm text-red-500">
                {errors.name.message}
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
              multiple
              type="file"
              className="hidden"
              onChange={(e) =>
                setImages(e.target.files ? Array.from(e.target.files) : null)
              }
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            <div className="relative">
              <Image
                src={URL.createObjectURL(images!)}
                alt="Product Images"
                width={100}
                height={50}
              />
              <X
                onClick={() => setImages(null)}
                className="absolute top-0 right-0 text-red-500 cursor-pointer"
              ></X>
            </div>
          </div>

          <button type="submit" className="rounded-md bg-blue-500 p-2">
            Add Category
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCategoryModal;
