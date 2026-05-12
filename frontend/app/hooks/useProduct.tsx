import { useCallback, useState } from "react";
import { ProductServices } from "../services/products.service";
import { Product } from "@/sanity.types";

export const useProduct = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const ProductBySelected = useCallback(async (value: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const params = { variant: value };
      const response = await ProductServices.getProductBySelectedProdut(params);
      if (!response) {
        throw new Error("Failed to fetch products with variant");
      }
      setProducts(response);
    } catch (error) {
      const message = "Error went fetch product with Variant selectec " + error;
      setError(message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const getProductsByCategories = useCallback(async (value: string)=>{
    setIsLoading(true);
    setError(null);
    try {
      const params = { slug: value };
      const response = await ProductServices.getProductByCategories(params);
      if (!response) {
        throw new Error("Failed to fetch products with categories");
      }
      setProducts(response);
    } catch (error) {
      const message = "Error went fetch product with Categories  " + error;
      setError(message);
    } finally {
      setIsLoading(false);
    }
  },[])

  const getProductByHotDeal = useCallback(async ()=>{
    setIsLoading(true);
    setError(null);
    try {
      const response = await ProductServices.getProductHotDeal();
      if (!response) {
        throw new Error("Failed to fetch products with hot deal");
      }
      setProducts(response);
    } catch (error) {
      const message = "Error went fetch product with hot deal  " + error;
      setError(message);
    } finally {
      setIsLoading(false);
    }
  },[])


  return {
    ProductBySelected,
    products,
    error,
    isLoading,
    getProductsByCategories,
    getProductByHotDeal
  };
};
