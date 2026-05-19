import React from "react";
import emptyCart from '../../../../public/assets/empty-cart.png'
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const EmptyCart = () => {
  return (
    <div className="flex items-center justify-center ">
      <div className="flex flex-col gap-5 bg-white items-center justify-center w-120 p-6 shadow-lg">
            <Image src={emptyCart} alt="empty cart image" width={200} height={300} className="rotate-10"/>
            <h3 className="text-2xl font-bold">Your Cart is feeling lonely</h3>
            <p className="text-sm text-gray-500 text-center">It looks like you haven't added anything to your cart yet. Let's change that and find some amazing products for you</p>
            <Link href='/shop' className='font-bold w-full text-center rounded-xl bg-gray-100 text-black p-2 border border-gray-300'>
                Discover Products
            </Link>
      </div>
    </div>
  );
};

export default EmptyCart;
