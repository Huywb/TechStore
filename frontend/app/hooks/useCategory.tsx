import { Category } from "@/sanity.types";
import { useCallback, useState } from "react";
import { categoriesService } from "../services/categories.service";
import { error } from "console";

export const useCategory = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const getCategories = useCallback(async (quantity?: number) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await categoriesService.getCategories(quantity);
      if (!response) {
        throw new Error("Failed to fetch categories");
      }
      setCategories(response);
    } catch (error) {
      const message = "Error went fetch category with  " + error;
      setError(message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    getCategories,
    categories,
    isLoading,
    error,
  };
};
