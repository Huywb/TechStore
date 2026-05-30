import { m } from "motion/react";


export const API_PATH = {
    AUTH: {
        GET_ALL_USER : '/user',
        GET_USER_BY_ID : (id: string) => `/user/${id}`,
        CREATE_ADMIN_USER: '/user/admin/register',
        LOGIN_ADMIN : '/user/admin/login',
        UPDATE_USER_PROFILE: (id:string) =>`/user/profile/${id}`,
        DELETE_USER : (id:string) => `/user/${id}`
    },
    BLOG: {
        GET_ALL_BLOG: '/blog',
        GET_BLOG_BY_SLUG : (slug:string)=> `/blog/${slug}`,
        CREATE_BLOG : '/blog',
        UPDATE_BLOG : (id:string)=> `/blog/${id}`,
        DELETE_BLOG : (id:string)=> `/blog/${id}`
    },
    BRAND: {
        GET_ALL_BRAND : '/brand',
        CREATE_BRAND: '/brand',
        UPDATE_BRAND: (id:string) => `/brand/${id}`,
        DELETE_BRAND :  (id:string) => `/brand/${id}`
    },
    CATEGORY : {
        GET_ALL_CATEGORY: '/category',
        CREATE_CATEGORY : '/category',
        UPDATE_CATEGORY : (id:string) => `/category/${id}`,
        DELETE_CATEGORY : (id: string) => `/category/${id}`
    },
    ORDER : {
        GET_ALL_ORDER : '/order',
        GET_ORDER_BY_ID : (id:string)=> `/order/${id}`
    },
    PAYMENT : {
        CREATE_CHECKOUT_PAYMENT : '/stripe/create-checkout-session'
    },
    PRODUCT : {
        GET_ALL_PRODUCT : '/product',
        GET_PRODUCT_BY_SLUG : (slug:string)=> `/product/${slug}`,
        CREATE_PRODUCT : '/product',
        UPDATE_PRODUCT_BY_ID: (id:string)=> `/product/${id}`,
        DELETE_PRODUCT : (id:string) => `/product/${id}`
    }

}