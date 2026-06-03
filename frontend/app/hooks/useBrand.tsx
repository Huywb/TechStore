import { Brand } from "@/sanity.types";
import { useCallback, useState } from "react";
import { BrandServiceV2, BrandsService } from "../services/brands.service";
import { BrandRequest, BrandType } from "../types/brand.type";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useBrand = () => {
  const [brands, setBrands] = useState<Brand[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const getBrands = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await BrandsService.getAllBrands();
      if (!response) {
        throw new Error("Failed to fetch brands");
      }
      setBrands(response);
    } catch (error) {
      const message = "Some thing wrong went fetch Brand " + error;
      setError(message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    brands,
    isLoading,
    error,
    getBrands,
  };
};

// userBrandV2 custom hook voi nodeJs
const BRAND_KEY = ["brands"];
export const userBrandV2 = () => {

  const queryClient = useQueryClient()

  const {data : brands = [] ,isLoading,error} = useQuery({
    queryKey: BRAND_KEY,
    queryFn : async()=>{
      const brands = await BrandServiceV2.getAllBrand()
      return brands.data
    }
  })

  const createBrandMutation = useMutation({
    mutationFn :(data : BrandRequest)=> BrandServiceV2.createBrand(data),

    onSuccess: ()=> queryClient.invalidateQueries({queryKey: BRAND_KEY})
  })

  const deleteBrandMutation = useMutation({
    mutationFn: (id: string) => BrandServiceV2.deleteBrand(id),

    onSuccess: ()=>queryClient.invalidateQueries({queryKey: BRAND_KEY})
  })

  const updateBrandMutation = useMutation({
    mutationFn: ({id,data}:{id:string,data:BrandRequest})=> BrandServiceV2.updateBrand(id,data),

    onSuccess: ()=>queryClient.invalidateQueries({queryKey: BRAND_KEY})
  })

  return {
    brands,
    isLoading,
    error,
    createBrandMutation : createBrandMutation.mutateAsync,
    updateBrandMutation : updateBrandMutation.mutateAsync,
    deleteBrandMutation : deleteBrandMutation.mutateAsync,
  }
}