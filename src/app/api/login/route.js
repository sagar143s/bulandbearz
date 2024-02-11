import { cookies,headers } from "next/headers";
import { customInitApp } from "@/libs/firebase-admin-config";
import { NextRequest, NextResponse } from "next/server";
import { auth } from "firebase-admin";
import User from "@/models/User";


customInitApp();



export const POST =async(request)=>{
   
    const authorization = headers().get("Authorization");
    if (authorization?.startsWith("Bearer ")) {
        const idToken = authorization.split("Bearer ")[1];
        const decodedToken = await auth().verifyIdToken(idToken);
    
        if (decodedToken) {
          //Generate session cookie
          //const existingUser = await User.findOne({ email: decodedToken.email });
         

          const expiresIn = 60 * 60 * 24 * 5 * 1000;
          const sessionCookie = await auth().createSessionCookie(idToken, {
            expiresIn,
          });
          const options = {
            name: "session",
            value: sessionCookie,
            maxAge: expiresIn,
            httpOnly: true,
            secure: true,
          };
    
          //Add the cookie to the browser
          cookies().set(options);
        }
      }

      return new NextResponse(JSON.stringify({},{status:200}))
}