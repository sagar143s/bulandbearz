import Stripe from "stripe";
import { NextResponse } from "next/server";
import Bookings from "@/models/Bookings";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const POST = async (request) => {
  try {
    const body = await request.json();
    const { bookingDetails, courseDetails,userId } = body;
    const price = courseDetails.price*100
    
    
   
    const origin = request.headers.get("origin") || "http://localhost:3000";
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      
      line_items: [{
        price_data: {
          currency: "aed",
          product_data: {
            name: "Sample Product",
          },
          unit_amount: price,
        },
        quantity: 1,
      }],
      mode: "payment",
      success_url: `${origin}/paymentsuccess?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url:  `${origin}/error`,
      metadata: {
        username: bookingDetails.username,
        email: bookingDetails.email,
        phone: bookingDetails.phone,
        selectedDate: bookingDetails.selectedDate,
        selectedTime: bookingDetails.selectedTime,
        courseTitle: courseDetails.title,
        question:bookingDetails.question,
        courseId: courseDetails._id.toString(),
        userId:userId.toString(),
        privateSession:courseDetails.privateSession
      }
    });

    return new NextResponse(JSON.stringify({ sessionId: session.id }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });

    return new NextResponse(JSON.stringify("Success"),{status:200})
  } catch (err) {
    return new NextResponse(JSON.stringify(err.message), {
      status: 500,
    });
  }
}



