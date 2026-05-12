'use client'
import { useBrand } from "@/app/hooks/useBrand";
import React, { useEffect } from "react";
import Loading from "../Loading";
import { AnimatePresence,motion } from "motion/react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { extraData } from "@/app/contants/data";

const BrandClient = () => {

    const {brands,isLoading,error,getBrands} = useBrand()

    useEffect(()=>{
        getBrands()
    },[])
  return (
    <div className="border border-gray-300 p-4 rounded-md flex flex-col gap-4 mt-20">
        <div className="flex justify-between">
      <h1 className="font-bold text-2xl">Shop By Brands</h1>
        <span>View all</span>
        </div>
      <span className="h-0.5 w-full bg-gray-200"></span>
      {isLoading ? (
        <Loading title="Categories" />
      ) : (
        <div className="flex flex-col gap-4 bg-gray-200">

        <div className="grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-8  min-h-32 items-center gap-4 py-4 px-6">
          {brands.map((item) => (
            <AnimatePresence key={item._id}>
              <motion.div
                initial={{ opacity: 0.2 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                exit={{ opacity: 0.2 }}
              >
                <Image src={urlFor(item.image!).url()} alt="Brand image" width={250} height={250} className="w-32 h-20 bg-white object-contain overflow-hidden" />
              </motion.div>
            </AnimatePresence>
          ))}
        </div>
        <div className="mx-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mb-4 bg-gray-100 rounded-md">
            {
                extraData.map((item)=>(
                    <div className="flex gap-2  p-4 rounded-md items-center" key={item.title}>
                        <div className="text-gray-700">{item.icon}</div>
                        <div className="flex flex-col text-sm">
                            <h1 className="font-semibold ">{item.title}</h1>
                            <span className="text-gray-500">{item.description}</span>
                        </div>
                    </div>
                ))
            }
        </div>
        </div>
      )}
    </div>
  );
};

export default BrandClient;
