import { client } from "@/sanity/lib/client";

export const categoriesService = {
  async getCategories(quantity?: number) {
    const params = quantity ? { quantity } : {};
    const query = quantity
      ? `*[_type == "category"] | order(name asc) [0...$quantity]{
        ...,"productCount": count(*[_type == "product" && references(^._id)])}`
      : `*[_type == "category"] | order(name asc) {
        ...,
        "productCount" : count(*[_type == "product" && references(^._id)])
        }`;

    const response = await client.fetch(query, params);
    return response;
  },
};
