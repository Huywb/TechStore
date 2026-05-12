import { Blog } from "@/sanity.types";
import { useCallback, useState } from "react";
import { BlogService } from "../services/blog.service";

export const useBlog = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const getBlogs = useCallback(async (quantity?: number) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await BlogService.getBlogs(quantity);
      if (!response) {
        throw new Error("Failed to fetch categories");
      }
      setBlogs(response);
    } catch (error) {
      const message = "Error went fetch category with  " + error;
      setError(message);
    } finally {
      setIsLoading(false);
    }
  }, []);
  return {
    blogs,
    isLoading,
    error,
    getBlogs
  };
};
