import { client } from "@/sanity/lib/client";
import { BlogRequest, BlogSlugRequest } from "../types/blog.type";
import BASE_URL from "../common/Base_Api";
import { API_PATH } from "../common/Api_Route";
import { m } from "motion/react";

export const BlogService = {
  async getBlogs(quantity?: number) {
    const params = quantity ? { quantity } : {};
    const query = quantity
      ? `*[_type == "blog"] | order(name asc) [0...$quantity]{
                ...,"blogcategories": blogcategories[]->{
      _id,
      title,
      slug
   }}`
      : `*[_type == "blog"] | order(name asc){
                ...,"blogcategories": blogcategories[]->{
      _id,
      title,
      slug
   }}`;
    const response = await client.fetch(query, params);
    return response;
  },

  async getBlogsBySlug(slug: string){
    const query = `*[_type == "blog" && slug.current == $slug][0]{...,"blogcategories": blogcategories[]->{
      _id,
      title,
      slug
   },
   author->}`
    const response = await client.fetch(query,{slug});
    return response;
  },


  async getAllCategoriesBlog(){
    const query = `*[_type == "blogcategory" ]{...,
      "blogCount": count(
        *[_type == "blog" && references(^._id)]
      )}`
    const response = await client.fetch(query);
    return response;
  },

  async getLatestBlog(number?:number){
    const query = `*[_type == "blog" && isLatest == true]| order(_createdAt desc)[0...$number]{...}`
    const response = await client.fetch(query,{number});
    return response;
  },
  
  async getListBlogCategories(){
    const query = `
  *[_type == "blogcategory"] | order(_createdAt desc)[0...$number]{
    ...,
    "blogCount": count(
      *[_type == "blog" && references(^._id)]
    )
  }`

  const response = await client.fetch(query);
    return response;}
};


export const BlogServiceV2 = {
  async getAllBlog(){
    const response = await BASE_URL.get(API_PATH.BLOG.GET_ALL_BLOG)
    const res = await response.data
    return res 
  },

  async getBlogBySlug(slug:string){
    const response = await BASE_URL.get(API_PATH.BLOG.GET_BLOG_BY_SLUG(slug))
    const res = await response.data
    return res
  },

  async createBlog(data: BlogRequest){
    const response = await BASE_URL.post(API_PATH.BLOG.CREATE_BLOG,data)
    const res = await response.data
    return res
  },

  async updateBlog(id:string,data:BlogRequest){
    const response = await BASE_URL.patch(API_PATH.BLOG.UPDATE_BLOG(id),data)
    const res = await response.data
    return res
  },

  async deleteBlog(id:string){
    const response = await BASE_URL.delete(API_PATH.BLOG.DELETE_BLOG(id))
    const res = await response.data
    return res
  }
}