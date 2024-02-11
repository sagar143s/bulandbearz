import { NextResponse } from "next/server";
import { CourierClient } from "@trycourier/courier";




export const POST = async(request)=>{

try {
    const {name,email,message}= await request.json()
     

    try{
        const courier = new CourierClient(
            { authorizationToken: process.env.NEXT_COURIER_TOKEN});
    
          const { requestId } = await  courier.send({
            message: {
              content: {
                title: "Contact Form Submitted!",
                body : "Name: {{name}} \n Email :{{email}} \n Message : {{joke}}"
              },
              data: {
                name:name,
                email:email,
                joke:message
              },
              to: {
                email: 'bullandbearzdb@gmail.com'
              }
            }
          });
          return new NextResponse(JSON.stringify("Send to email Success"),{status:200})
    }catch(err){
        return new NextResponse(JSON.stringify(err.message),{status:500})
        console.log(err.message);
    }
} catch (error) {
    console.log(error.message);
    return new NextResponse(JSON.stringify(error.message),{status:500})
}
}