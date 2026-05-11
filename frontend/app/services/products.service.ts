import { client } from "@/sanity/lib/client";

export const ProductServices = {

  async getProductBySelectedProdu(params: ProductBySelectedRequest) {
    const query = `*[_type == "product" && variant == $variant] | order(name asc){
        ...,"categories": categories[]->title}`;
    const response = await client.fetch(query, params);
    console.log(response)
    return response;
  },


};
