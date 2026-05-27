import { zodResolver } from "@hookform/resolvers/zod";
import { Plus, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

import SelectComponent from "../SelectComponent";
import { ProductStatus, VariantProduct } from "@/app/contants/data";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";
import Image from "next/image";

interface AddProductModalProps {
  onClose: () => void;
  mode: boolean;
  productEdit?: Product;
}

const formSchema = z.object({
  name: z.string().min(1, "Product name is required"),
  slug: z.string().min(1, "Slug is required"),
  description: z.string().min(1, "Description is required"),

  price: z.number().min(0),
  discount: z.number().min(0).max(100),
  stock: z.number().min(0),

  status: z.string(),
  variant: z.string(),

  isFeatured: z.boolean(),

  brand: z.string(),
  category: z.string(),

  isActive: z.boolean(),

  fullDescription: z.string(),
});

type FormValues = z.infer<typeof formSchema>;

const AddProductModal: React.FC<AddProductModalProps> = ({
  onClose,
  mode,
  productEdit,
}) => {
  const [technical, setTechnical] = useState({
    key: "",
    value: "",
  });
  const [images, setImages] = useState<ImageType[]>([]);
  const [technicalDetails, setTechnicalDetails] = useState<
    ProductTechnicalDetails[]
  >([]);

  useEffect(() => {
    if (productEdit) {
      setImages(productEdit.images);
      setTechnicalDetails(productEdit.technicalDetails);
    }
  }, [productEdit]);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),

    defaultValues: {
      name: productEdit?.name ? productEdit?.name : "",
      slug: productEdit?.slug ? productEdit.slug : "",
      description: productEdit?.description ? productEdit.description : "",

      price: productEdit?.price ? productEdit.price : 0,
      discount: productEdit?.discount ? productEdit.price : 0,
      stock: productEdit?.stock ? productEdit.stock : 0,

      status: productEdit?.status ? productEdit.status : "",
      variant: productEdit?.variant ? productEdit.variant : "",

      isFeatured: productEdit?.isFeatured ? productEdit.isFeatured : true,

      brand: productEdit?.brand ? productEdit.brand : "",
      category: productEdit?.category ? productEdit.category : "",

      isActive: productEdit?.isActive ? productEdit.isActive : true,

      fullDescription: productEdit?.fullDescription
        ? productEdit.fullDescription
        : "",
    },
  });

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = form;

  const handleCreateProduct = (data: FormValues) => {
    console.log({
      ...data,
      images,
      technicalDetails,
    });
  };

  const handleAddTechnicalDetails = (data: { key: string; value: string }) => {
    if (!data.key || !data.value) {
      toast.error("Key and value detail not empty");
    }
    setTechnicalDetails([
      ...technicalDetails,
      { key: data.key, value: data.value },
    ]);
    setTechnical({ key: "", value: "" });
  };

  const handleDeleteTechnicalDetails = (id: string) => {
    const newTechnicalDetails = technicalDetails.filter(
      (item) => item.key !== id,
    );
    setTechnicalDetails(newTechnicalDetails);
    setTechnical({ key: "", value: "" });
  };

  const handleDeleteImages = (item: string) => {
    setImages((prev) =>
      prev.filter((image) => {
        if (image instanceof File) {
          return image.name !== item;
        }

        return image.public_id !== item;
      }),
    );
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
            <label>Short Description:</label>

            <textarea
              {...register("description")}
              rows={3}
              placeholder="Description"
              className="rounded-md bg-gray-200 p-2"
            />
          </div>

          {/* Price */}
          <div className="flex flex-col gap-2">
            <label>Price:</label>

            <input
              {...register("price")}
              type="number"
              placeholder="0"
              className="rounded-md bg-gray-200 p-2"
            />
          </div>

          {/* Discount */}
          <div className="flex flex-col gap-2">
            <label>Discount:</label>

            <input
              {...register("discount")}
              type="number"
              placeholder="%"
              className="rounded-md bg-gray-200 p-2"
            />
          </div>

          {/* Stock */}
          <div className="flex flex-col gap-2">
            <label>Stock:</label>

            <input
              {...register("stock")}
              type="number"
              placeholder="0"
              className="rounded-md bg-gray-200 p-2"
            />
          </div>

          {/* Status */}
          <div className="flex gap-2 items-center">
            <label htmlFor="">Status:</label>
            <div className="max-w-20">
              <Controller
                control={control}
                name="status"
                render={({ field }) => (
                  <SelectComponent
                    title="Status"
                    data={Object.values(ProductStatus)}
                    value={field.value || ""}
                    onChange={field.onChange}
                  />
                )}
              />
            </div>
          </div>

          {/* Variant */}
          <div className="flex gap-2 items-center">
            <label htmlFor="">Variant:</label>
            <div className="max-w-50">
              <Controller
                control={control}
                name="variant"
                render={({ field }) => (
                  <SelectComponent
                    title="Variant"
                    data={Object.values(VariantProduct)}
                    value={field.value || ""}
                    onChange={field.onChange}
                  />
                )}
              />
            </div>
          </div>
          {/* Category */}

          <div className="flex gap-2 items-center">
            <label htmlFor="">Category:</label>
            <div className="max-w-40">
              <Controller
                control={control}
                name="category"
                render={({ field }) => (
                  <SelectComponent
                    title="Category"
                    data={Object.values(VariantProduct)}
                    value={field.value || ""}
                    onChange={field.onChange}
                  />
                )}
              />
            </div>
          </div>

          {/* Brand */}
          <div className="flex gap-2 items-center">
            <label htmlFor="">Status:</label>
            <div className="max-w-40">
              <Controller
                control={control}
                name="brand"
                render={({ field }) => (
                  <SelectComponent
                    title="Brand"
                    data={Object.values(VariantProduct)}
                    value={field.value || ""}
                    onChange={field.onChange}
                  />
                )}
              />
            </div>
          </div>
          {/* Featured */}
          <div className="flex items-center gap-2">
            <label>Featured:</label>

            <input {...register("isFeatured")} type="checkbox" />
          </div>

          {/* Active */}
          <div className="flex items-center gap-2">
            <label>Active:</label>

            <input {...register("isActive")} type="checkbox" />
          </div>

          {/* Full Description */}
          <div className="flex flex-col gap-2">
            <label>Full Description:</label>

            <textarea
              {...register("fullDescription")}
              rows={5}
              placeholder="Full description"
              className="rounded-md bg-gray-200 p-2"
            />
          </div>

          {/* TechnicalDetails */}
          <div className="flex flex-col gap-2 ">
            <label>TechnicalDetails: </label>
            <div className="flex gap-4  ">
              <input
                type="text"
                className="min-w-0 flex-1 rounded-md bg-gray-200 p-2"
                placeholder="key"
                onChange={(e) =>
                  setTechnical({ ...technical, key: e.target.value })
                }
              />
              <input
                type="text"
                className="min-w-0 flex-2 rounded-md bg-gray-200 p-2"
                placeholder="value"
                onChange={(e) =>
                  setTechnical({ ...technical, value: e.target.value })
                }
              />
              <Button
                className="shrink-0 h-10 px-4"
                onClick={() => handleAddTechnicalDetails(technical)}
              >
                Add
              </Button>
            </div>
          </div>

          <div className="flex flex-col">
            {technicalDetails.map((item, index) => (
              <div key={index} className="flex  bg-gray-200 py-2">
                <input
                  className="min-w-0 flex-1 px-2"
                  readOnly
                  value={item.key}
                />
                <input
                  className="min-w-0 flex-2 px-2"
                  readOnly
                  value={item.value}
                />
                <X
                  className="shrink-0 w-20 cursor-pointer  "
                  onClick={() => handleDeleteTechnicalDetails(item.key)}
                ></X>
              </div>
            ))}
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
                setImages((prev) => [
                  ...prev,
                  ...(e.target.files ? Array.from(e.target.files) : []),
                ])
              }
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {images.map((item, index) => (
              <div key={index} className="relative">
                <Image
                  src={
                    item instanceof File
                      ? URL.createObjectURL(item)
                      : item.secure_url
                  }
                  alt="Product Images"
                  width={100}
                  height={50}
                />

                <X
                  onClick={() =>
                    handleDeleteImages(
                      item instanceof File ? item.name : item.public_id,
                    )
                  }
                  className="absolute top-0 right-0 text-red-500 cursor-pointer"
                ></X>
              </div>
            ))}
          </div>

          <button type="submit" className="rounded-md bg-blue-500 p-2">
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProductModal;
