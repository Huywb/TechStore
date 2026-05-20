import { client } from "@/sanity/lib/client";

export const addressService= {
    async getAllAddress(){
        const query = `*[_type == "address"]{...}`;
            const response = await client.fetch(query);
            return response;
    }
}