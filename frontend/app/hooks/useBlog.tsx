import { Blog } from "@/sanity.types";
import { useCallback, useState } from "react";
import { BlogService, BlogServiceV2 } from "../services/blog.service";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { BlogRequest } from "../types/blog.type";

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

  const getBlogsBySlug = useCallback(async (slug: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await BlogService.getBlogsBySlug(slug);
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
    getBlogs,
    getBlogsBySlug
  };
};

const BLOG_KEY = ['blog']
export const useBlogV2 = ()=>{
  const queryClient = useQueryClient()

  const {data: blogs = [],isLoading, error} = useQuery({
    queryKey: BLOG_KEY,
    queryFn: async()=>{
      const blogs = await BlogServiceV2.getAllBlog()
      return blogs.data 
    }
  })

  const createBlogMutation = useMutation({
    mutationFn: (data: BlogRequest) => BlogServiceV2.createBlog(data),

    onSuccess: ()=> queryClient.invalidateQueries({queryKey: BLOG_KEY})
  })

  const updateBlogMutation = useMutation({
    mutationFn: ({id,data}:{id:string, data:BlogRequest})=> BlogServiceV2.updateBlog(id,data),

    onSuccess: ()=>queryClient.invalidateQueries({queryKey: BLOG_KEY})
  })

  const deleteBlogMutation = useMutation({
    mutationFn: (id:string) => BlogServiceV2.deleteBlog(id),

    onSuccess: ()=>queryClient.invalidateQueries({queryKey: BLOG_KEY})
  })

  return {
    blogs,
    isLoading,
    error,

    createBlogMutation: createBlogMutation.mutateAsync,
    updateBlogMutation: updateBlogMutation.mutateAsync,
    deleteBlogMutation: deleteBlogMutation.mutateAsync

  }
}

export const useBlogBySlug = (slug:string)=>{

  const {data : blog = {}, isLoading,error} = useQuery({
    queryKey: ['/blog',slug],
    queryFn: async()=>{
      const blog = await BlogServiceV2.getBlogBySlug(slug)
      return blog.data
    }
  })

  return {
    blog,
    isLoading,
    error
  }
}