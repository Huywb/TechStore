import Container from "@/components/modules/layout/Container";
import { Button } from "../../components/ui/button";
import Image from 'next/image';
import banner from '../../public/assets/banner_main.png'
import ProductClient from "@/components/modules/product/ProductClient";
import CategoryClient from "@/components/modules/category/CategoryClient";
import BrandClient from "@/components/modules/brand/BrandClient";
import BlogClient from "@/components/modules/blog/BlogClient";

export const revalidate = 300;

export default function Home() {
  return (
    <Container className="w-full bg-shop-pink-light ">
        
        {/** Banner */} 
        <Image src={banner} className="rounded-md mt-5"  alt="banner image"/>
        
        {/** Product Layout */} 
        <ProductClient />

        {/** Categories Layout */} 
        <CategoryClient />

        {/** Brands Layout */} 
        <BrandClient />

        {/** blog Layout */} 
        <BlogClient />
    </Container>
  );
}
