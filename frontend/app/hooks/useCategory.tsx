import { Category } from "@/sanity.types";
import { useCallback, useState } from "react";
import { categoriesService, categoriesServiceV2 } from "../services/categories.service";
import { error } from "console";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { CategoryRequest } from "../types/category.type";
import { string } from "zod";

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


const CATEGORY_KEY = ['category']

export const useCategoryV2 = ()=>{

  const queryClient = useQueryClient()

  const {data: categories =[] , isLoading,error} = useQuery({
    queryKey: CATEGORY_KEY,
    queryFn: async()=> {
      const {data , message} = await categoriesServiceV2.getAllCategories()
      return {data, message}
    }})

  const createCategoryMutation = useMutation({
    mutationFn: (data: CategoryRequest)=> categoriesServiceV2.createCategory(data),

    onSuccess: ()=> queryClient.invalidateQueries({queryKey: CATEGORY_KEY})
  })

  const updateCategoryMutation = useMutation({
    mutationFn: ({id,data}:{id:string,data: CategoryRequest})=> categoriesServiceV2.updateCategory(id,data),

    onSuccess: ()=> queryClient.invalidateQueries({queryKey: CATEGORY_KEY})
  })

  const deleteCategoryMutation = useMutation({
    mutationFn: (id:string)=> categoriesServiceV2.deleteCategory(id),

    onSuccess: ()=> queryClient.invalidateQueries({queryKey: CATEGORY_KEY})
  })

  return {
    categories : categories.data,
    isLoading,
    error,

    createCategoryMutation: createCategoryMutation.mutateAsync,
    updateCategoryMutation: updateCategoryMutation.mutateAsync,
    deleteCategoryMutation: deleteCategoryMutation.mutateAsync
  }
}