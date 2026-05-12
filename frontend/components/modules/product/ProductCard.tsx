import { Product } from "@/sanity.types";
import { urlFor } from "@/sanity/lib/image";
import { Flame } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Raiting from "../Raiting";
import FavoriteClient from "./FavoriteClient";
import AddToCartButton from "./AddToCartButton";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  console.log('123',product)
  return (
    <div className="flex flex-col gap-2 ">
      <div className="border-gray-300 border rounded-md">
        <div className="relative group  p-2 border-gray-300 bg-gray-200/30  rounded-md cursor-pointer">
          {product.images && (
            <Link href={`/product/${product.slug?.current}`}>
              <Image
                src={urlFor(product?.images[0]).url()}
                alt="Product image"
                loading="lazy"
                width={500}
                height={500}
                className="group-hover:scale-110 hoverEffect "
              />
            </Link>
          )}

          <div className="absolute top-2 right-2 z-10 ">
            <FavoriteClient />
          </div>

          {product?.status == "hot" && (
            <Link href={"/deal"} className="absolute top-2 left-2 z-10 ">
              <Flame
                fill="#fb6c08"
                size={30}
                className="text-shop_orange/50 p-1 border  border-shop_orange/50 rounded-full hoverEffect group-hover:border-shop_orange"
              />
            </Link>
          )}

          {product?.status == "sale" && (
            <div className="absolute top-4 text-xs left-3 px-1 border border-gray-500 font-medium min-w-10 text-center  rounded-full">
              sale!
            </div>
          )}
        </div>
        <div className="flex flex-col min-h-30   gap-1  p-2">
            <span className="text-gray-500 text-xs line-clamp-1">{product.categories?.slice(0,3).join(' ').toUpperCase()}</span>
            <span className="font-bold line-clamp-1">{product.name }...</span>
            <Raiting />
            <span>{product.stock ? 'In stock' : ' Out of stock'} {product.stock}</span>
            <span className="font-bold">${(product.price! * (1 - product.discount!/100 )).toFixed(2)}   <span className="ml-3 text-gray-500 line-through ">${product.discount ? product.price : ''}</span></span>
        </div>
        <AddToCartButton product={product} className="max-w-40"/>
            {/*
            <Button className='text-white bg-shop_dark_green hover:bg-shop_light_green hoverEffect max-w-30 p-4 mx-4 my-2 rounded-full cursor-pointer hover:translate-x-1'>
                <ShoppingCart/>
                Add to Cart
            </Button>*/}
      </div>
    </div>
  );
};

export default ProductCard;
