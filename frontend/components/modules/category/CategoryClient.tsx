"use client";
import { useEffect } from "react";
import { useCategory } from "@/app/hooks/useCategory";
import Loading from "../Loading";
import { AnimatePresence,motion } from "motion/react";
import CategoryCard from "./CategoryCard";

const CategoryClient = () => {
  const { categories, getCategories, isLoading } = useCategory();
  console.log(categories)
  useEffect(() => {
    getCategories(6);
  }, []);
  return (
    <div className="border border-gray-300 p-4 flex flex-col gap-4 mt-10 rounded-md">
      <h1 className="font-bold text-2xl">Popular Categories</h1>
      <span className="h-0.5 w-full bg-gray-200"></span>
      {isLoading ? (
        <Loading title="Categories" />
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {categories.map((item) => (
            <AnimatePresence key={item._id}>
              <motion.div
                initial={{ opacity: 0.2 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                exit={{ opacity: 0.2 }}
              >
                <CategoryCard category={item} />
              </motion.div>
            </AnimatePresence>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryClient;
