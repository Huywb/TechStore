'use client'
import { Category } from "@/sanity.types";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";

interface CategorySideBarProps{
    categories: Category[]
}

const CategorySideBar:React.FC<CategorySideBarProps> = ({categories}) => {
    const {slug} = useParams()
  return (
    <div className="flex flex-1 flex-col">
      {categories.map((item: Category) => (
        <Link
          href={`/categories/${item.slug?.current!}`}
          key={item._id}
          className={`${slug === item.slug?.current ? 'text-white bg-red-400' : ''} p-2 border text-sm`}
        >
          {item.title}
        </Link>
      ))}
    </div>
  );
};

export default CategorySideBar;
