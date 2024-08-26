import connect from "@/utils/db";
import { cookies } from "next/headers";
import { SignJWT } from "jose";
import { NextResponse } from "next/server";
import { getJwtSecretKey } from "@/libs/auth";
import User from "@/models/User";
import bcrypt from "bcrypt";
import { CourierClient } from "@trycourier/courier";

export const POST = async (request) => {
  try {
    console.log(request);
    const { username, lastname, telegramusername, email, password } =
      await request.json();
  
    await connect();

    const lowercasedEmail = email.toLowerCase();
    const user = await User.findOne({ email: lowercasedEmail });

    if (!user) {
      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = new User({
        name: username,
        lastname: lastname,
        telegramusername: telegramusername,
        email: lowercasedEmail,
        password: hashedPassword,
      });
      try {
        await newUser.save();

        const courier = new CourierClient({
          authorizationToken: process.env.NEXT_COURIER_TOKEN,
        });

        try {
          await courier.send({
            message: {
              content: {
                title: "New customer registered!",
                body: `New customer registered! \n ${new Date()}  \n Name :  ${username} ${lastname} \n Telegram Username : ${telegramusername}\n Email id : ${email} `,
              },
              // data: { email: email, joke: newPassword },
              to: { email: "rohithsagarm@gmail.com"},
            },
          });
        } catch (err) {}

        return new NextResponse(JSON.stringify({ message: "User Created" }), {
          status: 200,
          headers: { "Content-Type": "application/json" },
        });
      } catch (err) {
        console.error("Error saving newUser:", err);
        return new NextResponse(err.message, {
          status: 500,
        });
      }
    } else {
      return new NextResponse("User already exists", { status: "303" });
    }
  } catch (error) {
    console.error("Error processing request:", error);
    return new NextResponse("Error processing request", {
      status: 500,
    });
  }
};
