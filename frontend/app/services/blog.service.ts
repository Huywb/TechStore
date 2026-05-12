import { client } from "@/sanity/lib/client";

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
};
