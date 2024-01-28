import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Bookings from "@/models/Bookings";



export const dynamic = 'force-dynamic';
export const GET = async(request,{params})=>{
console.log(params);
        try{
            await connect()
            const bookings = await Bookings.find({userId:params.id});
   console.log(bookings);
            if(bookings){
                return new NextResponse(JSON.stringify(bookings),{
                    status:200
                })
            }else{
return new NextResponse('No bookings found',{status:404})
            }
           

        }catch(err){
            console.log(err.message);
            return new NextResponse(err.message,{status:500})
        }




}