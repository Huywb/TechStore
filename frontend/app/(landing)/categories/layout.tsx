import { categoriesService } from "@/app/services/categories.service";
import CategorySideBar from "@/components/modules/category/CategorySideBar";
import TextHeader from "@/components/modules/landing/TextHeader";
import Container from "@/components/modules/layout/Container";
import { Category } from "@/sanity.types";
import Link from "next/link";
import { ReactNode } from "react";

const RootLayout = async ({ children }: { children: ReactNode }) => {
  const categories = await categoriesService.getCategories();
  return (
    <Container>
      <TextHeader />
      <div className="flex gap-4 mt-4">
        <CategorySideBar categories={categories}/>
        <div className="flex-6 ">{children}</div>
      </div>
    </Container>
  );
};

export default RootLayout;
