'use client'
import { PriceFilter } from "@/app/contants/data";
import { useFilterStore } from "@/app/store/filter.store";
import { Brand, Category } from "@/sanity.types";
import React from "react";

interface ProductSiderBarProps {
  categories: Category[];
  brands: Brand[];
}

const ProductSideBar: React.FC<ProductSiderBarProps> = ({
  categories,
  brands,
}) => {

  const {toggleBrand,toggleCategory,togglePrice} = useFilterStore()


  console.log(categories)
  
  return (
    <div className="flex flex-col p-4 border-gray-300 border">
      <div className="flex flex-col">
        <h1>Product Categories</h1>
        {categories?.map((category: Category) => (
          <div key={category._id}>
            <input type="checkbox" onChange={(e)=>toggleCategory(e.target.value)} value={category.slug?.current}></input> {category.title}
          </div>
        ))}
      </div>

      <div className="flex flex-col">
        <h1>Brands</h1>
        {brands?.map((brand: Brand) => (
          <div key={brand._id}>
            <input type="checkbox" onChange={(e)=>toggleBrand(e.target.value)} value={brand.slug?.current}></input> {brand.title}
          </div>
        ))}
      </div>

      <div className="flex flex-col">
        <h1>Price</h1>
        {PriceFilter?.map((price: PriceFilter) => (
          <div key={price.value}>
            <input type="checkbox" onChange={(e :any)=>togglePrice(e.target.value)} value={price.value}></input> {price.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSideBar;
