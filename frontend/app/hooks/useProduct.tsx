import { useCallback, useState } from "react"
import { ProductServices } from "../services/products.service"
import { Product } from "@/sanity.types"

export const useProduct = ()=>{
    
    const [products,setProducts] = useState<Product[]>([])
    const [isLoading,setIsLoading] = useState<boolean>(false)
    const [error,setError] = useState<string | null>(null)

    const ProductBySelected = useCallback(async(value:string)=>{
        setIsLoading(true)
        setError(null)
        try {
            const params = {variant: value}
            const response = await ProductServices.getProductBySelectedProdu(params)
            setProducts(response)
        } catch (error) {
            const message = "Error went fetch product with Variant selectec " + error
            setError(message)
        } finally {
            setIsLoading(false)
        }
    },[])

    return {
        ProductBySelected,
        products,
        error,
        isLoading
    }
}