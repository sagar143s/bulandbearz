// import Bookings from "@/models/Bookings";
// import User from "@/models/User";
// import NewSubscribers from "@/models/NewSubscribers";
// import { NextResponse } from "next/server";
// import { Stripe } from "stripe";
// import Courses from "@/models/Courses";





// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
//     apiVersion: "2022-11-15",
//   });
  

//   const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;


// export const POST = async(request)=>{

//       const payload = await request.text()
      
//       const signature = request.headers.get("stripe-signature");
//       let event;

//       try{
//         event = stripe.webhooks.constructEvent(payload, signature, webhookSecret);

//       }catch(err){
//         return new NextResponse(`Webhook Error: ${err.message}`, { status: 400 });
//       }
    
//       console.log(event.type,"eventtype");

//       if (event.type === 'checkout.session.completed') {
//         const session = event.data.object;
//         const metadata = session.metadata;
//         const customerId = session.customer;
//         console.log(session,'sessionDetails');
//         if (metadata.courseId) {
//           const newBooking = new Bookings({
//             name: metadata.username,
//             email: metadata.email,
//             phone: metadata.phone,
//             date: metadata.selectedDate,
//             time: metadata.selectedTime,
//             package: metadata.courseTitle,
//             courseId: metadata.courseId,
//             userId:metadata.userId,
//           });
  
//           await newBooking.save();
//           try {
//             const courseId = metadata.courseId;

//             const courseUpdate = await Courses.findOneAndUpdate(
//                 { _id: courseId },
//                 { $inc: { maxUsers: -1 } }, 
//                 { new: true }
//             );

//             if (!courseUpdate) {
//                 return new NextResponse(JSON.stringify("Error updating maxUsers"), { status: 500 });
//             }
//         } catch (error) {
//             return new NextResponse(JSON.stringify("Error updating maxUsers"), { status: 500 });
//         }
  
//           return new NextResponse(JSON.stringify({ received: true }), { status: 200 });
//         } else {
//           const newSubscriber = new NewSubscribers({
//             name: metadata.name,
//             email: metadata.email,
//             price: metadata.price,
//             subscriptionType: metadata.subscriptionType,
//             package: metadata.package,
//             userId:metadata.userId,
//             planId:metadata.planId
//           });
  
//           await newSubscriber.save();

//           const userUpdate = await User.findOneAndUpdate({_id:metadata.userId},
//             {$set:
//               {
//                  subscribed:true,
//                  subscriptionType:metadata.subscriptionType,
//                  price:metadata.price,
//                  package:metadata.package ,
//                  planId:metadata.planId,
//                  customerId:customerId
//                 },
//             }, 
//             { new: true })
//             if(userUpdate){
//               return new NextResponse(JSON.stringify({ received: true }), { status: 200 });
//             }else{
//               return new NextResponse(JSON.stringify("Error in Update"),{status:401})
//             }
//         }
//       }


//       return new NextResponse(JSON.stringify('Event received'), { status: 200 });
// }



// import Bookings from "@/models/Bookings";
// import User from "@/models/User";
// import NewSubscribers from "@/models/NewSubscribers";
// import { NextResponse } from "next/server";
// import { Stripe } from "stripe";
// import Courses from "@/models/Courses";





// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
//     apiVersion: "2022-11-15",
//   });
  

//   const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;


// export const POST = async(request)=>{

//       const payload = await request.text()
      
//       const signature = request.headers.get("stripe-signature");
//       let event;

//       try{
//         event = stripe.webhooks.constructEvent(payload, signature, webhookSecret);

//       }catch(err){
//         return new NextResponse(`Webhook Error: ${err.message}`, { status: 400 });
//       }
    
//       console.log(event.type,"eventtype");

//       if (event.type === 'checkout.session.completed') {
//         const session = event.data.object;
//         const metadata = session.metadata;
//         const customerId = session.customer;
//         console.log(session,'sessionDetails');
//         if (metadata.courseId) {
//           const newBooking = new Bookings({
//             name: metadata.username,
//             email: metadata.email,
//             phone: metadata.phone,
//             date: metadata.selectedDate,
//             time: metadata.selectedTime,
//             package: metadata.courseTitle,
//             courseId: metadata.courseId,
//             userId:metadata.userId,
//           });
  
//           await newBooking.save();
//           try {
//             const courseId = metadata.courseId;

//             const courseUpdate = await Courses.findOneAndUpdate(
//                 { _id: courseId },
//                 { $inc: { maxUsers: -1 } }, 
//                 { new: true }
//             );

//             if (!courseUpdate) {
//                 return new NextResponse(JSON.stringify("Error updating maxUsers"), { status: 500 });
//             }
//         } catch (error) {
//             return new NextResponse(JSON.stringify("Error updating maxUsers"), { status: 500 });
//         }
  
//           return new NextResponse(JSON.stringify({ received: true }), { status: 200 });
//         } else {
//           const existingSubscription = await stripe.subscriptions.list({
//             customer: customerId,
//             status: "active",
//           });
    
//           if (existingSubscription.data.length > 0) {
            
//             console.log("Existing subscription found:", existingSubscription.data[0].id);
//             return new NextResponse(JSON.stringify({ received: true }), { status: 200 });
//           }

//           try {
//             const planId = metadata.planId;
//         const subscription = await stripe.subscriptions.create({
//           customer: customerId,
//           items: [{ plan: planId }],
//           payment_behavior: 'default_incomplete', // Collect payment immediately
//           expand: ['latest_invoice.payment_intent'],
//         });

