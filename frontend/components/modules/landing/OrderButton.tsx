import { CartItem } from "@/app/store/cart.store";
import { loadStripe } from "@stripe/stripe-js";
import Link from "next/link";
import React from "react";

interface OrderButtonProps {
  items?: CartItem[];
}


const OrderButton: React.FC<OrderButtonProps> = ({ items }) => {
  const handleCheckout = async () => {
    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        items,
      }),
    });

    const data = await res.json();

    window.location.href = data.url

  };
  return (
    <button onClick={handleCheckout}
      className="p-2 w-full bg-shop_dark_green hover:bg-shop_light_green hoverEffect text-center rounded-full text-white"
    >
      Proceed to Checkout
    </button>
  );
};

export default OrderButton;
