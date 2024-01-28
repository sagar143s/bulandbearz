import { NextResponse } from "next/server";
import Subscriptions from "@/models/Subscriptions";
import connect from "@/utils/db";


export const dynamic = 'force-dynamic';
export const GET = async(request)=>{
    try {
        await connect()
        const subscription = await Subscriptions.find()
        if(subscription.length<=0){
        return new NextResponse(JSON.stringify('No Subscription found'),{status:401})
        }
        return new NextResponse(JSON.stringify(subscription),{status:200})
    } catch (error) {
        return new NextResponse(JSON.stringify(error.message),{status:500})
    }
}