//         console.log('Subscription created:', subscription);
//         const newSubscriber = new NewSubscribers({
//           name: metadata.name,
//           email: metadata.email,
//           price: metadata.price,
//           subscriptionType: metadata.subscriptionType,
//           package: metadata.package,
//           userId:metadata.userId,
//           planId:metadata.planId,
//           subscriptionId:existingSubscription.data[0].id
//         });

//         await newSubscriber.save();

//         const userUpdate = await User.findOneAndUpdate({_id:metadata.userId},
//           {$set:
//             {
//                subscriptionType:metadata.subscriptionType,
//                price:metadata.price,
//                package:metadata.package ,
//                planId:metadata.planId,
//                customerId:customerId
//               },
//           }, 
//           { new: true })

//           } catch (error) {
//             console.error('Error creating subscription:', error);
//             return new NextResponse(JSON.stringify("Error creating subscription"), { status: 500 });
//           }


//           const paymentIntent = event.data.object.payment_intent;
//           if (paymentIntent.status === "succeeded") {
//             const userSUpdate = await User.findOneAndUpdate({_id:metadata.userId},
//               {$set:
//                 {
//                    subscribed:true,
//                    subscriptionId:existingSubscription.data[0].id
//                   },
//               }, 
//               { new: true })

//               if(userSUpdate){
//                 return new NextResponse(JSON.stringify({ received: true }), { status: 200 });
//               }else{
//                 return new NextResponse(JSON.stringify("Error in Update"),{status:401})
//               }

//           } else {
//             return new NextResponse(JSON.stringify("Error in Payment"),{status:500})
//           }
//         }
//       }


//       return new NextResponse(JSON.stringify({ received: true }), { status: 200 });
// }



import Bookings from "@/models/Bookings";
import User from "@/models/User";
import NewSubscribers from "@/models/NewSubscribers";
import { NextResponse } from "next/server";
import { Stripe } from "stripe";
import Courses from "@/models/Courses";





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
    
      console.log(event.type,"eventtype");

      if (event.type === 'checkout.session.completed') {
        const session = event.data.object;
        const metadata = session.metadata;
        const customerId = session.customer;
        console.log(session,'sessionDetails');
        if (metadata.courseId) {
          const newBooking = new Bookings({
            name: metadata.username,
            email: metadata.email,
            phone: metadata.phone,
            date: metadata.selectedDate,
            time: metadata.selectedTime,
            package: metadata.courseTitle,
            courseId: metadata.courseId,
            userId:metadata.userId,
            privateSession:metadata.privateSession
          });
  
          await newBooking.save();
          try {
            const courseId = metadata.courseId;

            const courseUpdate = await Courses.findOneAndUpdate(
                { _id: courseId },
                { $inc: { maxUsers: -1 } }, 
                { new: true }
            );

            if (!courseUpdate) {
                return new NextResponse(JSON.stringify("Error updating maxUsers"), { status: 500 });
            }
        } catch (error) {
            return new NextResponse(JSON.stringify("Error updating maxUsers"), { status: 500 });
        }
  
          return new NextResponse(JSON.stringify({ received: true }), { status: 200 });
        } else {
          const existingSubscription = await stripe.subscriptions.list({
            customer: customerId,
            status: "active",
          });
    
          if (existingSubscription.data.length > 0) {
            
            console.log("Existing subscription found:", existingSubscription.data[0].id);

            const userUpdate = await User.findOneAndUpdate(
              { _id: metadata.userId },
              {
                $set: {
                  subscriptionType: metadata.subscriptionType,
                  price: metadata.price,
                  package: metadata.package,
                  planId: metadata.planId,
                  customerId: customerId,
                  subscriptionId: existingSubscription.data[0].id,
                  subscribed: true, 
                },
              },
              { new: true }
            );

            if (!userUpdate) {
            return new NextResponse(JSON.stringify('Failed to update user information'), { status: 500 });
            }

            return new NextResponse(JSON.stringify({ received: true }), { status: 200 });
          }

          try {
        const planId = metadata.planId;
        const subscription = await stripe.subscriptions.create({
          customer: customerId,
          items: [{ plan: planId }],
          payment_behavior: 'default_incomplete', // Collect payment immediately
          expand: ['latest_invoice.payment_intent'],
        });

        console.log('Subscription created:', subscription);
        const newSubscriber = new NewSubscribers({
          name: metadata.name,
          email: metadata.email,
          price: metadata.price,
          subscriptionType: metadata.subscriptionType,
          package: metadata.package,
          userId:metadata.userId,
          planId:metadata.planId,
          subscriptionId:existingSubscription.data[0].id
        });

        await newSubscriber.save();

        const userUpdate = await User.findOneAndUpdate({_id:metadata.userId},
          {$set:
            {
               subscriptionType:metadata.subscriptionType,
               price:metadata.price,
               package:metadata.package ,
               planId:metadata.planId,
               customerId:customerId
              },
          }, 
          { new: true })

          } catch (error) {
            console.error('Error creating subscription:', error);
            return new NextResponse(JSON.stringify("Error creating subscription"), { status: 500 });
          }


          const paymentIntent = event.data.object.payment_intent;
          if (paymentIntent.status === "succeeded") {
            const userSUpdate = await User.findOneAndUpdate({_id:metadata.userId},
              {$set:
                {
                   subscribed:true,
                   subscriptionId:existingSubscription.data[0].id
                  },
              }, 
              { new: true })

              if(userSUpdate){
                return new NextResponse(JSON.stringify({ received: true }), { status: 200 });
              }else{
                return new NextResponse(JSON.stringify("Error in Update"),{status:401})
              }

          } else {
            return new NextResponse(JSON.stringify("Error in Payment"),{status:500})
          }
        }
      }


      return new NextResponse(JSON.stringify({ received: true }), { status: 200 });
}




