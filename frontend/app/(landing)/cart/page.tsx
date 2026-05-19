"use client";
import { useStore } from "@/app/store/cart.store";
import CartClient from "@/components/modules/landing/cart/CartClient";
import EmptyCart from "@/components/modules/landing/cart/EmptyCart";
import Login from "@/components/modules/landing/header/Login";
import Container from "@/components/modules/layout/Container";
import { SignUpButton, useUser } from "@clerk/nextjs";

const page = () => {
  const carts = useStore((state) => state.items);
  const { user } = useUser();

  return (
    <div className="bg-gray-100">
      <Container>
        {!user ? (
          <div className="flex items-center justify-center">
            <div className="flex flex-col gap-2 bg-white items-center justify-center max-w-120 p-6 shadow-lg">
              <h1 className="text-2xl font-bold text-shop_light_green">
                TECHSTORE
              </h1>
              <h3 className="text-2xl font-bold">Welcome Back!</h3>
              <span className="text-sm text-gray-500 text-center">
                Log in to view your cart items and checkout, Don't miss out on
                your favorite products
              </span>
              <div className=" w-full py-2 rounded-md flex items-center justify-center bg-shop_dark_green hoverEffect hover:bg-shop_light_green cursor-pointer text-white">
                <Login />
              </div>
              <span className="text-gray-500 text-sm">
                Don't have an account?
              </span>
              <div className="cursor-pointer border w-full text-center p-2 rounded-md hoverEffect hover:bg-shop_light_green hover:text-white">
                <SignUpButton mode="modal">Create an account</SignUpButton>
              </div>
            </div>
          </div>
        ) : (
          !carts.length ? <EmptyCart /> : <CartClient carts={carts}/>
        ) }
      </Container>
    </div>
  );
};

export default page;
