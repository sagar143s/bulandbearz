import connect from "@/utils/db";
import { cookies } from 'next/headers';
import { SignJWT } from "jose";
import { NextResponse } from "next/server";
import User from "@/models/User";
import bcrypt from 'bcrypt';
import { getJwtSecretKey } from "@/libs/auth";




export const POST = async(request)=>{
try {
    await connect()
    const {name,email} = await request.json()
    const existingUser = await User.findOne({ email: email });

    if (existingUser) { 
        const token = await new SignJWT({ id: existingUser._id })
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .sign(getJwtSecretKey());

      cookies().set({
        name: 'userToken',
        value: token,
        httpOnly: true,
        path: '/',
      });

      const serializedUser = JSON.stringify(existingUser);
      return new NextResponse(serializedUser, { status: 200, headers: { "Content-Type": "application/json" } });
    }else{

        const newUser = new User({
            name: name,
            email: email,
            
          });
          try {
            await newUser.save();
            return new NextResponse(JSON.stringify({ message: "User Created" }), {
              status: 201,
              headers: { "Content-Type": "application/json" },
            });
          } catch (err) {
            console.error("Error saving newUser:", err);
            return new NextResponse(err.message, {
              status: 500,
            });
          }

    }
} catch (error) {
    console.log(error);
    return new NextResponse(JSON.stringify(error.message),{status:500})
}
}