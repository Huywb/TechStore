"use client";
import React, { useEffect, useState } from "react";
import ProductTab from "./ProductTab";
import { productType } from "@/app/contants/data";
import { useProduct } from "@/app/hooks/useProduct";
import { AnimatePresence, motion } from "motion/react";
import { Loader2 } from "lucide-react";
import NoProductAvailable from "./NoProductAvailable";
import ProductCard from "./ProductCard";
import Loading from "../Loading";

const ProductClient = () => {
  const [selectedTab, setSelectedTab] = useState(productType[0]?.value || "");

  const { products, ProductBySelected, isLoading } = useProduct();

  useEffect(() => {
    ProductBySelected(selectedTab);
  }, [selectedTab]);
  const handleSelectedTab = (selected: string) => {
    setSelectedTab(selected);
  };
  return (
    <div className="flex flex-col py-8">
      <ProductTab
        selectedTab={selectedTab}
        setSelectedTab={handleSelectedTab}
      />
      {isLoading ? (
        <Loading title="Product"/>
      ) : products?.length ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {products.map((product) => (
            <AnimatePresence key={product?.name}>
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
      ) : (
        <NoProductAvailable selectedTab={selectedTab} />
      )}
    </div>
  );
};

export default ProductClient;
