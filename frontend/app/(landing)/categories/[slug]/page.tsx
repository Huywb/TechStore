import { ProductServices } from "@/app/services/products.service";
import Container from "@/components/modules/layout/Container";
import NoProductAvailable from "@/components/modules/product/NoProductAvailable";
import ProductCard from "@/components/modules/product/ProductCard";
import { Product } from "@/sanity.types";
import { AnimatePresence } from "motion/react";

type Props = {
  params: Promise<{ slug: string }>;
};

const page = async ({ params }: Props) => {
  const { slug } = await params;
  const products = await ProductServices.getProductByCategories({ slug });
  if (products.length < 1) {
    return <NoProductAvailable selectedTab={slug} />;
  }

  return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
        {products.map((product: Product) => (
              <ProductCard key={product._id} product={product} />
        ))}
      </div>
  );
};

export default page;
