"use client";
import { Product } from "@/sanity.types";
import { urlFor } from "@/sanity/lib/image";
import {
  ArrowLeft,
  ArrowRight,
  Flame,
  Minus,
  Plus,
  Trash2Icon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Raiting from "../Raiting";
import FavoriteClient from "./FavoriteClient";
import AddToCartButton from "./AddToCartButton";
import { useStore } from "@/app/store/cart.store";
import toast from "react-hot-toast";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const quantity = useStore(
    (state) =>
      state.items.find((item) => item.product._id === product._id)?.quantity ||
      0,
  );
  const { addItem, removeItem} = useStore();

  const handleAddItem = (product:Product)=>{
    if(quantity < product?.stock! ){
        addItem(product)
    } else{
      toast.error(`${product.name} is Limit`)
    }
  }

  const handleRemoveItem = (productId: string)=>{
    removeItem(productId)
    if(quantity <= 1){
       toast.error(`Remove ${product.name} from cart success`)
    }
  }

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
            <FavoriteClient product={product}/>
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
          <span className="text-gray-500 text-xs line-clamp-1">
            {product.categories?.slice(0, 3).join(" ").toUpperCase()}
          </span>
          <span className="font-bold line-clamp-1">{product.name}...</span>
          <Raiting />
          <span>
            {product.stock ? "In stock" : " Out of stock"} {product.stock}
          </span>
          <span className="font-bold">
            ${product.price}{" "}
            <span className="ml-3 text-gray-500 line-through ">
              ${product.discount ? product.price! + (product.price! *  product.discount/100) : ""}
            </span>
          </span>
        </div>
        <div>
          {quantity > 0 ? (
            <div className="flex flex-col gap-2  px-2 text-sm">
              <div className="flex justify-between ">
                <p className="text-gray-500">Currency</p>
                <div className="flex gap-3 items-center">
                  <Minus
                    className="text-gray-500 cursor-pointer hover:bg-shop_light_green hover:text-white hoverEffect  border"
                    onClick={() => handleRemoveItem(product._id)}
                  />
                  <span className="font-bold">{quantity}</span>
                  <Plus
                    className=" text-gray-500 cursor-pointer hover:bg-shop_light_green hover:text-white hoverEffect  border"
                    onClick={() => handleAddItem(product)}
                  />
                </div>
              </div>
              <div className="flex justify-between font-bold mb-1.5">
                <p>Subtotal</p>
                <span>${(product.price! * quantity).toFixed(2)}</span>
              </div>
            </div>
          ) : (
            <AddToCartButton product={product} className="max-w-40" />
          )}
        </div>
        {/*
        <div>
                <Trash2Icon
                  className="cursor-pointer hover:text-red-500 hoverEffect"
                  onClick={() => handleDeleteProductFromCart(product._id)}
                />
              </div>
            <Button className='text-white bg-shop_dark_green hover:bg-shop_light_green hoverEffect max-w-30 p-4 mx-4 my-2 rounded-full cursor-pointer hover:translate-x-1'>
                <ShoppingCart/>
                Add to Cart
            </Button>*/}
      </div>
    </div>
  );
};

export default ProductCard;
