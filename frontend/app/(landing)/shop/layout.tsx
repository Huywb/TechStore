import { BrandsService } from "@/app/services/brands.service";
import { categoriesService } from "@/app/services/categories.service";
import TextHeader from "@/components/modules/landing/TextHeader";
import Container from "@/components/modules/layout/Container";
import ProductSideBar from "@/components/modules/shop/ProductSideBar";
import { ReactNode } from "react";

const RootLayout = async ({ children }: { children: ReactNode }) => {
  const categories = await categoriesService.getCategories();
  const brands = await BrandsService.getAllBrands()
  return (
    <Container>
      <TextHeader text="GET THE PRODUCT ASS YOU NEEDS"/>
      <div className="w-full h-[1px] bg-gray-300 mt-4"></div>
      <div className="flex gap-4 mt-4">
        <ProductSideBar categories={categories} brands={brands}/>
        <div className="flex-6 ">{children}</div>
      </div>
    </Container>
  );
};

export default RootLayout;
