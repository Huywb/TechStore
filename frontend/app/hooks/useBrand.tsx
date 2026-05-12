import { Brand } from "@/sanity.types";
import { useCallback, useState } from "react";
import { BrandsService } from "../services/brands.service";

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
