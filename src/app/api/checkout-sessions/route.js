
import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  const body = await req.json();
  console.log(body,'body');
  const {userDetails,planDetails} = body;
  const origin = req.headers.get("origin") || "http://localhost:3000";
  console.log(origin);
 

  try {

   
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{
          price: planDetails.planId, 
          quantity: 1,
      }],
      mode: 'subscription',
     
      success_url: `${origin}/subscription`,
      cancel_url: `${origin}/error`,
      metadata:{
        name:userDetails.name ,
        email:userDetails.email,
        price:planDetails.price,
        subscriptionType:planDetails.subscriptionType,
        package:planDetails.name,
        userId:userDetails._id,
        planId:planDetails.planId
      }
  });

  console.log(session,'session');
   
  return new NextResponse(JSON.stringify({ sessionId: session.id }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
  } catch (error) {
    if (error instanceof Stripe.errors.StripeError) {
      const { message } = error;
      return new NextResponse(JSON.stringify(message),{status:error.statusCode});
    }
  }
}
