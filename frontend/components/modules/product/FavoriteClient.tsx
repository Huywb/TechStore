"use client";
import { useStore } from "@/app/store/cart.store";
import { Product } from "@/sanity.types";
import { Heart } from "lucide-react";
import React, { useState } from "react";
import toast from "react-hot-toast";

interface FavoriteClientProps {
  product: Product;
}

const FavoriteClient: React.FC<FavoriteClientProps> = ({ product }) => {
  const favorite = useStore((state) => state.favoriteProduct);
  const isFavorite = favorite.some((item) => item._id == product?._id);
  const { addRemoveToFavorite } = useStore();
  const handleAddFavorite = (product: Product) => {
    addRemoveToFavorite(product);
    if(isFavorite){
      toast.error(`Remove ${product.name} from favorite success`)
    } else {
      toast.success(`Add ${product.name} to favorite success`)
    }
  };
  return (
    <div
      onClick={() => handleAddFavorite(product)}
      className={`cursor-pointer ${isFavorite ? "bg-gray-500 text-white" : ""} p-1 border  w-full hover:bg-gray-500 hover:text-white hoverEffect  border-gray-500 font-medium rounded-full `}
    >
      <Heart size={20} />
    </div>
  );
};

export default FavoriteClient;
