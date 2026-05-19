'use client'
import { CartItem, useStore } from "@/app/store/cart.store";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import React from "react";
import FavoriteClient from "../../product/FavoriteClient";
import { Minus, Plus, Trash } from "lucide-react";
import { Product } from "@/sanity.types";
import toast from "react-hot-toast";
import { Capitalize } from "@/app/common/helper";
import Link from "next/link";

interface ItemCartProps {
  item: CartItem;
}

const ItemCart: React.FC<ItemCartProps> = ({ item }) => {
  const { addItem, removeItem,deleteCartProduct} = useStore();

  const handleAddItem = (product:Product)=>{
    if(item.quantity < product?.stock! ){
        addItem(product)
    } else{
      toast.error(`${product.name} is Limit`)
    }
  }

  const handleRemoveItem = (productId: string)=>{
    removeItem(productId)
    if(item.quantity <= 1){
       toast.error(`Remove ${item.product.name} from cart success`)
    }
  }

  const handleDeleteProductFromCart = (productId: string)=>{
    deleteCartProduct(productId)
  }

  return (
    <div  className="flex gap-4 p-2 bg-white justify-between border mb-2">
      <Link href={`/product/${item.product.slug?.current}`} className="flex-1">
      <Image
        src={urlFor(item.product?.images[0]!).url()}
        alt="cart product image"
        width={50}
        height={10}
        className="flex-1 aspect-auto w-full"
      />
      </Link>
      <div className="flex flex-col  justify-between flex-3 text-sm">
        <div className="flex flex-col gap-1">
          <h1 className="font-bold">{item.product.name}</h1>
          <span className="text-gray-500">
            Variant: <span className="font-bold text-black">{Capitalize(item.product?.variant!)}</span>
          </span>
          <span className="text-gray-500">
            Status: <span className="font-bold text-black">{Capitalize(item.product.status!)}</span>
          </span>
        </div>
        <div className="flex gap-2 max-w-15 items-center justify-center">
          <div>
          <FavoriteClient product={item.product}  />
          </div>
          <Trash onClick={()=>handleDeleteProductFromCart(item.product._id)}/>
        </div>
      </div>
      <div className="flex flex-col justify-between flex-1 items-center">
        <span className="font-bold">${(item.product.price! * item.quantity).toFixed(2)}</span>
        <div className="flex gap-3 items-center">
          <Minus
            className="text-gray-500 cursor-pointer hover:bg-shop_light_green hover:text-white hoverEffect  border"
            onClick={() => handleRemoveItem(item.product._id)}
          />
          <span className="font-bold">{item.quantity}</span>
          <Plus
            className=" text-gray-500 cursor-pointer hover:bg-shop_light_green hover:text-white hoverEffect  border"
            onClick={() => handleAddItem(item.product)}
          />
        </div>
      </div>
    </div>
  );
};

export default ItemCart;
