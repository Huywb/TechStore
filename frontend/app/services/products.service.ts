import { Product } from "@/sanity.types";
import { client } from "@/sanity/lib/client";

export const ProductServices = {
  async getProductBySelectedProdut(params: ProductBySelectedRequest) {
    const query = `*[_type == "product" && variant == $variant] | order(name asc){
        ...,"categories": categories[]->title}`;
    const response = await client.fetch(query, params);
    return response;
  },

  async getProductByCategories(params: ProductByCategoriesRequest) {
    const query = `*[_type == "product" && $slug in categories[]->slug.current] | order(name asc){
  ...}`;
    const response = await client.fetch(query, params);
    return response;
  },

  async getProductHotDeal() {
    const query = `*[_type == "product" && status == 'hot'] | order(name asc){
  ...}`;
    const response = await client.fetch(query);
    return response;
  }
  
};
