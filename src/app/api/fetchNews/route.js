import { NextResponse } from "next/server";
import News from "@/models/News";
import connect from "@/utils/db";


export const dynamic = 'force-dynamic';
export const GET = async(request)=>{
    try {
        await connect()
        const news = await News.find()
        if(news.length<=0){
        return new NextResponse(JSON.stringify('No News found'),{status:401})
        }
        return new NextResponse(JSON.stringify(news),{status:200})
    } catch (error) {
        return new NextResponse(JSON.stringify(error.message),{status:500})
    }
}