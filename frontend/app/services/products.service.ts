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
  },

  async getProductFilter(params: ProductFilterRequest) {
    const order = params.filterPrices === "desc" ? "desc" : "asc";

    const query = `*[_type == "product"
                ${params.filterCategories?.length ? `&& references(*[
                      _type == "category" && slug.current in $filterCategories]._id)` : ""}
                ${params.filterBrands?.length ? `&& brand->slug.current in $filterBrands` : ""}] | 
                order(price ${order}){
                  ...}`;
    const response = await client.fetch(query, params);
    return response;
  },

  async getProductBySlug(params: ProductSlugRequest){
    const query = `*[_type == "product" && slug.current == $slug]{
  ...,
  
  "categories": categories[]->{
    _id,
    title,
    slug
  },

  "brand": brand->{
    _id,
    title
  }
}`

    const response = await client.fetch(query, params);
    return response;          
  }
};
