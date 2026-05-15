"use client";
import { useProduct } from "@/app/hooks/useProduct";
import { useFilterStore } from "@/app/store/filter.store";
import Loading from "@/components/modules/Loading";
import NoProductAvailable from "@/components/modules/product/NoProductAvailable";
import ProductCard from "@/components/modules/product/ProductCard";
import { AnimatePresence, motion } from "motion/react";
import { useEffect } from "react";

const page = () => {
  const { products, isLoading, getProductFilter } = useProduct();

  const { filterBrands, filterCategories, filterPrices } = useFilterStore();

  useEffect(() => {
    const params = {
      filterBrands,
      filterCategories,
      filterPrices,
    };
    getProductFilter(params);
  }, [filterBrands, filterCategories, filterPrices]);
  if (isLoading) {
    return <Loading title="Product" />;
  }
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
      {products.map((product) => (
        <AnimatePresence key={product?._id}>
          <motion.div
            initial={{ opacity: 0.2 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            exit={{ opacity: 0.2 }}
          >
            <ProductCard product={product} />
          </motion.div>
        </AnimatePresence>
      ))}
    </div>
  );
};

export default page;
