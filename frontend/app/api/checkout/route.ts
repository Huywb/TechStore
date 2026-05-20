import { CartItem } from "@/app/store/cart.store";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",

      line_items: body.items.map((items: CartItem) => ({
        price_data: {
          currency: "usd",
          product_data: {
            name: items.product.name,
          },
          unit_amount: items.product.price! * 100,
        },
        quantity: items.quantity,
      })),
      
      success_url: `${req.headers.get(
        "origin",
      )}/success?session_id={CHECKOUT_SESSION_ID}`,

      cancel_url: `${req.headers.get("origin")}/cart`,
    });

    return NextResponse.json({
        url: session.url
    })
  } catch (error) {
    return NextResponse.json({ message: "Stripe error" }, { status: 500 });
  }
};
