import { client } from "@/sanity/lib/client";

export const BrandsService = {
  async getAllBrands() {
    const query = `*[_type == "brand"] | order(name asc){
        ...}`;
    const response = await client.fetch(query);
    return response;
  },
};
