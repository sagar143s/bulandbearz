
import { NextResponse } from "next/server";
import { Stripe } from "stripe";
import NewSubscribers from "@/models/NewSubscribers";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2022-11-15",
  });
  

  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;


export const POST = async(request)=>{

      const payload = await request.text()
      const signature = request.headers.get("stripe-signature");
      let event;

      try{
        event = stripe.webhooks.constructEvent(payload, signature, webhookSecret);

      }catch(err){
        return new NextResponse(`Webhook Error: ${err.message}`, { status: 400 });
      }
      if (event.type === 'customer.subscription.created') {
        const session = event.data.object;
        const metadata = session.metadata;

        const newSubscriber = new NewSubscribers({
          name: metadata.name,
          email: metadata.email,
          price: metadata.price,
          subscriptionType: metadata.subscriptionType,
          package: metadata.package,
          userId:metadata.userId,
        });

        await newSubscriber.save();

        return new NextResponse(JSON.stringify({ received: true }), { status: 200 });
      }


      return new NextResponse('Event received', { status: 200 });
}




