import { Address } from "@/sanity.types"
import { useCallback, useState } from "react"
import { addressService } from "../services/address.service";





export const useAddress= ()=>{
    const [listAddress,setListAddress] = useState<Address[]>([])
    
    const getAllAddress = useCallback(async () => {
        try {
          const response = await addressService.getAllAddress();
          if (!response) {
            throw new Error("Failed to fetch brands");
          }
          setListAddress(response);
        } catch (error) {
          const message = "Some thing wrong went fetch Brand " + error;
          console.log(message)
        } finally {
        }
      }, []);

    return{
        getAllAddress,
        listAddress
    }
}