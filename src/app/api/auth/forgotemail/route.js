import connect from "@/utils/db";
import { NextResponse } from "next/server";
import User from "@/models/User";
import bcrypt from 'bcrypt'
import { CourierClient } from "@trycourier/courier";


export const dynamic = 'force-dynamic';
function generateRandomPassword(length = 10) {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let password = "";
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset.charAt(randomIndex);
    }
  
    return password;
  }

  


  export const POST = async (request) => {
    try {
        await connect();
        const { email } = await request.json();

        const isEmail = await User.findOne({ email: email });

        if (isEmail) {
            const newPassword = generateRandomPassword();
            const hashedPassword = await bcrypt.hash(newPassword, 10);

            const courier = new CourierClient({ authorizationToken: process.env.NEXT_COURIER_TOKEN });

            try {
                const { requestId } = await courier.send({
                    message: {
                        content: {
                            title: "Welcome to BullandBearz!",
                            body: `Email: ${email}\nPassword: ${newPassword}`
                        },
                        data: {
                            email: email,
                            joke: newPassword
                        },
                        to: {
                            email: email
                        }
                    }
                });

                const updatePassword = await User.updateOne({ _id: isEmail._id }, { $set: { password: hashedPassword } });
                if (updatePassword) {
                    return new NextResponse(JSON.stringify("Password send to email"), { status: 200 });
                } else {
                    return new NextResponse(JSON.stringify("Password send to email but password Not updated"), { status: 301 });
                }
            } catch (err) {
                console.log(err.message);
                return new NextResponse(JSON.stringify("Error sending email"), { status: 500 });
            }
        } else {
            return new NextResponse(JSON.stringify("Email Not Found"), { status: 404 });
        }
    } catch (error) {
        return new NextResponse(JSON.stringify(error.message), { status: 500 });
    }
}