'use client'
import { useStore } from "@/app/store/cart.store";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Product } from "@/sanity.types";
import { ShoppingCart } from "lucide-react";
import React from "react";
import toast from "react-hot-toast";

interface AddToCartButtonProps {
  product: Product;
  className?: string;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({
  product,
  className,
}) => {

    const {addItem} = useStore()

    const OutofStock = product?.stock === 0
    const handleAddToCart = (product : Product) =>{
        addItem(product)
        toast.success(`Add ${product.name} to Cart success`)
    }

  return (
    <Button
        onClick={()=>handleAddToCart(product)}
        disabled={OutofStock}
      className={cn(
        "flex gap-2 text-white bg-shop_dark_green hover:bg-shop_light_green hoverEffect py-4 px-4 text-md items-center mx-4 my-3 rounded-full cursor-pointer hover:translate-x-1",
        className,
      )}
    >
      <ShoppingCart size={20}/>
      {(product.stock as number) > 0 ? "Add to Cart" : "Out of Stock"}
    </Button>
  );
};

export default AddToCartButton;
