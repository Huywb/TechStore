'use client'
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Product } from "@/sanity.types";
import { ShoppingCart } from "lucide-react";
import React from "react";

interface AddToCartButtonProps {
  product: Product;
  className?: string;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({
  product,
  className,
}) => {
    const OutofStock = product?.stock === 0
    const handleAddToCart = (product : Product) =>{
        alert(`Add product ${product.name} to cart success`)
    }
  return (
    <Button
        onClick={()=>handleAddToCart(product)}
        disabled={OutofStock}
      className={cn(
        "flex gap-2 text-white bg-shop_dark_green hover:bg-shop_light_green hoverEffect p-2 px-4 text-sm items-center mx-4 my-2 rounded-full cursor-pointer hover:translate-x-1",
        className,
      )}
    >
      <ShoppingCart size={18}/>
      {(product.stock as number) > 0 ? "Add to Cart" : "Out of Stock"}
    </Button>
  );
};

export default AddToCartButton;
