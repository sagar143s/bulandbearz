import connect from "@/utils/db";
import User from "@/models/User";
import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const DELETE = async (req) => {
    const { subscriptionId } =await req.json();
  
    try {
      await connect()
     
      const canceledSubscription = await stripe.subscriptions.cancel(subscriptionId);
    //   const canceledSubscription  = await stripe.subscriptions.update(
    //     subscriptionId,
    //     {
    //       cancel_at_period_end: true,
    //     })
    

      // Update user model to reflect cancellation
      await User.findOneAndUpdate(
        { subscriptionId },
        { $set: { subscribed: false , subscriptionId: null } },
        { new: true }
      );
  
      return new NextResponse(JSON.stringify("Cancel Subscription Succesfull"),{status:200})
    } catch (error) {
      console.error(error);
      return new NextResponse(JSON.stringify(error.message),{status:500})
    }
  };