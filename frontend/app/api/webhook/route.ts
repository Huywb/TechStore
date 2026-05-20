import { useStore } from "@/app/store/cart.store";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!;

export const POST = async (req: NextRequest) => {
  const body = await req.json();

  const sig = (await headers()).get("stripe-signature")!;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, sig, endpointSecret);
  } catch (error) {
    return NextResponse.json(
      {
        message: "Webhook error",
      },
      {
        status: 500,
      },
    );
  }

  console.log(event.type)
  const {resetCart} = useStore()
  switch (event.type) {
    case "checkout.session.completed":
      const session = event.data.object;
        resetCart()
      
      console.log("Payment success", session);

      break;
  }

  return new Response("OK", { status: 200 });
};
