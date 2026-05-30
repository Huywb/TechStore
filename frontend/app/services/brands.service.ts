import { client } from "@/sanity/lib/client";
import { BrandRequest } from "../types/brand.type";
import BASE_URL from "../common/Base_Api";
import { API_PATH } from "../common/Api_Route";

export const BrandsService = {
  async getAllBrands() {
    const query = `*[_type == "brand"] | order(name asc){
        ...}`;
    const response = await client.fetch(query);
    return response;
  },
};


// Brand Service voi Nodejs
export const BrandServiceV2 = {
  
  async createBrand(data : BrandRequest){
    const response = await BASE_URL.post(API_PATH.BRAND.CREATE_BRAND,data)
    const res = await response.data
    return res
  },

  async getAllBrand() {
    const response = await BASE_URL.get(API_PATH.BRAND.GET_ALL_BRAND)
    const res = await response.data
    return res
  } ,

  async updateBrand(id:string,data: BrandRequest){
    const response = await BASE_URL.patch(API_PATH.BRAND.UPDATE_BRAND(id),data)
    const res = await response.data
     return res
  },

  async deleteBrand(id: string){
    const response = await BASE_URL.delete(API_PATH.BRAND.DELETE_BRAND(id))
    const res = await response.data
    return res
  }

}