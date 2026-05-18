import { Product } from "@/sanity.types";
import { create } from "zustand";
import {persist} from 'zustand/middleware'

export interface CartItem {
    product: Product,
    quantity: number
}

interface StoreState {
    items: CartItem[],
    addItem: (product: Product) =>void,
    removeItem: (productId: string)=>void,
    deleteCartProduct: (productId: string)=>void,
    resetCart: ()=>void,
    getTotalPrice: ()=>number,
    getSubTotalPrice: ()=>number,
    getItemCount: (productId: string)=>number,
    getGroupItems: ()=>CartItem[],
    //favorite
    favoriteProduct: Product[],
    addRemoveToFavorite: (product:Product)=>void,
    resetFavorite: ()=>void
}

export const useStore = create<StoreState>()(
    persist((set,get)=>({
        items: [],
        //favorite
        favoriteProduct: [],
        addItem:(product)=>set((state)=>{
            const existing = state.items.find(item=>item.product._id === product._id) 
            if(existing){
                return {
                    items: state.items.map((item)=> item.product._id === product._id ? {...item,quantity: item.quantity + 1} : item)
                }
            }else {
                return {items:[...state.items, {product,quantity:1}]}
            }
        }),
        removeItem:(productId)=>set((state)=>({
            items: state.items.reduce((acc,item)=>{
                if(item.product._id === productId){
                    if(item.quantity >1){
                        acc.push({...item,quantity: item.quantity -1})
                    }
                } else {
                    acc.push(item)
                }
                return acc
            },[] as CartItem[])
        })),
        deleteCartProduct:(productId)=>set((state)=>({
            items: state.items.filter((item)=> item.product._id !== productId)
        })) ,
        resetCart:()=>set({items: []}),
        getTotalPrice:()=>{
            return get().items.reduce((sum,item)=>
                sum + (item.product.price ?? 0) * item.quantity
                ,0)
        },
        getSubTotalPrice:()=>{
            return get().items.reduce((sum,item)=>{
                const price = item.product.price ?? 0
                const discount = ((item.product.discount ?? 0) * price) / 100
                const discountedPrice = price - discount
                return sum + discountedPrice * item.quantity
            },0)
        },
        getItemCount:(productId)=> {
            const item = get().items.find(item => item.product._id === productId)
            return item ? item.quantity : 0
        },
        getGroupItems:()=>get().items,
        addRemoveToFavorite: (product:Product)=>set((state)=>{
            const existing = state.favoriteProduct.find((item)=>item?._id === product._id)
            if(existing){
                return {
                    favoriteProduct: state.favoriteProduct.filter(item=>item._id !== product._id),
                    message:`Remove ${product.name} from favorite success`
                }
            } else {
                return {
                    favoriteProduct : [...state.favoriteProduct,product],
                    message:`Add ${product.name} to favorite success`
                }
            }
        }),
        resetFavorite: () =>set({favoriteProduct : []})

    }),{
        name:"cart"
    })
)

